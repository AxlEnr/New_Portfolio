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
    madeWith: string;
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
      name: 'John Doe',
      title: 'Full Stack Developer',
      intro:
        'A passionate developer with experience in creating modern and responsive web applications. I love turning ideas into reality through code.',
      readMore: 'Read More',
      detailedBio:
        'With a solid background in both frontend and backend technologies, I have successfully delivered projects from concept to deployment. My expertise lies in the JavaScript ecosystem, but I am always eager to learn new technologies and take on challenging tasks. I am a problem-solver at heart and strive to write clean, efficient, and maintainable code.',
    },
    skills: {
      mainStack: 'Main Stack',
      otherTech: 'Other Technologies',
    },
    projects: {
      title: 'My Projects',
      viewDetails: 'View Details',
      viewCode: 'View Code',
      projects: [
        {
          id: 'proj1',
          title: 'E-Commerce Platform',
          shortDescription: 'A full-featured online store with a modern UI and a robust backend.',
          longDescription:
            'This project is a comprehensive e-commerce solution built with a powerful backend for managing products, orders, and users. The frontend is a highly interactive and responsive user interface, providing a seamless shopping experience across all devices. It includes features like product search, filtering, shopping cart, and a secure checkout process.',
          thumbId: 'project-1-thumb',
          carouselImageIds: ['project-1-carousel-1', 'project-1-carousel-2'],
          codeUrl: 'https://github.com',
          tags: ['Laravel', 'Angular', 'MySQL'],
        },
        {
          id: 'proj2',
          title: 'Social Media App',
          shortDescription: 'A mobile-first social networking application for connecting people.',
          longDescription:
            'A social media application designed for mobile users, built with Flutter for cross-platform compatibility. It allows users to create profiles, post updates, follow other users, and interact with content through likes and comments. The backend is powered by Express and MongoDB, ensuring scalability and real-time updates.',
          thumbId: 'project-2-thumb',
          carouselImageIds: ['project-2-carousel-1', 'project-2-carousel-2'],
          codeUrl: 'https://github.com',
          tags: ['Express', 'MongoDB', 'Flutter'],
        },
        {
          id: 'proj3',
          title: 'Data Analytics Dashboard',
          shortDescription: 'An interactive dashboard for visualizing and analyzing complex datasets.',
          longDescription:
            'This project features a data analytics dashboard built with React and D3.js to provide rich, interactive data visualizations. It connects to a Python backend using Django to process and serve data. Users can explore data through various charts and graphs, apply filters, and gain insights from complex information.',
          thumbId: 'project-3-thumb',
          carouselImageIds: ['project-3-carousel-1'],
          codeUrl: 'https://github.com',
          tags: ['React', 'Django', 'Python'],
        },
      ],
    },
    certificates: {
      title: 'Certifications',
      certificates: [
        {
          id: 'cert1',
          title: 'Full Stack Web Development',
          issuer: 'Tech Academy',
          date: 'June 2023',
          imageId: 'certificate-1',
        },
        {
          id: 'cert2',
          title: 'Advanced React Concepts',
          issuer: 'React University',
          date: 'January 2023',
          imageId: 'certificate-2',
        },
        {
          id: 'cert3',
          title: 'Database Management Pro',
          issuer: 'Data School',
          date: 'September 2022',
          imageId: 'certificate-3',
        },
      ],
    },
    footer: {
      madeWith: 'Made with',
      by: 'by John Doe',
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
      name: 'John Doe',
      title: 'Desarrollador Full Stack',
      intro:
        'Un desarrollador apasionado con experiencia en la creación de aplicaciones web modernas y receptivas. Me encanta convertir ideas en realidad a través del código.',
      readMore: 'Leer Más',
      detailedBio:
        'Con una sólida formación en tecnologías de frontend y backend, he entregado con éxito proyectos desde el concepto hasta la implementación. Mi experiencia radica en el ecosistema de JavaScript, pero siempre estoy ansioso por aprender nuevas tecnologías y asumir tareas desafiantes. Soy un solucionador de problemas de corazón y me esfuerzo por escribir código limpio, eficiente y mantenible.',
    },
    skills: {
      mainStack: 'Stack Principal',
      otherTech: 'Otras Tecnologías',
    },
    projects: {
      title: 'Mis Proyectos',
      viewDetails: 'Ver Detalles',
      viewCode: 'Ver Código',
      projects: [
        {
          id: 'proj1',
          title: 'Plataforma de E-Commerce',
          shortDescription: 'Una tienda en línea con todas las funciones, una interfaz de usuario moderna y un backend robusto.',
          longDescription:
            'Este proyecto es una solución integral de comercio electrónico construida con un potente backend para gestionar productos, pedidos y usuarios. El frontend es una interfaz de usuario altamente interactiva y receptiva, que proporciona una experiencia de compra fluida en todos los dispositivos. Incluye características como búsqueda de productos, filtrado, carrito de compras y un proceso de pago seguro.',
          thumbId: 'project-1-thumb',
          carouselImageIds: ['project-1-carousel-1', 'project-1-carousel-2'],
          codeUrl: 'https://github.com',
          tags: ['Laravel', 'Angular', 'MySQL'],
        },
        {
          id: 'proj2',
          title: 'Aplicación de Redes Sociales',
          shortDescription: 'Una aplicación de redes sociales "mobile-first" para conectar personas.',
          longDescription:
            'Una aplicación de redes sociales diseñada para usuarios móviles, construida con Flutter para compatibilidad multiplataforma. Permite a los usuarios crear perfiles, publicar actualizaciones, seguir a otros usuarios e interactuar con el contenido a través de "me gusta" y comentarios. El backend está impulsado por Express y MongoDB, lo que garantiza la escalabilidad y las actualizaciones en tiempo real.',
          thumbId: 'project-2-thumb',
          carouselImageIds: ['project-2-carousel-1', 'project-2-carousel-2'],
          codeUrl: 'https://github.com',
          tags: ['Express', 'MongoDB', 'Flutter'],
        },
        {
          id: 'proj3',
          title: 'Dashboard de Análisis de Datos',
          shortDescription: 'Un dashboard interactivo para visualizar y analizar conjuntos de datos complejos.',
          longDescription:
            'Este proyecto presenta un panel de análisis de datos creado con React y D3.js para proporcionar visualizaciones de datos ricas e interactivas. Se conecta a un backend de Python que utiliza Django para procesar y servir datos. Los usuarios pueden explorar datos a través de varios cuadros y gráficos, aplicar filtros y obtener información de información compleja.',
          thumbId: 'project-3-thumb',
          carouselImageIds: ['project-3-carousel-1'],
          codeUrl: 'https://github.com',
          tags: ['React', 'Django', 'Python'],
        },
      ],
    },
    certificates: {
      title: 'Certificaciones',
      certificates: [
        {
          id: 'cert1',
          title: 'Desarrollo Web Full Stack',
          issuer: 'Academia de Tecnología',
          date: 'Junio 2023',
          imageId: 'certificate-1',
        },
        {
          id: 'cert2',
          title: 'Conceptos Avanzados de React',
          issuer: 'Universidad de React',
          date: 'Enero 2023',
          imageId: 'certificate-2',
        },
        {
          id: 'cert3',
          title: 'Profesional en Gestión de BBDD',
          issuer: 'Escuela de Datos',
          date: 'Septiembre 2022',
          imageId: 'certificate-3',
        },
      ],
    },
    footer: {
      madeWith: 'Hecho con',
      by: 'por John Doe',
    },
  },
};
