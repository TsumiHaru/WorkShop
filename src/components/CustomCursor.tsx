import React, { useEffect, useState } from 'react';
const CustomCursor = () => {
  const [position, setPosition] = useState({ 
    x: 0,
    y: 0
  });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).classList.contains('hoverable')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.body.style.cursor = 'none';
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, []);
  return <>
      <div className="fixed z-50 transition-transform duration-75 pointer-events-none cursor-dot" style={{
      left: `${position.x}px`,
      top: `${position.y}px`,
      transform: isClicking ? 'scale(0.8)' : isHovering ? 'scale(1.5)' : 'scale(1)'
    }} />
      <div className="fixed z-50 transition-transform duration-200 pointer-events-none cursor-ring" style={{
      left: `${position.x}px`,
      top: `${position.y}px`,
      transform: isHovering ? 'scale(1.8)' : 'scale(1)'
    }} />
    </>;
};
export default CustomCursor;