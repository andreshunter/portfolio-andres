import { Service } from "../interface/service.interface";

export const SERVICES:Service[] = [

    {
        icon:'bi bi-bar-chart-line',
        title:'Análisis de Datos',
        description:
            'Transformación de datos en información útil para la toma de decisiones.',
        technologies:[
            'Python',
            'SQL',
            'Power BI'
        ]
    },
    {
        icon:'bi bi-robot',
        title:'Inteligencia Artificial',
        description:
            'Desarrollo de soluciones utilizando Machine Learning e IA generativa.',
        technologies:[
            'Python',
            'TensorFlow',
            'OpenAI'
        ]
    },
    {
        icon:'bi bi-code-slash',
        title:'Desarrollo Web',
        description:
            'Creación de aplicaciones web modernas y escalables.',
        technologies:[
            'Angular',
            'Django',
            'TypeScript'
        ]
    },
    {
        icon:'bi bi-cloud',
        title:'Cloud & Deploy',
        description:
                 'Despliegue de aplicaciones utilizando servicios cloud.',
        technologies:[
            'AWS',
            'S3',
            'Docker'
        ]
    }

];