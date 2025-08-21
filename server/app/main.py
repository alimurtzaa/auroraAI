from fastapi import FastAPI
from app.database.db import engine, Base
from app.api.routes.auth import router as auth_router
from app.core.config import settings

Base.metadata.create_all(bind=engine)

app = FastAPI(title="auroraAI APIs")

app.include_router(auth_router)
