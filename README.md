
### Implementation Instructions

#### 1. **Set Up the Folder**
- **Location**: Create `~/Documents/portfolio`.
- **Create Folders**:
  - `mkdir -p portfolio/css portfolio/js portfolio/assets/images portfolio/assets/videos portfolio/assets/fonts portfolio/projects`
- **Save Files**:
  - Copy each file above to its respective location (e.g., `index.html` in `portfolio/`, `styles.css` in `portfolio/css/`).
- **Add Images**:
  - Save your logo as `logo.png` in `assets/images/` (100–200px, PNG/SVG, < 100KB).
  - Save your profile picture as `profile.jpg` in `assets/images/` (150–200px, JPEG/PNG, < 100KB).
  - For `project1.jpg`, `project2.jpg`, `project3.jpg`:
    - Download three free images from Unsplash (search “machine learning”, “IoT”, “computer vision”) or create mockups.
    - Save as `project1.jpg`, `project2.jpg`, `project3.jpg` in `assets/images/` (600x400px, JPEG/PNG, < 500KB).
    - Example Unsplash links:
      - Project 1: https://unsplash.com/photos/person-using-black-smartphone-Kz0yB8ZfDfk
      - Project 2: https://unsplash.com/photos/white-and-black-smart-thermostat-Hu0rAz0g2Uc
      - Project 3: https://unsplash.com/photos/a-computer-monitor-with-code-on-it-5i6t6y0W-Vs
- **Update Content**:
  - Edit `index.html` and `projects/*.html` to reflect your actual projects, GitHub links, and contact info (email, LinkedIn).

#### 2. **Test Locally**
- **Using a Local Server** (to ensure CSS and paths work):
  1. Open a terminal:
     ```bash
     cd ~/Documents/portfolio
     python3 -m http.server 8000
     ```
  2. Open `http://localhost:8000` in Chrome or Safari.
  3. Verify:
     - CSS loads: Background `#FBF4F7` (light mode) or `#732838` (dark mode), styled nav with logo, project cards.
     - Logo (`logo.png`) appears in nav, clickable to `index.html`.
     - Profile picture (`profile.jpg`) shows in About section.
     - Project images (`project1.jpg`, etc.) appear in Projects section and project pages.
     - Light/dark mode switches (toggle system theme: macOS > System Settings > Appearance; iOS > Settings > Display & Brightness).
     - Three.js animation works (requires internet for CDN).
- **If CSS Doesn’t Load**:
  - Open browser developer tools (Inspect > Network).
  - Check if `css/reset.css` and `css/styles.css` load (status 200).
  - If 404, ensure files are in `portfolio/css/` and paths are `href="css/reset.css"` in `index.html`.
  - Run `ls -l css/` in terminal to confirm file names (`styles.css`, not `Styles.css`).
  - Clear browser cache (Chrome: Settings > Privacy > Clear Cached Files).
- **Direct `file://` Testing**:
  - Double-click `index.html` in `~/Documents/portfolio`.
  - CSS should load, but Three.js may not work due to `file://` restrictions.
  - If CSS fails, use the local server method above.

#### 3. **Deploy to GitHub Pages**
- **Set Up Git**:
  1. Install Git: https://git-scm.com/, verify with `git --version`.
  2. Initialize:
     ```bash
     cd ~/Documents/portfolio
     git init
     git add .
     git commit -m "Portfolio with logo, profile, and project images"
     ```
  3. Create a GitHub repository: https://github.com/new (name: `portfolio`).
  4. Push:
     ```bash
     git remote add origin https://github.com/yourusername/portfolio.git
     git push -u origin main
     ```
- **Enable GitHub Pages**:
  1. Go to `https://github.com/yourusername/portfolio` > Settings > Pages.
  2. Set Source to `main` branch, Root folder, Save.
  3. Visit `https://yourusername.github.io/portfolio` after a few minutes.
- **Verify**:
  - CSS, logo, profile picture, and project images load.
  - Three.js animation works.
  - Project pages (`/projects/project1.html`) are styled.
  - Test on iPhone/iPad and Safari for Apple compatibility.

#### 4. **Troubleshooting**
- **CSS Not Loading**:
  - Check console errors (Inspect > Console).
  - Ensure `css/` folder and files were pushed to GitHub (`git add css/`).
  - Verify paths in `index.html` (`href="css/styles.css"`) and `projects/*.html` (`href="../css/styles.css"`).
  - Test with inline CSS in `index.html` `<head>`:
    ```html
    <style>
        body { background-color: #FBF4F7; }
        h1 { color: #D36188; }
    </style>
    ```
    If this works, the issue is with external CSS files.
- **Images Not Loading**:
  - Ensure `logo.png`, `profile.jpg`, `project1.jpg`, etc., are in `assets/images/`.
  - Check paths: `src="assets/images/logo.png"` in `index.html`, `src="../assets/images/logo.png"` in `projects/*.html`.
  - Optimize images (< 500KB) to avoid slow loading.
- **Three.js Not Working**:
  - Normal locally with `file://`; deploy to GitHub Pages or use `http://localhost:8000`.
  - Ensure internet connection for CDN (`https://cdnjs.cloudflare.com/.../three.min.js`).

#### 5. **Apple Developer Academy Tips**
- **Images**: The logo and profile picture add professionalism. Project images (even placeholders) enhance visual appeal. Update project descriptions to highlight your work.
- **Logo**: Ensure `logo.png` contrasts with `#EDB4CA` (light mode nav) and `#A5314F` (dark mode nav). If needed, I can suggest logo tweaks.
- **Responsiveness**: CSS supports all devices (test on iPhone/iPad).
- **URL**: Submit `https://yourusername.github.io/portfolio` in your application.
- **Polish**: Test in Safari, update contact info, and ensure project links work.

### Next Steps
1. **Create Folder Structure**:
   - Set up `~/Documents/portfolio` with the structure above.
   - Save all files as provided.
2. **Add Images**:
   - Save your logo as `logo.png` and profile picture as `profile.jpg` in `assets/images/`.
   - Download or create `project1.jpg`, `project2.jpg`, `project3.jpg` (Unsplash or mockups).
3. **Test Locally**:
   - Run `python3 -m http.server 8000`, open `http://localhost:8000`.
   - Check CSS, images, and light/dark modes.
4. **Deploy**:
   - Push to GitHub and enable GitHub Pages.
   - Verify at `https://yourusername.github.io/portfolio`.
5. **Customize**:
   - Update project details and links in `index.html` and `projects/*.html`.
   - Add real project images when available.
6. **Report Issues**:
   - If CSS or images don’t load, share console errors (Inspect > Console) or run `ls -R ~/Documents/portfolio` to show your structure.
   - I’ll provide specific fixes.

If you need help creating project images, a logo tweak, or further debugging, let me know!