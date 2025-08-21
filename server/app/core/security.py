import jwt
from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.db import get_db
from app.database.models import User
from app.core.config import settings

def get_current_user(token: str, db: Session = Depends(get_db)):
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        user_id = payload.get("user_id")
    except jwt.PyJWTError:
        raise HTTPException(status_code=401, detail="Invalid token")

    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user
