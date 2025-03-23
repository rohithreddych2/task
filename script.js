const works = [
    { id: "task1", title: "Project 1", url: "works/task1/index.html" },
    { id: "task2", title: "Project 2", url: "works/task2/index.html" },
    { id: "task3", title: "Project 3", url: "works/task3/index.html" },
    { id: "task4", title: "Project 4", url: "works/task4/index.html" },
    { id: "task5", title: "Project 5", url: "works/task5/index.html" },
    { id: "task6", title: "Project 6", url: "works/task6/index.html" },
    { id: "task7", title: "Project 7", url: "works/task7/index.html" },
    { id: "task8", title: "Project 8", url: "works/task8/index.html" },
    { id: "task9", title: "Project 9", url: "works/task9/index.html" },
    { id: "task10", title: "Project 10", url: "works/task10/index.html" },
    { id: "task11", title: "Project 11", url: "works/task11/index.html" },
    { id: "task12", title: "Project 12", url: "works/task12/index.html" },
    { id: "task13", title: "Project 13", url: "works/task13/index.html" },
    { id: "task14", title: "Project 14", url: "works/task14/index.html" },
    { id: "task15", title: "Project 15", url: "works/task15/index.html" }
];

let currentTaskIndex = -1; // No project selected initially

// Function to create the navigation menu
function createNav() {
    const navPanel = document.getElementById("navPanel");

    works.forEach((work, index) => {
        // Create link
        const link = document.createElement("a");
        link.textContent = work.title;
        link.href = "#";
        link.className = "nav-link";

        // Add click event
        link.onclick = function (event) {
            event.preventDefault(); // Prevent default link behavior
            loadContent(index);
        };

        navPanel.appendChild(link);
    });
}

// Function to load content into the iframe
function loadContent(index) {
    const work = works[index];
    const frame = document.getElementById("contentFrame");
    frame.src = work.url;

    // Remove active class from all links and set for clicked one
    document.querySelectorAll(".nav-link").forEach(a => a.classList.remove("active"));
    document.querySelectorAll(".nav-link")[index].classList.add("active");

    // Update current task index
    currentTaskIndex = index;

    // Show or disable next/previous buttons based on current task index
    toggleNavButtons();

    // Ensure navigation buttons are visible when a project is selected
    document.getElementById("iframeNav").style.display = "flex";
}

// Function to show or disable the Next and Previous buttons
function toggleNavButtons() {
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    prevButton.style.display = currentTaskIndex > 0 ? "inline-block" : "none";
    nextButton.style.display = currentTaskIndex < works.length - 1 ? "inline-block" : "none";
}

// Function to add scrolling functionality
function addScrollButtons() {
    const navPanel = document.getElementById("navPanel");
    document.getElementById("scrollLeft").addEventListener("click", () => {
        navPanel.scrollBy({ left: -900, behavior: "smooth" });
    });

    document.getElementById("scrollRight").addEventListener("click", () => {
        navPanel.scrollBy({ left: 900, behavior: "smooth" });
    });
}

// Function to handle Next and Previous button clicks
function addNavButtons() {
    document.getElementById("prevButton").addEventListener("click", () => {
        if (currentTaskIndex > 0) loadContent(currentTaskIndex - 1);
    });

    document.getElementById("nextButton").addEventListener("click", () => {
        if (currentTaskIndex < works.length - 1) loadContent(currentTaskIndex + 1);
    });

    toggleNavButtons(); // Ensure buttons are shown/hidden on page load
}

// Initialize when page loads
window.onload = function () {
    createNav();
    addScrollButtons();
    addNavButtons(); // Add event listeners for Next and Previous buttons

    // Hide navigation buttons initially
    document.getElementById("iframeNav").style.display = "none";
    document.getElementById("prevButton").style.display = "none";
    document.getElementById("nextButton").style.display = "none";
};
