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

// Function to show service details in the popup
function showServicePopup(serviceElement) {
    var service = serviceElement.getAttribute('data-service');
    
    // Set the title, description, and benefits based on the clicked service
    var title = '';
    var description = '';
    var benefits = [];
    
    switch (service) {
        case 'management':
            title = 'Management';
            description = 'Management services to streamline operations and enhance efficiency.';
            benefits = [
                'Improve operational performance',
                'Optimize business processes',
                'Lead teams effectively'
            ];
            break;
        case 'business-intelligence':
            title = 'Business Intelligence & Analytics';
            description = 'Utilize data analytics to drive better decision-making.';
            benefits = [
                'Leverage data for strategic insights',
                'Track and measure key performance indicators',
                'Predict trends and enhance growth opportunities'
            ];
            break;
        case 'sales-marketing':
            title = 'Sales and Marketing';
            description = 'Drive revenue through innovative sales and marketing strategies.';
            benefits = [
                'Enhance brand awareness',
                'Increase customer engagement',
                'Boost sales performance'
            ];
            break;
        case 'mergers-acquisitions':
            title = 'Mergers and Acquisitions';
            description = 'Expert advice to navigate mergers, acquisitions, and corporate restructuring.';
            benefits = [
                'Identify acquisition opportunities',
                'Conduct due diligence and risk assessments',
                'Optimize post-merger integration'
            ];
            break;
        // Non-highlighted services (hidden initially)
        case 'financials':
            title = 'Financials';
            description = 'Comprehensive financial services to support your business growth.';
            benefits = [
                'Streamline financial management',
                'Ensure regulatory compliance',
                'Enhance profitability'
            ];
            break;
        case 'human-resources':
            title = 'Human Resources';
            description = 'Optimize your human resources to maximize workforce potential.';
            benefits = [
                'Improve talent acquisition',
                'Enhance employee satisfaction',
                'Promote organizational growth'
            ];
            break;
        case 'hospitality':
            title = 'Hospitality';
            description = 'Elevating your hospitality experience with top-notch services.';
            benefits = [
                'Improve guest satisfaction',
                'Enhance service delivery',
                'Streamline operations'
            ];
            break;
        case 'legal':
            title = 'Legal';
            description = 'Expert legal services for corporate and personal matters.';
            benefits = [
                'Ensure legal compliance',
                'Minimize legal risks',
                'Navigate complex regulations'
            ];
            break;
        case 'real-estate':
            title = 'Real Estate';
            description = 'Comprehensive real estate services to guide your property investments.';
            benefits = [
                'Maximize property value',
                'Streamline property management',
                'Achieve your investment goals'
            ];
            break;
        case 'travel':
            title = 'Travel';
            description = 'Tailored travel services for both personal and corporate needs.';
            benefits = [
                'Seamless travel arrangements',
                'Cost-effective solutions',
                'Personalized travel experiences'
            ];
            break;
        case 'training-development':
            title = 'Training and Development';
            description = 'Innovative programs to enhance skills and foster growth.';
            benefits = [
                'Upskill your workforce',
                'Improve employee performance',
                'Boost overall productivity'
            ];
            break;
        case 'event-production':
            title = 'Event and Production';
            description = 'Expert services for planning and executing memorable events.';
            benefits = [
                'Create impactful events',
                'Streamline event logistics',
                'Ensure flawless execution'
            ];
            break;
        default:
            title = 'Service Not Found';
            description = 'Sorry, this service is currently unavailable.';
            benefits = [];
            break;
    }

    // Update modal content dynamically
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-description').textContent = description;

    var benefitsList = document.getElementById('popup-benefits');
    benefitsList.innerHTML = '';
    benefits.forEach(function (benefit) {
        var li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check-circle" style="color: #f69e22;"></i> ${benefit}`;
        benefitsList.appendChild(li);
    });

    document.getElementById('cta-btn').textContent = `Get Started with ${title}`;
    document.getElementById('service-popup').style.display = 'flex'; // Show the popup
}

// Function to close the service popup
function closeServicePopup() {
    document.getElementById('service-popup').style.display = 'none'; // Hide the popup
}

// Toggle extra services visibility
function toggleServices() {
    var extraServices = document.getElementById('extra-services');
    if (extraServices.style.display === "none" || extraServices.style.display === "") {
        extraServices.style.display = "grid"; // Show the extra services
    } else {
        extraServices.style.display = "none"; // Hide the extra services again
    }
}
