# Use Node.js 20 Alpine image (more secure)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Copy Docker-specific environment file
COPY .env.docker .env

# Expose port
EXPOSE 3000

# Command to run the application in development mode
CMD ["npm", "start"]
