const projects = [
  {
    photo_1: 'dashboard.png',
    alt_text: 'dashboard',
    live_link: 'https://rabin92.github.io/techdegree-project7/',
    code_link: 'https://github.com/Rabin92/techdegree-project7',
    heading: 'Dashboard',
    intro: `
    An interactive dashboard for a web
    application using advanced web techniques
    including SVG graphics and JavaScript programming.
    Implemented local storage to store the user preferences.
    `,
  },
  {
    photo_1: 'employee-dir.png',
    alt_text: 'employee-directory',
    live_link: 'https://rabin92.github.io/techdegree-project8/',
    code_link: 'https://github.com/Rabin92/techdegree-project8',
    heading: 'Employee Directory',
    intro: `
    An employee directory - communicated with a third-party API
    (Application Programming Interface). Implemented dark-mode
    feature.
    `,
  },
  {
    photo_1: 'guess_game.png',
    alt_text: 'guessing-game',
    live_link: 'https://rabin92.github.io/techdegree-project6/',
    code_link: 'https://github.com/Rabin92/techdegree-project6',
    heading: 'Game Show App',
    intro: `
    A word guessing game where players will try to guess by entering
    different letters into the program. This game is made for
    desktop screens only.
    `,
  },
  {
    photo_1: 'photo_gallery.png',
    alt_text: 'photo-gallery',
    live_link: 'https://rabin92.github.io/techdegree-project5/',
    code_link: 'https://github.com/Rabin92/techdegree-project5',
    heading: 'Photo Gallery',
    intro: `
    An interactive, searchable gallery of photos. Implemented jQuery
    lightbox plugin for a photo gallery.
    `,
  },
  {
    photo_1: 'form.png',
    alt_text: 'Form',
    live_link: 'https://rabin92.github.io/techdegree-project3/',
    code_link: 'https://github.com/Rabin92/techdegree-project3',
    heading: 'Sign Up Form',
    intro: `
    A responsive, mobile-first registration form using a variety of
    HTML form elements. HTML required attribute added in input
    field.
    
    `,
  },
  {
    photo_1: 'sass.png',
    alt_text: 'Sass',
    live_link: 'https://rabin92.github.io/techdegree-project4/',
    code_link: 'https://github.com/Rabin92/techdegree-project4',
    heading: 'Web Style Guide',
    intro: `
    Compiled the provided CSS file into SASS to keep the file more
    organised. Utilised variables, mixins, loops and ampersand.
    `,
  },
];

const card = document.querySelector('.grid-container');
let html = '';

projects.forEach(project => {
  html += `
<div class="card">
    <div class="section-content">
        <img class="img-portfolio" src=images/portfolio_img/${project.photo_1} alt="${project.alt_text}">
        <div class="section-overlay section-overlay-blur">
            <div class="info">
                <a href="${project.live_link}"
                target="_blank"
                rel="noopener"
                >Live Demo</a>

                <a href="${project.code_link}"
                target="_blank"
                rel="noopener"
                >View Code</a>
            </div>
        </div>
    </div>
    <div class="section-info">
        <h4>${project.heading}</h4>
        <p>${project.intro}</p>
    </div>
</div>
</div>
`;
});

card.innerHTML = html;
