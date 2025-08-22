from pydantic import BaseModel, ConfigDict
from typing import Optional


class UserBase(BaseModel):
    email: str
    name: Optional[str] = None
    picture: Optional[str] = None

    model_config = ConfigDict(from_attributes=True)  # replaces orm_mode


class UserResponse(UserBase):
    id: int


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserResponse


class LogoutResponse(BaseModel):
    message: str
