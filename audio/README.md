# Audio Files Directory

This directory should contain your actual MP3 files for the music player.

## Required Files:

1. **starlight-signal.mp3** - Track 1: Starlight Signal
2. **out-of-place.mp3** - Track 2: Out of Place  
3. **static-skin.mp3** - Track 3: Static Skin

## How to Add Your MP3 Files:

1. Place your MP3 files in this `audio/` directory
2. Make sure they have the exact filenames listed above
3. The files should be in MP3 format for maximum browser compatibility

## Alternative Approach:

If you want to use different filenames, update the `data-src` attributes in `index.html`:

```html
<div class="track-item" data-src="audio/your-track-name.mp3" data-title="Your Track Name">
```

## Audio File Recommendations:

- **Format**: MP3 (320kbps recommended for quality)
- **Duration**: 3-5 minutes per track
- **File Size**: Keep under 10MB per track for faster loading
- **Metadata**: Include title and artist in file metadata for better display

## Testing:

Once you've added your MP3 files, test the music player by:
1. Opening index.html in a browser
2. Clicking on track names to play them
3. Using the play/pause button
4. Checking the progress bar functionality
