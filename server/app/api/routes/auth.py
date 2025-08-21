import os, requests, jwt
from fastapi import APIRouter, Depends, HTTPException, Request
from fastapi.responses import RedirectResponse
from sqlalchemy.orm import Session
from dotenv import load_dotenv

from app.database.db import get_db
from app.database.models import User
from app.schemas import TokenResponse, UserResponse, LogoutResponse
from app.core.security import get_current_user

load_dotenv()

router = APIRouter(prefix="/auth", tags=["auth"])

GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
GOOGLE_CLIENT_SECRET = os.getenv("GOOGLE_CLIENT_SECRET")
REDIRECT_URI = os.getenv("REDIRECT_URI")
SECRET_KEY = os.getenv("SECRET_KEY")


@router.get("/google/login")
def google_login():
    google_auth_url = (
        "https://accounts.google.com/o/oauth2/v2/auth"
        f"?client_id={GOOGLE_CLIENT_ID}"
        f"&redirect_uri={REDIRECT_URI}"
        f"&response_type=code"
        f"&scope=openid%20email%20profile"
    )
    return RedirectResponse(google_auth_url)


@router.get("/google/callback", response_model=TokenResponse)
def google_callback(code: str, db: Session = Depends(get_db)):

    token_url = "https://oauth2.googleapis.com/token"
    token_data = {
        "code": code,
        "client_id": GOOGLE_CLIENT_ID,
        "client_secret": GOOGLE_CLIENT_SECRET,
        "redirect_uri": REDIRECT_URI,
        "grant_type": "authorization_code",
    }
    token_res = requests.post(token_url, data=token_data).json()

    if "error" in token_res:
        raise HTTPException(status_code=400, detail=token_res["error"])

    access_token = token_res.get("access_token")
    refresh_token = token_res.get("refresh_token")


    user_info = requests.get(
        "https://www.googleapis.com/oauth2/v2/userinfo",
        headers={"Authorization": f"Bearer {access_token}"}
    ).json()

    google_id = user_info["id"]
    email = user_info["email"]
    name = user_info.get("name")
    picture = user_info.get("picture")

    user = db.query(User).filter(User.google_id == google_id).first()
    if not user:
        user = User(
            google_id=google_id,
            email=email,
            name=name,
            picture=picture,
            access_token=access_token,
            refresh_token=refresh_token
        )
        db.add(user)
        db.commit()
        db.refresh(user)


    app_token = jwt.encode({"user_id": user.id}, SECRET_KEY, algorithm="HS256")

    return {
        "access_token": app_token,
        "token_type": "bearer",
        "user": user
    }


@router.post("/logout", response_model=LogoutResponse)
def logout():
    return {"message": "Logged out"}


@router.get("/me", response_model=UserResponse)
def get_me(current_user: User = Depends(get_current_user)):
    return current_user
