# VPS Deployment Guide

Follow these steps to set up your Next.js application on a VPS (Ubuntu/Debian recommended).

## Prerequisites
- VPS access (SSH)
- Node.js (v18+) and npm
- Git
- Nginx (for reverse proxy)
- PM2 (process manager)

## 1. Initial Setup (First Time Only)

### Install Node.js & Git
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs git nginx
sudo npm install -g pm2
```

### Clone the Repository
Go to the folder where you want to host the site (e.g., `/var/www` or `~/apps`).
```bash
mkdir -p ~/apps
cd ~/apps
git clone https://github.com/amirpz04/Drone.git
cd Drone
```

### Install Dependencies & Build
```bash
npm install
npm run build
```

### Start with PM2
```bash
pm2 start npm --name "drone-portfolio" -- start
pm2 save
pm2 startup
```

## 2. Nginx Setup (Reverse Proxy)

Edit Nginx config to point domain to port 3000.
```bash
sudo nano /etc/nginx/sites-available/drone-portfolio
```

Paste this content (replace `your-domain.com` with your actual domain/IP):
```nginx
server {
    listen 80;
    server_name your-domain.com; # OR YOUR VPS IP ADDRESS

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
    
    # Increase upload size for footage (optional check for Nginx)
    client_max_body_size 500M;
}
```

Enable the site and restart Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/drone-portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## 3. How to Update (Future Deployments)

I have included a `deploy.sh` script to make this one command.

1. **Make the script executable** (run once):
   ```bash
   chmod +x deploy.sh
   ```

2. **Run the update**:
   ```bash
   ./deploy.sh
   ```

## 4. Managing Footage

**IMPORTANT:**
All your videos/images must go into this folder on the VPS:
`~/apps/Drone/public/footage/`

You can use SCP or FileZilla to upload files there.
Example SCP command from your local computer:
```bash
scp -r ./my-local-videos/* root@YOUR_VPS_IP:~/apps/Drone/public/footage/
```
