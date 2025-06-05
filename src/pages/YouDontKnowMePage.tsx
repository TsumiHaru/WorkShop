import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from 'lucide-react';

const YouDontKnowMePage = () => {
  return <div className="album-page w-full h-screen relative overflow-hidden bg-gradient-to-b from-emerald-900 to-emerald-700">
      {/* Bouton retour */}
      <motion.div className="absolute top-8 left-8 z-20" initial={{
      opacity: 0,
      x: -20
    }} animate={{
      opacity: 1,
      x: 0
    }} transition={{
      delay: 0.5
    }}>
        <Link to="/" className="hoverable flex items-center text-white bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
          <ArrowLeftIcon size={20} className="mr-2" />
          <span>Retour</span>
        </Link>
      </motion.div>
      {/* Contenu de l'album */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div className="max-w-4xl w-full mx-auto px-6 py-12 bg-black/20 backdrop-blur-sm rounded-xl text-white" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3
      }}>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div className="w-64 h-64 relative overflow-hidden rounded-lg" whileHover={{
            scale: 1.05
          }}>
              <img src="/500455369_9867938859992636_8211285568910525065_n.jpg" alt="You Don't Know Me Album" className="w-full h-full object-cover" />
            </motion.div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">You Don't Know Me</h1>
              <h2 className="text-2xl text-emerald-300 mb-6">Max Dem</h2>
              <div className="space-y-4">
                <p className="text-lg">
                  Premier titre de mon projet en préparation. Un album
                  introspectif sur la trahison et le fait d'être sous-estimé.
                </p>
                <div className="pt-6 space-y-2">
                  <div className="flex justify-between items-center py-2 border-b border-emerald-500/30 hoverable">
                    <span className="text-lg">1. You Don't Know Me</span>
                    <span>3:45</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-emerald-500/30 hoverable">
                    <span className="text-lg">2. Neon Reflections</span>
                    <span>4:12</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-emerald-500/30 hoverable">
                    <span className="text-lg">3. Emerald City</span>
                    <span>3:58</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-emerald-500/30 hoverable">
                    <span className="text-lg">4. Waves of Light</span>
                    <span>5:23</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-emerald-500/30 hoverable">
                    <span className="text-lg">5. Emerald Depths</span>
                    <span>4:07</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>;
};

export default YouDontKnowMePage;