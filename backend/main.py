from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx
import os
from typing import List, Optional, Dict, Any
from pydantic import BaseModel

app = FastAPI(title="Portfolio API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For production, specify your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Repository(BaseModel):
    id: int
    name: str
    description: Optional[str] = None
    html_url: str
    homepage: Optional[str] = None
    stargazers_count: int
    forks_count: int
    language: Optional[str] = None
    topics: List[str] = []
    updated_at: str

@app.get("/")
def read_root():
    return {"message": "Portfolio API is running"}

@app.get("/api/repos", response_model=List[Repository])
async def get_repositories():
    username = "SimpNick6703"  # Your GitHub username
    
    async with httpx.AsyncClient() as client:
        response = await client.get(f"https://api.github.com/users/{username}/repos?sort=updated")
        
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail="Failed to fetch repositories")
        
        repos = response.json()
        return repos

@app.get("/api/repos/{repo_name}", response_model=Repository)
async def get_repository(repo_name: str):
    username = "SimpNick6703"  # Your GitHub username
    
    async with httpx.AsyncClient() as client:
        response = await client.get(f"https://api.github.com/repos/{username}/{repo_name}")
        
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail="Repository not found")
        
        return response.json()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)