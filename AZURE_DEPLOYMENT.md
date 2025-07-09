# Azure Deployment Configuration

This file contains the environment variables and secrets needed for deploying your portfolio to Azure using GitHub Actions.

## Required GitHub Repository Variables

Set these variables in your GitHub repository settings under **Settings > Secrets and variables > Actions > Variables**:

- `AZURE_CLIENT_ID`: The client ID of your Azure service principal
- `AZURE_TENANT_ID`: Your Azure Active Directory tenant ID
- `AZURE_SUBSCRIPTION_ID`: Your Azure subscription ID
- `AZURE_ENV_NAME`: A unique name for your environment (e.g., "portfolio-prod")
- `AZURE_LOCATION`: Azure region (e.g., "eastus", "westeurope")

## Required GitHub Repository Secrets

Set these secrets in your GitHub repository settings under **Settings > Secrets and variables > Actions > Secrets**:

- `AZURE_CLIENT_SECRET`: The client secret of your Azure service principal (if not using federated credentials)

## Setting up Azure Service Principal

### Option 1: Using Azure CLI (Recommended - Federated Identity)

```bash
# Create service principal with federated credentials
az ad sp create-for-rbac \
  --name "portfolio-github-actions" \
  --role "Contributor" \
  --scopes "/subscriptions/YOUR_SUBSCRIPTION_ID" \
  --sdk-auth

# Create federated credential for GitHub Actions
az ad app federated-credential create \
  --id YOUR_APP_ID \
  --parameters @credential.json
```

Create `credential.json`:
```json
{
  "name": "portfolio-github-actions",
  "issuer": "https://token.actions.githubusercontent.com",
  "subject": "repo:YOUR_GITHUB_USERNAME/YOUR_REPO_NAME:ref:refs/heads/main",
  "description": "GitHub Actions deployment for portfolio",
  "audiences": ["api://AzureADTokenExchange"]
}
```

### Option 2: Using Azure Portal

1. Go to Azure Portal > Azure Active Directory > App registrations
2. Click "New registration"
3. Name: "portfolio-github-actions"
4. Click "Register"
5. Note the Application (client) ID and Directory (tenant) ID
6. Go to "Certificates & secrets" > "Client secrets" > "New client secret"
7. Copy the secret value
8. Go to your subscription > Access control (IAM) > Add role assignment
9. Role: Contributor
10. Assign access to: User, group, or service principal
11. Select the app you created

## Environment Variables Explanation

- **AZURE_CLIENT_ID**: Used to authenticate with Azure
- **AZURE_TENANT_ID**: Identifies your Azure AD tenant
- **AZURE_SUBSCRIPTION_ID**: Specifies which Azure subscription to deploy to
- **AZURE_ENV_NAME**: Creates unique resource names (must be globally unique)
- **AZURE_LOCATION**: Determines where your resources are deployed

## Deployment Process

1. **Infrastructure Provisioning**: Creates Azure resources using Bicep templates
2. **Container Building**: Builds Docker images for frontend and backend
3. **Image Push**: Pushes images to Azure Container Registry
4. **App Deployment**: Updates Container Apps with new images
5. **URL Display**: Shows the deployed application URLs

## Local Development Commands

To test locally before pushing:

```bash
# Install Azure Developer CLI
winget install microsoft.azd

# Login to Azure
azd auth login

# Initialize the project (first time only)
azd init

# Provision infrastructure
azd provision

# Deploy application
azd deploy

# Or do both in one command
azd up
```

## Troubleshooting

- **Permission Issues**: Ensure the service principal has Contributor role
- **Resource Naming**: AZURE_ENV_NAME must be unique across Azure
- **Region Availability**: Some regions may not support all services
- **Container Build Fails**: Check Dockerfile syntax and dependencies

## Security Best Practices

- Use federated credentials instead of client secrets when possible
- Limit service principal permissions to minimum required
- Regularly rotate client secrets
- Monitor deployment logs for sensitive data exposure