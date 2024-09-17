document.addEventListener('DOMContentLoaded', (event) => {
    // Get all nav links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Function to hide all sections except home
    function hideSections() {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => section.classList.add('d-none'));
    }

    // Function to show the selected section
    function showSection(sectionId) {
        hideSections();
        const section = document.querySelector(sectionId);
        section.classList.remove('d-none');
        section.classList.add('fade-in'); // Add fade-in class to make it visible
    }

    // Set initial state
    showSection('#home');

    // Add event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            // Remove active class from all nav links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');
            // Show the section associated with the clicked link
            showSection(link.getAttribute('href'));
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'C++', 'PHP', 'MySQL', 'Git', 'GitHub', 'Java'];
    const skillsContainer = document.getElementById('skills-container');

    skills.forEach(skill => {
        const badge = document.createElement('span');
        badge.className = 'skill-badge';
        badge.textContent = skill;
        skillsContainer.appendChild(badge);
    });

    const education = [
        {
            year: '2024 - Current',
            title: 'Third Year BSIT Student',
            description: 'Currently in my third year, focusing on advanced topics in computing and programming. Gaining hands-on experience with modern frameworks and tools.'
        },
        {
            year: '2022 - 2024',
            title: 'Second Year BSIT Student',
            description: 'Studied core programming languages, web development, and database management. Participated in various projects to enhance practical skills.'
        },
        {
            year: '2020 - 2021',
            title: 'Grade 12 TVL-ICT',
            description: 'Graduated with honors from BLA BLA BLA.'
        },
        {
            year: '2018 - 2020',
            title: 'Senior High School - General Studies',
            description: 'Completed general education with a focus on basic computing and technology subjects. Engaged in extracurricular activities related to tech and programming.'
        }
    ];

    const educationContainer = document.getElementById('education-container');

    education.forEach(edu => {
        const item = document.createElement('div');
        item.className = 'education-item';
        item.innerHTML = `
            <div class="education-dot"></div>
            <div class="education-content">
                <p class="education-year">${edu.year}</p>
                <p class="education-title">${edu.title}</p>
                <p class="education-description">${edu.description}</p>
            </div>
        `;
        educationContainer.appendChild(item);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    function fadeIn() {
        const windowHeight = window.innerHeight;
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isVisible = rect.top < windowHeight && rect.bottom > 0;
            
            if (isVisible) {
                section.classList.remove('d-none'); // Ensure section is displayed
                section.classList.add('fade-in'); // Add fade-in class to make it visible
            } else {
                section.classList.remove('fade-in'); // Remove fade-in class if not visible
                // Optionally, you could keep sections hidden until they come into view again
            }
        });
    }

    window.addEventListener('scroll', fadeIn);
    fadeIn(); // Initial check
});

