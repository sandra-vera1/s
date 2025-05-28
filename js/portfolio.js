const projects = [
    {
        project: "Contact Messages Website",
        description: "Practice of actions: creating, updating, deleting and listing contact messages and a graphic of messages per day.",
        tech: "Classic ASP, VBScript, ASP.NET MVC, C#, SQL Server, JavaScript, HTML, CSS, Bootstrap, Chartjs library.",
        link: "https://github.com/sandra-vera1/PracticesASP_ASP.NET",
        mode: "Individual Project"
    },
    {
        project: "Warehouse App",
        description: "Android app about manage goods and warehouses using Jetpack Compose.",
        tech: "Kotlin, Jetpack Compose, Material Design, SQLite",
        link: "https://github.com/sandra-vera1/WarehouseApp",
        mode: "Individual Project"
    },
    {
        project: "Math Game App",
        description: "Android app about addition questions using Jetpack Compose.",
        tech: "Kotlin, Jetpack Compose, Material Design",
        link: "https://github.com/sandra-vera1/MathGameApp",
        mode: "Individual Project"
    },
    {
        project: "Student App",
        description: "This practice is about student information management application. Built a server-side rendering PHP Application running on Apache and MySQL follow the MVC pattern.",
        tech: "PHP, HTML, CSS, MySQL, MVC, Apache",
        link: "https://github.com/sandra-vera1/StudentApp",
        mode: "Individual Project"
    },
    {
        project: "30 Days App - PositiveThinking",
        description: "Android app about 30 days of positive thinking using Jetpack Compose.",
        tech: "Kotlin, Jetpack Compose, Material Design",
        link: "https://github.com/sandra-vera1/30DaysApp_PositiveThinking",
        mode: "Individual Project"
    },
    {
        project: "Business Card App",
        description: "Android app about a Business Card using Jetpack Compose.",
        tech: "Kotlin, Jetpack Compose",
        link: "https://github.com/sandra-vera1/BusinessCard",
        mode: "Individual Project"
    },
    {
        project: "Art Space App",
        description: "Android app about Art Space that displays a curated collection of framed artwork using Jetpack Compose.",
        tech: "Kotlin, Jetpack Compose",
        link: "https://github.com/sandra-vera1/ArtSpace",
        mode: "Individual Project"
    },
    {
        project: "Book Management",
        description: "web application designed to view the book information and can search the book in the detailed book listings. Only administrators can add, edit, and delete the book. The application included user account (administrator role), data storage, and responsive web design.",
        tech: "React, Node.JS, JavaScript, Bootstrap, HTML, CSS",
        link: "https://github.com/sandra-vera1/BookManagement",
        mode: "Group Project"
    },
    {
        project: "Creative Studio Rentals",
        description: "Web application designed to connect owners of creative studios—such as art studios, recording studios, and rehearsal spaces—with artists, musicians, and creators seeking to rent these spaces for their projects. The application included user accounts, detailed studio listings, data storage, and responsive web design.",
        tech: "Node.JS, Express, JavaScript, HTML, CSS",
        link: "https://github.com/Kire6794/IntroWebPrograming_Project",
        mode: "Group Project"
    },
    {
        project: "Property Rental App",
        description: "Web application that allow users to view and rent storage units or parking lots which are added by owners in Canada. Owners can add new properties to the database providing details about the property as well as the lease and price. This allows renters to browse the database to search for a property suitable for their needs, save favorites and get a quote immediately. A renter can see the manager contact information for any property allowing them to communicate and make rental arrangements.",
        tech: "MS SQL Server, C#, ASP.NET, MVC, JavaScript, HTML, CSS, Bootstrap",
        link: "https://github.com/sandra-vera1/RentalApp",
        mode: "Group Project"
    },
    {
        project: "Connect Four",
        description: "Console application that allows play Connect Four. Connect Four is a two-player connection game in which the players first choose a symbol/color and then take turns dropping one Symbol/colored disc from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own symbols/colored discs.",
        tech: "C#",
        link: "https://github.com/KailanB/SODV1202_Connect4",
        mode: "Group Project"
    },
    {
        project: "Adoptme App",
        description: "WinForm application that facilitates the pet adoption process, finding suitable animals and expressing interest in adopting a specific animal. It is intended for animal lovers and families interested in adopting pets, as well as for shelter organizations, which can manage the process through an administrator role.",
        tech: "C#, WinForm",
        link: "https://github.com/sandra-vera1/AdoptmeApp",
        mode: "Group Project"
    },
    {
        project: "Small Projects",
        description: "Web pages to practice HTML, Javascript and CSS.",
        tech: "JavaScript, HTML, CSS",
        link: "InterestPage.html",
        mode: "Individual Project"
    }
];

const rowsPerPage = 4;
let currentPage = 1;
let filteredProjects = [...projects]; // Start with all projects

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    filteredProjects = projects.filter(p =>
        p.project.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.tech.toLowerCase().includes(query) ||
        p.mode.toLowerCase().includes(query)
    );
    currentPage = 1;
    displayTable(currentPage);
    setupPagination();
});

function displayTable(page) {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedItems = filteredProjects.slice(start, end);

    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";

    paginatedItems.forEach(p => {
        const row = `<tr>
      <td><b>${p.project}</b></td>
      <td>${p.description}</td>
      <td>${p.tech}</td>
      <td><a href="${p.link}" target="_blank">${p.project}</a></td>
      <td>${p.mode}</td>
    </tr>`;
        tableBody.innerHTML += row;
    });
}

function setupPagination() {
    const pageCount = Math.ceil(filteredProjects.length / rowsPerPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    for (let i = 1; i <= pageCount; i++) {
        const li = document.createElement("li");
        li.classList.add("page-item");
        if (i === currentPage) li.classList.add("active");

        const link = document.createElement("a");
        link.classList.add("page-link");
        link.href = "#";
        link.textContent = i;

        link.addEventListener("click", (e) => {
            e.preventDefault();
            currentPage = i;
            displayTable(currentPage);
            setupPagination();
            document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
        });

        li.appendChild(link);
        pagination.appendChild(li);
    }
}

// Initial render
displayTable(currentPage);
setupPagination();
