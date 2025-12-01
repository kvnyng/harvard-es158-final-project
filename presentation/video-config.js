// Video URL Configuration for GitHub Releases
// 
// STEP 1: Create a GitHub Release
//   1. Go to: https://github.com/kvnyng/harvard-es158-final-project/releases/new
//   2. Tag version: v1.0 (or any version number)
//   3. Release title: "Presentation Videos" (or any title)
//   4. Upload these three files as release assets:
//      - no_history.mov
//      - history.mov
//      - history_softmimic.mov
//   5. Click "Publish release"
//
// STEP 2: Update the URLs below with your release tag
//   After creating the release, replace 'v1.0' in the URLs below with your actual release tag

const VIDEO_CONFIG = {
    // GitHub Releases URLs - Update 'v1.0' with your actual release tag
    noHistory: 'https://github.com/kvnyng/harvard-es158-final-project/releases/download/v1.0/no_history.mov',
    history: 'https://github.com/kvnyng/harvard-es158-final-project/releases/download/v1.0/history.mov',
    historySoftmimic: 'https://github.com/kvnyng/harvard-es158-final-project/releases/download/v1.0/history_softmimic.mov'
    
    // For local development, uncomment these and comment out the GitHub URLs above:
    // noHistory: 'assets/no_history.mov',
    // history: 'assets/history.mov',
    // historySoftmimic: 'assets/history_softmimic.mov'
};

