const works = {
    "task1": { "title": "Project 1", "url": "works/task1/index.html" },
    "task2": { "title": "Project 2", "url": "works/task2/index.html" },
    "task3": { "title": "Project 3", "url": "works/task3/index.html" },
    "task4": { "title": "Project 4", "url": "works/task4/index.html" },
    "task5": { "title": "Project 5", "url": "works/task5/index.html" },
    "task6": { "title": "Project 6", "url": "works/task6/index.html" },
    "task7": { "title": "Project 7", "url": "works/task7/index.html" },
    "task8": { "title": "Project 8", "url": "works/task8/index.html" },
    "task9": { "title": "Project 9", "url": "works/task9/index.html" },
    "task10": { "title": "Project 10", "url": "works/task10/index.html" },
    "task11": { "title": "Project 11", "url": "works/task11/index.html" },
    "task12": { "title": "Project 12", "url": "works/task12/index.html" },
    "task13": { "title": "Project 13", "url": "works/task13/index.html" },
    "task14": { "title": "Project 14", "url": "works/task14/index.html" },
    "task15": { "title": "Project 15", "url": "works/task15/index.html" }
};

const taskIds = Object.keys(works);
let currentTaskIndex = 0;

// Function to create the navigation menu
function createNav() {
    const navPanel = document.getElementById("navPanel");

    for (const id in works) {
        const work = works[id];

        // Create link
        const link = document.createElement("a");
        link.textContent = work.title;
        link.href = "#";
        link.className = "nav-link";

        // Add click event
        link.onclick = function (event) {
            event.preventDefault(); // Prevent default link behavior
            
            // Load content
            loadContent(id);
        };

        navPanel.appendChild(link);
    }
}

// Function to load content into the iframe
function loadContent(taskId) {
    const work = works[taskId];
    const frame = document.getElementById("contentFrame");
    frame.src = work.url;

    // Remove active class from all links and set for clicked one
    document.querySelectorAll(".nav-link").forEach(a => a.classList.remove("active"));
    const activeLink = [...document.querySelectorAll(".nav-link")].find(a => a.textContent === work.title);
    if (activeLink) activeLink.classList.add("active");

    // Update current task index
    currentTaskIndex = taskIds.indexOf(taskId);

    // Show or disable next/previous buttons based on current task index
    toggleNavButtons();

    // Ensure navigation buttons are visible when a project is selected
    document.getElementById("iframeNav").style.display = "flex";
}

// Function to show or disable the Next and Previous buttons
function toggleNavButtons() {
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    if (currentTaskIndex > 0) {
        prevButton.disabled = false;
    } else {
        prevButton.disabled = true;
    }

    if (currentTaskIndex < taskIds.length - 1) {
        nextButton.disabled = false;
    } else {
        nextButton.disabled = true;
    }
}

// Function to add scrolling functionality
function addScrollButtons() {
    const navPanel = document.getElementById("navPanel");
    const scrollLeft = document.getElementById("scrollLeft");
    const scrollRight = document.getElementById("scrollRight");

    scrollLeft.addEventListener("click", function () {
        navPanel.scrollBy({ left: -900, behavior: "smooth" });
    });

    scrollRight.addEventListener("click", function () {
        navPanel.scrollBy({ left: 900, behavior: "smooth" });
    });
}

// Function to handle Next and Previous button clicks
function addNavButtons() {
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    prevButton.addEventListener("click", function () {
        if (currentTaskIndex > 0) {
            loadContent(taskIds[currentTaskIndex - 1]);
        }
    });

    nextButton.addEventListener("click", function () {
        if (currentTaskIndex < taskIds.length - 1) {
            loadContent(taskIds[currentTaskIndex + 1]);
        }
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
};

