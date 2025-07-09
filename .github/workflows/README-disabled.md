# Temporarily disabled workflows

## deploy-docs.yml.disabled
- **Reason**: Redundant with deploy.yml (both deploy to GitHub Pages)
- **Date disabled**: July 10, 2025
- **Status**: Testing if deploy.yml alone works correctly
- **Next action**: Delete if deploy.yml works fine, otherwise revert

## How to revert if needed:
```bash
git mv .github/workflows/deploy-docs.yml.disabled .github/workflows/deploy-docs.yml
```

## How to permanently delete:
```bash
git rm .github/workflows/deploy-docs.yml.disabled
```
