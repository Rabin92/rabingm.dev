const projects = [
  {
    image: 'dashboard.png',
    alt_text: 'dashboard',
    live_link: 'https://rabin92.github.io/techdegree-project7/',
    code_link: 'https://github.com/Rabin92/techdegree-project7',
    heading: 'Dashboard',
    description: `
    An interactive dashboard for a web
    application using advanced web techniques
    including SVG graphics and JavaScript programming.
    Implemented local storage to store the user preferences.
    `,
  },
  {
    image: 'employee-dir.png',
    alt_text: 'employee-directory',
    live_link: 'https://rabin92.github.io/techdegree-project8/',
    code_link: 'https://github.com/Rabin92/techdegree-project8',
    heading: 'Employee Directory',
    description: `
    An employee directory - communicated with a third-party API
    (Application Programming Interface). Implemented dark-mode
    feature.
    `,
  },
  {
    image: 'guess_game.png',
    alt_text: 'guessing-game',
    live_link: 'https://rabin92.github.io/techdegree-project6/',
    code_link: 'https://github.com/Rabin92/techdegree-project6',
    heading: 'Game Show App',
    description: `
    A word guessing game where players will try to guess by entering
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
    An interactive, searchable gallery of photos. Implemented jQuery
    lightbox plugin for a photo gallery.
    `,
  },
  {
    image: 'form.png',
    alt_text: 'Form',
    live_link: 'https://rabin92.github.io/techdegree-project3/',
    code_link: 'https://github.com/Rabin92/techdegree-project3',
    heading: 'Sign Up Form',
    description: `
    A responsive, mobile-first registration form using a variety of
    HTML form elements. HTML required attribute added in input
    field.
    `,
  },
  {
    image: 'sass.png',
    alt_text: 'Sass',
    live_link: 'https://rabin92.github.io/techdegree-project4/',
    code_link: 'https://github.com/Rabin92/techdegree-project4',
    heading: 'Web Style Guide',
    description: `
    Compiled the provided CSS into SASS to keep the file more
    organised. Utilised variables, mixins, loops and ampersand.
    `,
  },
];

// Generate div
const card = document.querySelector('.grid-container');
let html = '';

projects.forEach(project => {
  html += `
<div class="card">
    <div class="section-content">
        <img class="img-portfolio" src=images/portfolio_img/${project.image} alt="${project.alt_text}">
        <div class="section-overlay section-overlay-blur">
            <div class="info">
                <a href="${project.live_link}"
                target="_blank"
                rel="noopener"
                >Go live</a>

                <a href="${project.code_link}"
                target="_blank"
                rel="noopener"
                >View code</a>
            </div>
        </div>
    </div>
    <div class="section-info">
        <h4>${project.heading}</h4>
        <p>${project.description}</p>
    </div>
</div>
</div>
`;
  card.innerHTML = html;
});
