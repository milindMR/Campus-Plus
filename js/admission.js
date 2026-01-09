// Admission page functionality
document.addEventListener('DOMContentLoaded', () => {
    const pageTitle = document.querySelector('.page-title');
    const dashboardGrid = document.querySelector('.dashboard-grid');
    const lowerSection = document.querySelector('.lower-section');
    const eventsPage = document.getElementById('events-page');
    const navigationPage = document.getElementById('navigation-page');
    const studentComplaints = document.getElementById('student-complaints');
    const admissionPage = document.getElementById('admission-page');
    const coursePage = document.getElementById('course-page');

    // Handle Admission link click
    const admissionLink = document.querySelector('a .fa-user-plus')?.closest('a');

    if (admissionLink) {
        admissionLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Hide other dashboard content
            if (dashboardGrid) dashboardGrid.style.display = 'none';
            if (lowerSection) lowerSection.style.display = 'none';
            if (eventsPage) eventsPage.style.display = 'none';
            if (navigationPage) navigationPage.style.display = 'none';
            if (studentComplaints) studentComplaints.style.display = 'none';
            if (coursePage) coursePage.style.display = 'none';
            // Show admission page
            if (admissionPage) admissionPage.style.display = 'block';
            // Update page title
            if (pageTitle) pageTitle.textContent = 'Student Information';
        });
    }
});
