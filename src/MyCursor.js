import React, { useState, useEffect } from 'react';
import './MyCursor.css'; 

const MyCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 }); // 커서 초기 위치 (0, 0)
    const [trail, setTrail] = useState([]); // 이동 경로 저장 (마지막 5개 위치만)

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY }); // 마우스의 현재 위치 저장
            setTrail(trail => [...trail.slice(-5), { x: e.clientX, y: e.clientY }]); // 마지막 5개 위치를 trail 상태에 저장
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className="my-cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div> {/* 커서 위치 렌더링 */}
            {/* {trail.map((pos, index) => (
                <div key={index} className="spark" style={{ left: `${pos.x}px`, top: `${pos.y}px` }}></div> // 반짝이 위치 렌더링
            ))} */}
        </>
    );
};

export default MyCursor;
