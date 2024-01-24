import React, { useState, useEffect } from 'react';
import './MyCursor.css'; 

const MyCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setTrail(trail => [...trail.slice(-5), { x: e.clientX, y: e.clientY }]);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className="my-cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
            {trail.map((pos, index) => (
                <div key={index} className="spark" style={{ left: `${pos.x}px`, top: `${pos.y}px` }}></div>
            ))}
        </>
    );
};

export default MyCursor;
