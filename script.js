
const projects = [
    {
        title: "Spotify Hybrid Recommendation System",
        description: "Built a hybrid music recommendation system combining content-based filtering and collaborative filtering. Implemented data pipelines using DVC, Docker and AWS EC2 deployment.",
        technologies: "Python | Machine Learning | DVC | Docker | AWS",
        github: "https://github.com/MansiBramta/spotify-song-recommender"
    },
    {
        title: "Steel Energy Consumption Analysis",
        description: "Analyzed industrial energy consumption data to identify demand patterns, peak usage periods and power factor trends. Developed an interactive Power BI dashboard.",
        technologies: "Python | SQL | Power BI | Data Analytics",
        github: "https://github.com/MansiBramta"
    },
    {
        title: "HR Employee Attrition Analysis",
        description: "Explored employee data to understand attrition patterns, workforce characteristics and salary trends using SQL and analytical techniques.",
        technologies: "SQL | Excel | Data Analysis",
        github: "https://github.com/MansiBramta"
    },
    {
        title: "Global Superstore Sales Analysis",
        description: "Analyzed sales performance, profitability and customer segments. Created business KPIs, running totals, year-to-date measures and Pareto analysis.",
        technologies: "SQL | Power BI | DAX | Data Visualization",
        github: "https://github.com/MansiBramta"
    }
];

const projectContainer = document.getElementById("project-container");

projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>${project.technologies}</strong></p>
        <a href="${project.github}" target="_blank" rel="noopener noreferrer">
            View on GitHub →
        </a>
    `;

    projectContainer.appendChild(card);
});
