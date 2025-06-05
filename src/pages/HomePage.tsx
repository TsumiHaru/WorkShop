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
              <h1 className="mb-4 font-bold tracking-wider text-white text-8xl">
                MAX DEM
              </h1>
              <p className="text-xl text-pink-200">Chanteur Compositeur</p>
              <div className="max-w-2xl mx-auto mt-8 text-base text-center pointer-events-auto text-white/80">
                <h2 className="mb-2 text-2xl font-semibold">Bienvenue dans mon univers musical</h2>
                <p>
                  Ce portfolio est une invitation à découvrir mon univers musical, un espace où la passion pour la musique rencontre l'expression artistique. À travers ces pages, je vous propose de plonger dans mon parcours de chanteur et compositeur.<br /><br />
                  Vous y trouverez une collection de mes albums, chacun racontant une histoire unique, une émotion particulière. De mes premières compositions aux projets les plus récents, chaque note témoigne d'une évolution constante dans ma quête artistique.<br /><br />
                  Les photographies qui accompagnent cette présentation capturent des moments précieux : des performances live, des sessions d'enregistrement, des rencontres avec d'autres artistes. Elles offrent un aperçu intime de la vie d'un musicien, entre scène et studio.<br /><br />
                  Explorez, écoutez, et laissez-vous porter par les mélodies qui ont façonné mon parcours. Bienvenue dans mon monde musical.
                </p>
              </div>
            </motion.div>
          </div>
          <AlbumCard title="You Don't Know Me" image="/500455369_9867938859992636_8211285568910525065_n.jpg" color="#10b981" link="/green-album" />
          <AlbumCard title="Purple Sparkle" image="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23331466'/%3E%3C/svg%3E" color="#581c87" link="/purple-album" />
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