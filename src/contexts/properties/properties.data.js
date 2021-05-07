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
    },
];
export default PROPERTIES_DATA;
