function toggleServices() {
    var extraServices = document.getElementById('extra-services');
    if (extraServices.style.display === "none" || extraServices.style.display === "") {
        extraServices.style.display = "grid"; // Show the extra services
    } else {
        extraServices.style.display = "none"; // Hide the extra services again
    }
}

