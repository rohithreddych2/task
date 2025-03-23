const works = {
    "task1": { "title": "Project 1", "url": "works/task1/index.html" },
    "task2": { "title": "Project 2", "url": "works/task2/index.html" },
    "task3": { "title": "Project 3", "url": "works/task3/index.html" },
    "task4": { "title": "Project 4", "url": "works/task3/index.html" },
};

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
        link.onclick = function() {
            // Load content
            const frame = document.getElementById("contentFrame");
            frame.src = work.url;
            
            // Highlight active link
            const allLinks = document.querySelectorAll(".nav-link");
            allLinks.forEach(a => a.classList.remove("active"));
            this.classList.add("active");
            
            return false; // Prevent default link behavior
        };
        
        navPanel.appendChild(link);
    }
}

// Initialize when page loads
window.onload = function() {
    createNav();
    
    
};