# Azure Deployment Quick Start

## 🚀 Deploy Your Portfolio to Azure

This guide will help you deploy your portfolio application to Azure using GitHub Actions and Azure Container Apps.

### Prerequisites

1. **Azure Account**: Active Azure subscription
2. **GitHub Repository**: Your code should be in a GitHub repository
3. **Azure CLI**: Installed locally (optional for testing)
4. **Azure Developer CLI (azd)**: Installed locally (optional for testing)

### Step 1: Set Up Azure Service Principal

Choose one of these methods:

#### Method A: Using Azure CLI (Recommended)

```bash
# Login to Azure
az login

# Create service principal
az ad sp create-for-rbac \
  --name "portfolio-github-actions" \
  --role "Contributor" \
  --scopes "/subscriptions/YOUR_SUBSCRIPTION_ID" \
  --sdk-auth
```

#### Method B: Using Azure Portal

1. Go to Azure Portal → Azure Active Directory → App registrations
2. Create new registration: "portfolio-github-actions"
3. Create client secret under "Certificates & secrets"
4. Assign "Contributor" role at subscription level

### Step 2: Configure GitHub Repository

Add these **Variables** in GitHub Settings → Secrets and variables → Actions:

- `AZURE_CLIENT_ID`: Your service principal client ID
- `AZURE_TENANT_ID`: Your Azure AD tenant ID  
- `AZURE_SUBSCRIPTION_ID`: Your Azure subscription ID
- `AZURE_ENV_NAME`: Unique environment name (e.g., "portfolio-prod")
- `AZURE_LOCATION`: Azure region (e.g., "eastus")

Add this **Secret**:

- `AZURE_CLIENT_SECRET`: Your service principal client secret

### Step 3: Deploy

1. Push your code to the `main` branch
2. GitHub Actions will automatically:
   - Provision Azure infrastructure
   - Build and push Docker images
   - Deploy your applications
   - Display the URLs

### Step 4: Access Your Application

After deployment, check the GitHub Actions logs for your application URLs:

- **Frontend**: Your React portfolio website
- **Backend**: Your Python API

### Local Testing (Optional)

Test the deployment locally before pushing:

```bash
# Install Azure Developer CLI
winget install microsoft.azd

# Login and deploy
azd auth login
azd up
```

### Architecture

Your deployment includes:

- **Azure Container Apps**: Hosts your frontend and backend
- **Azure Container Registry**: Stores your Docker images  
- **Application Insights**: Monitors application performance
- **Log Analytics**: Centralized logging
- **Key Vault**: Secure secrets management
- **Managed Identity**: Secure Azure service authentication

### Troubleshooting

- **Build failures**: Check Dockerfile syntax and dependencies
- **Permission errors**: Verify service principal has Contributor role
- **Resource conflicts**: Ensure `AZURE_ENV_NAME` is globally unique
- **Deployment issues**: Check GitHub Actions logs and Azure portal

### Cost Optimization

- Container Apps use consumption-based pricing
- Free tier available for low-traffic applications
- Resources auto-scale based on demand

### Security Features

- Managed identities for secure service-to-service auth
- Key Vault for secrets management
- HTTPS endpoints with automatic SSL certificates
- Network isolation and firewall rules

For detailed configuration, see `AZURE_DEPLOYMENT.md`.
