export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  thumbId: string;
  carouselImageIds: string[];
  codeUrl: string;
  tags: string[];
};

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageId: string;
};

type Translations = {
  en: AllText;
  es: AllText;
};

type SkillStack = {
  backend: string[];
  frontend: string[];
  mobile: string[];
  databases: string[];
  devops: string[];
  tools: string[];
};

type AllText = {
  nav: {
    home: string;
    skills: string;
    projects: string;
    certificates: string;
    contact: string;
  };
  header: {
    downloadResume: string;
    downloadSpanish: string;
    downloadEnglish: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    intro: string;
    readMore: string;
    detailedBio: string;
  };
  skills: {
    mainStack: string;
    otherTech: string;

    backend: string;
    frontend: string;
    mobile: string;
    databases: string;
    devops: string;
    tools: string;

    stack: SkillStack;
  };
  projects: {
    title: string;
    viewDetails: string;
    viewCode: string;
    projects: Project[];
  };
  certificates: {
    title: string;
    certificates: Certificate[];
  };
  footer: {
    by: string;
  };
};

export const translations: Translations = {
  en: {
    nav: {
      home: 'Home',
      skills: 'Skills',
      projects: 'Projects',
      certificates: 'Certificates',
      contact: 'Contact',
    },
    header: {
      downloadResume: 'Download Resume',
      downloadSpanish: 'Spanish CV',
      downloadEnglish: 'English CV',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Axel Enrique García Vázquez',
      title: 'Backend Developer',
      intro:
        'Backend developer specialized in Laravel and API development, with real-world experience integrating services and deploying scalable systems.',
      readMore: 'Read More',
      detailedBio: `I am a backend developer with production experience using Laravel and API-based architectures. I have worked on real systems integrating services such as Stripe, Plaid, Twilio, and logistics APIs, as well as deploying and maintaining applications on Linux servers.

I have also worked across the stack using technologies like Angular, React, and mobile frameworks, allowing me to build and understand complete systems. My experience includes PHP, JavaScript, TypeScript, Python, and C, along with MySQL and MongoDB.

Beyond development, I have hands-on experience with infrastructure and tools such as Docker, Redis, Mailpit, Meilisearch, Webmin, and Termius.

I focus on building scalable systems, clean architecture, and high-performance backend solutions, always aiming for practical and efficient implementations.`,
    },

    skills: {
      mainStack: 'Main Stack',
      otherTech: 'Other Technologies',
      backend: 'Backend',
      frontend: 'Frontend',
      mobile: 'Mobile',
      databases: 'Databases',
      devops: 'DevOps & Infrastructure',
      tools: 'Tools',

      stack: {
        backend: ['Laravel', 'NestJS', 'Express', 'Django', 'Flask'],
        frontend: ['React', 'Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind', 'SASS'],
        mobile: ['Flutter', 'Java'],
        databases: ['MySQL', 'MongoDB', 'SQLite', 'MariaDB', 'PrismaORM', 'Redis'],
        devops: ['Docker', 'Linux', 'Webmin'],
        tools: ['Git', 'Termius', 'Postman'],
      },
    },

    projects: {
      title: 'My Projects',
      viewDetails: 'View Details',
      viewCode: 'View Code',
      projects: [
        {
          id: 'proj1',
          title: 'MIAU - Pet Management Platform',
          shortDescription:
            'Mobile and backend platform for managing pets, owners, and related services.',
          longDescription:
            'A full-stack application built with Flutter for the mobile frontend and Django for the backend. Designed to manage pets, owners, and related services such as records, tracking, and administrative operations. The system uses an API-driven architecture, authentication, and scalable backend services.',
          thumbId: 'project-miau-thumb',
          carouselImageIds: ['project-miau-1'],
          codeUrl: 'https://github.com',
          tags: ['Flutter', 'Django', 'API', 'Mobile', 'Backend'],
        },
        {
          id: 'proj2',
          title: 'Cybersecurity Website',
          shortDescription:
            'Educational platform focused on cybersecurity awareness.',
          longDescription:
            'A web application developed with Angular, focused on educating users about cybersecurity practices, threats, and prevention techniques. Built with a responsive and modular frontend architecture.',
          thumbId: 'project-cyber-thumb',
          carouselImageIds: ['project-cyber-1'],
          codeUrl: 'https://github.com',
          tags: ['Angular', 'Frontend', 'Web App'],
        },
        {
          id: 'proj3',
          title: 'Flower Shop Website (Hidalgo)',
          shortDescription:
            'Commercial website for a local business with modern UI.',
          longDescription:
            'A modern web application built with React and Next.js for a flower shop business. Focused on performance, SEO, and clean UI/UX to improve digital presence and customer interaction.',
          thumbId: 'project-flowers-thumb',
          carouselImageIds: ['project-flowers-1'],
          codeUrl: 'https://github.com',
          tags: ['React', 'Next.js', 'Frontend', 'SEO'],
        },
        {
          id: 'proj4',
          title: 'HydroStop - Smart Shower IoT System',
          shortDescription:
            'IoT system for monitoring and controlling water usage in real environments.',
          longDescription:
            'An IoT solution built with Django (backend), Android (Java) mobile app, and ESP32 programmed in C. Designed to monitor and control water usage in environments like gyms and hotels, integrating hardware and software in a complete system.',
          thumbId: 'project-1-thumb',
          carouselImageIds: ['project-1-carousel-1'],
          codeUrl: 'https://github.com',
          tags: ['IoT', 'Django', 'Android', 'ESP32', 'C'],
        },
        {
          id: 'proj5',
          title: 'ContApp - Accounting Learning Platform',
          shortDescription:
            'Educational platform with task management and evaluations.',
          longDescription:
            'A full-stack application developed with React (web), React Native (mobile), Express (backend), and MySQL. Enables teachers to assign activities and evaluate students through an interactive platform.',
          thumbId: 'project-2-thumb',
          carouselImageIds: ['project-2-carousel-1'],
          codeUrl: 'https://github.com',
          tags: ['React', 'React Native', 'Express', 'MySQL'],
        },
        {
          id: 'proj6',
          title: 'GAMA - IoT Learning Assistant',
          shortDescription:
            'Educational assistant for learning IoT with AI integration.',
          longDescription:
            'A learning platform built with Flask, integrated with the OpenAI API, and deployed on CrowPi L hardware. Includes interactive examples using HTML, CSS, and JavaScript to teach IoT concepts in a practical way.',
          thumbId: 'project-3-thumb',
          carouselImageIds: ['project-3-carousel-1'],
          codeUrl: 'https://github.com',
          tags: ['Flask', 'OpenAI API', 'IoT', 'HTML', 'JavaScript', 'CrowPi'],
        },
      ],
    },

    certificates: {
      title: 'Certifications',
      certificates: [
        {
          id: 'cert1',
          title: 'Python Fundamentals',
          issuer: 'Cisco',
          date: '2024',
          imageId: 'certificate-1',
        },
        {
          id: 'cert2',
          title: 'Database Administrator',
          issuer: 'Aprende.org',
          date: '2024',
          imageId: 'certificate-2',
        },
        {
          id: 'cert3',
          title: 'C# Programming',
          issuer: 'Aprende.org',
          date: '2023',
          imageId: 'certificate-3',
        },
        {
          id: 'cert4',
          title: 'Frontend Development',
          issuer: 'Aprende.org',
          date: '2025',
          imageId: 'certificate-4',
        },
        {
          id: 'cert5',
          title: 'Team Leadership',
          issuer: 'Aprende.org',
          date: '2024',
          imageId: 'certificate-5',
        },
        {
          id: 'cert6',
          title: 'Work Discipline',
          issuer: 'Aprende.org',
          date: '2024',
          imageId: 'certificate-6',
        },
      ],
    },

    footer: {
      by: 'Axel Enrique García Vázquez',
    },
  },

  es: {
    nav: {
      home: 'Inicio',
      skills: 'Habilidades',
      projects: 'Proyectos',
      certificates: 'Certificados',
      contact: 'Contacto',
    },
    header: {
      downloadResume: 'Descargar CV',
      downloadSpanish: 'CV en Español',
      downloadEnglish: 'CV en Inglés',
    },
    hero: {
      greeting: 'Hola, soy',
      name: 'Axel Enrique García Vázquez',
      title: 'Desarrollador Backend',
      intro:
        'Desarrollador backend especializado en Laravel y APIs, con experiencia real en integración de servicios y despliegue de sistemas.',
      readMore: 'Leer más',
      detailedBio: `Soy desarrollador backend con experiencia en sistemas en producción utilizando Laravel y arquitecturas basadas en APIs. He trabajado integrando servicios como Stripe, Plaid, Twilio y APIs de logística, además de desplegar y administrar aplicaciones en servidores Linux.

También he trabajado en frontend y desarrollo móvil, lo que me permite entender y construir sistemas completos. Tengo experiencia con PHP, JavaScript, TypeScript, Python y C, además de bases de datos como MySQL y MongoDB.

Además, he utilizado herramientas e infraestructura como Docker, Redis, Mailpit, Meilisearch, Webmin y Termius.

Me enfoco en construir sistemas escalables, arquitectura limpia y soluciones backend de alto rendimiento.`,
    },

    skills: {
      mainStack: 'Stack Principal',
      otherTech: 'Otras Tecnologías que uso',

      backend: 'Backend',
      frontend: 'Frontend',
      mobile: 'Mobile',
      databases: 'Bases de Datos',
      devops: 'DevOps e Infraestructura',
      tools: 'Herramientas',

      stack: {
        backend: ['Laravel', 'NestJS', 'Express', 'Django', 'Flask'],
        frontend: ['React', 'Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind', 'SASS'],
        mobile: ['Flutter', 'Java'],
        databases: ['MySQL', 'MongoDB', 'SQLite', 'MariaDB', 'PrismaORM', 'Redis'],
        devops: ['Docker', 'Linux', 'Webmin'],
        tools: ['Git', 'Termius', 'Postman'],
      },
    },

    projects: {
      title: 'Mis Proyectos',
      viewDetails: 'Ver Detalles',
      viewCode: 'Ver Código',
      projects: [
        {
          id: 'proj1',
          title: 'MIAU - Plataforma de Gestión de Mascotas',
          shortDescription:
            'Plataforma móvil y backend para la gestión de mascotas, dueños y servicios relacionados.',
          longDescription:
            'Aplicación full-stack desarrollada con Flutter para el frontend móvil y Django para el backend. Permite gestionar mascotas, dueños y servicios asociados como registros, seguimiento y operaciones administrativas. Implementa una arquitectura basada en APIs, autenticación y backend escalable.',
          thumbId: 'project-miau-thumb',
          carouselImageIds: ['project-miau-1'],
          codeUrl: 'https://github.com',
          tags: ['Flutter', 'Django', 'API', 'Mobile', 'Backend'],
        },
        {
          id: 'proj2',
          title: 'Sitio Web de Ciberseguridad',
          shortDescription:
            'Plataforma educativa enfocada en concientización en ciberseguridad.',
          longDescription:
            'Aplicación web desarrollada con Angular, enfocada en educar sobre buenas prácticas, amenazas y prevención en ciberseguridad, utilizando una arquitectura frontend modular.',
          thumbId: 'project-cyber-thumb',
          carouselImageIds: ['project-cyber-1'],
          codeUrl: 'https://github.com',
          tags: ['Angular', 'Frontend', 'Web App'],
        },
        {
          id: 'proj3',
          title: 'Página Web de Flores (Hidalgo)',
          shortDescription:
            'Sitio web comercial moderno para negocio local.',
          longDescription:
            'Aplicación web desarrollada con React y Next.js, enfocada en rendimiento, SEO y experiencia de usuario para mejorar la presencia digital del negocio.',
          thumbId: 'project-flowers-thumb',
          carouselImageIds: ['project-flowers-1'],
          codeUrl: 'https://github.com',
          tags: ['React', 'Next.js', 'Frontend', 'SEO'],
        },
        {
          id: 'proj4',
          title: 'HydroStop - Sistema IoT de Regaderas Inteligentes',
          shortDescription:
            'Sistema IoT para monitoreo y control de consumo de agua.',
          longDescription:
            'Solución IoT desarrollada con Django (backend), aplicación Android en Java y ESP32 programado en C. Permite controlar y monitorear el uso de agua en entornos reales como gimnasios y hoteles.',
          thumbId: 'project-1-thumb',
          carouselImageIds: ['project-1-carousel-1'],
          codeUrl: 'https://github.com',
          tags: ['IoT', 'Django', 'Android', 'ESP32', 'C'],
        },
        {
          id: 'proj5',
          title: 'ContApp - Plataforma de Aprendizaje Contable',
          shortDescription:
            'Plataforma educativa con gestión de tareas y evaluaciones.',
          longDescription:
            'Aplicación full-stack desarrollada con React, React Native, Express y MySQL, que permite a profesores asignar actividades y evaluar estudiantes.',
          thumbId: 'project-2-thumb',
          carouselImageIds: ['project-2-carousel-1'],
          codeUrl: 'https://github.com',
          tags: ['React', 'React Native', 'Express', 'MySQL'],
        },
        {
          id: 'proj6',
          title: 'GAMA - Asistente de Aprendizaje IoT',
          shortDescription:
            'Asistente educativo para aprender IoT con integración de IA.',
          longDescription:
            'Plataforma desarrollada con Flask, integrada con OpenAI API y ejecutada en hardware CrowPi L. Incluye ejemplos interactivos con HTML, CSS y JavaScript para enseñanza práctica de IoT.',
          thumbId: 'project-3-thumb',
          carouselImageIds: ['project-3-carousel-1'],
          codeUrl: 'https://github.com',
          tags: ['Flask', 'OpenAI API', 'IoT', 'HTML', 'JavaScript', 'CrowPi'],
        },
      ],
    },

    certificates: {
      title: 'Certificados',
      certificates: [
        {
          id: 'cert1',
          title: 'Fundamentos de Python',
          issuer: 'Cisco',
          date: '2024',
          imageId: 'certificate-1',
        },
        {
          id: 'cert2',
          title: 'Administrador de Base de Datos',
          issuer: 'Aprende.org',
          date: '2024',
          imageId: 'certificate-2',
        },
        {
          id: 'cert3',
          title: 'Programación en C#',
          issuer: 'Aprende.org',
          date: '2023',
          imageId: 'certificate-3',
        },
        {
          id: 'cert4',
          title: 'Desarrollo Frontend',
          issuer: 'Aprende.org',
          date: '2025',
          imageId: 'certificate-4',
        },
        {
          id: 'cert5',
          title: 'Liderazgo en Equipo',
          issuer: 'Aprende.org',
          date: '2024',
          imageId: 'certificate-5',
        },
        {
          id: 'cert6',
          title: 'Disciplina en el Trabajo',
          issuer: 'Aprende.org',
          date: '2024',
          imageId: 'certificate-6',
        },
      ],
    },

    footer: {
      by: 'Axel Enrique García Vázquez',
    },
  },
};