import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [time, setTime] = useState(getTimeIn12HourFormat());

    function getTimeIn12HourFormat() {
        const currentTime = new Date();
        let hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert 24-hour time to 12-hour time
        return `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(getTimeIn12HourFormat());
        }, 1000); // Update every second

        return () => clearInterval(intervalId); // Cleanup
    }, []);

    return (
        <div className="font-bold text-6xl font-display text-primary-content h-96 flex justify-center items-center font-poiret-one">
            {time}
        </div>
    );
};

export default Clock;
