import React, { FC } from 'react';

type propTypes = {
    children: React.ReactNode
}

export const List: FC<propTypes> = ({ children }) => <ul>{children}</ul>;
