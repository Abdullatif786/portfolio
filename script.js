// Set current year
document.getElementById("year").textContent = new Date().getFullYear();

// Resume download
document.getElementById("downloadBtn").addEventListener("click", () => {
    window.location.href = "resume.pdf"; 
});
