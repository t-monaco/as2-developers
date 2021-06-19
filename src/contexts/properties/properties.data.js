import uuid from 'react-uuid';

const PROPERTIES_DATA = [
    {
        id: uuid(),
        name: 'SUCRE',
        linkName: 'sucre',
        heroImage: 'images/sucre/heroImage/heroImage_01.jpg',
        category: 'touch',
        status: 'finalizado',
        residence: {
            title: 'Residencias',
            imagesUrl: [
                'images/sucre/residence/residence_01.jpg',
                'images/sucre/residence/residence_02.jpg',
                'images/sucre/residence/residence_03.jpg',
            ],
            text: [
                'Hall en doble altura, Unidades desde 37 hasta 100 m2',
                'La mejor zona de Belgrano R',
                '2 y 3 ambientes, Duplex',
                'Departamentos con parrilla propia',
            ],
        },
        amenities: {
            title: 'Amenities',
            imagesUrl: [
                'images/sucre/amenities/amenities_01.jpg',
                'images/sucre/amenities/amenities_02.jpg',
            ],
            text: [
                'Parrillas – Piscina – Balcones Terrazas – SUM – Bauleras – Laundry -  Sector de Juegos para niños – Cocheras cubiertas',
            ],
        },
        location: {
            lat: -34.57428,
            lng: -58.47288,
            address: 'Mariscal Antonio José de Sucre 4245 - CABA',
        },
        thumbnail: 'images/sucre/thumbnail/thumbnail_01.jpg',
        logo: 'images/sucre/logo/logo_01.png',
        project_details: {
            description: [
                'Edificio con grandes expansiones individuales y vegetación vertical interpisos. Excelente relación entre interior y naturaleza. Departamentos 2 y 3 amb, Duplex, con parrilla propia',
            ],
        },
        blueprint: [
            // documents/sucre/blueprint/sucre_planos_35m2.pdf
        ],
    },

    {
        id: uuid(),
        name: 'BILBAO',
        linkName: 'bilbao',
        heroImage: 'images/bilbao/heroImage/heroImage_01.jpg',
        category: 'touch',
        status: 'finalizado',
        residence: {
            title: 'Residencias',
            imagesUrl: [
                'images/bilbao/residence/residence_02.jpg',
                'images/bilbao/residence/residence_03.jpg',
                'images/bilbao/residence/residence_01.jpg',
                'images/bilbao/residence/residence_04.jpg',
            ],
            text: [
                'Modernos y amplios departamentos  en la mejor ubicación. Muy Luminosos con vista a la Plaza de la Misericordia. A 100 m del centro comercial de Av. Directorio.',
                'Estacionamiento privado y Bauleras.',
            ],
        },
        location: {
            lat: -34.63293,
            lng: -58.45538,
            address: 'Av. Francisco Bilbao 2032 - CABA',
        },
        thumbnail: 'images/bilbao/thumbnail/thumbnail_01.jpg',
        logo: 'images/bilbao/logo/logo_01.png',
        project_details: {
            description: [
                'Diseño moderno y equipamiento de alta calida. Exclusivos  Dormitorios  con  gran  iluminación a frente - contrafrente y  ubicación  destacada.',
            ],
        },
        blueprint: [],
    },

    {
        id: uuid(),
        name: 'SUPERI',
        linkName: 'superi',
        heroImage: 'images/superi/heroImage/heroImage_01.jpg',
        category: 'touch',
        status: 'en construccion',
        residence: {
            title: 'Residencias',
            imagesUrl: [
                'images/superi/residence/residence_04.jpg',
                'images/superi/residence/residence_02.jpg',
                'images/superi/residence/residence_01.jpg',
                'images/superi/residence/residence_03.jpg',
            ],
            text: [
                'New life concept',
                'Somos conscientes de que cada línea de nuestros diseños condensa los deseos, las proyecciones y la imaginación de quienes confían en nosotros',
            ],
        },
        amenities: {
            title: 'Amenities',
            imagesUrl: [
                'images/superi/amenities/amenities_01.jpg',
                'images/superi/amenities/amenities_02.jpg',
            ],
            text: [
                'Amenities de gran calidad y confort.',
                'Piscina + jacuzzi 20 m2 con impactantes vistas a Belgrano R.',
                'Solarium + Lounge con parrilla + Laundry equipado.',
            ],
        },
        location: {
            lat: -34.57375,
            lng: -58.46032,
            address: 'Superí 1431 - CABA',
        },
        thumbnail: 'images/superi/thumbnail/thumbnail_01.jpg',
        logo: 'images/superi/logo/logo_01.png',
        project_details: {
            description: [
                'Diseño elegante y funcional. Cada departamento de TOUCH SUPERI está diseñado cuidadosamente y equipado con instalaciones de primera categoría.',
            ],
            view_360:
                'https://kuula.co/share/7t2Z9?fs=1&vr=0&sd=1&thumbs=1&info=1&logo=1',
        },
        blueprint: [
            {
                name: 'piso_01-02_unidad_04',
                imageUrl:
                    'images/superi/blueprint/blueprint_piso_01-02_unidad_04_35,00m2.jpg',
                squareMeters: 35.0,
            },
            {
                name: 'piso_01-07_unidad_03',
                imageUrl:
                    'images/superi/blueprint/blueprint_piso_01-07_unidad_03_40,45m2.jpg',
                squareMeters: 40.45,
            },
            {
                name: 'piso_00_unidad_03',
                imageUrl:
                    'images/superi/blueprint/blueprint_piso_00_unidad_03_51,27m2.jpg',
                squareMeters: 51.27,
            },
            {
                name: 'piso_01-02_unidad_01',
                imageUrl:
                    'images/superi/blueprint/blueprint_piso_01-02_unidad_01_54,65m2.jpg',
                squareMeters: 54.65,
            },
            {
                name: 'piso_01-07_unidad_02',
                imageUrl:
                    'images/superi/blueprint/blueprint_piso_01-07_unidad_02_53,33m2.jpg',
                squareMeters: 53.33,
            },
            {
                name: 'piso_00_unidad_02',
                imageUrl:
                    'images/superi/blueprint/blueprint_piso_00_unidad_02_70,11m2.jpg',
                squareMeters: 70.11,
            },
            {
                name: 'piso_03_unidad_01',
                imageUrl:
                    'images/superi/blueprint/blueprint_piso_03_unidad_01_88,15m2.jpg',
                squareMeters: 88.15,
            },
            {
                name: 'piso_04-07_unidad_01',
                imageUrl:
                    'images/superi/blueprint/blueprint_piso_04-07_unidad_01_71,65m2.jpg',
                squareMeters: 71.65,
            },
            {
                name: 'piso_08_unidad_01',
                imageUrl:
                    'images/superi/blueprint/blueprint_piso_08_unidad_01_120,27m2.jpg',
                squareMeters: 120.27,
            },
            {
                name: 'piso_08_unidad_02',
                imageUrl:
                    'images/superi/blueprint/blueprint_piso_08_unidad_02_138,62m2.jpg',
                squareMeters: 138.62,
            },
            // documents/superi/blueprint/superi_planos_35m2.pdf
        ],
    },

    {
        id: uuid(),
        name: 'LIBERTADOR OFFICE',
        linkName: 'libertador_office',
        heroImage: 'images/libertador_office/heroImage/heroImage_01.jpg',
        category: 'touch',
        status: 'futuro lanzamiento',
        residence: {
            title: 'Oficinas',
            imagesUrl: [
                'images/libertador_office/residence/residence_01.jpg',
                'images/libertador_office/residence/residence_02.jpg',
                'images/libertador_office/residence/residence_03.jpg',
                'images/libertador_office/residence/residence_04.jpg',
            ],
            text: [
                'Edificio corporativo AAA, Oficinas unificables.',
                'Hall de doble altura, Locales Comerciales, Cuatro niveles de cocheras privadas.',
                'Seguridad 24hs con control de acceso y CCTV',
                'Ascensores de última generación con sistema de “llamada anticipada”.',
            ],
        },
        amenities: {
            title: 'Amenities',
            imagesUrl: [
                'images/libertador_office/amenities/amenities_01.jpg',
                'images/libertador_office/amenities/amenities_02.jpg',
                'images/libertador_office/amenities/amenities_03.jpg',
            ],
            text: [
                'Edificio con espacios comunes de calidad y elegancia, salón de usos múltiples, gimnasio equipado de última generación y laundry.',
            ],
        },
        location: {
            lat: -34.557967,
            lng: -58.44649,
            address: 'Av. del Libertador 5851 - CABA',
        },
        thumbnail: 'images/libertador_office/thumbnail/thumbnail_01.jpg',
        logo: 'images/libertador_office/logo/logo_01.png',
        project_details: {
            description: [
                'Plantas amplias y versátiles que permiten flexibilizar los espacios de acuerdo a las necesidades.',
            ],
        },
        blueprint: [
            {
                name: 'piso_01_unidad_01',
                imageUrl:
                    'images/libertador_office/blueprint/blueprint_piso_01_unidad_03.jpg',
                squareMeters: 44,
            },
            {
                name: 'piso_01_unidad_02',
                imageUrl:
                    'https://via.placeholder.com/700x700?text=PISO+01+UNIDAD+01+48m',
                squareMeters: 48,
            },
            {
                name: 'piso_02_unidad_02',
                imageUrl:
                    'images/libertador_office/blueprint/blueprint_piso_01_unidad_03.jpg',
                squareMeters: 56,
            },
            {
                name: 'piso_03_unidad_03',
                imageUrl:
                    'https://via.placeholder.com/700x700?text=PISO+01+UNIDAD+01+78m',
                squareMeters: 78,
            },
            {
                name: 'piso_11_unidad_01',
                imageUrl:
                    'https://via.placeholder.com/700x700?text=PISO+01+UNIDAD+01+90m',
                squareMeters: 90,
            },
            // documents/libertador_office/blueprint/libertador_office_planos_35m2.pdf
        ],
    },

    {
        id: uuid(),
        name: 'LIBERTADOR RIVER',
        // linkName: 'libertador_river',
        heroImage: 'images/libertador_river/heroImage/heroImage_01.jpg',
        category: 'touch',
        status: 'en construccion',
        residence: {
            title: 'Residencias',
            imagesUrl: [
                'images/libertador_river/residence/residence_05.jpg',
                'images/libertador_river/residence/residence_02.jpg',
                'images/libertador_river/residence/residence_04.jpg',
                'images/libertador_river/residence/residence_01.jpg',
                'images/libertador_river/residence/residence_03.jpg',
            ],
            text: [
                'Unidades desde 35 hasta 120 m2',
                'Todas integradas a un estilo de placer. Para un nuevo concepto de calidad espacial. Departamentos 1, 2, 3 ambientes que inspiran a vivir mejor.',
            ],
        },
        amenities: {
            title: 'Amenities',
            imagesUrl: [
                'images/libertador_river/amenities/amenities_01.jpg',
                'images/libertador_river/amenities/amenities_02.jpg',
            ],
            text: [
                'Nuestro Sum es una extensión de nuestros momentos de placer. Gran terraza, parrilla y pileta rooftop. Alcanzá el verde de Belgrano R.',
            ],
        },
        location: {
            lat: -34.57375,
            lng: -58.46032,
            address: 'Superí 1431 - CABA',
        },
        thumbnail: 'images/libertador_river/thumbnail/thumbnail_01.jpg',
        logo: 'images/libertador_river/logo/logo_01.png',
        project_details: {
            description: [
                'Plantas amplias y versátiles que permiten flexibilizar los espacios de acuerdo a las necesidades.',
            ],
        },
        blueprint: [
            {
                name: 'piso_01-02_unidad_04',
                imageUrl:
                    'images/libertador_river/blueprint/blueprint_piso_01-02_unidad_04_35,00m2.jpg',
                squareMeters: 35.0,
            },
            {
                name: 'piso_01-07_unidad_03',
                imageUrl:
                    'images/libertador_river/blueprint/blueprint_piso_01-07_unidad_03_40,45m2.jpg',
                squareMeters: 40.45,
            },
            {
                name: 'piso_00_unidad_03',
                imageUrl:
                    'images/libertador_river/blueprint/blueprint_piso_00_unidad_03_51,27m2.jpg',
                squareMeters: 51.27,
            },
            {
                name: 'piso_01-02_unidad_01',
                imageUrl:
                    'images/libertador_river/blueprint/blueprint_piso_01-02_unidad_01_54,65m2.jpg',
                squareMeters: 54.65,
            },
            {
                name: 'piso_01-07_unidad_02',
                imageUrl:
                    'images/libertador_river/blueprint/blueprint_piso_01-07_unidad_02_53,33m2.jpg',
                squareMeters: 53.33,
            },
            {
                name: 'piso_00_unidad_02',
                imageUrl:
                    'images/libertador_river/blueprint/blueprint_piso_00_unidad_02_70,11m2.jpg',
                squareMeters: 70.11,
            },
            {
                name: 'piso_03_unidad_01',
                imageUrl:
                    'images/libertador_river/blueprint/blueprint_piso_03_unidad_01_88,15m2.jpg',
                squareMeters: 88.15,
            },
            {
                name: 'piso_04-07_unidad_01',
                imageUrl:
                    'images/libertador_river/blueprint/blueprint_piso_04-07_unidad_01_71,65m2.jpg',
                squareMeters: 71.65,
            },
            {
                name: 'piso_08_unidad_01',
                imageUrl:
                    'images/libertador_river/blueprint/blueprint_piso_08_unidad_01_120,27m2.jpg',
                squareMeters: 120.27,
            },
            {
                name: 'piso_08_unidad_02',
                imageUrl:
                    'images/libertador_river/blueprint/blueprint_piso_08_unidad_02_138,62m2.jpg',
                squareMeters: 138.62,
            },
            // documents/superi/blueprint/superi_planos_35m2.pdf
        ],
    },

    {
        id: uuid(),
        name: 'LIBERTADOR GOLF',
        // linkName: 'libertador_golf',
        heroImage: 'images/libertador_golf/heroImage/heroImage_01.jpg',
        category: 'touch',
        status: 'futuro lanzamiento',
        residence: {
            title: 'Oficinas',
            imagesUrl: [
                'images/libertador_golf/residence/residence_01.jpg',
                'images/libertador_golf/residence/residence_02.jpg',
                'images/libertador_golf/residence/residence_03.jpg',
                'images/libertador_golf/residence/residence_04.jpg',
            ],
            text: [
                'Edificio corporativo AAA, Oficinas unificables.',
                'Hall de doble altura, Locales Comerciales, Cuatro niveles de cocheras privadas.',
                'Seguridad 24hs con control de acceso y CCTV',
                'Ascensores de última generación con sistema de “llamada anticipada”.',
            ],
        },
        amenities: {
            title: 'Amenities',
            imagesUrl: [
                'images/libertador_golf/amenities/amenities_01.jpg',
                'images/libertador_golf/amenities/amenities_02.jpg',
                'images/libertador_golf/amenities/amenities_03.jpg',
            ],
            text: [
                'Edificio con espacios comunes de calidad y elegancia, salón de usos múltiples, gimnasio equipado de última generación y laundry.',
            ],
        },
        location: {
            lat: -34.557967,
            lng: -58.44649,
            address: 'Av. del Libertador 5851 - CABA',
        },
        thumbnail: 'images/libertador_golf/thumbnail/thumbnail_01.jpg',
        logo: 'images/libertador_golf/logo/logo_01.png',
        project_details: {
            description: [
                'Plantas amplias y versátiles que permiten flexibilizar los espacios de acuerdo a las necesidades.',
            ],
        },
        blueprint: [
            {
                name: 'piso_01_unidad_01',
                imageUrl:
                    'images/libertador_golf/blueprint/blueprint_piso_01_unidad_03.jpg',
                squareMeters: 44,
            },
            {
                name: 'piso_01_unidad_02',
                imageUrl:
                    'https://via.placeholder.com/700x700?text=PISO+01+UNIDAD+01+48m',
                squareMeters: 48,
            },
            {
                name: 'piso_02_unidad_02',
                imageUrl:
                    'images/libertador_golf/blueprint/blueprint_piso_01_unidad_03.jpg',
                squareMeters: 56,
            },
            {
                name: 'piso_03_unidad_03',
                imageUrl:
                    'https://via.placeholder.com/700x700?text=PISO+01+UNIDAD+01+78m',
                squareMeters: 78,
            },
            {
                name: 'piso_11_unidad_01',
                imageUrl:
                    'https://via.placeholder.com/700x700?text=PISO+01+UNIDAD+01+90m',
                squareMeters: 90,
            },
            // documents/libertador_golf/blueprint/libertador_golf_planos_35m2.pdf
        ],
    },

    {
        id: uuid(),
        name: 'OCEAN BEACH',
        // linkName: 'ocean_beach',
        heroImage: 'images/ocean_beach/heroImage/heroImage_01.jpg',
        category: 'touch',
        status: 'futuro lanzamiento',
        residence: {
            title: 'Oficinas',
            imagesUrl: [
                'images/ocean_beach/residence/residence_01.jpg',
                'images/ocean_beach/residence/residence_02.jpg',
                'images/ocean_beach/residence/residence_03.jpg',
                'images/ocean_beach/residence/residence_04.jpg',
            ],
            text: [
                'Edificio corporativo AAA, Oficinas unificables.',
                'Hall de doble altura, Locales Comerciales, Cuatro niveles de cocheras privadas.',
                'Seguridad 24hs con control de acceso y CCTV',
                'Ascensores de última generación con sistema de “llamada anticipada”.',
            ],
        },
        amenities: {
            title: 'Amenities',
            imagesUrl: [
                'images/ocean_beach/amenities/amenities_01.jpg',
                'images/ocean_beach/amenities/amenities_02.jpg',
                'images/ocean_beach/amenities/amenities_03.jpg',
            ],
            text: [
                'Edificio con espacios comunes de calidad y elegancia, salón de usos múltiples, gimnasio equipado de última generación y laundry.',
            ],
        },
        location: {
            lat: -34.557967,
            lng: -58.44649,
            address: 'Av. del Libertador 5851 - CABA',
        },
        thumbnail: 'images/ocean_beach/thumbnail/thumbnail_01.jpg',
        logo: 'images/ocean_beach/logo/logo_01.png',
        project_details: {
            description: [
                'Plantas amplias y versátiles que permiten flexibilizar los espacios de acuerdo a las necesidades.',
            ],
        },
        blueprint: [],
    },

    {
        id: uuid(),
        name: 'BAL HARBOUR',
        // linkName: 'bal_harbour',
        heroImage: 'images/bal_harbour/heroImage/heroImage_01.jpg',
        category: 'touch',
        status: 'futuro lanzamiento',
        residence: {
            title: 'Oficinas',
            imagesUrl: [
                'images/bal_harbour/residence/residence_01.jpg',
                'images/bal_harbour/residence/residence_02.jpg',
                'images/bal_harbour/residence/residence_03.jpg',
                'images/bal_harbour/residence/residence_04.jpg',
            ],
            text: [
                'Edificio corporativo AAA, Oficinas unificables.',
                'Hall de doble altura, Locales Comerciales, Cuatro niveles de cocheras privadas.',
                'Seguridad 24hs con control de acceso y CCTV',
                'Ascensores de última generación con sistema de “llamada anticipada”.',
            ],
        },
        amenities: {
            title: 'Amenities',
            imagesUrl: [
                'images/bal_harbour/amenities/amenities_01.jpg',
                'images/bal_harbour/amenities/amenities_02.jpg',
                'images/bal_harbour/amenities/amenities_03.jpg',
            ],
            text: [
                'Edificio con espacios comunes de calidad y elegancia, salón de usos múltiples, gimnasio equipado de última generación y laundry.',
            ],
        },
        location: {
            lat: -34.557967,
            lng: -58.44649,
            address: 'Av. del Libertador 5851 - CABA',
        },
        thumbnail: 'images/bal_harbour/thumbnail/thumbnail_01.jpg',
        logo: 'images/bal_harbour/logo/logo_01.png',
        project_details: {
            description: [
                'Plantas amplias y versátiles que permiten flexibilizar los espacios de acuerdo a las necesidades.',
            ],
        },
        blueprint: [],
    },
];
export default PROPERTIES_DATA;
