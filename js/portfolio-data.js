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
    An employee directory that uses Fetch API to request data of 
    12 random users (fictional) from the Random User Generator API. 
    Implemented dark-mode feature.
    `,
  },
  {
    image: 'guess_game.png',
    alt_text: 'guessing-game',
    live_link: 'https://rabin92.github.io/techdegree-project6/',
    code_link: 'https://github.com/Rabin92/techdegree-project6',
    heading: 'Game Show App',
    description: `
    A word guessing game built with Vanilla Javascript where players will try to guess by entering
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
    An interactive, searchable gallery of photos built with CSS flexbox and jQuery. Implemented jQuery
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
    HTML form elements. The required attribute added in input elements.
    `,
  },
  {
    image: 'sass.png',
    alt_text: 'Sass',
    live_link: 'https://rabin92.github.io/techdegree-project4/',
    code_link: 'https://github.com/Rabin92/techdegree-project4',
    heading: 'Web Style Guide',
    description: `
    With the provided HTML & CSS, I used Sass to keep the file more organised and reduce repetition. 
    I used features like variables, mixins, nesting and loops. 
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
});

card.innerHTML = html;
