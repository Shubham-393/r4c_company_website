# R4C Tech Website

A professional website for R4C Tech LLC, a company specializing in intelligent decision support systems for defense and aerospace.

## Project Structure

The website is built with the following technologies:

- HTML5
- CSS3 (including CSS variables for theming)
- JavaScript (with jQuery for DOM manipulation)
- Bootstrap 5 for responsive layouts
- Font Awesome for icons
- Particles.js for interactive backgrounds

The project follows a modular structure:

```
R4C/
├── assets/
│   └── favicon/          # Favicon files
├── css/
│   ├── variables.css     # CSS variables for theming
│   ├── style.css         # Main styles
│   ├── components.css    # Component-specific styles
│   └── animation.css     # Animation and dynamic effects
├── images/               # Image assets
├── js/
│   ├── main.js           # Main JavaScript functionality
│   └── animations.js     # Animation and particle effects
├── header.html           # Shared header component
├── footer.html           # Shared footer component
├── index.html            # Home page
├── about.html            # About page
├── research.html         # Research and Technologies page
├── capabilities.html     # Capabilities page
├── collaborations.html   # Collaborations page
├── careers.html          # Careers page
├── contact.html          # Contact page
└── contact-success.html  # Contact form submission success page
```

## Features

- Modular design with reusable components
- Consistent monochromatic Quantum Indigo color scheme
- Dynamic 3D/video backgrounds and subtle motion effects
- Responsive layout for all device sizes
- Interactive elements with smooth animations and particle effects
- Cross-browser compatibility
- Optimized for performance and SEO
- Condensed navigation with dropdown menus

## Pages

1. **Home**: Company overview, core technologies, and capabilities preview, with dynamic video background
2. **About**: Mission, vision, history, team, and company values
3. **Research**: Detailed information about research areas and technologies
4. **Capabilities**: Technical expertise and services
5. **Collaborations**: Partner organizations and joint initiatives
6. **Careers**: Job openings and career opportunities
7. **Contact**: Contact information and inquiry form

## Interactive Elements

- 3D card hover effects
- Particle backgrounds
- Video sections
- Gradient animations
- Parallax scrolling
- Animated counters
- Floating elements

## Setup and Local Development

1. Clone this repository
2. Open any page in a modern web browser to view the site
3. For development, use a local server to avoid CORS issues with included content

```bash
# Using Python's built-in HTTP server (Python 3)
python -m http.server 8000

# Using Node.js' http-server
npx http-server
```

4. Access the site at `http://localhost:8000` or the appropriate port

## Color Scheme

The website uses a monochromatic Quantum Indigo color scheme:

- Primary: `#4d1e82` (Quantum Indigo)
- Secondary: `#7339bd` (Lighter indigo)
- Tertiary: `#310a5d` (Darker indigo)
- Accent: `#ffc107` (Amber accent for call-to-actions)
- Dark: `#1a0735` (Very dark indigo for text and backgrounds)

## Credits

- Bootstrap 5: https://getbootstrap.com/
- Font Awesome: https://fontawesome.com/
- Inter & Poppins fonts: https://fonts.google.com/
- jQuery: https://jquery.com/
- Particles.js: https://vincentgarreau.com/particles.js/

## Contact

For any questions or suggestions, please contact us at contact@r4ctech.com.

## License

Copyright © 2023 R4C Tech LLC. All rights reserved. 