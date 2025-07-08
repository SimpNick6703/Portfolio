# SimpNick6703's Portfolio

My personal portfolio website showcasing my full-stack development projects and technical skills. Built with React (frontend) and FastAPI (backend), featuring modern gradient designs and automated deployment to GitHub Pages.

**Live Site**: [https://simpnick6703.github.io/](https://simpnick6703.github.io/)

## About Me

I'm **SimpNick6703**, a passionate Full-Stack Developer with expertise in Python, JavaScript, and modern web technologies. I build scalable web applications, AI-powered systems, and automation tools with a focus on creating user-centric solutions.

**Contact Information:**
- **Email**: [harshluhaa@gmail.com](mailto:harshluhaa@gmail.com)
- **GitHub**: [github.com/SimpNick6703](https://github.com/SimpNick6703)
- **LinkedIn**: [linkedin.com/in/harshluha](https://linkedin.com/in/harshluha)

## Featured Projects

### TalentScout - AI-Powered Hiring Assistant
*Python, Flask, OpenAI API, Machine Learning*
- AI-powered conversational hiring assistant that automates technical interviews
- Structured interview phases with progressive assessment and natural conversation flow
- Responsive web interface with automatic theme switching and data export capabilities

### Splitwise Clone - Expense Tracking Application
*React, FastAPI, PostgreSQL, Docker*
- Full-stack expense tracking with comprehensive group expense management
- Multiple split types (equal/percentage) with automated balance calculations
- Responsive UI with dark/light theme support and Docker containerization

### Disgram - Telegram to Discord Bridge
*Python, Web Scraping, API Integration*
- Automated message forwarding system with robust web scraping and rate limiting
- Multi-process architecture for handling multiple channels simultaneously
- Comprehensive logging system with various media format support

### Transport Company Management System
*Flask, SQLAlchemy, Bootstrap, JavaScript*
- Complete vehicle rental operations management with CRUD operations
- Intuitive dashboard with key metrics and system status monitoring
- Responsive Bootstrap interface with interactive JavaScript features

## Technical Skills

**Programming Languages:** Python, JavaScript, HTML, CSS, SQL  
**Frontend:** React, TailwindCSS, Bootstrap, Responsive Design  
**Backend:** Flask, FastAPI, SQLAlchemy, RESTful APIs  
**Databases:** PostgreSQL, SQLite  
**AI/ML:** Machine Learning, Data Analysis, NLP, OpenAI API  
**DevOps:** Docker, Git, GitHub Actions, WebSockets  
**Security:** Cryptography, Fernet Encryption, Authentication Systems

## Education

**B.Tech in Computer Science and Engineering**  
National Institute of Technology, Rourkela (2020 - 2024)  
Rourkela, Odisha, India

## Development Setup

This portfolio supports multiple development modes for different use cases:

### Production (GitHub Pages)
Automatically deployed via GitHub Actions on every push to main branch.
- **Zero local setup required** - builds and deploys in the cloud
- Uses GitHub API directly for repository data
- Fully static deployment with modern gradient styling

### Local Development (Docker)
For full-stack development with FastAPI backend:

```bash
# Clone and run with Docker Compose
git clone https://github.com/SimpNick6703/Portfolio.git
cd Portfolio
docker-compose up --build

# Access points:
# Frontend: http://localhost:3000
# Backend API: http://localhost:8000
# API Documentation: http://localhost:8000/docs
```

### Manual Development
For individual component development:

**Backend (FastAPI):**
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

**Frontend (React):**
```bash
cd frontend
npm install
npm start
```

## Project Architecture

### Frontend Features
- **Modern React Application** with functional components and hooks
- **Gradient Design System** with blue-to-purple color schemes
- **Responsive Layout** optimized for all screen sizes
- **Dark/Light Mode** support with system preference detection
- **GitHub API Integration** for dynamic repository data
- **Performance Optimized** with lazy loading and efficient rendering

### Backend Features (Local Development)
- **FastAPI REST API** with automatic OpenAPI documentation
- **CORS Support** for frontend integration
- **GitHub API Proxy** with rate limiting and caching
- **Health Check Endpoints** for monitoring
- **Docker Containerization** for consistent environments

### Deployment Pipeline
- **GitHub Actions** workflow for automated CI/CD
- **Node.js Build Process** with dependency caching
- **Static Site Generation** optimized for GitHub Pages
- **Automatic Deployment** on main branch updates

## File Structure

```
Portfolio/
├── .github/workflows/deploy.yml   # Automated deployment pipeline
├── backend/                       # FastAPI application
│   ├── main.py                   # API endpoints and GitHub integration
│   ├── requirements.txt          # Python dependencies
│   └── Dockerfile               # Backend containerization
├── frontend/                     # React application
│   ├── src/
│   │   ├── components/          # Reusable React components
│   │   ├── pages/              # Main application pages
│   │   └── api/                # GitHub API integration
│   ├── public/                 # Static assets
│   ├── package.json           # Node.js dependencies
│   └── Dockerfile            # Frontend containerization
└── docker-compose.yml          # Local development orchestration
```

## Configuration

### Environment Variables
- **Development**: Uses local FastAPI backend (`REACT_APP_USE_LOCAL_API=true`)
- **Production**: Direct GitHub API integration (`REACT_APP_USE_LOCAL_API=false`)

### GitHub Integration
- Repository data fetched via GitHub API
- Rate limiting handled gracefully
- Fallback content for API unavailability

## Performance & Features

- **Fast Loading** - Optimized React build with code splitting
- **Mobile First** - Responsive design works on all devices
- **Modern Design** - Beautiful gradients and smooth animations
- **Accessible** - Semantic HTML and ARIA labels
- **SEO Optimized** - Meta tags and structured data
- **Auto Deploy** - Zero-touch deployment via GitHub Actions

## License

This portfolio is a personal project showcasing my work and skills. Feel free to explore the code for inspiration, but please respect that this represents my personal brand and professional identity.

---

*Built with love by SimpNick6703 using React, FastAPI, and modern web technologies.*
