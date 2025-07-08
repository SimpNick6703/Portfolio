# Portfolio Application

A full-stack portfolio application built with FastAPI (backend) and React (frontend), showcasing GitHub repositories. Supports both local development with FastAPI backend and static deployment to GitHub Pages.

## Features

- **Backend**: FastAPI-based REST API that fetches GitHub repository data (for local development)
- **Frontend**: React application with Tailwind CSS for a modern, responsive UI
- **GitHub Pages Support**: Static deployment using GitHub API directly
- **Dockerized**: Complete Docker setup for local development
- **Dual API Support**: Works with local FastAPI backend or GitHub API directly

## Deployment Options

### 🚀 Option 1: GitHub Pages - Zero Local Setup Required! (Recommended)

**Perfect if you don't have Node.js/npm installed locally**

1. **Fork this repository** on GitHub
2. **Edit configuration files** (directly on GitHub or locally):
   - Update GitHub username in `frontend/src/api/githubService.js`
   - Update homepage URL in `frontend/package.json`
3. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: **"GitHub Actions"**
4. **Commit your changes** - GitHub automatically builds and deploys!

**That's it!** Your portfolio will be live at `https://YourUsername.github.io/`

### 🐳 Option 2: Docker (Full-Stack Development)

#### Prerequisites

- Docker
- Docker Compose

#### Running the Application

1. **Clone and navigate to the project directory**:
   ```bash
   cd Portfolio
   ```

2. **Build and run with Docker Compose**:
   ```bash
   docker-compose up --build
   ```

3. **Access the application**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Documentation: http://localhost:8000/docs

### 💻 Option 3: Local Development

#### Backend (FastAPI)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

#### Frontend (React)

```bash
cd frontend
npm install
npm start
```

## Configuration

### Environment Variables

#### Development (.env)
```
REACT_APP_API_URL=http://localhost:8000
REACT_APP_USE_LOCAL_API=true
```

#### Production (.env.production)
```
REACT_APP_USE_LOCAL_API=false
```

### GitHub Username Configuration

Update the following files with your GitHub username:

1. **frontend/src/api/githubService.js**:
   ```javascript
   const USERNAME = 'YourGitHubUsername';
   ```

2. **backend/main.py** (if using local backend):
   ```python
   username = "YourGitHubUsername"
   ```

3. **frontend/package.json**:
   ```json
   "homepage": "https://YourUsername.github.io/"
   ```

## API Integration

The application supports two API modes:

### Local Development Mode
- Uses FastAPI backend running on localhost:8000
- Set `REACT_APP_USE_LOCAL_API=true`
- Provides custom API endpoints with CORS support

### Production/GitHub Pages Mode
- Uses GitHub API directly
- Set `REACT_APP_USE_LOCAL_API=false`
- No backend required, fully static deployment

## GitHub Actions Workflow

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:

1. Installs Node.js dependencies
2. Builds the React application
3. Deploys to GitHub Pages
4. Runs on every push to main/master branch

## API Endpoints

### Local FastAPI Backend
- `GET /` - Health check
- `GET /api/repos` - Get all repositories
- `GET /api/repos/{repo_name}` - Get specific repository details

### GitHub API (Production)
- `GET /users/{username}/repos` - Get user repositories
- `GET /repos/{username}/{repo}` - Get specific repository
- `GET /repos/{username}/{repo}/languages` - Get repository languages
- `GET /repos/{username}/{repo}/readme` - Get repository README

## Project Structure

```
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── backend/
│   ├── main.py                 # FastAPI application
│   ├── requirements.txt        # Python dependencies
│   ├── Dockerfile             # Backend Docker configuration
│   └── .dockerignore          # Backend Docker ignore file
├── frontend/
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── api/               # API configuration and services
│   │   ├── components/        # React components
│   │   └── pages/            # React pages
│   ├── package.json          # Node.js dependencies
│   ├── Dockerfile            # Frontend Docker configuration
│   ├── .dockerignore         # Frontend Docker ignore file
│   ├── .env                  # Development environment variables
│   └── .env.production       # Production environment variables
└── docker-compose.yml        # Docker Compose configuration
```

## Customization

### Styling
- Built with Tailwind CSS
- Dark mode support included
- Responsive design for all screen sizes

### Content
- Update `frontend/src/pages/About.jsx` with your information
- Modify `frontend/src/pages/Home.jsx` for your introduction
- Replace GitHub username in API service

## Troubleshooting

### GitHub Pages Issues
1. **Repository not found**: Verify GitHub username in `githubService.js`
2. **Page not loading**: Check GitHub Pages settings and ensure Actions are enabled
3. **API rate limiting**: GitHub API has rate limits for unauthenticated requests

### Local Development Issues
1. **Port conflicts**: Make sure ports 3000 and 8000 are not in use
2. **API connection issues**: Verify the `REACT_APP_API_URL` environment variable
3. **Docker issues**: Try `docker-compose down` and `docker-compose up --build`

### Environment Variables
- For local development with backend: Set `REACT_APP_USE_LOCAL_API=true`
- For GitHub Pages deployment: Set `REACT_APP_USE_LOCAL_API=false`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test both local and production modes
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
