from pydantic import BaseModel
from typing import Optional

class UserBase(BaseModel):
    email: str
    name: Optional[str] = None
    picture: Optional[str] = None

    class Config:
        orm_mode = True

class UserResponse(UserBase):
    id: int

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserResponse

class LogoutResponse(BaseModel):
    message: str
