import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

interface InviteeBannerProps {
  inviteeName: string;
  eventLabel: string;
}

export const InviteeBanner: React.FC<InviteeBannerProps> = ({ inviteeName, eventLabel }) => {
  return (
    <div className="w-full bg-gradient-to-r from-[#5C0714] via-[#7A0A1C] to-[#5C0714] border-y border-[#D4AF37]/50 py-12 px-6 relative overflow-hidden shadow-sm">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >


          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display tracking-tight leading-[1.5] pt-3 pb-2 px-3 mb-2 bg-gradient-to-b from-[#F7E7A1] via-[#D4AF37] to-[#A67C1E] bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]">
            {inviteeName}
          </h2>

          <div className="flex items-center gap-4 justify-center max-w-xl mx-auto">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/70" />
            <p className="text-white/90 font-sans text-lg sm:text-xl font-medium tracking-wide">
              We warmly invite you to share the joy of our homecoming celebration.
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/70" />
          </div>

          <Heart className="w-5 h-5 text-[#D4AF37] mt-6 fill-[#D4AF37]/30 animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
};
