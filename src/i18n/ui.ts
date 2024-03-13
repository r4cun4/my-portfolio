export const languages = {
    es: '🇪🇸',
    en: '🇺🇸',
  };
  
  export const defaultLang = 'es';
  
  export const ui = {
    es: {
      'layout.title': 'Desarrollador Frontend',
      'layout.description': 'Sitio web personal de Rodrigo Acuña. Aquí puedes encontrar información sobre mi experiencia, proyectos y detalles de contacto',
      'nav.home':'Experiencia',
      'nav.projects':'Proyectos',
      'nav.about':'Sobre mí',
      'nav.contact':'Contacto',
      'hero.badge': 'Disponible para trabajar',
      'hero.title': 'Buenas, soy Rodri',
      'hero.bio': '<strong>Desarrollador Frontend</strong> me especializo en el ecosistema de Vue.js pero también manejo diversas tecnologías y herramientas.',
      'hero.mail': 'Contáctame',
      'hero.linkedin': 'LinkedIn',
      'exp.title': 'Experiencia laboral',
      'projects.title': 'Proyectos',
      'about.title': 'Sobre mí',
      'about.bio': `<p>¡Hola! Soy Rodrigo, un desarrollador Frontend con una sólida experiencia en tecnología y hotelería. Después de más de una década en la industria hotelera, ascendí al puesto de Gerente de Recepción en un hotel 5 estrellas, donde adquirí habilidades en servicio al cliente, gestión de equipos y toma de decisiones bajo presión.</p><p>Decidí dar un giro a mi carrera y sumergirme en el mundo del desarrollo web, donde me especializo en el ecosistema de Vue.js y me mantengo actualizado sobre las últimas tendencias. Mi enfoque en cada proyecto es crear soluciones estéticamente atractivas y altamente funcionales, combinando mis habilidades en comunicación y liderazgo.</p><p>He enfrentado y superado desafíos complejos, lo que me ha llevado a crecer tanto personal como profesionalmente. Fuera del trabajo, disfruto jugando al fútbol con amigos y pasando tiempo de calidad con mi familia, lo que me ayuda a mantener un equilibrio saludable entre el trabajo y la vida personal.</p><p>Estoy entusiasmado con la oportunidad de contribuir con mi experiencia y pasión al éxito de tu equipo o empresa. Espero con ansias la posibilidad de colaborar juntos en proyectos futuros.</p><p>¡Gracias por tomarte el tiempo de conocerme!</p>`,
      'footer.rights': 'Casi todos los derechos reservados',
      exp: [
        {
          title: 'Desarrollador Frontend',
          date: 'Mayo 2022 - Diciembre 2023',
          company: 'Viseven',
          description: 'He desarrollado aplicaciones web en diversas plataformas y colaborado en equipos multidisciplinarios. Además, he tenido el privilegio de liderar proyectos como Project Lead, supervisando la estimación del proyecto, las directrices de desarrollo y garantizando cumplimiento en los plazos de entrega.',
          link: 'https://viseven.com/about-us',
        },
        {
          title: 'Desarrollador Frontend Trainee',
          date: 'Octubre 2021 - Mayo 2022',
          company: 'Summa Solutions',
          description: 'Desarrollé evolutivos, corregí bugs y diseñé nuevas características, enfrentando un fuerte desafío al ser mi primera experiencia en un equipo de desarrollo. Durante este proceso, aprendí a trabajar en un entorno ágil, colaborando eficazmente y adaptándome a cambios dinámicos.'
        }
      ],
      projects: [
        {
          title: "Shopping list",
          description: "Este proyecto personal tiene como objetivo agilizar el proceso de compras en el supermercado. Se ha implementado utilizando tecnologías avanzadas como Vue Router para gestionar las URLs, Vuex para el manejo del estado de la aplicación, y se ha seguido el patrón Options API. Además, está conectado a Firebase para una experiencia aún más fluida.",
          link: "https://vue-lista-de-compras.netlify.app/#/",
          github: "https://github.com/r4cun4/shopping-list",
          image: "/projects/shopping-list.png",
          tags: ["vuejs", "javascript", "sass", "bootstrap", "firebase", "netlify"],
        },
        {
          title: "Mi porfolio",
          description: "Este sitio web representa mi experiencia, habilidades y proyectos destacados. Utilizando un template base creado por Midudev como punto de partida, lo he personalizado y enriquecido con funcionalidades de localización, permitiendo a los usuarios cambiar el idioma según sus preferencias.",
          github: "https://github.com/r4cun4/my-portfolio",
          image: "/projects/porfolio.png",
          tags: ["astro", "javascript", "typescript", "tailwindcss", "netlify"],
        },
      ]
    },
    en: {
      'layout.title' : `Frontend Developer`,
      'layout.description': 'Personal website of Rodrigo Acuña. Here you can find information about my experience, projects, and contact details.',
      'nav.home':'Experience',
      'nav.projects':'Projects',
      'nav.about':'About me',
      'nav.contact':'Contact',
      'hero.badge': 'Open to work',
      'hero.title': `Hey, I'm Rodri`,
      'hero.bio': '<strong>Frontend developer</strong> specializing in the Vue.js ecosystem, but also proficient in various technologies and tools.',
      'hero.mail': 'Contact me',
      'hero.linkedin': 'LinkedIn',
      'exp.title': 'Professional Experience',
      'projects.title': 'Projects',
      'about.title': 'About me',
      'about.bio': "<p>Hello! I'm Rodrigo, a Frontend developer with a solid background in technology and hospitality. After over a decade in the hospitality industry, I rose to the position of Reception Manager at a 5-star hotel, where I gained skills in customer service, team management, and decision-making under pressure.</p><p>I decided to pivot my career and dive into the world of web development, specializing in the Vue.js ecosystem and staying updated on the latest trends. My focus on every project is to create aesthetically appealing and highly functional solutions, combining my skills in communication and leadership.</p><p>I have faced and overcome complex challenges, leading to personal and professional growth. Outside of work, I enjoy playing soccer with friends and spending quality time with my family, which helps me maintain a healthy balance between work and personal life.</p><p>I am excited about the opportunity to contribute my experience and passion to your team or company's success. I look forward to the possibility of collaborating on future projects together.</p><p>Thank you for taking the time to get to know me!</p>",
      'footer.rights': 'Almost all rights reserved',
      exp: [
        {
          "title": "Frontend Developer",
          "date": "May 2022 - December 2023",
          "company": "Viseven",
          "description": "I have developed web applications on various platforms and collaborated in multidisciplinary teams. Additionally, I have had the privilege of leading projects as Project Lead, overseeing project estimation, development guidelines, and ensuring compliance with delivery deadlines.",
          "link": "https://viseven.com/about-us",
          "linkLabel": "Learn more"
        },
        {
          "title": "Frontend Developer Trainee",
          "date": "October 2021 - May 2022",
          "company": "Summa Solutions",
          "description": "I developed enhancements, fixed bugs, and designed new features, facing a strong challenge as it was my first experience in a development team. During this process, I learned to work in an agile environment, collaborating effectively, and adapting to dynamic changes."
        }
      ],
      projects: [
        {
          "title": "Shopping list",
          "description": "This personal project aims to streamline the shopping process at the supermarket. It has been implemented using advanced technologies such as Vue Router to manage URLs, Vuex for handling application state, and follows the Options API pattern. Additionally, it is connected to Firebase for an even smoother experience.",
          "link": "https://vue-lista-de-compras.netlify.app/#/",
          "github": "https://github.com/r4cun4/shopping-list",
          "image": "/projects/shopping-list.png",
          "tags": ["vuejs", "javascript", "sass", "bootstrap", "firebase", "netlify"]
        },
        {
          "title": "My Portfolio",
          "description": "This website represents my experience, skills, and notable projects. Using a base template created by Midudev as a starting point, I have customized and enriched it with localization features, allowing users to change the language according to their preferences.",
          "github": "https://github.com/r4cun4/my-portfolio",
          "image": "/projects/porfolio.png",
          "tags": ["astro", "javascript", "typescript", "tailwindcss", "netlify"]
        }
      ],
    },

  } as const;
