export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  thumbId: string;
  carouselImageIds: string[];
  codeUrl: string | CodeUrlObj;
  tags: string[];
  viewMore?: string;
  showLess?: string;
};

export type CodeUrlObj = {
  backend?: string;
  mobile?: string;
  frontend?: string;
  other?: string;
}

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

export type Jobs = {
  company: string;
  role: string;
  period: string;
  description: string;
}

type AllText = {
  nav: {
    home: string;
    skills: string;
    experience: string;
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
  experience: {
    title: string;
    jobs: Jobs[];
  }
  projects: {
    title: string;
    viewDetails: string;
    viewCode: string;
    viewMore: string;
    showLess: string;
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
      experience: 'Work Experience',
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
      title: 'Backend Developer - Working in Legux Systems',
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
        backend: ['Laravel', 'NestJS', 'Express', 'Django', 'Flask', 'Javascript', 'Typescript', 'Python', 'PHP'],
        frontend: ['React', 'Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind', 'SASS'],
        mobile: ['Flutter', 'Java'],
        databases: ['MySQL', 'MongoDB', 'SQLite', 'MariaDB', 'PostgreSQL', 'PrismaORM', 'Redis'],
        devops: ['Docker', 'Linux', 'Webmin'],
        tools: ['Git', 'Termius', 'Postman'],
      },
    },

    experience: {
      title: 'Work Experience',
      jobs: [
        {
          company: 'Legux Systems',
          role: 'Backend Developer',
          period: 'September 2025 - Present',
          description: `
            As a Backend Developer, I was responsible for building and maintaining robust systems using Laravel, MySQL, and MongoDB. My focus was on performance, data integrity, and seamless communication with frontend and mobile teams.

            Key Responsibilities & Achievements:

                1. Handled complex data operations safely using DB transactions and optimized system performance using asynchronous jobs and queues.

                2. Integrated critical third-party APIs (Stripe, Plaid, Twilio, logistics, and i18n).

                3. Automated background processes via Crons and built custom XLSX and PDF reporting tools.

                4. Streamlined deployments and infrastructure using Docker and Linux (Ubuntu/Debian) servers.
          `
        }
      ]
    },

    projects: {
      title: 'My Projects',
      viewDetails: 'View Details',
      viewCode: 'View Code',
      viewMore: 'View More',
      showLess: 'Show Less',
      projects: [
        {
          id: 'proj1',
          title: 'MIAU - Pet Management Platform',
          shortDescription:
            'Full-stack platform for managing pets, owners, and services with a scalable API-driven backend.',
          longDescription:
            'Full-stack system built with Flutter (mobile) and Django (backend), designed to manage pets, owners, and related services such as medical records, tracking, and administrative workflows. The architecture is API-first, with authentication, modular services, and scalable backend design. Focused on real-world usability, clean data handling, and maintainable structure.',
          thumbId: 'project-miau-thumb',
          carouselImageIds: ['project-miau-1'],
          codeUrl: 'https://github.com',
          tags: ['Flutter', 'Django', 'API', 'Mobile', 'Backend'],
        },
        {
          id: 'proj2',
          title: 'Cybersecurity Website',
          shortDescription:
            'Educational web platform focused on cybersecurity awareness and best practices.',
          longDescription:
            'Frontend application developed with Angular, focused on educating users about cybersecurity concepts, threats, and prevention strategies. Built using a modular and scalable architecture, with emphasis on responsive design, structured content delivery, and clean UI/UX for improved learning experience.',
          thumbId: 'project-cyber-thumb',
          carouselImageIds: ['project-cyber-1'],
          codeUrl: 'https://github.com/AxlEnr/Cibersec_web',
          tags: ['Angular', 'Frontend', 'Web App'],
        },
        {
          id: 'proj3',
          title: 'Flower Shop Website (Hidalgo)',
          shortDescription:
            'High-performance commercial website focused on modern user experience.',
          longDescription:
            'Modern web application built with React and Next.js for a local business. Designed with performance, and user experience in mind to improve online presence and customer engagement. Implements clean UI, fast loading times, and scalable frontend structure.',
          thumbId: 'project-flowers-thumb',
          carouselImageIds: ['project-flowers-1'],
          codeUrl: 'https://github.com/AxlEnr/FloresDeHidalgo',
          tags: ['React', 'Next.js', 'Frontend'],
        },
        {
          id: 'proj4',
          title: 'HydroStop - Smart Shower IoT System',
          shortDescription:
            'IoT system for monitoring and controlling water usage in real environments.',
          longDescription:
            'End-to-end IoT solution combining Django backend, Android mobile app (Java), and ESP32 firmware programmed in C. Designed to monitor and control water consumption in environments like gyms and hotels. Integrates hardware and software layers, real-time data handling, and control logic for efficient resource management.',
          thumbId: 'project-1-thumb',
          carouselImageIds: ['project-1-carousel-1'],
          codeUrl: {
            mobile: 'https://github.com/AxlEnr/hydrostop-movil',
            backend: 'https://github.com/AxlEnr/hydrostop_backend'
          },
          tags: ['IoT', 'Django', 'Android', 'ESP32', 'C'],
        },
        {
          id: 'proj5',
          title: 'App Control for ESP32 Robot',
          shortDescription:
            'Mobile application for controlling an ESP32-based robot, with real-time communication and advanced features.',
          longDescription:
            'Mobile application developed in Java for controlling an ESP32-based robot. The app communicates with the hardware through Wi-Fi, allowing real-time control, sensor monitoring, and execution of specific commands. The project focuses on integrating software and hardware, with an intuitive interface and advanced features for robot interaction.',
          thumbId: 'project-2-thumb',
          carouselImageIds: ['project-2-carousel-1'],
          codeUrl: 'https://github.com/AxlEnr/App_Control_ESP32', 
          tags: ['Java', 'Android'],
        },
        {
          id: 'proj6',
          title: 'GAMA - IoT Learning Assistant',
          shortDescription:
            'Interactive IoT learning platform with AI integration for practical education.',
          longDescription:
            'Educational platform developed with Flask, integrated with OpenAI API, and deployed on CrowPi L hardware. Provides interactive IoT learning experiences using HTML, CSS, and JavaScript examples. Focused on hands-on learning, AI-assisted interaction, and practical understanding of embedded systems.',
          thumbId: 'project-3-thumb',
          carouselImageIds: ['project-3-carousel-1'],
          codeUrl: 'https://github.com/ArturoMD7/AI_Assistant_Crowpi',
          tags: ['Flask', 'OpenAI API', 'IoT', 'HTML', 'JavaScript', 'CrowPi'],
        },
        {
          id: 'proj7',
          title: 'ContApp - Accounting Learning Platform',
          shortDescription:
            'Full-stack educational platform with task management and student evaluation features.',
          longDescription:
            'Full-stack application built with React (web), React Native (mobile), Express (backend), and MySQL. Designed for teachers to assign tasks, manage content, and evaluate students through an interactive platform. Focused on usability, real-time interaction, and scalable backend structure.',
          thumbId: 'project-2-thumb',
          carouselImageIds: ['project-2-carousel-1'],
          codeUrl: {
            backend: 'https://github.com/AxlEnr/Contapp_server', 
            mobile: 'https://github.com/AxlEnr/Contapp_Movil', 
            frontend: 'https://github.com/AxlEnr/Contapp_Web'
          },
          tags: ['React', 'React Native', 'Express', 'MySQL'],
        },
      ]
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
      experience: 'Experiencia',
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
      title: 'Desarrollador Backend - Trabajando en Legux Systems',
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
        backend: ['Laravel', 'NestJS', 'Express', 'Django', 'Flask', 'Javascript', 'Typescript', 'Python', 'PHP'],
        frontend: ['React', 'Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind', 'SASS'],
        mobile: ['Flutter', 'Java'],
        databases: ['MySQL', 'MongoDB', 'SQLite', 'MariaDB', 'PostgreSQL', 'PrismaORM', 'Redis'],
        devops: ['Docker', 'Linux', 'Webmin'],
        tools: ['Git', 'Termius', 'Postman'],
      },
    },

    experience: {
      title: 'Experiencia',
      jobs: [
        {
          company: 'Legux Systems',
          role: 'Desarrollador Backend',
          period: 'Septiembre 2025 - Presente',
          description: `
            "Como Desarrollador Backend, fui responsable de construir y mantener sistemas robustos utilizando Laravel, MySQL y MongoDB. Mi enfoque principal fue asegurar el rendimiento, la integridad de los datos y una comunicación fluida con los equipos de frontend y mobile."

            Principales Responsabilidades y Logros:

                Gestioné operaciones de datos complejas de forma segura mediante transacciones de base de datos (DB transactions) y optimicé el rendimiento del sistema implementando procesos asíncronos con jobs y queues.

                Integré APIs de terceros críticas para la operación (Stripe, Plaid, Twilio, servicios de logística e internacionalización/i18n).

                Automaticé procesos en segundo plano mediante tareas Cron y desarrollé herramientas personalizadas para la generación dinámica de reportes en XLSX y PDF.

                Optimicé la infraestructura y los procesos de despliegue utilizando Docker y servidores Linux (Ubuntu/Debian).
          `
        }
      ]
    },


    projects: {
      title: 'Mis Proyectos',
      viewDetails: 'Ver Detalles',
      viewCode: 'Ver Código',
      viewMore: 'Ver Más',
      showLess: 'Mostrar Menos',
      projects: [
        {
          id: 'proj1',
          title: 'MIAU - Plataforma de Gestión de Mascotas',
          shortDescription:
            'Plataforma full-stack para gestionar mascotas, dueños y servicios mediante una arquitectura basada en APIs.',
          longDescription:
            'Sistema full-stack desarrollado con Flutter (móvil) y Django (backend), diseñado para la gestión de mascotas, dueños y servicios relacionados como historiales, seguimiento y operaciones administrativas. Implementa una arquitectura API-first con autenticación, servicios modulares y un backend escalable, enfocado en usabilidad real y mantenibilidad del sistema.',
          thumbId: 'project-miau-thumb',
          carouselImageIds: ['project-miau-1'],
          codeUrl: 'https://github.com',
          tags: ['Flutter', 'Django', 'API', 'Mobile', 'Backend'],
        },
        {
          id: 'proj2',
          title: 'Sitio Web de Ciberseguridad',
          shortDescription:
            'Plataforma web educativa enfocada en concientización y buenas prácticas de ciberseguridad.',
          longDescription:
            'Aplicación frontend desarrollada con Angular, orientada a la enseñanza de conceptos de ciberseguridad, amenazas y estrategias de prevención. Construida con una arquitectura modular y escalable, priorizando diseño responsivo, claridad en la información y una experiencia de usuario limpia para facilitar el aprendizaje.',
          thumbId: 'project-cyber-thumb',
          carouselImageIds: ['project-cyber-1'],
          codeUrl: 'https://github.com/AxlEnr/Cibersec_web',
          tags: ['Angular', 'Frontend', 'Web App'],
        },
        {
          id: 'proj3',
          title: 'Página Web de Flores (Hidalgo)',
          shortDescription:
            'Sitio web comercial optimizado para rendimiento y experiencia de usuario.',
          longDescription:
            'Aplicación web moderna desarrollada con React y Next.js para un negocio local. Diseñada con enfoque en rendimiento y experiencia de usuario, mejorando la presencia digital y la interacción con clientes. Implementa una interfaz limpia, tiempos de carga rápidos y una estructura frontend escalable.',
          thumbId: 'project-flowers-thumb',
          carouselImageIds: ['project-flowers-1'],
          codeUrl: 'https://github.com/AxlEnr/FloresDeHidalgo',
          tags: ['React', 'Next.js', 'Frontend'],
        },
        {
          id: 'proj4',
          title: 'HydroStop - Sistema IoT de Regaderas Inteligentes',
          shortDescription:
            'Sistema IoT para monitorear y controlar el consumo de agua en entornos reales.',
          longDescription:
            'Solución IoT integral que combina backend en Django, aplicación móvil Android (Java) y firmware en ESP32 programado en C. Diseñada para monitorear y controlar el consumo de agua en espacios como gimnasios y hoteles. Integra hardware y software, manejo de datos en tiempo real y lógica de control para optimizar el uso de recursos.',
          thumbId: 'project-1-thumb',
          carouselImageIds: ['project-1-carousel-1'],
          codeUrl: {
            mobile: 'https://github.com/AxlEnr/hydrostop-movil',
            backend: 'https://github.com/AxlEnr/hydrostop_backend'
          },
          tags: ['IoT', 'Django', 'Android', 'ESP32', 'C'],
        },
        {
          id: 'proj5',
          title: 'App Control para Robot ESP32',
          shortDescription:
            'Aplicación móvil para controlar un robot basado en ESP32, con comunicación en tiempo real y funcionalidades avanzadas.',
          longDescription:
            'Aplicación móvil desarrollada en Java para controlar un robot basado en ESP32. La app se comunica con el hardware a través de Wi-Fi, permitiendo control en tiempo real, monitoreo de sensores y ejecución de comandos específicos. El proyecto se enfoca en la integración de software y hardware, con una interfaz intuitiva y funcionalidades avanzadas para la interacción con el robot.',
          thumbId: 'project-2-thumb',
          carouselImageIds: ['project-2-carousel-1'],
          codeUrl: 'https://github.com/AxlEnr/App_Control_ESP32', 
          tags: ['Java', 'Android'],
        },
        {
          id: 'proj6',
          title: 'GAMA - Asistente de Aprendizaje IoT',
          shortDescription:
            'Plataforma interactiva para aprender IoT con integración de inteligencia artificial.',
          longDescription:
            'Plataforma educativa desarrollada con Flask, integrada con la API de OpenAI y desplegada en hardware CrowPi L. Ofrece experiencias interactivas para el aprendizaje de IoT mediante ejemplos prácticos con HTML, CSS y JavaScript. Enfocada en aprendizaje práctico, interacción asistida por IA y comprensión de sistemas embebidos.',
          thumbId: 'project-3-thumb',
          carouselImageIds: ['project-3-carousel-1'],
          codeUrl: 'https://github.com/ArturoMD7/AI_Assistant_Crowpi',
          tags: ['Flask', 'OpenAI API', 'IoT', 'HTML', 'JavaScript', 'CrowPi'],
        },
        {
          id: 'proj7',
          title: 'ContApp - Plataforma de Aprendizaje Contable',
          shortDescription:
            'Plataforma educativa full-stack con gestión de actividades y evaluación de estudiantes.',
          longDescription:
            'Aplicación full-stack desarrollada con React (web), React Native (móvil), Express (backend) y MySQL. Permite a docentes gestionar contenido, asignar tareas y evaluar estudiantes dentro de una plataforma interactiva. Enfocada en usabilidad, interacción en tiempo real y una arquitectura backend escalable.',
          thumbId: 'project-2-thumb',
          carouselImageIds: ['project-2-carousel-1'],
          codeUrl: {
            backend: 'https://github.com/AxlEnr/Contapp_server', 
            mobile: 'https://github.com/AxlEnr/Contapp_Movil', 
            frontend: 'https://github.com/AxlEnr/Contapp_Web'
          },
          tags: ['React', 'React Native', 'Express', 'MySQL'],
        },
      ]
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