import type { Curriculum } from "./types";

export const curriculum: Curriculum = {
    semesters: [
        {
            id: 1,
            displayName: "Primer semestre",
            classes: [
                {
                    id: "algebra1",
                    displayName: "Álgebra I",
                    requirements: []
                },
                {
                    id: "calculo1",
                    displayName: "Cálculo I",
                    requirements: []
                },
                {
                    id: "computacion1",
                    displayName: "Computación I",
                    requirements: []
                },
                {
                    id: "intro-a-cc",
                    displayName: "Introducción a Ciencia de la Computación",
                    requirements: []
                },
                {
                    id: "ingles1",
                    displayName: "Inglés I",
                    requirements: []
                }
            ]
        },
        {
            id: 2,
            displayName: "Segundo semestre",
            classes: [
                {
                    id: "algebra2",
                    displayName: "Álgebra II",
                    requirements: [
                        "algebra1"
                    ]
                },
                {
                    id: "calculo2",
                    displayName: "Cálculo II",
                    requirements: [
                        "calculo1"
                    ]
                },
                {
                    id: "estructura-de-datos",
                    displayName: "Estructura de Datos",
                    requirements: [
                        "computacion1"
                    ]
                },
                {
                    id: "espanol1",
                    displayName: "Español I",
                    requirements: [
                        "intro-a-cc"
                    ]
                },
                {
                    id: "ingles2",
                    displayName: "Inglés II",
                    requirements: [
                        "ingles1"
                    ]
                }
            ]
        },
        {
            id: 3,
            displayName: "Tercer semestre",
            classes: [
                {
                    id: "algebra-lineal",
                    displayName: "Álgebra Lineal",
                    requirements: [
                        "algebra2"
                    ]
                },
                {
                    id: "calculo3",
                    displayName: "Cálculo III",
                    requirements: [
                        "calculo2"
                    ]
                },
                {
                    id: "intro-a-la-fisica",
                    displayName: "Introducción a la Física",
                    requirements: [
                        "calculo2"
                    ]
                },
                {
                    id: "paradigmas-de-la-programacion",
                    displayName: "Paradigmas de la Programación",
                    requirements: [
                        "estructura-de-datos"
                    ]
                },
                {
                    id: "ingles3",
                    displayName: "Inglés III",
                    requirements: [
                        "ingles2"
                    ]
                }
            ]
        },
        {
            id: 4,
            displayName: "Cuarto semestre",
            classes: [
                {
                    id: "probabilidad-y-estadistica",
                    displayName: "Probabilidad y Estadística",
                    requirements: [
                        "calculo3"
                    ]
                },
                {
                    id: "arquitectura-de-computadores",
                    displayName: "Arquitectura de Computadores",
                    requirements: [
                        "intro-a-la-fisica"
                    ]
                },
                {
                    id: "programacion-avanzada",
                    displayName: "Programación Avanzada",
                    requirements: [
                        "paradigmas-de-la-programacion"
                    ]
                },
                {
                    id: "matematica-discreta",
                    displayName: "Matemática Discreta",
                    requirements: [
                        "estructura-de-datos", "algebra-lineal"
                    ]
                },
                {
                    id: "ingles4",
                    displayName: "Inglés IV",
                    requirements: [
                        "ingles3"
                    ]
                }
            ]
        },
        {
            id: 5,
            displayName: "Quinto semestre",
            classes: [
                {
                    id: "estadistica2",
                    displayName: "Estadística II",
                    requirements: [
                        "probabilidad-y-estadistica"
                    ]
                },
                {
                    id: "sistemas-operativos",
                    displayName: "Sistemas Operativos",
                    requirements: [
                        "paradigmas-de-la-programacion", "arquitectura-de-computadores"
                    ]
                },
                {
                    id: "modelamiento-de-bases-de-datos",
                    displayName: "Modelamiento de Bases de Datos",
                    requirements: [
                        "algebra-lineal", "paradigmas-de-la-programacion"
                    ]
                },
                {
                    id: "fundamentos-de-cc1",
                    displayName: "Fundamentos de Ciencia de la Computación I",
                    requirements: [
                        "programacion-avanzada", "matematica-discreta"
                    ]
                },
                {
                    id: "logica-computacional",
                    displayName: "Lógica Computacional",
                    requirements: [
                        "matematica-discreta"
                    ]
                }
            ]
        },
        {
            id: 6,
            displayName: "Sexto semestre",
            classes: [
                {
                    id: "comunicacion-de-computadores",
                    displayName: "Comunicación de Computadores",
                    requirements: [
                        "sistemas-operativos"
                    ]
                },
                {
                    id: "modelamiento-de-bases-de-datos-cientificos",
                    displayName: "Modelamiento de Bases de Datos Científicos",
                    requirements: [
                        "modelamiento-de-bases-de-datos"
                    ]
                },
                {
                    id: "fundamentos-de-cc2",
                    displayName: "Fundamentos de Ciencia de la Computación II",
                    requirements: [
                        "fundamentos-de-cc1"
                    ]
                },
                {
                    id: "algoritmos-distribuidos",
                    displayName: "Algoritmos Distribuidos",
                    requirements: [
                        "fundamentos-de-cc1", "logica-computacional"
                    ]
                },
                {
                    id: "inge-de-software1",
                    displayName: "Ingeniería de Software I",
                    requirements: [
                        "programacion-avanzada", "modelamiento-de-bases-de-datos"
                    ]
                }
            ]
        },
        {
            id: 7,
            displayName: "Séptimo semestre",
            classes: [
                {
                    id: "metodologia-de-la-investigacion1",
                    displayName: "Metodología de la Investigación I",
                    requirements: [
                        "espanol1", "ingles4", "estadistica2"
                    ]
                },
                {
                    id: "simulacion-computacional",
                    displayName: "Simulación Computacional",
                    requirements: [
                        "estadistica2"
                    ]
                },
                {
                    id: "electivo1",
                    displayName: "Electivo I",
                    requirements: [
                        "fundamentos-de-cc2"
                    ]
                },
                {
                    id: "electivo2",
                    displayName: "Electivo II",
                    requirements: [
                        "fundamentos-de-cc2"
                    ]
                },
                {
                    id: "inge-de-software2",
                    displayName: "Ingeniería de Software II",
                    requirements: [
                        "inge-de-software1"
                    ]
                }
            ]
        },
        {
            id: 8,
            displayName: "Octavo semestre",
            classes: [
                {
                    id: "metodologia-de-la-investigacion2",
                    displayName: "Metodología de la Investigación II",
                    requirements: [
                        "metodologia-de-la-investigacion1", "simulacion-computacional"
                    ]
                },
                {
                    id: "etica-en-cc",
                    displayName: "Ética en Ciencia de la Computación",
                    requirements: [
                        "metodologia-de-la-investigacion1", "comunicacion-de-computadores"
                    ]
                },
                {
                    id: "electivo3",
                    displayName: "Electivo III",
                    requirements: [
                        "electivo1"
                    ]
                },
                {
                    id: "electivo4",
                    displayName: "Electivo IV",
                    requirements: [
                        "electivo2"
                    ]
                },
                {
                    id: "inge-de-software3",
                    displayName: "Ingeniería de Software III",
                    requirements: [
                        "inge-de-software2"
                    ]
                }
            ]
        },
        {
            id: 9,
            displayName: "Noveno semestre",
            classes: [
                {
                    id: "seminario-de-titulo1",
                    displayName: "Seminario de Título I",
                    requirements: [
                        "inge-de-software3", "electivo3", "electivo4", "metodologia-de-la-investigacion2", "etica-en-cc"
                    ]
                },
                {
                    id: "practica-profesional",
                    displayName: "Práctica Profesional",
                    requirements: [
                        "inge-de-software3", "electivo3", "electivo4", "metodologia-de-la-investigacion2", "etica-en-cc"
                    ]
                },
                {
                    id: "electivo5",
                    displayName: "Electivo V",
                    requirements: [
                        "computacion1"
                    ]
                },
                {
                    id: "evaluacion-de-proyectos-informaticos",
                    displayName: "Evaluación de Proyectos Informáticos",
                    requirements: [
                        "inge-de-software3"
                    ]
                },
            ]
        },
        {
            id: 10,
            displayName: "Décimo semestre",
            classes: [
                {
                    id: "seminario-de-titulo2",
                    displayName: "Seminario de Título II",
                    requirements: [
                        "seminario-de-titulo1"
                    ]
                },
                {
                    id: "innovacion-y-emprendimiento",
                    displayName: "Innovación y Emprendimiento",
                    requirements: [
                        "practica-profesional", "evaluacion-de-proyectos-informaticos"
                    ]
                },
                {
                    id: "gestion-tecnologica",
                    displayName: "Gestión Tecnológica",
                    requirements: [
                        "evaluacion-de-proyectos-informaticos"
                    ]
                },
            ]
        },
    ]
}