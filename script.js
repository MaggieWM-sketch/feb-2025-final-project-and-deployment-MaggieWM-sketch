// Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Apply saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

// Search Blog Posts
document.getElementById("searchBox").addEventListener("input", function() {
    let searchQuery = this.value.toLowerCase();
    let posts = document.querySelectorAll("article");

    posts.forEach(post => {
        post.style.display = post.innerText.toLowerCase().includes(searchQuery) ? "block" : "none";
    });
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent successfully!");
});
