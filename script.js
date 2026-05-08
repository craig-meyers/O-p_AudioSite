// Music Player functionality
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const nowPlaying = document.getElementById('now-playing');
const progressBar = document.getElementById('progress-bar');
const trackItems = document.querySelectorAll('.track-item');
const heroPlay = document.getElementById('hero-play');

let currentTrack = null;
let isPlaying = false;
let currentTrackIndex = 0;

// Custom cursor
const cursor = document.getElementById('cursor');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

// Initialize cursor position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth cursor animation
function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    
    cursor.style.left = cursorX - 8 + 'px';
    cursor.style.top = cursorY - 8 + 'px';
    
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Add glow effect to clickable elements
document.querySelectorAll('button, a, .track-item, .merch-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.background = '#10b981';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = 'white';
    });
});

// Track functionality
trackItems.forEach((item, index) => {
    item.addEventListener('click', function() {
        const src = this.dataset.src;
        const title = this.dataset.title;
        
        currentTrackIndex = index;
        loadTrack(src, title);
        playTrack();
        
        // Update active state
        trackItems.forEach(i => i.classList.remove('text-[#10b981]'));
        this.classList.add('text-[#10b981]');
    });
});

// Hero play button
heroPlay.addEventListener('click', () => {
    if (currentTrack) {
        if (isPlaying) {
            pauseTrack();
        } else {
            playTrack();
        }
    } else {
        // Load first track
        const firstTrack = trackItems[0];
        if (firstTrack) {
            firstTrack.click();
        }
    }
});

// Play/pause button
playBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else if (currentTrack) {
        playTrack();
    } else {
        // Load first track
        const firstTrack = trackItems[0];
        if (firstTrack) {
            firstTrack.click();
        }
    }
});

// Previous track button
prevBtn.addEventListener('click', () => {
    if (trackItems.length > 0) {
        currentTrackIndex = currentTrackIndex === 0 ? trackItems.length - 1 : currentTrackIndex - 1;
        trackItems[currentTrackIndex].click();
    }
});

// Next track button
nextBtn.addEventListener('click', () => {
    if (trackItems.length > 0) {
        currentTrackIndex = (currentTrackIndex + 1) % trackItems.length;
        trackItems[currentTrackIndex].click();
    }
});

function loadTrack(src, title) {
    audioPlayer.src = src;
    currentTrack = title;
    nowPlaying.textContent = `${title} — O-p`;
    
    // Reset progress
    progressBar.style.width = '0%';
}

function playTrack() {
    audioPlayer.play();
    isPlaying = true;
    // Update play button to pause state (only change icon)
    playBtn.innerHTML = '<i class="fas fa-pause text-[#10b981] text-sm"></i>';
    heroPlay.innerHTML = '<span class="flex items-center space-x-3"><i class="fas fa-pause text-sm"></i><span>PAUSE</span></span>';
}

function pauseTrack() {
    audioPlayer.pause();
    isPlaying = false;
    // Update play button back to play state (only change icon)
    playBtn.innerHTML = '<i class="fas fa-play text-[#10b981] hover:text-black text-sm ml-1"></i>';
    heroPlay.innerHTML = '<span class="flex items-center space-x-3"><i class="fas fa-play text-sm"></i><span>PLAY</span></span>';
}

// Update progress bar
audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.style.width = progress + '%';
    }
});

// Handle track end
audioPlayer.addEventListener('ended', () => {
    currentTrackIndex = (currentTrackIndex + 1) % trackItems.length;
    if (trackItems[currentTrackIndex]) {
        trackItems[currentTrackIndex].click();
    }
});

// Email capture
const emailForm = document.getElementById('email-form');
const emailConfirm = document.getElementById('email-confirm');

emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    if (email) {
        // Show confirmation
        emailConfirm.style.opacity = '1';
        emailForm.reset();
        
        // Hide after 3 seconds
        setTimeout(() => {
            emailConfirm.style.opacity = '0';
        }, 3000);
    }
});

// Ambient animations
function addAmbientEffects() {
    // Light flicker effect
    const flickerElement = document.querySelector('.animate-flicker');
    if (flickerElement) {
        setInterval(() => {
            flickerElement.style.opacity = Math.random() * 0.1;
            setTimeout(() => {
                flickerElement.style.opacity = '0';
            }, 200);
        }, 8000);
    }
    
    // Subtle color glitches
    document.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('merch-item') && Math.random() > 0.95) {
            e.target.style.filter = 'rgb-split(0.1)';
            setTimeout(() => {
                e.target.style.filter = 'none';
            }, 200);
        }
    });
}

// Smooth scroll with slowed effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && e.target.tagName !== 'INPUT') {
        e.preventDefault();
        if (isPlaying) {
            pauseTrack();
        } else {
            if (currentTrack) {
                playTrack();
            } else {
                const firstTrack = trackItems[0];
                if (firstTrack) firstTrack.click();
            }
        }
    }
    
    if (e.code === 'ArrowRight' && currentTrack) {
        nextBtn.click();
    }
    
    if (e.code === 'ArrowLeft' && currentTrack) {
        prevBtn.click();
    }
});

// Sound awareness - subtle background reaction
audioPlayer.addEventListener('play', () => {
    document.body.style.filter = 'brightness(1.05)';
});

audioPlayer.addEventListener('pause', () => {
    document.body.style.filter = 'brightness(1)';
});

// Initialize
addAmbientEffects();

// Handle audio loading errors
audioPlayer.addEventListener('error', (e) => {
    console.error('Audio loading error:', e);
    showNotification('Error loading audio file. Please check if the MP3 files exist in the audio folder.');
});

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    notification.textContent = message;
    notification.style.animation = 'fadeIn 0.3s ease-out';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeIn 0.3s ease-out reverse';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}
