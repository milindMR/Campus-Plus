document.addEventListener('DOMContentLoaded', () => {
    
    // Elements
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');

    // Toggle Sidebar on Mobile
    mobileBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !mobileBtn.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        }
    });

    // Handle Window Resize (Reset styles if moving back to desktop)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('open');
        }
    });

    // Toggle sub-menu for Attendance
    const attendanceLink = document.querySelector('a .fa-calendar-check').closest('a');
    if (attendanceLink) {
        const attendanceLi = attendanceLink.closest('li');
        attendanceLink.addEventListener('click', (e) => {
            e.preventDefault();
            const subMenu = attendanceLi.querySelector('.sub-menu');
            if (subMenu) {
                subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    }

    // Handle Events link click
    const eventsLink = document.querySelector('a .fa-calendar-days')?.closest('a');
    const dashboardGrid = document.querySelector('.dashboard-grid');
    const eventsPage = document.getElementById('events-page');
    const pageTitle = document.querySelector('.page-title');
    const lowerSection = document.querySelector('.lower-section');
    const studentComplaints = document.getElementById('student-complaints');

    if (eventsLink) {
        eventsLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Hide dashboard content
            if (dashboardGrid) dashboardGrid.style.display = 'none';
            if (lowerSection) lowerSection.style.display = 'none';
            if (studentComplaints) studentComplaints.style.display = 'none';
            // Show events page
            if (eventsPage) eventsPage.style.display = 'block';
            // Update page title
            if (pageTitle) pageTitle.textContent = 'Campus Events';
        });
    }

    // Handle Student link click
    const studentLink = document.getElementById('student-link');

    if (studentLink) {
        studentLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Hide dashboard content
            if (dashboardGrid) dashboardGrid.style.display = 'none';
            if (lowerSection) lowerSection.style.display = 'none';
            // Hide events page if visible
            if (eventsPage) eventsPage.style.display = 'none';
            // Show student complaints
            if (studentComplaints) studentComplaints.style.display = 'block';
            // Update page title
            if (pageTitle) pageTitle.textContent = 'Student Complaints & Suggestions';
        });
    }

    // Handle complaints form submission
    const complaintsForm = document.getElementById('complaints-form');
    if (complaintsForm) {
        complaintsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const complaintText = document.getElementById('complaint-text').value;
            if (complaintText.trim()) {
                alert('Your complaint/suggestion has been submitted successfully!');
                document.getElementById('complaint-text').value = '';
            } else {
                alert('Please enter a complaint or suggestion before submitting.');
            }
        });
    }

    // Handle Navigation link click
    const navigationLink = document.querySelector('a .fa-compass')?.closest('a');
    const navigationPage = document.getElementById('navigation-page');

    if (navigationLink) {
        navigationLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Hide dashboard content
            if (dashboardGrid) dashboardGrid.style.display = 'none';
            if (lowerSection) lowerSection.style.display = 'none';
            if (eventsPage) eventsPage.style.display = 'none';
            if (studentComplaints) studentComplaints.style.display = 'none';
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