// Modal functionality
function openAuthModal() {
    document.getElementById('authModal').style.display = 'block';
}

function closeAuthModal() {
    document.getElementById('authModal').style.display = 'none';
}

// Tab functionality
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    // Prevent default link behavior
    evt.preventDefault();
    
    // Hide all tab content
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    
    // Remove active class from all tab links
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    // Show the specific tab content and add active class to the button
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    var modal = document.getElementById('authModal');
    if (event.target == modal) {
        closeAuthModal();
    }
}

// Form submission
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your login logic here
            alert('Login functionality would be implemented here');
            closeAuthModal();
        });
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your signup logic here
            alert('Signup functionality would be implemented here');
            closeAuthModal();
        });
    }
    
    // Program filter functionality
    const countryFilter = document.getElementById('country');
    const degreeFilter = document.getElementById('degree');
    const fieldFilter = document.getElementById('field');
    
    if (countryFilter && degreeFilter && fieldFilter) {
        [countryFilter, degreeFilter, fieldFilter].forEach(filter => {
            filter.addEventListener('change', function() {
                filterPrograms();
            });
        });
    }
    
    // Search functionality
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchTerm = document.querySelector('.search-input').value;
            if (searchTerm) {
                alert('Searching for: ' + searchTerm + '. This would show relevant programs in a real implementation.');
            }
        });
    }
});

function filterPrograms() {
    // This would filter programs based on selections in a real implementation
    alert('Filtering programs based on your selection. This would show customized results in a real implementation.');
}

// News ticker functionality
document.addEventListener('DOMContentLoaded', function() {
    const newsItems = document.querySelectorAll('.news-item');
    const newsPrev = document.querySelector('.news-prev');
    const newsNext = document.querySelector('.news-next');
    
    if (newsItems.length > 0 && newsPrev && newsNext) {
        let currentItem = 0;
        
        // Show first news item initially
        newsItems.forEach((item, index) => {
            if (index !== 0) {
                item.style.display = 'none';
            }
        });
        
        // Next button functionality
        newsNext.addEventListener('click', function() {
            newsItems[currentItem].style.display = 'none';
            currentItem = (currentItem + 1) % newsItems.length;
            newsItems[currentItem].style.display = 'block';
        });
        
        // Previous button functionality
        newsPrev.addEventListener('click', function() {
            newsItems[currentItem].style.display = 'none';
            currentItem = (currentItem - 1 + newsItems.length) % newsItems.length;
            newsItems[currentItem].style.display = 'block';
        });
        
        // Auto-advance news every 10 seconds
        setInterval(() => {
            newsItems[currentItem].style.display = 'none';
            currentItem = (currentItem + 1) % newsItems.length;
            newsItems[currentItem].style.display = 'block';
        }, 10000);
    }
});