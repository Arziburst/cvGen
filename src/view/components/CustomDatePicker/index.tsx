// Core
import React, { FC, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as S from './styles';
import { useEducationField } from '../../../bus/client/educationFields';
// Types
type PropTypes = {
    dataStart: string | null
    id: string
    dateId: string
    dataEnd: string | null
}

export const CustomDatePicker: FC<PropTypes> = ({ dataEnd, dataStart, dateId, id }) => {
    const { handleChangeDateField } = useEducationField();

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
                        handleChangeDateField({
                            data: {
                                dateEnd:   dateEnd ? dateEnd.toDateString() : dateEnd,
                                id:        dateId,
                                dateStart: dateStart ? dateStart.toDateString() : dateStart,
                            },
                            educationId: id,
                            type:        'date',
                        });

                        return [ dateStart, dateEnd ];
                    });
                } }
            />
        </S.Container>
    );
};
