import React from 'react'
import { useDateTime } from '../../hooks/useDateTime';

export const Clock = () => {
    const {day,hour} = useDateTime();

    return (
        <div>
            <p>{day}, {hour}</p>
        </div>
    )
}
