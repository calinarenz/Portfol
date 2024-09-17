document.addEventListener('DOMContentLoaded', function() {
  // Tab Navigation
  const tabs = document.querySelectorAll('.navbar a');
  const tabContents = document.querySelectorAll('.content');
  const themeToggle = document.querySelector('.theme-toggle');
  const body = document.body;
  const footer = document.querySelector('.footer');
  const nextjsLogo = document.querySelector('.nextjs-logo svg');

  if (tabs.length && tabContents.length) {
    tabs.forEach(tab => {
      tab.addEventListener('click', function(e) {
        e.preventDefault();

        // Reset scroll position for all sections
        tabContents.forEach(content => {
          content.scrollTop = 0;
          content.classList.remove('active');
        });

        // Deactivate all tabs
        tabs.forEach(t => t.classList.remove('active'));

        // Activate the clicked tab
        this.classList.add('active');

        // Show the corresponding content section
        const target = this.getAttribute('data-target');
        const targetContent = document.getElementById(target);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  }

  // Theme Toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      const isLightMode = body.classList.contains('light-mode');
      document.documentElement.style.setProperty('--footer-bg-color', isLightMode ? '#f9f9f9' : '#000');
    });
  }

  // Next.js Logo Hover Effect
  if (nextjsLogo) {
    nextjsLogo.addEventListener('mouseover', () => {
      nextjsLogo.style.opacity = '0.8';
    });

    nextjsLogo.addEventListener('mouseout', () => {
      nextjsLogo.style.opacity = '1';
    });
  }

  // Skills Display
  const skills = ['HTML', 'CSS', 'JavaScript', 'C++', 'PHP', 'MySQL', 'Git', 'GitHub', 'Java'];
  const skillsContainer = document.getElementById('skills-container');
  if (skillsContainer) {
    skills.forEach(skill => {
      const badge = document.createElement('span');
      badge.className = 'skill-badge';
      badge.textContent = skill;
      skillsContainer.appendChild(badge);
    });
  }

  // Education Display
  const education = [
    {
      year: '2024 - 2025',
      title: 'Third Year BSIT Student',
      description: 'Currently in my third year, focusing on advanced topics in computing and programming. Gaining hands-on experience with modern frameworks and tools.'
    },
    {
      year: '2022 - 2023',
      title: 'Second Year BSIT Student',
      description: 'Studied core programming languages, web development, and database management. Participated in various projects to enhance practical skills.'
    },
    {
      year: '2020 - 2021',
      title: 'Grade 12 TVL-ICT',
      description: 'Learn Basic Programming including C++, CSS, HTML, VBA.'
    },
    {
      year: '2018 - 2020',
      title: 'Senior High School - Advance Computer Training',
      description: 'Completed advance computer training at Data Center College of The Philippines Laoag City. Engaged in extracurricular activities related to tech and programming.'
    }
  ];

  const educationContainer = document.getElementById('education-container');
  if (educationContainer) {
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
  }

  // Projects Display
  const projects = [
    {
      title: "WebWise",
      description: "An educational website to start learning web development.",
      tags: ["case-study", "educational-website", "static-web", "group-project", "multi-page", "mobile-responsive", "dark-theme"],
      image: "/webwise-preview.jpg",
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Techno Odyssey",
      description: "My entry in CICT Technoday 2024.",
      tags: ["competition-entry", "innovations", "latest-tech", "static"],
      image: "/techno-odyssey-preview.jpg",
      githubLink: "#"
    }
  ];

  const projectsContainer = document.getElementById('projectsContainer');
  if (projectsContainer) {
    projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-links">
          ${project.githubLink ? `
            <a href="${project.githubLink}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          ` : ''}
          ${project.liveLink ? `
            <a href="${project.liveLink}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          ` : ''}
          <a href="#" class="project-link" aria-label="More Information">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </a>
        </div>
        <div class="project-info">
          <h2 class="project-title">${project.title}</h2>
          <p class="project-description">${project.description}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
          </div>
        </div>
      `;
      projectsContainer.appendChild(projectCard);
    });
  }

  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navbar = document.querySelector('.navbar');

  if (mobileMenuToggle && navbar) {
    mobileMenuToggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        navbar.classList.remove('active');
      }
    });

    navbar.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('active');
      });
    });
  }
});
