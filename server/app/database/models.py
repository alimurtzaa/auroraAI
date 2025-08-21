from sqlalchemy import Column, Integer, String
from app.database.db import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    google_id = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    name = Column(String)
    picture = Column(String)
    access_token = Column(String, nullable=True)
    refresh_token = Column(String, nullable=True)
