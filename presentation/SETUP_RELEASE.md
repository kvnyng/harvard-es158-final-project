# Quick Setup: GitHub Releases for Videos

## Step-by-Step Instructions

### 1. Create a GitHub Release

1. **Go to your repository releases page:**
   ```
   https://github.com/kvnyng/harvard-es158-final-project/releases
   ```

2. **Click "Create a new release"** (or "Draft a new release")

3. **Fill in the release form:**
   - **Tag version:** `v1.0` (or any version like `v1.0.0`, `videos`, etc.)
   - **Release title:** `Presentation Videos` (or any descriptive title)
   - **Description:** Optional - you can add a note like "Video assets for the presentation"
   - **Target:** Select `main` branch

4. **Upload the video files:**
   - Scroll down to "Attach binaries by dropping them here or selecting them"
   - Upload these three files from `presentation/assets/`:
     - `no_history.mov` (87.62 MB)
     - `history.mov` (236.05 MB)
     - `history_softmimic.mov` (239.02 MB)
   - Wait for uploads to complete (this may take a few minutes)

5. **Click "Publish release"**

### 2. Update video-config.js

After creating the release, update `video-config.js`:

1. **Note your release tag** (e.g., `v1.0`)

2. **Open `presentation/video-config.js`**

3. **Replace `v1.0` in the URLs** with your actual release tag if different

The URLs should look like:
```javascript
const VIDEO_CONFIG = {
    noHistory: 'https://github.com/kvnyng/harvard-es158-final-project/releases/download/v1.0/no_history.mov',
    history: 'https://github.com/kvnyng/harvard-es158-final-project/releases/download/v1.0/history.mov',
    historySoftmimic: 'https://github.com/kvnyng/harvard-es158-final-project/releases/download/v1.0/history_softmimic.mov'
};
```

### 3. Test Locally

1. Open `presentation/presentation.html` in a browser
2. Navigate to the slides with videos
3. Verify all videos load and play correctly

### 4. Deploy to GitHub Pages

1. **Enable GitHub Pages:**
   - Go to: Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/ (root)` or `/presentation` depending on your setup

2. **If presentation is in a subdirectory:**
   - You may need to create a `.nojekyll` file in the presentation folder
   - Or configure a custom 404 page that redirects

3. **Your site will be available at:**
   ```
   https://kvnyng.github.io/harvard-es158-final-project/
   ```
   (or with `/presentation/` if that's your setup)

## Troubleshooting

- **Videos don't load:** Check that the release tag in `video-config.js` matches your actual release tag
- **CORS errors:** GitHub Releases should work fine, but if you see CORS issues, the videos might need to be converted to MP4 format
- **Large file upload fails:** Make sure you're uploading directly through the GitHub web interface, not via Git

## Alternative: Convert to MP4

If you encounter playback issues with `.mov` files, consider converting to `.mp4`:
```bash
# Using ffmpeg (if installed)
ffmpeg -i assets/no_history.mov -c:v libx264 -crf 23 -c:a aac -b:a 192k assets/no_history.mp4
ffmpeg -i assets/history.mov -c:v libx264 -crf 23 -c:a aac -b:a 192k assets/history.mp4
ffmpeg -i assets/history_softmimic.mov -c:v libx264 -crf 23 -c:a aac -b:a 192k assets/history_softmimic.mp4
```

Then update the HTML to use `.mp4` instead of `.mov` and upload the MP4 files to the release.


