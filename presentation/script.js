Reveal.initialize({
    hash: true,
    transition: 'fade',
    transitionSpeed: 'slow',
    backgroundTransition: 'fade',
    slideNumber: true,
    progress: true,
    center: true,
    width: 1920,
    height: 1080,
    margin: 0.05,
    minScale: 0.2,
    maxScale: 1.0
});

// Dynamically number figures based on order of appearance
function numberFigures() {
    const captions = document.querySelectorAll('.image-caption');
    captions.forEach((caption, index) => {
        const text = caption.textContent.trim();
        // Only add figure number if it doesn't already have one
        if (!text.match(/^Fig\.\s*\d+\./)) {
            caption.textContent = `Fig. ${index + 1}. ${text}`;
        } else {
            // Update existing figure number
            caption.textContent = text.replace(/^Fig\.\s*\d+\./, `Fig. ${index + 1}.`);
        }
    });
}

// Number figures when reveal.js is ready
Reveal.addEventListener('ready', numberFigures);

// Re-number figures when slides change (in case slides are reordered)
Reveal.addEventListener('slidechanged', numberFigures);

