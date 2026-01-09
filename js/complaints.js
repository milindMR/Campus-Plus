// Student Complaints & Suggestions page functionality
document.addEventListener('DOMContentLoaded', () => {
    const pageTitle = document.querySelector('.page-title');
    const dashboardGrid = document.querySelector('.dashboard-grid');
    const lowerSection = document.querySelector('.lower-section');
    const eventsPage = document.getElementById('events-page');
    const navigationPage = document.getElementById('navigation-page');
    const studentComplaints = document.getElementById('student-complaints');
    const admissionPage = document.getElementById('admission-page');
    const coursePage = document.getElementById('course-page');

    // Handle Student link click
    const studentLink = document.getElementById('student-link');

    if (studentLink) {
        studentLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Hide dashboard content
            if (dashboardGrid) dashboardGrid.style.display = 'none';
            if (lowerSection) lowerSection.style.display = 'none';
            // Hide other pages if visible
            if (eventsPage) eventsPage.style.display = 'none';
            if (navigationPage) navigationPage.style.display = 'none';
            if (admissionPage) admissionPage.style.display = 'none';
            if (coursePage) coursePage.style.display = 'none';
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
});
