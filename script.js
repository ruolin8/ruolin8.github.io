window.onload = function () {
    generateNavbar();
    generateFooter();
};

// Navbar content
function generateNavbar() {
    const currentPage = window.location.pathname.split('/').pop(); // Get the current page name

    const navbarHTML = `
        <img class="logo" src="img/logo.png" alt="portfolio logo">
        <ul>
            <li class="${currentPage === 'index.html' || currentPage === '' ? 'active' : ''}">
                <a href="index.html">Work</a>
            </li>
            <li class="${currentPage === 'about.html' ? 'active' : ''}">
                <a href="about.html">About</a>
            </li>
        </ul>
    `;

    document.getElementById('navbar').innerHTML = navbarHTML;
}

// Project data
const portfolio = [
    {
        link: "discord.html",
        img: "img/cover_discord.png",
        title: "Discord for Work",
        description: "A redesigned workspace that allows colleagues to communicate and collaborate asynchronously."
    },
    {
        link: "joyos.html",
        img: "img/cover_joyos.png",
        title: "JoyOS",
        description: "A mobile Operating System that promotes mental health and personal wellness."
    },
    {
        link: "srp.html",
        img: "img/cover_portal.png",
        title: "Seattle Rescue Plan",
        description: "Open to public information on Seattle government budget spending of COVID-19 federal relief funds."
    }
];

// Project cards
const projectContainer = document.getElementById('project-container');
portfolio.forEach(project => {
    projectContainer.innerHTML += `
        <div class="each-project">
            <img src="${project.img}" alt="${project.title}">
            <div class="text">
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <a href="${project.link}">View Project ➜</a>
            </div>
        </div>
    </a>
    `;
});

// Footer content
function generateFooter() {
    document.getElementById('footer').innerHTML = `
        <div class="container">
            <p>
                Contact me on&ensp;
                <a href="mailto:ruolin8@gmail.com"><i class="fa fa-envelope" aria-label="gmail" style="font-size:24px"></i></a>
                &ensp;
                <a href="https://www.linkedin.com/in/ruo/"><i class="fa fa-linkedin" aria-label="linkedin" style="font-size:24px"></i></a>
            </p>
            <p>&copy; 2024 Ruolin Chen</p>
        </div>
    `;
}