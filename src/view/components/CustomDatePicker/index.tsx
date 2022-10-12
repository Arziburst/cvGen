// Core
import React, { FC, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import * as S from './styles';
import { useEducationField } from '../../../bus/client/educationFields';
import { useExperienceFields } from '../../../bus/client/experienceFields';

// Types
type PropTypes = {
    dataStart: string | null
    id: string
    dateId: string
    dataEnd: string | null
    typeField: 'education' | 'experience' | 'project'
}

export const CustomDatePicker: FC<PropTypes> = ({
    dataEnd,
    dataStart,
    dateId,
    id,
    typeField }) => {
    const { handleChangeDateField } = useEducationField();
    const { handleChangeExperienceDateField } = useExperienceFields();
    const { handleChangeFieldInProjectBlock } = useExperienceFields();

    const dataFilteredStart = typeof dataStart === 'string' ? new Date(dataStart) : dataStart;
    const dataFilteredEnd = typeof dataEnd === 'string' ? new Date(dataEnd) : dataEnd;

    const [ dateRange, setDateRange ] = useState<[Date | null, Date | null]>([ dataFilteredStart, dataFilteredEnd ]);

    const [ startDate, endDate ] = dateRange;

    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear());

    return (
        <S.Container>
            <ReactDatePicker
                scrollableYearDropdown
                selectsRange
                showYearDropdown
                dateFormat = 'MMMM, yyyy'
                endDate = { endDate }
                fixedHeight = { false }
                maxDate = { maxDate }
                placeholderText = 'Select date range...'
                startDate = { startDate }
                todayButton = 'Today'
                yearDropdownItemNumber = { 60 }
                onChange = { ([ dateStart, dateEnd ]) => {
                    setDateRange(() => {
                        // eslint-disable-next-line no-nested-ternary
                        typeField === 'education'
                            ?                                 handleChangeDateField({
                                data: {
                                    dateEnd:   dateEnd ? dateEnd.toDateString() : dateEnd,
                                    id:        dateId,
                                    dateStart: dateStart ? dateStart.toDateString() : dateStart,
                                },
                                educationId: id,
                                type:        'date',
                            })
                            // eslint-disable-next-line no-nested-ternary
                            : typeField === 'experience'
                                ? handleChangeExperienceDateField({
                                    type: 'date',
                                    data: {
                                        dateEnd:   dateEnd ? dateEnd.toDateString() : dateEnd,
                                        id:        dateId,
                                        dateStart: dateStart ? dateStart.toDateString() : dateStart,
                                    },
                                    id,
                                })
                                : typeField === 'project'
                                    ? handleChangeFieldInProjectBlock({
                                        data: {
                                            dateEnd:   dateEnd ? dateEnd.toDateString() : dateEnd,
                                            id:        dateId,
                                            dateStart: dateStart ? dateStart.toDateString() : dateStart,
                                        },
                                        experienceId: id,
                                        projectId:    dateId,
                                        type:         'duration',
                                    }) : null;

                        return [ dateStart, dateEnd ];
                    });
                } }
            />
        </S.Container>
    );
};
