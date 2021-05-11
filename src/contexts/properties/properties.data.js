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
            imagesUrl: [
                'images/sucre/residence/residence_01.jpg',
                'images/sucre/residence/residence_02.jpg',
            ],
            text: [
                'Residence, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,consequatur totam? Neque est asperiores vero, nulla similiqueno strum non maxime. Labore consequuntur nobis sit molestiae consectetur totam quo aperiam dolorum.',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            ],
        },
        amenities: {
            imagesUrl: [
                'images/sucre/amenities/amenities_01.jpg',
                'images/sucre/amenities/amenities_02.jpg',
            ],
            text: [
                'Amenities, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,consequatur totam? Neque est asperiores vero, nulla similiqueno strum non maxime. Labore consequuntur nobis sit molestiae consectetur totam quo aperiam dolorum.',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            ],
        },
        location: {
            lat: -34.557967,
            lng: -34.557967,
            address: 'Avenida del Libertador 5851, CABA',
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
            imagesUrl: [
                'images/bilbao/residence/residence_01.jpg',
                'images/bilbao/residence/residence_02.jpg',
            ],
            text: [
                'Residence, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,consequatur totam? Neque est asperiores vero, nulla similiqueno strum non maxime. Labore consequuntur nobis sit molestiae consectetur totam quo aperiam dolorum.',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            ],
        },
        amenities: {
            imagesUrl: [
                'images/bilbao/amenities/amenities_01.jpg',
                'images/bilbao/amenities/amenities_02.jpg',
            ],
            text: [
                'Amenities, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,consequatur totam? Neque est asperiores vero, nulla similiqueno strum non maxime. Labore consequuntur nobis sit molestiae consectetur totam quo aperiam dolorum.',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            ],
        },
        location: {
            lat: -34.557967,
            lng: -58.44649,
            address: 'Avenida del Libertador 5851, CABA',
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
            imagesUrl: [
                'images/superi/residence/residence_01.jpg',
                'images/superi/residence/residence_02.jpg',
            ],
            text: [
                'Residence, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,consequatur totam? Neque est asperiores vero, nulla similiqueno strum non maxime. Labore consequuntur nobis sit molestiae consectetur totam quo aperiam dolorum.',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            ],
        },
        amenities: {
            imagesUrl: [
                'images/superi/amenities/amenities_01.jpg',
                'images/superi/amenities/amenities_02.jpg',
            ],
            text: [
                'Amenities, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,consequatur totam? Neque est asperiores vero, nulla similiqueno strum non maxime. Labore consequuntur nobis sit molestiae consectetur totam quo aperiam dolorum.',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            ],
        },
        location: {
            lat: -34.557967,
            lng: -58.44649,
            address: 'Avenida del Libertador 5851, CABA',
        },
        thumbnail: 'images/superi/thumbnail/thumbnail_01.jpg',
        logo: 'images/superi/logo/logo_01.png',
        blueprint: [
            {
                name: 'piso_01_unidad_01',
                // imageUrl:
                //     'images/superi/blueprint/blueprint_piso_01_unidad_01.jpg',
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
            // documents/superi/blueprint/superi_planos_35m2.pdf
        ],
    },

    {
        id: uuid(),
        name: 'LIB 5851',
        linkName: 'lib_5851',
        heroImage: 'images/lib_5851/heroImage/heroImage_01.jpg',
        category: 'touch',
        status: 'futuro lanzamiento',
        residence: {
            imagesUrl: [
                'images/lib_5851/residence/residence_01.jpg',
                'images/lib_5851/residence/residence_02.jpg',
            ],
            text: [
                'Residence, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,consequatur totam? Neque est asperiores vero, nulla similiqueno strum non maxime. Labore consequuntur nobis sit molestiae consectetur totam quo aperiam dolorum.',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            ],
        },
        amenities: {
            imagesUrl: [
                'images/lib_5851/amenities/amenities_01.jpg',
                'images/lib_5851/amenities/amenities_02.jpg',
            ],
            text: [
                'Amenities, Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,consequatur totam? Neque est asperiores vero, nulla similiqueno strum non maxime. Labore consequuntur nobis sit molestiae consectetur totam quo aperiam dolorum.',
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            ],
        },
        location: {
            lat: -34.557967,
            lng: -58.44649,
            address: 'Avenida del Libertador 5851, CABA',
        },
        thumbnail: 'images/lib_5851/thumbnail/thumbnail_01.jpg',
        logo: 'images/lib_5851/logo/logo_01.png',
        blueprint: [
            {
                name: 'piso_01_unidad_01',
                // imageUrl:
                //     'images/lib_5851/blueprint/blueprint_piso_01_unidad_01.jpg',
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
            // documents/lib_5851/blueprint/lib_5851_planos_35m2.pdf
        ],
    },
];
export default PROPERTIES_DATA;
