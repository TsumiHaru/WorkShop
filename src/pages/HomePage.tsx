import React, { useEffect, useRef } from 'react';
import HorizontalScroll from '../components/HorizontalScroll';
import AlbumCard from '../components/AlbumCard';
import { motion } from 'framer-motion';
const HomePage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Animation du fond avec des cœurs
  // Inspiré par: https://developer.mozilla.org/fr/docs/Web/API/Canvas_API
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const hearts: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
    }[] = [];
    // Augmentation du nombre de cœurs à 65
    for (let i = 0; i < 65; i++) {
      hearts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 12 + 8,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02
      });
    }
    // Fonction de dessin d'un cœur plus défini
    const drawHeart = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      // Dessin du cœur
      const scale = size / 30;
      ctx.scale(scale, scale);
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-15, -15, -15, 5, 0, 15);
      ctx.bezierCurveTo(15, 5, 15, -15, 0, 0);
      ctx.closePath();
      ctx.restore();
    };
    const animate = () => {
      // Effacement complet du canvas à chaque frame (sans effet de traînée)
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Fond violet foncé uni
      ctx.fillStyle = 'rgb(20, 5, 30)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      hearts.forEach(heart => {
        ctx.fillStyle = 'rgba(255, 182, 193, 0.4)';
        drawHeart(ctx, heart.x, heart.y, heart.size, heart.rotation);
        ctx.fill();
        heart.x += heart.speedX;
        heart.y += heart.speedY;
        heart.rotation += heart.rotationSpeed;
        if (heart.x < 0) heart.x = canvas.width;
        if (heart.x > canvas.width) heart.x = 0;
        if (heart.y < 0) heart.y = canvas.height;
        if (heart.y > canvas.height) heart.y = 0;
      });
      requestAnimationFrame(animate);
    };
    animate();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return <div className="relative w-full h-screen overflow-hidden home-page">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" />
      {/* Conteneur de défilement horizontal */}
      <HorizontalScroll>
        <div className="flex items-center h-full">
          <div className="relative flex items-center justify-center w-screen h-full">
            {/* Titre et description positionnés de manière à ne pas interférer avec le scroll */}
            <motion.div className="absolute z-10 text-center pointer-events-none" initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 1.5,
            ease: 'easeOut'
          }}>
              <div className="flex flex-col items-center justify-center gap-24 mt-10 md:flex-row">
                {/* Bloc titre et sous-titre */}
                <div className="flex flex-col items-center max-w-md md:items-start">
                  <h1 className="mb-4 font-bold tracking-wider text-center text-white text-8xl md:text-left">
                    MAX DEM
                  </h1>
                  <p className="text-xl text-center text-pink-200 md:text-left">Chanteur Compositeur</p>
                </div>
                {/* Bloc texte d'intro */}
                <div className="max-w-xl px-6 py-8 overflow-hidden text-base shadow-lg pointer-events-auto bg-black/40 backdrop-blur-sm rounded-xl text-white/90" style={{lineHeight: '1.8'}}>
                  <h2 className="mb-4 text-xl font-semibold text-center text-pink-100">À propos de l'artiste</h2>
                  <p className="mb-4 text-left break-words whitespace-normal">
                    Maxime Demeulemeester est un auteur-compositeur-interprète français qui mêle des mélodies pop à des tonalités à la fois vibrantes et mélancoliques. Sa musique reflète les hauts et les bas de la vie, avec des paroles qui explorent l'amour, la trahison, la joie et la colère.
                  </p>
                  <p className="mb-4 text-left break-words whitespace-normal">
                    Avec un style qui équilibre énergie colorée et émotions plus sombres, Max crée des chansons sincères et touchantes.
                  </p>
                  <p className="text-left break-words whitespace-normal">
                    Son objectif est simple : toucher les gens grâce à une musique qui parle au coeur.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <AlbumCard title="You Don't Know Me" image="/500455369_9867938859992636_8211285568910525065_n.jpg" color="#10b981" link="/green-album" />
          <AlbumCard title="Purple Sparkle" image="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%238C4F92'/%3E%3C/svg%3E" color="#581c87" link="/purple-album" />
          <AlbumCard title="Heart & Soul" image="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='black'/%3E%3Cpath d='M50,30 C45,25 35,25 30,35 C25,45 35,50 50,65 C65,50 75,45 70,35 C65,25 55,25 50,30 Z' fill='%23991b1b'/%3E%3C/svg%3E" color="#7f1d1d" link="/red-album" />
          <div className="w-[350px] h-full"></div>
        </div>
      </HorizontalScroll>
      {/* Indication de navigation */}
      <div className="fixed flex space-x-4 text-white transform -translate-x-1/2 pointer-events-none bottom-10 left-1/2 text-opacity-70">
        <div className="flex items-center">
          <span className="mr-2">←</span>
          <span>Glisser</span>
          <span className="ml-2">→</span>
        </div>
      </div>
    </div>;
};
export default HomePage;