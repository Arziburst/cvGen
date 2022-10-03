import { uniqueId } from 'lodash';

export const educationInithialState = {
    title: 'educations',
    id:    uniqueId(),
    items: [
        {
            id:     uniqueId(),
            fields: {
                position: {
                    id:   uniqueId(),
                    text: '',
                },
                location: {
                    id:   uniqueId(),
                    text: '',
                },
                date: {
                    id:   uniqueId(),
                    text: '',
                },
            },
            // descriptionList: [
            //     {
            //         id:          uniqueId(),
            //         description: '',
            //     },
            // ],
            // projects: [
            //     {
            //         id:               uniqueId(),
            //         name:             '',
            //         customer:         '',
            //         duration:         '',
            //         role:             '',
            //         responsibilities: '',
            //         teamSize:         '',
            //         stack:            '',
            //     },
            // ],         start here
        },
    ],
};

