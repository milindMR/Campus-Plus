// Course (Major / Minor Registration) page functionality
document.addEventListener('DOMContentLoaded', () => {
    const pageTitle = document.querySelector('.page-title');
    const dashboardGrid = document.querySelector('.dashboard-grid');
    const lowerSection = document.querySelector('.lower-section');
    const coursePage = document.getElementById('course-page');
    const eventsPage = document.getElementById('events-page');
    const navigationPage = document.getElementById('navigation-page');
    const studentComplaints = document.getElementById('student-complaints');
    const admissionPage = document.getElementById('admission-page');

    // Handle Course link click (Major / Minor Registration)
    const courseLink = document.getElementById('course-link');

    if (courseLink) {
        courseLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Hide other dashboard content
            if (dashboardGrid) dashboardGrid.style.display = 'none';
            if (lowerSection) lowerSection.style.display = 'none';
            if (eventsPage) eventsPage.style.display = 'none';
            if (navigationPage) navigationPage.style.display = 'none';
            if (studentComplaints) studentComplaints.style.display = 'none';
            if (admissionPage) admissionPage.style.display = 'none';
            // Show course page
            if (coursePage) coursePage.style.display = 'block';
            // Update page title
            if (pageTitle) pageTitle.textContent = 'Major / Minor Registration';

            // Show empty state when no rows
            if (coursePage) {
                const tbody = coursePage.querySelector('tbody');
                const empty = coursePage.querySelector('.course-empty');
                if (tbody && tbody.children.length === 0) {
                    if (empty) empty.style.display = 'block';
                } else {
                    if (empty) empty.style.display = 'none';
                }
            }
        });
    }

    // Tabs inside Course page
    const tabMajor = document.getElementById('tab-major');
    const tabMinor = document.getElementById('tab-minor');
    if (tabMajor && tabMinor) {
        tabMajor.addEventListener('click', () => {
            tabMajor.classList.add('active');
            tabMinor.classList.remove('active');
            if (pageTitle) pageTitle.textContent = 'Major / Minor Registration';
        });
        tabMinor.addEventListener('click', () => {
            tabMinor.classList.add('active');
            tabMajor.classList.remove('active');
            if (pageTitle) pageTitle.textContent = 'Major / Minor Registration - Minor';
        });
    }
});
