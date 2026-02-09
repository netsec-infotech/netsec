# Deploy to Hostinger VPS (Ubuntu)

This project is a Next.js (App Router) site. Recommended production setup:

- Ubuntu VPS
- Node.js (via nvm)
- PM2 (process manager)
- Nginx (reverse proxy)
- Optional SSL via Certbot

## 1) Upload code to the VPS

### Option A (recommended): Git

On your PC:

1. Push this folder to GitHub/GitLab/Bitbucket (private is fine).

On the VPS:

```bash
cd /var/www
sudo mkdir -p netsecinfotech
sudo chown -R $USER:$USER /var/www/netsecinfotech

git clone <YOUR_REPO_URL> /var/www/netsecinfotech
```

### Option B: SCP from Windows (PowerShell)

From your PC (run in PowerShell in the project folder):

```powershell
scp -r . <user>@<vps_ip>:/var/www/netsecinfotech
```

## 2) Install Node.js (nvm) on Ubuntu

```bash
sudo apt update
sudo apt install -y curl git

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# reload shell
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

cd /var/www/netsecinfotech
nvm install
nvm use
node -v
npm -v
```

## 3) Build and run with PM2

```bash
cd /var/www/netsecinfotech

npm ci
npm run build

sudo npm i -g pm2
pm2 start ecosystem.config.cjs
pm2 save

# Start on boot
pm2 startup
# run the command it prints
```

Check:

```bash
pm2 status
pm2 logs netsecinfotech
curl -I http://127.0.0.1:3000
```

## 4) Nginx reverse proxy

```bash
sudo apt install -y nginx
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw --force enable
```

Create site:

```bash
sudo nano /etc/nginx/sites-available/netsecinfotech
```

Paste contents of `deploy/nginx-site.conf` and replace `example.com`.

Enable:

```bash
sudo ln -sf /etc/nginx/sites-available/netsecinfotech /etc/nginx/sites-enabled/netsecinfotech
sudo nginx -t
sudo systemctl reload nginx
```

## 5) (Optional) SSL with Let’s Encrypt

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d example.com -d www.example.com
```

## 6) Updating after changes

If you deployed via Git:

```bash
cd /var/www/netsecinfotech

git pull
npm ci
npm run build
pm2 restart netsecinfotech
```

## Troubleshooting

- If you see 502 from Nginx: ensure PM2 app is running and port 3000 is reachable.
- Check logs: `pm2 logs netsecinfotech` and `sudo journalctl -u nginx -n 200 --no-pager`.
- Confirm firewall rules: `sudo ufw status`.
