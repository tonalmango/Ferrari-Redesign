# Deployment Guide - Vercel

## Quick Start

This project is ready to deploy to Vercel. Follow these steps:

### 1. Prerequisites
- GitHub account with the repository pushed
- Vercel account (free at vercel.com)

### 2. Deploy to Vercel

#### Option A: Using Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project directory
cd rosso-corsa-drive-main
vercel
```

#### Option B: Using Vercel Dashboard (Recommended)
1. Go to https://vercel.com
2. Click "New Project"
3. Select your GitHub repository (`tonalmango/Ferrari-Redesign`)
4. Framework will be auto-detected as Vite
5. Click "Deploy"

### 3. Configuration

The project includes `vercel.json` with:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework**: Vite
- **Caching**: Optimized for static assets and dynamic content

### 4. Environment Variables

No environment variables are required for this project. If needed in the future, add them in Vercel Dashboard:
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy

### 5. Custom Domain (Optional)

1. In Vercel Dashboard, go to Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### 6. Preview & Production

- **Preview URL**: Generated automatically
- **Production URL**: https://your-domain.vercel.app

### 7. Automatic Deployments

Deployments are automatic when you push to `main` branch:
- Push to GitHub → Vercel automatically builds and deploys
- Preview deployments for pull requests

### 8. Monitoring

In Vercel Dashboard you can:
- Check build logs
- Monitor performance
- View analytics
- Manage deployments

### 9. Rebuilding

To trigger a manual rebuild:
1. In Vercel Dashboard, go to Deployments
2. Click "..." on a deployment
3. Select "Redeploy"

### 10. Rolling Back

To revert to a previous deployment:
1. In Vercel Dashboard, go to Deployments
2. Click on the desired deployment
3. Click "Promote to Production"

## Performance Tips

- **Images**: Already optimized with public folder structure
- **3D Model**: FBX model is in public/models for static serving
- **Caching**: Static assets cached for 1 year
- **CDN**: Vercel's global CDN ensures fast delivery worldwide

## Troubleshooting

### Build Fails
- Check `npm run build` works locally: `npm run build && npm run preview`
- Clear cache in Vercel Dashboard (Settings → Git)
- Check build logs for errors

### 3D Model Not Loading
- Verify `public/models/f50/source/final/FINAL_MODEL.fbx` exists
- Check browser console for 404 errors

### Images Not Loading
- Verify images are in `public/featured-news/` and `public/experiences/`
- Check image paths in component files

### Slow Performance
- Check Vercel Analytics (Dashboard → Analytics)
- Consider optimizing large images
- Enable image optimization if available

## Support

For deployment issues:
- Check Vercel Documentation: https://vercel.com/docs
- Review build logs in Vercel Dashboard
- Test locally: `npm run build && npm run preview`
