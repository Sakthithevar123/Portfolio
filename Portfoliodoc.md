# Portfolio Website Documentation

## Overview
The Portfolio Website is a personal showcase application designed to highlight Shakthi's skills, projects, education, philosophy, and professional journey. It features an interactive, visually appealing design with custom animations, a dark mode toggle, and a unique JoJo-inspired "Stand" theme. Built with a lightweight frontend stack, it integrates Firebase Analytics for tracking and uses Chart.js for dynamic visualizations.

## Features
- **Custom Cursor**: A dual-ring cursor effect with smooth animations.
- **Theme Toggle**: Light/Dark mode switch with local storage persistence.
- **Interactive Header**: Flip card with profile photo and radar chart stats.
- **Custom Carousel**: 3D carousel for the "About Me" section with swipe and autoplay support.
- **Philosophy Grid**: Card-based layout for life philosophy and worldview.
- **Education & Projects**: Grid layouts showcasing academic and project details.
- **Skills Section**: Highlighted skill cards with hover effects.
- **Radar Chart**: JoJo-inspired visualization of strengths and weaknesses.
- **Responsive Design**: Adapts to various screen sizes.
- **Social Links**: Footer with animated social media icons.

## Technical Stack
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla JS)
- **Libraries**: 
  - Chart.js (Radar chart visualization)
  - Firebase SDK (Analytics)
- **Hosting**: Github Pages
- **Analytics**: Firebase Analytics

## Database Structure
No traditional database is used. Firebase Analytics is integrated for tracking user interactions, with the configuration stored in the HTML:
```javascript
const firebaseConfig = {
    apiKey: "AIzaSyBt1Yznxen3pbSvK0hQRFSUaLQzCZgnuJA",
    authDomain: "portfolio-b4aec.firebaseapp.com",
    projectId: "portfolio-b4aec",
    storageBucket: "portfolio-b4aec.firebasestorage.app",
    messagingSenderId: "981257980645",
    appId: "1:981257980645:web:acd48fb87e66b71971620c",
    measurementId: "G-V4ZXBG48ET"
};


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> <!-- For radar chart -->
</head>
<body>
    <script type="module">
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyBt1Yznxen3pbSvK0hQRFSUaLQzCZgnuJA",
          authDomain: "portfolio-b4aec.firebaseapp.com",
          projectId: "portfolio-b4aec",
          storageBucket: "portfolio-b4aec.firebasestorage.app",
          messagingSenderId: "981257980645",
          appId: "1:981257980645:web:acd48fb87e66b71971620c",
          measurementId: "G-V4ZXBG48ET"
        };
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
    </script>
    <!-- Code Explanation: This script initializes Firebase Analytics using ES6 modules. `type="module"` allows modern JavaScript imports. `firebaseConfig` holds the project's credentials, `initializeApp` sets up Firebase, and `getAnalytics` enables tracking of user interactions like page views. -->

    <!-- Custom Cursor Elements -->
    <div id="cursor-outer"></div>
    <div id="cursor-inner"></div>
    <!-- Code Explanation: These divs create a custom cursor with two parts: `cursor-outer` (a larger ring) and `cursor-inner` (a smaller dot). Their positions are updated via JavaScript to follow the mouse, styled with CSS to avoid interfering with page elements (`pointer-events: none`). -->

    <header>
        <nav>
            <h1 class="bounce-text">Portfolio</h1>
            <div class="nav-links">
                <a href="#home">Home</a>
                <a href="#profile">About</a>
                <a href="#Skills">Skills</a>
                <a href="#philosophy">Philosophy</a>
            </div>
        </nav>
        <div class="header-content">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="download.jpg" alt="Shakthi" class="profile-photo">
                        <div class="header-text">
                            <h2>Hello, I'm <span class="spin-text">Shakthi</span></h2>
                        </div>
                    </div>
                    <div class="flip-card-back">
                        <div class="tarot-design">
                            <h3>Stand: Starlight Coder</h3>
                            <p><strong>Strengths:</strong> Creative problem-solving, adaptability, relentless learning, strong coding intuition.</p>
                            <p style="margin-bottom: 0px;"><strong>Weaknesses:</strong> Overthinking details, occasional procrastination, perfectionism under pressure.</p>
                            <canvas id="radar-chart" width="200" height="200"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Code Explanation: The header includes a nav with a bouncing "Portfolio" title and links. The flip card has nested divs (`flip-card-inner`, `flip-card-front`, `flip-card-back`) for a 3D hover effect (CSS-driven). The front shows a photo and spinning name, while the back displays a JoJo-inspired "Stand" with stats and a radar chart on a canvas. -->

    <button id="theme-toggle" aria-label="Toggle Dark Mode">☀️</button>
    <!-- Code Explanation: This button toggles light/dark modes. Fixed positioning keeps it in the bottom-right corner. JavaScript changes its icon (`☀️` or `🌙`) and toggles the `dark-mode` class, with `aria-label` for accessibility. -->

    <section id="profile" class="profile-section" style="padding-bottom: 10px;">
        <h3>About Me</h3>
        <div class="custom-carousel">
            <div class="carousel-container">
                <div class="carousel-slide" data-index="0">
                    <div class="slide-content">
                        <h4>My Journey</h4>
                        <p>I began my career as a self-taught developer, driven by curiosity and a passion for creating digital experiences. Over the years, I've honed my skills through hands-on projects and continuous learning, always seeking to push the boundaries of what's possible.</p>
                    </div>
                </div>
                <!-- Additional slides omitted for brevity -->
            </div>
            <div class="carousel-controls">
                <button class="carousel-btn prev-btn">❮</button>
                <div class="carousel-dots"></div>
                <button class="carousel-btn next-btn">❯</button>
            </div>
        </div>
    </section>
    <!-- Remaining sections (Philosophy, Education, Projects, Skills, Footer) follow a similar structure with grids and cards; omitted for brevity -->

    <script src="script.js"></script>
</body>
</html>
/* Base Styles - Sets up the foundational look of the page */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #f0f2f5, #e0e7ff);
    color: #333;
    line-height: 1.6;
    cursor: none;
    transition: background 0.3s ease, color 0.3s ease;
}

body.dark-mode {
    background: linear-gradient(135deg, #1a1a1a, #2a2a3a);
    color: #e0e0e0;
}
/*
Base Styles Explanation:
- Purpose: Defines the core appearance and behavior of the page.
- Properties: Sets a clean font stack, removes default margins/padding, applies a light gradient background, and uses dark text for contrast. Hides the default cursor for a custom effect and adds smooth transitions for theme changes.
- Dark Mode: Switches to a dark gradient and light text for a cohesive dark theme.
- Why: Ensures a consistent, readable base that supports the custom cursor and theme toggle features.
*/

/* Theme Toggle Button - Controls light/dark mode switch */
#theme-toggle {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #6b48ff;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    cursor: pointer;
    z-index: 10001;
    transition: transform 0.3s ease, background 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

body.dark-mode #theme-toggle {
    background: #333;
}

#theme-toggle:hover {
    transform: scale(1.1) rotate(15deg);
}
/*
Theme Toggle Button Explanation:
- Purpose: Styles a button to toggle between light and dark modes.
- Properties: Fixed in the bottom-right corner (Gmail-style), circular with a purple background, white icon, and a high z-index to stay on top. Smooth transitions for scaling/rotation and color changes, plus a shadow for depth.
- Dark Mode: Darkens the background to gray.
- Hover: Scales up and rotates for an interactive effect.
- Why: Provides a visible, clickable control tied to JavaScript for theme switching.
*/

/* Custom Cursor Styles - Creates a unique mouse cursor effect */
#cursor-outer {
    position: fixed;
    width: 30px;
    height: 30px;
    border: 2px solid #FFD700;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease-out;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
}

body.dark-mode #cursor-outer {
    border-color: #e0e0e0;
}

#cursor-inner {
    position: fixed;
    width: 10px;
    height: 10px;
    background-color: #6b48ff;
    border-radius: 50%;
    pointer-events: none;
    z-index: 10000;
    transition: transform 0.1s ease-out;
}

body.dark-mode #cursor-inner {
    background-color: #ffd700;
}
/*
Custom Cursor Explanation:
- Purpose: Replaces the default cursor with a two-part design: an outer gold ring and an inner purple dot.
- Properties: Both elements are fixed, non-interactive, and layered (outer at 9999, inner at 10000). The outer ring is 30x30px with a shadow, while the inner dot is 10x10px. Quick transitions create smooth movement.
- Dark Mode: Adjusts colors to light gray and gold for visibility.
- Why: Enhances the UI with a custom, animated cursor controlled by JavaScript.
*/

/* Header Styles - Defines the top section of the page */
header {
    background: linear-gradient(90deg, #6b48ff, #884dff);
    color: white;
    text-align: center;
    padding: 20px 0;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

body.dark-mode header {
    background: linear-gradient(90deg, #2a2a3a, #3a3a4a);
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    max-width: 1200px;
    margin: 0 auto;
}

.nav-links a {
    color: white;
    margin: 0 20px;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease, transform 0.3s ease;
}

body.dark-mode .nav-links a {
    color: #e0e0e0;
}

.nav-links a:hover {
    color: #ffd700;
    transform: scale(1.1);
}

.bounce-text {
    font-size: 1.8em;
    font-weight: 700;
    color: #ffffff;
    animation: bounce 1.5s infinite;
}
/*
Header Styles Explanation:
- Purpose: Styles the header with a title ("Portfolio") and navigation links.
- Properties: Uses a purple gradient, white text, and a shadow for depth. Nav uses flexbox to space elements, constrained to 1200px. Links are white, bold, and scale up to gold on hover with smooth transitions.
- Dark Mode: Darkens the gradient and link colors.
- Bounce Text: Large, bold "Portfolio" text bounces infinitely for a dynamic effect.
- Why: Creates a visually striking header with interactive navigation.
*/

/* Header Content and Flip Card - Styles the main header area and flip card */
.header-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    max-width: 1200px;
    margin: 0 auto;
    opacity: 0;
    animation: fadeInUp 1s ease forwards;
}

.flip-card {
    perspective: 1000px;
    width: 300px;
    height: 400px;
    margin-right: 50px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.flip-card-front {
    background: #6b48ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

body.dark-mode .flip-card-front {
    background: #2a2a3a;
}

.flip-card-back {
    background: linear-gradient(135deg, #ff4500, #6b48ff);
    color: #fff;
    transform: rotateY(180deg);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

body.dark-mode .flip-card-back {
    background: linear-gradient(135deg, #ff8c00, #2a2a3a);
}

.profile-photo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 5px solid #fff;
    transition: transform 0.3s ease;
}

body.dark-mode .profile-photo {
    border-color: #e0e0e0;
}

.flip-card-front:hover .profile-photo {
    transform: scale(1.05);
}

.header-text {
    text-align: center;
    margin-top: 20px;
}

.header-text h2 {
    margin: 0;
    font-size: 2em;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

body.dark-mode .header-text h2 {
    color: #e0e0e0;
}

.header-text span {
    color: #ffff00;
}

.tarot-design h2 {
    font-size: 1.8em;
    font-family: 'Arial Black', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.tarot-design p {
    font-size: 0.9em;
    line-height: 1.5;
    margin-bottom: 15px;
    text-align: center;
}

#radar-chart {
    max-width: 200px;
    max-height: 200px;
}

.spin-text {
    color: #ffff00;
    display: inline-block;
    animation: spin 4s infinite linear;
}
/*
Header Content and Flip Card Explanation:
- Purpose: Styles the header’s main content and a 3D flip card showing a photo (front) and stats (back).
- Properties: `.header-content` centers elements with flexbox and fades in. `.flip-card` uses 3D perspective for flipping, with front (purple) and back (gradient) sides. Photo scales on hover, text includes a spinning yellow "Shakthi," and back has bold Stand styling.
- Dark Mode: Adjusts backgrounds and colors for consistency.
- Why: Adds an interactive, animated introduction with a JoJo-inspired flip card effect.
*/

/* Section Base Styles - Common styles for content sections */
.profile-section, .skills-section, .philosophy-section, .education-section, .projects-section {
    padding: 60px 20px;
    text-align: center;
    max-width: 1200px;
    margin: 0 auto;
}

body.dark-mode .profile-section h3,
body.dark-mode .skills-section h3,
body.dark-mode .philosophy-section h3,
body.dark-mode .education-section h3,
body.dark-mode .projects-section h3 {
    color: #e0e0e0;
}

.profile-section h3,
.skills-section h3,
.philosophy-section h3,
.education-section h3,
.projects-section h3 {
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards 0.2s;
}
/*
Section Base Styles Explanation:
- Purpose: Applies consistent styling to all content sections.
- Properties: Sets padding, centers content, and limits width. Headings fade in with a delay, tied to JavaScript scroll detection.
- Dark Mode: Lightens headings for readability.
- Why: Ensures uniformity across sections with a smooth animation effect.
*/

/* Carousel Styles - Styles the 3D carousel in the profile section */
.custom-carousel {
    width: 100%;
    max-width: 800px;
    margin: 30px auto;
    position: relative;
    perspective: 1200px;
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards 0.4s;
}

.carousel-container {
    display: flex;
    width: 100%;
    height: 300px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.carousel-slide {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    transform: translateZ(-300px) rotateY(0deg) scale(0.8);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.6s ease;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
}

.carousel-slide.active {
    opacity: 1;
    transform: translateZ(0) rotateY(0deg) scale(1);
    visibility: visible;
    z-index: 10;
}

.carousel-slide.prev {
    opacity: 0.6;
    transform: translateZ(-150px) rotateY(20deg) scale(0.9);
    visibility: visible;
    z-index: 5;
}

.carousel-slide.next {
    opacity: 0.6;
    transform: translateZ(-150px) rotateY(-20deg) scale(0.9);
    visibility: visible;
    z-index: 5;
}

.slide-content {
    background: #fff;
    padding: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

body.dark-mode .slide-content {
    background: #2a2a3a;
}

.slide-content h4 {
    color: #6b48ff;
    font-size: 1.5em;
    margin-bottom: 15px;
    text-align: center;
}

body.dark-mode .slide-content h4 {
    color: #ffd700;
}

.slide-content p {
    color: #444;
    line-height: 1.6;
    text-align: center;
    max-width: 600px;
}

body.dark-mode .slide-content p {
    color: #e0e0e0;
}

.carousel-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.carousel-btn {
    background-color: rgba(107, 72, 255, 0.7);
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 20px;
    border: none;
    margin: 0 15px;
    z-index: 20;
}

body.dark-mode .carousel-btn {
    background-color: rgba(255, 215, 0, 0.7);
}

.carousel-btn:hover {
    background-color: #ffd700;
    transform: scale(1.1) rotate(10deg);
}

.carousel-dots {
    display: flex;
    justify-content: center;
    margin: 0 10px;
}

.carousel-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #6b48ff;
    opacity: 0.5;
    margin: 0 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

body.dark-mode .carousel-dot {
    background-color: #e0e0e0;
}

.carousel-dot.active {
    opacity: 1;
    background-color: #ffd700;
    transform: scale(1.2);
    animation: pulse-dot 2s infinite;
}
/*
Carousel Styles Explanation:
- Purpose: Creates a 3D carousel for profile content with slides, buttons, and dots.
- Properties: `.custom-carousel` centers and animates in. Slides use 3D transforms for active, previous, and next states, with smooth transitions. Buttons and dots are interactive, changing colors and scaling on hover/active states.
- Dark Mode: Adjusts backgrounds and colors for contrast.
- Why: Provides a dynamic, interactive way to showcase content, controlled by JavaScript.
*/

/* Philosophy Section Styles - Grid of philosophy cards */
.philosophy-section {
    padding: 10px 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.philosophy-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    margin-top: 30px;
}

.philosophy-card {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards;
}

.philosophy-card:nth-child(1) { animation-delay: 0.2s; }
.philosophy-card:nth-child(2) { animation-delay: 0.4s; }
.philosophy-card:nth-child(3) { animation-delay: 0.6s; }
.philosophy-card:nth-child(4) { animation-delay: 0.8s; }

body.dark-mode .philosophy-card {
    background: #2a2a3a;
}

.philosophy-card:hover {
    transform: translateY(-5px) rotate(2deg);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.philosophy-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
}

.philosophy-card h4 {
    color: #6b48ff;
    font-size: 1.5em;
    margin: 15px 20px 10px;
}

body.dark-mode .philosophy-card h4 {
    color: #ffd700;
}

.philosophy-card p {
    color: #444;
    padding: 0 20px 20px;
    line-height: 1.6;
    font-size: 0.95em;
}

body.dark-mode .philosophy-card p {
    color: #e0e0e0;
}
/*
Philosophy Section Explanation:
- Purpose: Displays philosophy content in a two-column grid of cards.
- Properties: Uses a grid layout, with cards that fade in with staggered delays. Cards lift and rotate on hover, with images and text styled for readability.
- Dark Mode: Adjusts backgrounds and text colors.
- Why: Organizes content visually and adds subtle interactivity.
*/

/* Education Section Styles - Grid of education cards */
.education-section {
    padding: 60px 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.education-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    margin-top: 30px;
}

.education-card {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards;
}

.education-card:nth-child(1) { animation-delay: 0.2s; }
.education-card:nth-child(2) { animation-delay: 0.4s; }

body.dark-mode .education-card {
    background: #2a2a3a;
}

.education-card:hover {
    transform: translateY(-5px) rotate(2deg);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.education-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
}

.education-card h4 {
    color: #6b48ff;
    font-size: 1.5em;
    margin: 15px 20px 10px;
}

body.dark-mode .education-card h4 {
    color: #ffd700;
}

.education-card p {
    color: #444;
    padding: 0 20px 20px;
    line-height: 1.6;
    font-size: 0.95em;
}

body.dark-mode .education-card p {
    color: #e0e0e0;
}
/*
Education Section Explanation:
- Purpose: Shows education details in a two-column grid of cards.
- Properties: Similar to philosophy, with a grid layout, fade-in animations, and hover effects. Images and text are styled consistently.
- Dark Mode: Updates colors for the theme.
- Why: Maintains a uniform card-based layout with engaging animations.
*/

/* Projects Section Styles - Grid of project cards */
.projects-section {
    padding: 60px 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-top: 30px;
}

.project-card {
    background: #fff;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards;
}

.project-card:nth-child(1) { animation-delay: 0.2s; }
.project-card:nth-child(2) { animation-delay: 0.4s; }
.project-card:nth-child(3) { animation-delay: 0.6s; }

body.dark-mode .project-card {
    background: #2a2a3a;
}

.project-card:hover {
    transform: translateY(-5px) rotate(2deg);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.project-card h4 {
    color: #FFD700;
    font-size: 1.5em;
    margin-bottom: 10px;
    text-align: center;
}

body.dark-mode .project-card h4 {
    color: #FFD700;
}

.project-card p {
    color: #444;
    line-height: 1.6;
    text-align: center;
    margin-bottom: 15px;
}

body.dark-mode .project-card p {
    color: #e0e0e0;
}

.project-tech {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
}

.tech-btn {
    background-color: #FFD700;
    color: #1a1a1a;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 0.9em;
    cursor: default;
    transition: transform 0.3s ease;
}

body.dark-mode .tech-btn {
    background-color: #e0e0e0;
    color: #2a2a3a;
}

.tech-btn:hover {
    transform: scale(1.1);
}
/*
Projects Section Explanation:
- Purpose: Displays projects in a three-column grid with tech badges.
- Properties: Grid layout with fade-in cards, hover effects, and gold headings. Tech badges are flex items that scale on hover.
- Dark Mode: Adjusts colors, keeping headings gold for emphasis.
- Why: Highlights projects with a unique layout and interactive elements.
*/

/* Skills Section Styles - Grid of skill cards with progress bars */
.skills-section {
    padding: 60px 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    margin-top: 30px;
}

.skill-card {
    background: #fff;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards;
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
}

.skill-card:nth-child(1) { animation-delay: 0.2s; }
.skill-card:nth-child(2) { animation-delay: 0.4s; }
.skill-card:nth-child(3) { animation-delay: 0.6s; }
.skill-card:nth-child(4) { animation-delay: 0.8s; }

body.dark-mode .skill-card {
    background: #2a2a3a;
}

.skill-card:hover {
    transform: translateY(-5px) rotate(2deg);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    border: 2px solid #FFD700;
}

.skill-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(107, 72, 255, 0.2), rgba(255, 215, 0, 0.2));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
}

.skill-card:hover::before {
    opacity: 1;
}

.skill-card h4 {
    color: #6b48ff;
    font-size: 1.5em;
    margin-bottom: 10px;
    text-align: center;
    position: relative;
    z-index: 1;
}

body.dark-mode .skill-card h4 {
    color: #ffd700;
}

.skill-card p {
    color: #444;
    line-height: 1.6;
    text-align: center;
    margin-bottom: 15px;
    position: relative;
    z-index: 1;
}

body.dark-mode .skill-card p {
    color: #e0e0e0;
}

.skill-card a {
    color: #6b48ff;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
    z-index: 1;
}

body.dark-mode .skill-card a {
    color: #ffd700;
}

.skill-card a:hover {
    color: #ffd700;
}

.skill-progress {
    width: 100%;
    background-color: #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 15px;
    position: relative;
    z-index: 1;
}

body.dark-mode .skill-progress {
    background-color: #444;
}

.progress-bar {
    background: linear-gradient(90deg, #6b48ff, #884dff);
    height: 10px;
    border-radius: 10px;
    position: relative;
    transition: width 1s ease-in-out;
}

body.dark-mode .progress-bar {
    background: linear-gradient(90deg, #ffd700, #e0e0e0);
}

.progress-bar::after {
    content: attr(style);
    position: absolute;
    right: 5px;
    top: -25px;
    color: #6b48ff;
    font-size: 0.9em;
    font-weight: 500;
}

body.dark-mode .progress-bar::after {
    color: #ffd700;
}
/*
Skills Section Explanation:
- Purpose: Shows skills in a two-column grid with progress bars.
- Properties: Cards fade in, gain a gold border and gradient overlay on hover. Progress bars animate width, showing skill levels.
- Dark Mode: Adjusts colors for visibility.
- Why: Visually represents skills with interactive and animated elements.
*/

/* Footer Styles - Bottom section with info and social links */
.site-footer {
    background: linear-gradient(90deg, #6b48ff, #884dff);
    color: white;
    padding: 50px 0 20px;
    margin-top: 60px;
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards 0.6s;
}

body.dark-mode .site-footer {
    background: linear-gradient(90deg, #2a2a3a, #3a3a4a);
}

.footer-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.footer-info, .footer-social {
    width: 45%;
    margin-bottom: 30px;
}

.footer-info h3, .footer-social h3 {
    font-size: 1.5em;
    margin-bottom: 20px;
    color: #ffd700;
}

.footer-info p {
    margin-bottom: 10px;
    line-height: 1.6;
}

body.dark-mode .footer-info p {
    color: #e0e0e0;
}

.social-icons {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.social-icon {
    color: white;
    transition: all 0.3s ease;
}

body.dark-mode .social-icon {
    color: #e0e0e0;
}

.social-icons a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

body.dark-mode .social-icons a {
    background: rgba(255, 215, 0, 0.1);
}

.social-icons a:hover {
    background: #ffd700;
    transform: scale(1.1) rotate(10deg);
}

.social-icons a:hover .social-icon {
    color: #6b48ff;
}

.footer-bottom {
    text-align: center;
    padding-top: 20px;
    margin-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

body.dark-mode .footer-bottom {
    border-top: 1px solid rgba(255, 215, 0, 0.1);
}

body.dark-mode .footer-bottom p {
    color: #e0e0e0;
}
/*
Footer Styles Explanation:
- Purpose: Styles the footer with contact info and social links.
- Properties: Purple gradient background, flex layout for two columns, and fade-in animation. Social icons are circular, scaling and rotating on hover.
- Dark Mode: Updates colors and backgrounds.
- Why: Provides a clean, interactive footer to close the page.
*/

/* Responsive Adjustments - Adapts layout for smaller screens */
@media (max-width: 768px) {
    .custom-carousel {
        max-width: 90%;
    }
    .carousel-slide {
        transform: translateZ(-150px) rotateY(0deg) scale(0.8);
    }
    .slide-content {
        padding: 20px;
    }
    .flip-card {
        width: 250px;
        height: 350px;
        margin-right: 0;
    }
    .profile-photo {
        width: 150px;
        height: 150px;
    }
    .header-text h2 {
        font-size: 1.5em;
    }
    .philosophy-grid {
        grid-template-columns: 1fr;
    }
    .education-grid {
        grid-template-columns: 1fr;
    }
    .projects-grid {
        grid-template-columns: 1fr;
    }
    .skills-grid {
        grid-template-columns: 1fr;
    }
}
/*
Responsive Adjustments Explanation:
- Purpose: Ensures the layout works on mobile devices (up to 768px width).
- Properties: Reduces sizes (carousel, flip card, photo, text) and collapses grids to single columns for better stacking.
- Why: Makes the design mobile-friendly with minimal disruption to aesthetics.
*/

/* Animations - Defines keyframe animations for dynamic effects */
@keyframes pulse-dot {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
/*
Animations Explanation:
- Purpose: Adds dynamic effects to various elements.
- `pulse-dot`: Scales carousel dots up and down for an active state.
- `bounce`: Moves "Portfolio" text up and down repeatedly.
- `spin`: Rotates "Shakthi" text 360° continuously.
- `fadeInUp`: Fades elements in while lifting them, used for scroll animations.
- Why: Enhances visual interest and user engagement.
*/



document.addEventListener('DOMContentLoaded', () => {
    // Custom cursor implementation
    const cursorOuter = document.getElementById('cursor-outer');
    const cursorInner = document.getElementById('cursor-inner');
    let mouseX = 0, mouseY = 0, innerX = 0, innerY = 0;
    const speed = 0.3;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function updateCursor() {
        cursorOuter.style.left = mouseX - cursorOuter.offsetWidth / 2 + 'px';
        cursorOuter.style.top = mouseY - cursorOuter.offsetHeight / 2 + 'px';
        innerX += (mouseX - innerX) * speed;
        innerY += (mouseY - innerY) * speed;
        cursorInner.style.left = innerX - cursorInner.offsetWidth / 2 + 'px';
        cursorInner.style.top = innerY - cursorInner.offsetHeight / 2 + 'px';
        requestAnimationFrame(updateCursor);
    }
    updateCursor();
    // Code Explanation: Creates a custom cursor. `mousemove` tracks mouse position. `updateCursor` runs in an animation loop (`requestAnimationFrame`), moving `cursorOuter` instantly and `cursorInner` with a lag (eased by `speed`), centered by offsetting half their size.

    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '🌙';
    }
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        themeToggle.textContent = body.classList.contains('dark-mode') ? '🌙' : '☀️';
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
    // Code Explanation: Manages theme switching. Checks `localStorage` on load to apply the saved theme. Clicking `themeToggle` toggles `dark-mode`, updates the icon, and saves the preference for persistence.

    // Scroll Animation
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.header-content, .profile-section h3, .custom-carousel, .philosophy-card, .education-card, .project-card, .skill-card, .site-footer');
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            if (position.top < window.innerHeight * 0.85 && !element.classList.contains('animated')) {
                element.classList.add('animated');
            }
        });
    };
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    // Code Explanation: Triggers fade-in animations when elements enter 85% of the viewport. `getBoundingClientRect` checks position, and `animated` class prevents re-animation. Runs on scroll and initially.

    // Initialize the custom carousel
    function initCustomCarousel() {
        const slides = document.querySelectorAll('.carousel-slide');
        let currentIndex = 0;
        const totalSlides = slides.length;
        function updateSlides() {
            const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            const nextIndex = (currentIndex + 1) % totalSlides;
            slides.forEach(slide => slide.classList.remove('active', 'prev', 'next'));
            slides[currentIndex].classList.add('active');
            slides[prevIndex].classList.add('prev');
            slides[nextIndex].classList.add('next');
            document.querySelectorAll('.carousel-dot').forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
        }
        document.querySelector('.prev-btn').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlides();
        });
        document.querySelector('.next-btn').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlides();
        });
        updateSlides();
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlides();
        }, 5000);
    }
    initCustomCarousel();
    // Code Explanation: Sets up the carousel. `updateSlides` manages slide states using modular arithmetic for wrapping. Buttons update `currentIndex` and trigger `updateSlides`, while `setInterval` enables 5-second autoplay. Dots sync with the active slide.

    // Initialize Radar Chart
    const ctx = document.getElementById('radar-chart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Strength', 'Speed', 'Precision', 'Endurance', 'Creativity', 'Intelligence'],
            datasets: [{
                label: 'Shakthi\'s Stats',
                data: [60, 75, 80, 70, 90, 85],
                backgroundColor: 'rgba(255, 69, 0, 0.2)',
                borderColor: 'rgba(255, 69, 0, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(255, 215, 0, 1)'
            }]
        },
        options: {
            scales: { r: { beginAtZero: true, max: 100, ticks: { display: false } } },
            plugins: { legend: { display: false } }
        }
    });
    // Code Explanation: Creates a radar chart with Chart.js on the flip card's back. Defines six stats (0-100) with orange fill and gold points. Options hide ticks and legend, setting a clean 0-100 scale for a JoJo-inspired look.
});


# Portfolio Website: Key Components and Beyond

This document covers the key components, implementation details, security considerations, performance optimizations, known limitations, future enhancements, troubleshooting guide, support information, version history, and license details of the Portfolio Website.

## Key Components

### Header
- **Description**: The header features an animated "Portfolio" title with a bounce effect, a flip card displaying a profile photo on the front and "Stand" stats on the back, and navigation links with hover animations.
- **Details**:
  - **Animated Title**: The "Portfolio" text uses a CSS `bounce` animation for a dynamic effect.
  - **Flip Card**: A 3D flip card toggles between a profile photo and a JoJo-inspired "Stand" card with a radar chart.
  - **Navigation Links**: Links to Home, About, Skills, and Philosophy sections with hover scaling and color changes.

### Profile Section
- **Description**: A 3D carousel with four slides showcasing different aspects of Shakthi's life: Journey, Professional Life, Interests, and Goals.
- **Details**:
  - **3D Carousel**: Implements a 3D transform effect with prev/next slide visibility, controlled by buttons, dots, swipe gestures, and autoplay (every 5 seconds).
  - **Slides**: Each slide contains a title and description, styled with responsive design for various screen sizes.

### Philosophy Section
- **Description**: A four-card grid detailing Shakthi's life philosophy, learning approach, worldview, and aspirations, with hover animations and staggered fade-in effects.
- **Details**:
  - **Grid Layout**: Displays four cards in a 2x2 grid (1 column on mobile) with images and text.
  - **Animations**: Cards fade in with delays (0.2s increments) and lift/rotate on hover for interactivity.

### Education Section
- **Description**: A two-card grid showcasing Shakthi's academic history, including images and details.
- **Details**:
  - **Grid Layout**: Two cards for Bachelor’s degree and Junior College, collapsing to one column on mobile.
  - **Content**: Includes institution, duration, major, and personal notes, with fade-in animations.

### Projects Section
- **Description**: A three-card grid highlighting key projects with tech stack badges.
- **Details**:
  - **Grid Layout**: Three projects (Cosmic Dashboard, Galaxy Portfolio, Snake) in a 3-column grid (1 column on mobile).
  - **Tech Badges**: Each card lists technologies used (e.g., React, Node.js), with hover scaling effects.

### Skills Section
- **Description**: A four-card grid detailing Shakthi's skillsets with hover effects and project links where applicable.
- **Details**:
  - **Grid Layout**: Four skills (React, Java, JavaScript, Node.js) in a 2x2 grid (1 column on mobile).
  - **Interactivity**: Cards feature hover borders, gradient overlays, and links (e.g., to the Snake project).

### Footer
- **Description**: Contains contact information and social media links with hover animations.
- **Details**:
  - **Content**: Email, phone, location, and social icons (LinkedIn, GitHub, Twitter, Instagram, Dribbble).
  - **Animations**: Social icons scale and rotate on hover, with a fade-in effect on scroll.

## Implementation Details
- **Animations**: Custom cursor with outer ring instant movement and inner dot lagging; flip card with 3D rotation; carousel with 3D transform; fade-ins on scroll.
- **UI Components**: Consistent card design with shadows and rounded corners, responsive grids, interactive buttons with scale/rotate effects.
- **Responsive Design**: Grid layouts collapse to single column on mobile (<768px), adjusted carousel and flip card sizes.
- **Analytics**: Firebase Analytics tracks user interactions without additional UI.

## Security Considerations
- Static content with no user input reduces attack surface.
- Firebase API key exposed in client-side code (consider server-side analytics for production).

## Performance Optimizations
- Lazy-loaded animations triggered by viewport.
- Efficient event listeners with debouncing (implicit via `requestAnimationFrame`).
- Lightweight CSS transitions for smooth effects.

## Known Limitations
- No backend data storage or dynamic content.
- Limited browser testing (assumes modern browser support).
- Static image assets (e.g., `download.jpg`) must exist locally.

## Future Enhancements
- Dynamic project loading via CMS or API.
- Contact form integration.
- Advanced animations (e.g., particle effects).
- Accessibility improvements (ARIA labels, keyboard navigation).
- Performance monitoring with Lighthouse.

## Troubleshooting Guide
1. **Cursor Issues**
   - Check `mousemove` listener and `requestAnimationFrame` loop.
   - Verify CSS `pointer-events: none` on cursor elements.
2. **Carousel Malfunctions**
   - Ensure slide indices align with dot controls.
   - Check touch event thresholds for swipe detection.
3. **Radar Chart Errors**
   - Confirm Chart.js CDN loaded correctly.
   - Validate canvas element presence in DOM.
4. **Theme Toggle Problems**
   - Verify `localStorage` interaction and CSS class toggling.

## Support
For technical support or feature requests, please contact:
- **Email**: shakthiganeshan.thevar@psiog.com
- **Phone**: +91-8976152541

## Version History
- **Current Version**: 1.0
- **Last Updated**: March 18, 2025

## License
[Your license information]

---