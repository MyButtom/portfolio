document.querySelectorAll(".header-options a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const page = link.dataset.page;

        // Hide all pages
        document.querySelectorAll(".page").forEach((section) => {
            section.classList.remove("active");
        });

        // Show selected page
        document.querySelector(`.page.${page}`).classList.add("active");
    });
});

// Select modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");

// Add click event to each project image
document.querySelectorAll(".project img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

// Close modal when clicking anywhere outside the image
modal.addEventListener("click", (e) => {
  if (e.target === modal || e.target === modalImg) {
    modal.style.display = "none";
  }
});

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    if (sidebar.classList.contains('show-sidebar')) {
        // Start slide-out
        sidebar.classList.remove('show-sidebar');
        sidebar.classList.add('hide-sidebar');
        overlay.style.display = 'none';

        // After animation, hide element
        setTimeout(() => {
            sidebar.classList.remove('hide-sidebar');
            sidebar.style.display = 'none';
        }, 300); // Match animation duration
    } else {
        // Prepare sidebar and start slide-in
        sidebar.style.display = 'block';
        sidebar.classList.add('show-sidebar');
        overlay.style.display = sidebar.classList.contains('show-sidebar') ? 'block' : 'none';
    }
}