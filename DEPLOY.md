# Deployment Guide for GitHub Pages

## Problem Fixed
Your site was blank because the source files were deployed instead of the **built** `/dist` folder. Vite must build your React code into production-ready files.

---

## Deployment to GitHub Pages (Recommended)

### Step 1: Build the project
```bash
npm install
npm run build
```

This creates a `/dist` folder with all production files.

### Step 2: Deploy to GitHub Pages

**Option A: Using git (Simple)**
1. Ensure you have a `gh-pages` branch, or create one:
   ```bash
   git branch gh-pages
   ```
2. Push the `/dist` folder to GitHub:
   ```bash
   git add dist -f
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```
3. Go to **Repository Settings → Pages**
4. Set the source to **Deploy from a branch**
5. Select **Branch: gh-pages** → **Folder: / (root)**
6. Click **Save**

**Option B: Using `gh-pages` package (Automated)**
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

Then deploy with:
```bash
npm run deploy
```

### Step 3: Verify in GitHub Settings
- Go to **Repo Settings → Pages**
- Check that "GitHub Pages is currently enabled"
- Visit `https://shivamatulya.github.io/` to see your site

---

## Alternative: Deploy to Vercel (Easier & Faster)

### Step 1: Sign up at vercel.com
Go to [Vercel](https://vercel.com) and sign in with GitHub.

### Step 2: Import your project
1. Click **"Add New" → "Project"**
2. Select your repository
3. Vercel auto-detects Vite and configures everything
4. Click **Deploy**

**That's it!** Your site is live instantly.

### Step 3: Set custom domain (if needed)
- Go to **Project Settings → Domains**
- Add your custom domain

**Advantages:**
- Automatic deployments on every push to `main`
- Free SSL/HTTPS
- Better performance (CDN)
- Environment variables support
- No manual build steps needed

---

## Local Development

```bash
npm run dev
```

Opens your site on `http://localhost:5173/`

---

## Troubleshooting

**Blank page after deployment?**
- Ensure you deployed the `/dist` folder, NOT source files
- Check GitHub Pages is pointing to the correct branch/folder
- Run `npm run build` locally and verify `/dist` contains `index.html`

**Links not working?**
- GitHub Pages uses the repo URL as base path
- If using React Router, switch to `HashRouter` for GitHub Pages

---

## Summary

✅ Run `npm run build`  
✅ Deploy `/dist` to GitHub Pages OR Vercel  
✅ Done!
