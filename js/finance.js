// Finance - Student Fees Details page functionality
document.addEventListener('DOMContentLoaded', () => {
    const pageTitle = document.querySelector('.page-title');
    const dashboardGrid = document.querySelector('.dashboard-grid');
    const lowerSection = document.querySelector('.lower-section');
    const financePage = document.getElementById('finance-page');
    const examPage = document.getElementById('exam-page');
    const eventsPage = document.getElementById('events-page');
    const navigationPage = document.getElementById('navigation-page');
    const studentComplaints = document.getElementById('student-complaints');
    const admissionPage = document.getElementById('admission-page');
    const coursePage = document.getElementById('course-page');

    // Handle Finance link click
    const financeLink = document.querySelector('a .fa-indian-rupee-sign')?.closest('a');

    if (financeLink) {
        financeLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Hide other dashboard content
            if (dashboardGrid) dashboardGrid.style.display = 'none';
            if (lowerSection) lowerSection.style.display = 'none';
            if (examPage) examPage.style.display = 'none';
            if (eventsPage) eventsPage.style.display = 'none';
            if (navigationPage) navigationPage.style.display = 'none';
            if (studentComplaints) studentComplaints.style.display = 'none';
            if (admissionPage) admissionPage.style.display = 'none';
            if (coursePage) coursePage.style.display = 'none';
            // Show finance page
            if (financePage) financePage.style.display = 'block';
            // Update page title
            if (pageTitle) pageTitle.textContent = 'Student Fees Details';
        });
    }
});
