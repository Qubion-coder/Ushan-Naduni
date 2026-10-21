import React, { useState, useRef } from "react";

interface VideoIntroProps {
  key?: React.Key;
  onComplete: () => void;
  onMusicStart?: () => void;
  event?: string | null;
  readyToTransition?: boolean;
}

export function VideoIntro({
  onComplete,
  onMusicStart,
  event = 'both',
  readyToTransition = true,
}: VideoIntroProps) {
  const [stage, setStage] = useState<'intro' | 'exiting'>('intro');
  const completedRef = useRef(false);

  const handleEnter = () => {
    if (!readyToTransition || completedRef.current) return;
    completedRef.current = true;
    
    if (onMusicStart) onMusicStart();
    
    setStage('exiting');
    window.setTimeout(() => onComplete(), 800); // 800ms fade/blur out match
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        .intro-scene {
          position: fixed;
          inset: 0;
          z-index: 100;
          min-height: 100vh;
          min-height: 100dvh;
          transition: opacity 1s ease, filter 1s ease;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .intro-scene.is-exiting {
          opacity: 0;
          filter: blur(15px);
          pointer-events: none;
        }
        
        .intro-video {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }
        
        .intro-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.2); /* Slight darkening for better button visibility */
          z-index: 2;
        }

        .intro-content {
          position: relative;
          z-index: 3;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          padding: 20px;
        }

        .view-invitation-btn {
          background: #7A0A1C;
          color: #ffffff;
          border: none;
          padding: 15px 40px;
          font-size: 18px;
          font-family: "Cormorant Garamond", serif;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(122,10,28, 0.45);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-top: auto;
          margin-bottom: 60px;
          font-weight: 600;
        }

        .view-invitation-btn:hover {
          transform: translateY(-2px);
          background: #5C0714;
          box-shadow: 0 12px 25px rgba(122,10,28, 0.65);
        }
        
        .view-invitation-btn:active {
          transform: translateY(1px);
        }
      `}</style>
      
      <div className={`intro-scene ${stage === 'exiting' ? 'is-exiting' : ''}`}>
        {stage === 'intro' && (
          <>
            <video 
              className="intro-video"
              src="/give_this_as_wedding_invitatio%20(online-video-cutter.com).mp4"
              autoPlay 
              muted 
              loop 
              playsInline
            />
            <div className="intro-overlay" />
            <div className="intro-content">
              <div className="mt-12 mb-auto text-white drop-shadow-md flex flex-col items-center">
                <p className="inline-block uppercase tracking-[0.4em] text-xs sm:text-sm font-bold mb-4 bg-[#5C0714] text-white px-6 py-2 rounded-full shadow-[0_8px_20px_rgba(92,7,20,0.45)]">Homecoming Invitation</p>
                <h1 className="font-names text-5xl sm:text-6xl lg:text-7xl drop-shadow-lg tracking-wide">Ushan & Naduni</h1>
              </div>
              <button className="view-invitation-btn" onClick={handleEnter}>
                View Invitation
              </button>
            </div>
          </>
        )}

      </div>
    </>
  );
}
