# Music & Merch Store

A modern, responsive webpage featuring an embedded music player and an e-commerce merch section.

## Features

### Music Player
- **Embedded Audio Player**: HTML5 audio element with custom styling
- **Interactive Playlist**: Click to switch between tracks
- **Album Art Display**: Dynamic artwork that changes with selected track
- **Auto-play**: Automatically plays selected tracks
- **Keyboard Shortcuts**: 
  - Space: Play/Pause
  - Arrow Right: Next track
  - Arrow Left: Previous track

### Merch Store
- **Product Grid**: Responsive grid layout with 6 sample products
- **Shopping Cart**: Full cart functionality with add/remove/update quantity
- **Modal Interface**: Clean cart modal with checkout simulation
- **Notifications**: Toast-style notifications for user actions
- **Cart Counter**: Real-time cart item count badge

### Design & UX
- **Modern UI**: Dark theme with gradient accents
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: CSS transitions and keyframe animations
- **Accessibility**: Focus states and semantic HTML
- **Custom Scrollbar**: Styled scrollbar for better visual consistency

## Technologies Used

- **HTML5**: Semantic markup and audio elements
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome**: Icon library
- **Vanilla JavaScript**: No framework dependencies
- **CSS3**: Custom animations and transitions

## File Structure

```
windsurf-project-3/
├── index.html      # Main HTML file
├── style.css       # Custom CSS styles and animations
├── script.js       # JavaScript functionality
└── README.md       # Project documentation
```

## Getting Started

1. **Open in Browser**: Simply open `index.html` in any modern web browser
2. **Local Server**: For development, use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (if you have http-server installed)
   npx http-server
   ```
3. **Live Preview**: Use VS Code's Live Server extension or similar tools

## Usage

### Music Player
1. Click on any track in the playlist to play it
2. Use the browser's native audio controls to pause/play/skip
3. Album art and track info update automatically
4. Tracks auto-advance when one ends

### Shopping Cart
1. Click "Add to Cart" on any product
2. Click the cart icon (bottom-right) to view your cart
3. Adjust quantities or remove items in the cart modal
4. Click "Checkout" to simulate a purchase

## Customization

### Adding New Tracks
Edit the playlist in `index.html`:
```html
<div class="playlist-item" data-src="path/to/audio.mp3" data-title="Track Name" data-artist="Artist Name">
    <span>Track Name</span>
    <span class="text-gray-400">3:45</span>
</div>
```

### Adding New Products
Add new product cards in the merch section:
```html
<div class="product-card bg-gray-800 rounded-xl overflow-hidden shadow-xl">
    <img src="path/to/image.jpg" alt="Product Name">
    <div class="p-6">
        <h3 class="text-xl font-bold mb-2">Product Name</h3>
        <p class="text-gray-400 mb-4">Product description</p>
        <div class="flex justify-between items-center">
            <span class="text-2xl font-bold text-purple-400">$29.99</span>
            <button class="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg add-to-cart" 
                    data-product="Product Name" data-price="29.99">
                Add to Cart
            </button>
        </div>
    </div>
</div>
```

### Styling
- Modify `style.css` for custom animations and styles
- Adjust Tailwind classes in `index.html` for layout changes
- Colors are defined using Tailwind's color palette

## Browser Compatibility

- **Modern Browsers**: Full support (Chrome, Firefox, Safari, Edge)
- **Mobile**: Responsive design works on all modern mobile browsers
- **Audio Support**: Requires browsers that support HTML5 audio

## Notes

- Sample audio files from SoundHelix are used for demonstration
- Product images use Picsum Photos with consistent seeds
- Cart functionality is frontend-only (no backend persistence)
- All animations are GPU-accelerated for smooth performance

## Future Enhancements

- Audio visualizer
- Product search and filtering
- User authentication
- Payment integration
- Audio file upload
- Product reviews
- Wishlist functionality
