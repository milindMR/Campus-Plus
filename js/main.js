// Main Layout & Sidebar functionality
document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('sidebar');

    // Toggle Sidebar on Mobile
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

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
    const attendanceLink = document.querySelector('a .fa-calendar-check')?.closest('a');
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
});
