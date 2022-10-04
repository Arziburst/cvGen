import { uniqueId } from 'lodash';

export const experienceInithialState = {
    title: 'experience',
    id:    uniqueId(),
    items: [
        {
            id:       uniqueId(),
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

