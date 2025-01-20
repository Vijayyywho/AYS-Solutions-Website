function toggleServices() {
    var extraServices = document.getElementById('extra-services');
    if (extraServices.style.display === "none" || extraServices.style.display === "") {
        extraServices.style.display = "grid"; // Show the extra services
    } else {
        extraServices.style.display = "none"; // Hide the extra services again
    }
}

// function for the blog section 
function toggleBlogPosts() {
    var extraBlogPosts = document.getElementById('extra-blog-posts');
    if (extraBlogPosts.style.display === "none" || extraBlogPosts.style.display === "") {
        extraBlogPosts.style.display = "grid"; // Show the extra blog posts
    } else {
        extraBlogPosts.style.display = "none"; // Hide the extra blog posts again
    }
}

