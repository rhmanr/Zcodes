document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            id: 'Handwriting-Recognition-Swaraksara',
            title: 'Handwriting Recognition Aksara Sunda',
            description: 'A handwriting recognition system for the Sundanese script using Convolutional Neural Networks (CNN), built as part of a Computer Vision project focused on traditional character recognition.',
            image: 'assets/images/projects/Swaraksara.jpg',
            tags: ['Deep Learning', 'Machine Learning', 'Python'],
            links: [
                { url: 'projects/Swaraksara.html', text: 'View Details' },
            ]
        },
        {
            id: 'Handwriting-Recognition-Presidential',
            title: 'Handwriting Recognition of 2024 Presidential Election Results',
            description: 'Computer vision application that identifies and classifies objects in real-time using deep learning models.',
            image: 'assets/images/projects/Handwriting_Digit_Recognition.jpg',
            tags: ['Computer Vision', 'OpenCV', 'Deep Learning'],
            links: [
                { url: 'projects/Handwriting-Recognition-Presidential.html', text: 'View Details' },
            ]
        },
        {
            id: 'fuzzy-logic',
            title: 'Fuzzy-Based Anxiety Level Assessment System for New Migrant Students',
            description: 'A web-based application that utilizes fuzzy logic to assess and provide recommendations for the anxiety levels of new migrant students.',
            image: 'assets/images/projects/Fuzzy_logic.png',
            tags: ['Fuzzy Logic', 'Control Systems', 'Python'],
            links: [
                { url: 'projects/Fuzzy-Logic.html', text: 'View Details' },
            ]
        },
        {
            id: 'data-science',
            title: 'Analysis of Travel Patterns and Operational Efficiency of Transjakarta Services Using Machine Learning',
            description: 'A comprehensive analysis of travel patterns and operational efficiency of Transjakarta services using machine learning techniques.',
            image: 'assets/images/projects/TJ.jpg',
            tags: ['Machine Learning', 'Data Analysis', 'Python'],
            links: [
                { url: 'projects/TJ.html', text: 'View Details' },
            ]
        },
        {
            id: 'website-rental-mobil',
            title: 'Website Rental Mobil',
            description: 'A web-based application for car rental services, providing features for booking, payment, and vehicle management.',
            image: 'assets/images/projects/rental-mobil.png',
            tags: ['Web Development', 'JavaScript', 'Rental Management System'],
            links: [
                { url: 'projects/Ian-transport.html', text: 'View Details' },
            ]
        }
    ];
    
    const projectsContainer = document.getElementById('projectsContainer');
    
    if (projectsContainer) {
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        ${project.links.map(link => `<a href="${link.url}">${link.text} <i class="fas fa-arrow-right"></i></a>`).join('')}
                    </div>
                </div>
            `;
            
            projectsContainer.appendChild(projectCard);
        });
    }
});
