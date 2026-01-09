// Events page functionality
document.addEventListener('DOMContentLoaded', () => {
    const pageTitle = document.querySelector('.page-title');
    const dashboardGrid = document.querySelector('.dashboard-grid');
    const lowerSection = document.querySelector('.lower-section');
    const eventsPage = document.getElementById('events-page');
    const navigationPage = document.getElementById('navigation-page');
    const studentComplaints = document.getElementById('student-complaints');
    const admissionPage = document.getElementById('admission-page');
    const coursePage = document.getElementById('course-page');

    // Handle Events link click
    const eventsLink = document.querySelector('a .fa-calendar-days')?.closest('a');

    if (eventsLink) {
        eventsLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Hide dashboard content
            if (dashboardGrid) dashboardGrid.style.display = 'none';
            if (lowerSection) lowerSection.style.display = 'none';
            if (navigationPage) navigationPage.style.display = 'none';
            if (studentComplaints) studentComplaints.style.display = 'none';
            if (admissionPage) admissionPage.style.display = 'none';
            if (coursePage) coursePage.style.display = 'none';
            // Show events page
            if (eventsPage) eventsPage.style.display = 'block';
            // Update page title
            if (pageTitle) pageTitle.textContent = 'Campus Events';
        });
    }
});
