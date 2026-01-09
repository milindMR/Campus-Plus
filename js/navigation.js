// Navigation page functionality with Google Maps
document.addEventListener('DOMContentLoaded', () => {
    const pageTitle = document.querySelector('.page-title');
    const dashboardGrid = document.querySelector('.dashboard-grid');
    const lowerSection = document.querySelector('.lower-section');
    const eventsPage = document.getElementById('events-page');
    const navigationPage = document.getElementById('navigation-page');
    const studentComplaints = document.getElementById('student-complaints');
    const admissionPage = document.getElementById('admission-page');
    const coursePage = document.getElementById('course-page');

    // Handle Navigation link click
    const navigationLink = document.querySelector('a .fa-compass')?.closest('a');

    if (navigationLink) {
        navigationLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Hide dashboard content
            if (dashboardGrid) dashboardGrid.style.display = 'none';
            if (lowerSection) lowerSection.style.display = 'none';
            if (eventsPage) eventsPage.style.display = 'none';
            if (studentComplaints) studentComplaints.style.display = 'none';
            if (admissionPage) admissionPage.style.display = 'none';
            if (coursePage) coursePage.style.display = 'none';
            // Show navigation page
            if (navigationPage) navigationPage.style.display = 'block';
            // Update page title
            if (pageTitle) pageTitle.textContent = 'Campus Navigation';
            // Initialize Google Maps
            if (typeof google !== 'undefined') {
                initializeMap();
            }
        });
    }

    // Google Maps Initialization
    function initializeMap() {
        const collegeLocation = {
            lat: 21.1050152,
            lng: 79.0035272
        };

        const map = new google.maps.Map(document.getElementById('campus-map'), {
            zoom: 15,
            center: collegeLocation,
            mapTypeControl: true,
            fullscreenControl: true,
            streetViewControl: true
        });

        new google.maps.Marker({
            position: collegeLocation,
            map: map,
            title: 'G H Raisoni College of Engineering',
            label: 'GHR'
        });
    }

    // Search functionality
    const searchInput = document.getElementById('nav-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            filterResults(searchTerm);
        });
    }

    // Quick Suggestion Chips
    const suggestionChips = document.querySelectorAll('.suggestion-chip');
    suggestionChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const searchTerm = chip.getAttribute('data-search');
            if (searchInput) {
                searchInput.value = searchTerm;
            }
            filterResults(searchTerm.toLowerCase());
        });
    });

    // Filter Results based on search
    function filterResults(searchTerm) {
        const facultyItems = document.querySelectorAll('.faculty-item');
        const departmentItems = document.querySelectorAll('.department-item');

        facultyItems.forEach(item => {
            const name = item.getAttribute('data-name').toLowerCase();
            if (name.includes(searchTerm) || searchTerm === '') {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });

        departmentItems.forEach(item => {
            const dept = item.getAttribute('data-dept').toLowerCase();
            const span = item.querySelector('span').textContent.toLowerCase();
            if (dept.includes(searchTerm) || span.includes(searchTerm) || searchTerm === '') {
                item.style.display = 'flex';
                item.classList.remove('active');
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Faculty item click handling
    const facultyItems = document.querySelectorAll('.faculty-item');
    facultyItems.forEach(item => {
        item.addEventListener('click', () => {
            facultyItems.forEach(f => f.style.borderLeftColor = 'var(--primary-purple)');
            item.style.borderLeftColor = 'var(--primary-orange)';
        });
    });

    // Department item click handling
    const departmentItems = document.querySelectorAll('.department-item');
    departmentItems.forEach(item => {
        item.addEventListener('click', () => {
            departmentItems.forEach(d => d.classList.remove('active'));
            item.classList.add('active');
        });
    });
});
