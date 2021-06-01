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
        blueprint: [
            {
                name: 'piso_01_unidad_01',
                // imageUrl:
                //     'images/sucre/blueprint/blueprint_piso_01_unidad_01.jpg',
                imageUrl:
                    'https://via.placeholder.com/700x700?text=PISO+01+UNIDAD+01+44m',
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
                    'https://via.placeholder.com/700x700?text=PISO+03+UNIDAD+02+56m',
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
        blueprint: [
            {
                name: 'piso_01_unidad_01',
                // imageUrl:
                //     'images/bilbao/blueprint/blueprint_piso_01_unidad_01.jpg',
                imageUrl:
                    'https://via.placeholder.com/700x700?text=PISO+01+UNIDAD+01+44m',
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
                    'https://via.placeholder.com/700x700?text=PISO+03+UNIDAD+02+56m',
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
            // documents/bilbao/blueprint/bilbao_planos_35m2.pdf
        ],
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
                'images/superi/residence/residence_05.jpg',
                'images/superi/residence/residence_02.jpg',
                'images/superi/residence/residence_04.jpg',
                'images/superi/residence/residence_01.jpg',
                'images/superi/residence/residence_03.jpg',
            ],
            text: [
                'Unidades desde 35 hasta 120 m2',
                'Todas integradas a un estilo de placer. Para un nuevo concepto de calidad espacial. Departamentos 1, 2, 3 ambientes que inspiran a vivir mejor.',
            ],
        },
        amenities: {
            title: 'Amenities',
            imagesUrl: [
                'images/superi/amenities/amenities_01.jpg',
                'images/superi/amenities/amenities_02.jpg',
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
        thumbnail: 'images/superi/thumbnail/thumbnail_01.jpg',
        logo: 'images/superi/logo/logo_01.png',
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
];
export default PROPERTIES_DATA;
