// Video URL Configuration for GitHub Releases
// 
// Videos are deployed on GitHub releases and follow this URL template:
// https://github.com/kvnyng/harvard-es158-final-project/releases/download/Presentation/{filename}
//
// To update videos:
//   1. Go to: https://github.com/kvnyng/harvard-es158-final-project/releases
//   2. Create or edit a release with tag "Presentation"
//   3. Upload these three files as release assets:
//      - no_history.mov
//      - history.mov
//      - history_softmimic.mov
//   4. Click "Publish release"

const VIDEO_CONFIG = {
    // GitHub Releases URLs - Videos are deployed on GitHub releases
    noHistory: 'https://github.com/kvnyng/harvard-es158-final-project/releases/download/Presentation/no_history.mov',
    history: 'https://github.com/kvnyng/harvard-es158-final-project/releases/download/Presentation/history.mov',
    historySoftmimic: 'https://github.com/kvnyng/harvard-es158-final-project/releases/download/Presentation/history_softmimic.mov'

    // For local development, uncomment these and comment out the GitHub URLs above:
    // noHistory: 'assets/no_history.mov',
    // history: 'assets/history.mov',
    // historySoftmimic: 'assets/history_softmimic.mov'
};

