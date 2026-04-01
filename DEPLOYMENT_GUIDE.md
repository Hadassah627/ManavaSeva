# ManavaSeva Deployment Guide

## Overview
- **Frontend**: React + Vite → Vercel
- **Backend**: Express.js → Render  
- **Database**: MongoDB Atlas (already configured)

## Prerequisites
- GitHub account (to push code)
- Vercel account (free tier available)
- Render account (free tier available)
- Git installed locally

---

## Step 1: Push Code to GitHub

```bash
cd c:\Users\nsamuelreddy\Documents\hadassah\ManavaSeva
git add .
git commit -m "Prepare for deployment"
git push origin main
```

> If you don't have a GitHub repo yet:
> 1. Go to github.com and create a new repository named `manavaseva`
> 2. Run: `git remote add origin https://github.com/YOUR_USERNAME/manavaseva.git`
> 3. Then push as shown above

---

## Step 2: Deploy Backend to Render

### Option A: Using render.yaml (Recommended)

1. Go to https://render.com
2. Sign up/login with GitHub
3. Click **New +** → **Web Service**
4. Connect your GitHub repository
5. Select the repository branch (main)
6. Render will auto-detect `render.yaml` configuration
7. Click **Deploy**

### Option B: Manual Setup

1. Go to https://render.com → **New Web Service**
2. Connect GitHub repository
3. Fill in settings:
   - **Name**: `manavaseva-backend`
   - **Environment**: Node
   - **Build Command**: `cd server && npm install`
   - **Start Command**: `cd server && npm start`
   - **Plan**: Free

4. Add environment variables:
   - `PORT`: `5000`
   - `MONGO_URI`: `mongodb+srv://hadassah_kiran:hadassah123@cluster0.z8clrr8.mongodb.net/manavaseva?retryWrites=true&w=majority&appName=Cluster0`
   - `JWT_SECRET`: `1d8f7a55c0a94a4fbab9d1d1d70e945e2b7a14c05cb5d07f2aafe8e5c1b26fd5`
   - `NODE_ENV`: `production`

5. Click **Create Web Service**

6. **Wait for deployment** (usually 3-5 minutes)

7. Copy your backend URL (e.g., `https://manavaseva-backend.onrender.com`)

---

## Step 3: Deploy Frontend to Vercel

### Using Vercel CLI (Easiest)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   cd c:\Users\nsamuelreddy\Documents\hadassah\ManavaSeva\client
   vercel
   ```

3. Follow prompts:
   - Select **Vite** as framework
   - Set root directory to current folder
   - Confirm build settings

### Using Vercel Web Dashboard

1. Go to https://vercel.com
2. Sign up/login with GitHub
3. Click **Add New** → **Project**
4. Import your GitHub repository
5. Configure:
   - **Framework**: Vite
   - **Root Directory**: `client`
   - Add environment variable:
     - **VITE_API_URL**: `https://manavaseva-backend.onrender.com/api`
6. Click **Deploy**

---

## Step 4: Verify Deployment

1. **Frontend**: Visit your Vercel URL (e.g., `https://manavaseva.vercel.app`)
2. **Backend**: Visit API (e.g., `https://manavaseva-backend.onrender.com/`)
3. Check browser console for errors

### Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| CORS errors | Backend URL in `VITE_API_URL` must be exact match |
| Database connection fails | Verify MongoDB Atlas IP whitelist allows Render's IP |
| Blank page on Vercel | Check dist folder is building correctly |
| API returns 404 | Ensure backend routes are correct |

---

## Step 5: Update Frontend Domain (Optional)

If you use a custom domain, update in Render backend CORS allowlist:

```javascript
// server/server.js
const corsOptions = {
    origin: [
        'https://yourdomain.com',
        'https://www.yourdomain.com'
    ],
    // ... rest of config
};
```

---

## Environment Variables Summary

| Platform | Variable | Value |
|----------|----------|-------|
| Render Backend | MONGO_URI | MongoDB connection string |
| Render Backend | JWT_SECRET | Authentication secret |
| Vercel Frontend | VITE_API_URL | Backend API URL |

---

## Monitoring & Logs

### Render Logs
- Dashboard → Web Service → Logs tab

### Vercel Logs  
- Dashboard → Project → Deployments → View Logs

---

## Next Steps

1. Test all API endpoints after deployment
2. Set up custom domain (if you have one)
3. Enable auto-deployments from GitHub commits
4. Monitor MongoDB Atlas usage
5. Set up error tracking (Sentry, etc.)

---

**Questions?** Check individual platform docs:
- https://render.com/docs
- https://vercel.com/docs
