# GitHub Pages Deployment Guide

## Video Hosting Options

Since GitHub has a 100MB file size limit and your videos exceed this, you need to host them externally. Here are the best options:

### Option 1: GitHub Releases (Recommended - Free & Simple)

1. **Create a GitHub Release:**
   - Go to your repository on GitHub
   - Click "Releases" → "Create a new release"
   - Tag: `v1.0` (or any version)
   - Upload your three video files as release assets:
     - `no_history.mov`
     - `history.mov`
     - `history_softmimic.mov`

2. **Get Direct Download Links:**
   - After uploading, right-click each file → "Copy link address"
   - The URLs will look like:
     ```
     https://github.com/USERNAME/REPO/releases/download/v1.0/no_history.mov
     ```

3. **Update `video-config.js`:**
   ```javascript
   const VIDEO_CONFIG = {
       noHistory: 'https://github.com/USERNAME/REPO/releases/download/v1.0/no_history.mov',
       history: 'https://github.com/USERNAME/REPO/releases/download/v1.0/history.mov',
       historySoftmimic: 'https://github.com/USERNAME/REPO/releases/download/v1.0/history_softmimic.mov'
   };
   ```

### Option 2: Cloud Storage (Google Drive, Dropbox, etc.)

1. **Upload to Google Drive:**
   - Upload videos to Google Drive
   - Right-click → "Get link" → Set to "Anyone with the link"
   - Get the direct download link (you may need to modify the URL)
   - For Google Drive, convert the sharing link to direct download:
     ```
     Original: https://drive.google.com/file/d/FILE_ID/view
     Direct: https://drive.google.com/uc?export=download&id=FILE_ID
     ```

2. **Update `video-config.js` with the direct download URLs**

### Option 3: Free CDN Services

- **jsDelivr**: If you create a separate repo just for assets
- **Cloudflare R2**: Free tier available
- **GitHub Gists**: Not ideal for large files

### Option 4: Compress Videos (If Possible)

If you can compress the videos to under 100MB each:
1. Use a tool like HandBrake or FFmpeg
2. Compress to H.264/MP4 format
3. Add them back to the repository
4. Update HTML to use `.mp4` instead of `.mov`

## Setting Up GitHub Pages

1. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` (or `gh-pages`)
   - Folder: `/presentation` (if using root) or `/ (root)` if presentation is the root

2. **If your presentation folder is not the root:**
   - You may need to create a `.nojekyll` file in the presentation folder
   - Or configure GitHub Pages to serve from the `presentation` subdirectory

3. **Access your site:**
   - Your site will be available at: `https://USERNAME.github.io/REPO-NAME/`
   - Or if using a custom domain, configure it in Settings → Pages

## Testing Locally

Before deploying, test locally:
1. Make sure `video-config.js` has the correct URLs
2. Open `presentation.html` in a browser
3. Verify all videos load correctly

## Notes

- **Git LFS does NOT work with GitHub Pages** - it only stores pointer files, not the actual video data
- Videos must be accessible via direct HTTP/HTTPS URLs
- Make sure video URLs are publicly accessible (no authentication required)
- Consider using MP4 format instead of MOV for better browser compatibility


