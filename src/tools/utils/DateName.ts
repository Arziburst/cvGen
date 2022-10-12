export const getMountYear = (date: string | null) => {
    if (date === null) {
        return '';
    }

    const arrayMouth = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];

    const dateConstructor = new Date(date);
    const month = dateConstructor.getMonth();
    const mouthName = arrayMouth[ month ];
    const year = dateConstructor.getFullYear();
    const currentDate = `${mouthName}, ${year}`;

    return currentDate;
};
