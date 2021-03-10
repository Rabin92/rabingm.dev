const projects = [
  {
    image: 'web-app-dashboard.png',
    alt_text: 'dashboard',
    live_link: 'https://rabin92.github.io/techdegree-project7/',
    code_link: 'https://github.com/Rabin92/techdegree-project7',
    heading: 'Dashboard',
    description: `
    An interactive dashboard for a web
    application using advanced web techniques
    including SVG graphics and JavaScript programming.
    Implemented localStorage to store the user preferences.
    `,
  },
  {
    image: 'employee-dir.png',
    alt_text: 'employee-directory',
    live_link: 'https://rabin92.github.io/techdegree-project8/',
    code_link: 'https://github.com/Rabin92/techdegree-project8',
    heading: 'Employee Directory',
    description: `
    An employee directory that uses Fetch API to request data of 
    12 random users (fictional) from the Random User Generator API. 
    Implemented dark-mode feature built with Vanilla JavaScript.
    `,
  },
  {
    image: 'guess_game.png',
    alt_text: 'guessing-game',
    live_link: 'https://rabin92.github.io/techdegree-project6/',
    code_link: 'https://github.com/Rabin92/techdegree-project6',
    heading: 'Game Show App',
    description: `
    A word guessing game built with Vanilla JavaScript where players will try to guess by entering
    different letters into the program. This game is made for
    desktop screens only.
    `,
  },
  {
    image: 'photo_gallery.png',
    alt_text: 'photo-gallery',
    live_link: 'https://rabin92.github.io/techdegree-project5/',
    code_link: 'https://github.com/Rabin92/techdegree-project5',
    heading: 'Photo Gallery',
    description: `
    An interactive, searchable gallery of photos built with CSS flexbox and jQuery. Implemented JavaScript
    lightbox plugin for a photo gallery.
    `,
  },
  {
    image: 'featherlite.png',
    alt_text: 'featherLite',
    live_link: 'https://feather-lite.vercel.app',
    code_link: 'https://github.com/Rabin92/featherLITE',
    heading: 'Note-taking Application',
    description: `
    A searchable note taking application with modal built with HTML, Sass, and JavaScript.
    `,
  },
  {
    image: 'social-media-dashboard.png',
    alt_text: 'Social-media-dashboard',
    live_link: 'https://social-media-dashboard.rabin92.vercel.app',
    code_link: 'https://github.com/Rabin92/Social-Media-Dashboard',
    heading: 'Social Media Dashboard',
    description: `
    A mobile-first theme switch dashboard which includes a localStorage.
    `,
  },
];

// Generate div
const card = document.querySelector('.grid-container');
let html = '';

projects.forEach(project => {
  const {
    image,
    alt_text,
    live_link,
    code_link,
    heading,
    description,
  } = project;

  html += `
<div class="card">
    <div class="section-content">
        <img class="img-portfolio" src=images/portfolio_img/${image} alt="${alt_text}">
        <div class="section-overlay section-overlay-blur">
            <div class="info">
                <a href="${live_link}"
                target="_blank"
                rel="noopener"
                >Go live</a>

                <a href="${code_link}"
                target="_blank"
                rel="noopener"
                >View code</a>
            </div>
        </div>
    </div>
    <div class="section-info">
        <h4>${heading}</h4>
        <p>${description}</p>
    </div>
</div>
</div>
`;
});

card.innerHTML = html;

// Carousel Plugin Content

const sliderContents = [
  {
    description: `
    What a pleasure to review. Besides the site being aesthetically
    pleasing, you've added a lot of fine details including small icons.
    But the details aren't just in your site... they're in your code.
    `,
  },
  {
    description: `
    Fantastic job on this complex project! You have shown a solid
    understanding of JavaScript, Sass, localStorage, CSS Grid, and using
    JS plugins! Keep up the good work and happy coding!
    `,
  },
  {
    description: `
    You have created a beautifully
    styled and professional looking portfolio! I really love the page
    element slide in effects! Your project pop ups looks sharp!
    `,
  },
];

// Insert data
const testimonial = document.querySelector('.testimonial');
let testimonialData = '';

sliderContents.forEach(sliderContent => {
  const { description } = sliderContent;

  testimonialData += `
<div class="testimonial__content">
    <h2 class="testimonial__heading testimonial__heading--logo">Treehouse</h2>
    <p class="testimonial__feedback">${description}</p>
    <div class="testimonial__footer">
      <img class="testimonial__avatar" src=images/avatar.svg alt="avatar">
      <p class="testimonial__header testimonial__header--color">Techdegree</p>
      <p class="testimonial__name testimonial__name--color">- Reviewer</p>
  </div>
</div>
`;
});

testimonial.innerHTML = testimonialData;
