import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

export const CoupleDetails: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-brand-lavender/15 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="text-center mb-16 sm:mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-4 mb-6 mt-4">
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-brand-plum/60" />
            <span className="text-brand-plum uppercase tracking-[0.5em] text-[11px] font-semibold font-sans drop-shadow-sm">The Protagonists</span>
            <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-brand-plum/60" />
          </div>
          <h2 className="text-5xl sm:text-7xl font-names text-stone-800 tracking-tight drop-shadow-sm">
            Ushan <span className="text-brand-plum font-light mx-2">&</span> Naduni
            <div className="text-3xl sm:text-5xl mt-4 font-sinhala text-stone-800 drop-shadow-sm">
              උෂාන් සහ නඳුනි
            </div>
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 relative z-10">
        {/* Groom Details (Left on Desktop, Bottom on Mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-center lg:text-right flex-1 lg:pr-10 order-1"
        >
          <div className="mb-4 flex flex-col items-center lg:items-end">
            <span className="text-brand-plum uppercase tracking-[0.4em] text-[10px] font-bold mb-3 block">The Groom</span>
            <p className="text-stone-500/90 font-sans text-xs sm:text-sm text-center lg:text-right">
              Mr. Ajith Lokuge &<br/>
              Mrs. Jeewanthi Kumari Lokuge
            </p>
            <p className="text-stone-500/90 font-sinhala text-sm sm:text-base mt-2 mb-4 text-center lg:text-right">
              ශ්‍රී ජයවර්ධනපුර කෝට්ටේ පදිංචි<br/>
              අජිත් ලොකුගේ මහතාගේ සහ<br/>
              ජීවන්ති කුමරි ලොකුගේ මහත්මියගේ<br/>
              ජ්‍යෙෂ්ඨ පුත්‍ර
            </p>
            <h3 className="text-4xl sm:text-5xl font-names text-stone-800 mb-1 drop-shadow-sm">Ushan</h3>
            <h4 className="text-3xl sm:text-4xl font-sinhala font-bold text-brand-plum drop-shadow-sm">උෂාන් විරාජ් ලොකුගේ</h4>
            <p className="text-brand-plum font-sinhala text-sm sm:text-base mt-3 text-center lg:text-right">
              (ප්‍රවීණ ජ්‍යොතිෂවේදී / වෛද්‍ය MBBS)
            </p>
          </div>
          <div className="hidden lg:flex justify-end mt-8">
            <Heart className="w-6 h-6 text-brand-lavender/60 fill-brand-lavender/20 transform hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </motion.div>

        {/* Center Couple Image (Arch Design) */}


        {/* Bride Details (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-center lg:text-left flex-1 lg:pl-10 order-2"
        >
          <div className="mb-4 flex flex-col items-center lg:items-start">
            <span className="text-brand-plum uppercase tracking-[0.4em] text-[10px] font-bold mb-3 block">The Bride</span>
            <p className="text-stone-500/90 font-sans text-xs sm:text-sm text-center lg:text-left">
              Mr. Samantha Liyanage &<br/>
              Mrs. Chandika Liyanage
            </p>
            <p className="text-stone-500/90 font-sinhala text-sm sm:text-base mt-2 mb-4 text-center lg:text-left">
              ගංගොඩවිල, නුගේගොඩ පදිංචි<br/>
              සමන්ත ලියනගේ මහතාගේ සහ<br/>
              චන්දිකා ලියනගේ මහත්මියගේ<br/>
              ආදරණීය දියණිය,
            </p>
            <h3 className="text-4xl sm:text-5xl font-names text-stone-800 mb-1 drop-shadow-sm">Naduni</h3>
            <h4 className="text-3xl sm:text-4xl font-sinhala font-bold text-brand-plum drop-shadow-sm">නඳුනි යශෝධරා ලියනගේ</h4>
            <p className="text-brand-plum font-sans text-xs sm:text-sm mt-3 text-center lg:text-left">
              (Manager in Financial Consulting)
            </p>
          </div>
          <div className="hidden lg:flex justify-start mt-8">
            <Heart className="w-6 h-6 text-brand-lavender/60 fill-brand-lavender/20 transform hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
