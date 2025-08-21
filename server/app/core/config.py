import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    SECRET_KEY: str = os.getenv("SECRET_KEY", "supersecretkey")
    ALGORITHM: str = "HS256"

settings = Settings()
