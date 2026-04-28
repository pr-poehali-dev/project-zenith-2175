import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/fd29a7e1-6622-4931-84f3-3a2ed16e7079/files/11e96773-61ec-4cf3-86c8-74dab98994a0.jpg"
          alt="Nail salon interior"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm uppercase tracking-widest opacity-70 mb-4">Мастер маникюра</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
          ВАЛЕРИЯ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-8">
          Идеальные ногти — ваша визитная карточка. Запишитесь к мастеру уже сегодня.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://t.me/Ccrystal_baby"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-3 uppercase text-sm tracking-wide hover:bg-transparent hover:text-white border border-white transition-all duration-300 cursor-pointer"
          >
            Записаться
          </a>
          <a
            href="https://t.me/Crystal_nailss"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white text-white px-8 py-3 uppercase text-sm tracking-wide hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
          >
            Работы мастера
          </a>
        </div>
      </div>
    </div>
  );
}