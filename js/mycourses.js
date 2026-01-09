// My Courses page functionality
document.addEventListener('DOMContentLoaded', () => {
    const pageTitle = document.querySelector('.page-title');
    const dashboardGrid = document.querySelector('.dashboard-grid');
    const lowerSection = document.querySelector('.lower-section');
    const myCoursesPage = document.getElementById('mycourses-page');
    const financeePage = document.getElementById('finance-page');
    const examPage = document.getElementById('exam-page');
    const eventsPage = document.getElementById('events-page');
    const navigationPage = document.getElementById('navigation-page');
    const studentComplaints = document.getElementById('student-complaints');
    const admissionPage = document.getElementById('admission-page');
    const coursePage = document.getElementById('course-page');

    // Handle My Courses link click
    const myCoursesLink = document.querySelector('a .fa-list-check')?.closest('a');

    if (myCoursesLink) {
        myCoursesLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Hide other dashboard content
            if (dashboardGrid) dashboardGrid.style.display = 'none';
            if (lowerSection) lowerSection.style.display = 'none';
            if (financeePage) financeePage.style.display = 'none';
            if (examPage) examPage.style.display = 'none';
            if (eventsPage) eventsPage.style.display = 'none';
            if (navigationPage) navigationPage.style.display = 'none';
            if (studentComplaints) studentComplaints.style.display = 'none';
            if (admissionPage) admissionPage.style.display = 'none';
            if (coursePage) coursePage.style.display = 'none';
            // Show my courses page
            if (myCoursesPage) myCoursesPage.style.display = 'block';
            // Update page title
            if (pageTitle) pageTitle.textContent = 'My Registered Courses';

            // Show/hide empty state
            updateCoursesEmptyState();
        });
    }

    // Search functionality
    const coursesSearch = document.getElementById('courses-search-input');
    if (coursesSearch) {
        coursesSearch.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            filterCourses(searchTerm);
        });
    }

    // Filter courses based on search term
    function filterCourses(searchTerm) {
        const rows = document.querySelectorAll('.courses-table tbody tr');
        let visibleCount = 0;

        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            if (text.includes(searchTerm) || searchTerm === '') {
                row.style.display = 'table-row';
                visibleCount++;
            } else {
                row.style.display = 'none';
            }
        });

        updateCoursesEmptyState();
    }

    // Update empty state visibility
    function updateCoursesEmptyState() {
        const tbody = document.querySelector('.courses-table tbody');
        const emptyState = document.querySelector('.courses-empty-state');
        
        if (tbody && emptyState) {
            const visibleRows = Array.from(tbody.querySelectorAll('tr')).filter(
                row => row.style.display !== 'none'
            ).length;

            if (visibleRows === 0) {
                emptyState.style.display = 'flex';
            } else {
                emptyState.style.display = 'none';
            }
        }
    }
});
