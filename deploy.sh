#!/bin/bash

# Deployment Script for Drone Portfolio

echo "🚀 Starting deployment..."

# 1. Pull latest changes
echo "📥 Pulling latest code..."
git pull origin main

# 2. Install dependencies
echo "📦 Installing dependencies..."
npm install

# 3. Build the application
echo "🏗️  Building application..."
npm run build

# 4. Restart PM2 process
echo "wow  Restarting server..."
# Check if process exists, if not start it, otherwise restart
if pm2 list | grep -q "drone-portfolio"; then
    pm2 restart drone-portfolio
else
    pm2 start npm --name "drone-portfolio" -- start
fi

echo "✅ Deployment complete!"
echo "📂 Upload your videos to: $(pwd)/public/footage/"
