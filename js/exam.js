// Exam Schedule page functionality
document.addEventListener('DOMContentLoaded', () => {
    const pageTitle = document.querySelector('.page-title');
    const dashboardGrid = document.querySelector('.dashboard-grid');
    const lowerSection = document.querySelector('.lower-section');
    const examPage = document.getElementById('exam-page');
    const eventsPage = document.getElementById('events-page');
    const navigationPage = document.getElementById('navigation-page');
    const studentComplaints = document.getElementById('student-complaints');
    const admissionPage = document.getElementById('admission-page');
    const coursePage = document.getElementById('course-page');

    // Handle Exam link click
    const examLink = document.querySelector('a .fa-pen-to-square')?.closest('a');

    if (examLink) {
        examLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Hide other dashboard content
            if (dashboardGrid) dashboardGrid.style.display = 'none';
            if (lowerSection) lowerSection.style.display = 'none';
            if (eventsPage) eventsPage.style.display = 'none';
            if (navigationPage) navigationPage.style.display = 'none';
            if (studentComplaints) studentComplaints.style.display = 'none';
            if (admissionPage) admissionPage.style.display = 'none';
            if (coursePage) coursePage.style.display = 'none';
            // Show exam page
            if (examPage) examPage.style.display = 'block';
            // Update page title
            if (pageTitle) pageTitle.textContent = 'Exam Schedule';

            // Show empty state when no rows
            if (examPage) {
                const tbody = examPage.querySelector('.exam-table tbody');
                const empty = examPage.querySelector('.exam-empty-state');
                if (tbody && tbody.children.length === 0) {
                    if (empty) empty.style.display = 'flex';
                } else {
                    if (empty) empty.style.display = 'none';
                }
            }
        });
    }

    // Handle Search button click
    const searchBtn = document.getElementById('exam-search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const sessionSelect = document.getElementById('academic-session');
            const selectedSession = sessionSelect ? sessionSelect.value : 'Choose';
            if (selectedSession === 'Choose') {
                alert('Please select an Academic Session');
            } else {
                alert('Search triggered for: ' + selectedSession);
                // In a real app, this would fetch data from backend
            }
        });
    }
});
