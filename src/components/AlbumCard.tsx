import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
interface AlbumCardProps {
  title: string;
  image: string;
  color: string;
  link: string;
}
const AlbumCard: React.FC<AlbumCardProps> = ({
  title,
  image,
  color,
  link
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(link);
  };
  return <motion.div className="album-card hoverable relative mx-8 first:ml-32 last:mr-32 cursor-none" whileHover={{
    scale: 1.05
  }} whileTap={{
    scale: 0.95
  }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={handleClick}>
      <div className="album-card-inner h-[500px] w-[350px] rounded-lg overflow-hidden relative" style={{
      boxShadow: isHovered ? `0 0 25px ${color}` : `0 0 15px rgba(0,0,0,0.3)`
    }}>
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700" style={{
        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
      }} />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`} />
        <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-500 ${isHovered ? 'translate-y-0' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold">{title}</h3>
          <div className="mt-2 w-16 h-1 bg-white rounded-full" />
        </div>
      </div>
    </motion.div>;
};
export default AlbumCard;