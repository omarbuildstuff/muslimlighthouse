import React, { useState, useRef, useEffect } from "react";
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Placeholder images for reviews (replace with real review images later)
const reviewImages = [
  "/images/ipreview1.png",
  "/images/ipreview2.png",
  "/images/ipreview3.png",
  "/images/ipreview4.jpeg",
  "/images/ipreview5.jpeg",
  "/images/ipreview6.jpeg",
  "/images/ipreview7.jpeg",
  "/images/ipreview8.jpeg",
  "/images/ipreview9.jpeg",
  "/images/ipreview10.jpeg",
];

export default function ReviewCarousel() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Accessibility: Focus trap
  useEffect(() => {
    if (open && dialogRef.current) {
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      function trap(e: KeyboardEvent) {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === first) {
              e.preventDefault();
              last.focus();
            }
          } else {
            if (document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        } else if (e.key === "Escape") {
          setOpen(false);
        }
      }
      document.addEventListener("keydown", trap);
      return () => document.removeEventListener("keydown", trap);
    }
  }, [open]);

  // Close on click outside
  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) setOpen(false);
  }

  const next = () => setCurrent((c) => (c + 1) % reviewImages.length);
  const prev = () => setCurrent((c) => (c - 1 + reviewImages.length) % reviewImages.length);

  // Render the popup in a portal to escape parent containers
  const modalRoot = typeof document !== 'undefined' ? document.body : null;
  
  // Handle close with animation
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-full flex flex-col items-center mt-10 mb-4 relative">
      <button
        className="flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-lighthouse-600 to-lighthouse-700 text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 focus-visible:ring-2 focus-visible:ring-lighthouse-300/60 transition-all duration-300 outline-none mt-10 mb-4"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        
        <span className="whitespace-nowrap">👉&nbsp;Hear from our students</span>
        <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" className="ml-2"><path d="M9 5l7 7-7 7"/></svg>
      </button>
      
      {modalRoot && ReactDOM.createPortal(
        <AnimatePresence>
          {open && (
          <motion.div
            ref={dialogRef}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-modal="true"
            role="dialog"
            tabIndex={-1}
            onClick={handleOverlayClick}
            initial={{ opacity: 0, backdropFilter: 'blur(0px)', backgroundColor: 'rgba(0, 0, 0, 0)' }}
            animate={{ 
              opacity: 1, 
              backdropFilter: 'blur(4px)',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              transition: { 
                duration: 0.3,
                backgroundColor: { duration: 0.3 }
              }
            }}
            exit={{ 
              opacity: 0, 
              backdropFilter: 'blur(0px)',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              transition: { 
                duration: 0.2,
                backgroundColor: { duration: 0.2 }
              }
            }}
          >
            <motion.div 
              className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-xl bg-white p-0 flex flex-col items-center"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { 
                  duration: 0.3, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.1 
                } 
              }}
              exit={{ 
                opacity: 0, 
                y: 20, 
                scale: 0.98,
                transition: { 
                  duration: 0.2,
                  ease: [0.4, 0, 0.6, 1] 
                } 
              }}
            >
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow hover:bg-lighthouse-100 transition z-10"
              onClick={handleClose}
              aria-label="Close reviews popup"
              autoFocus
            >
              <svg width="22" height="22" fill="none" stroke="#1e2a48" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <img
              src={reviewImages[current]}
              alt={`Review ${current + 1}`}
              className="w-full h-[55vw] max-h-[70vh] object-contain bg-white rounded-xl"
              style={{maxWidth: 600}}
            />
            <div className="flex justify-between items-center w-full px-4 mt-2 mb-3">
              <button
                className="bg-white/80 hover:bg-lighthouse-50 rounded-full p-2 shadow transition"
                onClick={prev}
                aria-label="Previous review"
                style={{visibility: reviewImages.length > 1 ? "visible" : "hidden"}}
              >
                <svg width="22" height="22" fill="none" stroke="#1e2a48" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
              </button>
              <div className="flex gap-2">
                {reviewImages.map((_, i) => (
                  <span
                    key={i}
                    className={`inline-block w-2.5 h-2.5 rounded-full ${i === current ? "bg-lighthouse-600" : "bg-lighthouse-200"}`}
                  />
                ))}
              </div>
              <button
                className="bg-white/80 hover:bg-lighthouse-50 rounded-full p-2 shadow transition"
                onClick={next}
                aria-label="Next review"
                style={{visibility: reviewImages.length > 1 ? "visible" : "hidden"}}
              >
                <svg width="22" height="22" fill="none" stroke="#1e2a48" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
            </motion.div>
          </motion.div>
          )}
        </AnimatePresence>,
        modalRoot
      )}
    </div>
  );
}
