"use client";

import { motion, type Variants } from "framer-motion";

const blobVariants: Variants = {
  animate: (i: number) => ({
    x: [0, 30 * (i % 2 ? -1 : 1), 0],
    y: [0, -25 * (i % 2 ? 1 : -1), 0],
    scale: [1, 1.15, 1],
    transition: { duration: 12 + i * 3, repeat: Infinity, ease: "easeInOut" },
  }),
};

const shapeVariants: Variants = {
  animate: (i: number) => ({
    rotate: [0, 360],
    transition: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
  }),
};

const floatVariants: Variants = {
  animate: (i: number) => ({
    y: [0, -18, 0],
    transition: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
  }),
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-surface-alt px-6 py-20">
      {/* Animated mesh blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {[
          { size: "h-72 w-72", pos: "left-[6%] top-[12%]", color: "bg-teal/12" },
          { size: "h-96 w-96", pos: "right-[6%] top-[15%]", color: "bg-brand/12" },
          { size: "h-80 w-80", pos: "left-[20%] bottom-[8%]", color: "bg-teal-light/10" },
          { size: "h-64 w-64", pos: "right-[18%] bottom-[10%]", color: "bg-brand/10" },
        ].map((b, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={blobVariants}
            animate="animate"
            className={`absolute ${b.size} ${b.pos} ${b.color} rounded-full blur-3xl`}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div variants={shapeVariants} custom={0} animate="animate" className="absolute left-[8%] top-[18%]">
          <div className="h-20 w-20 rounded-full border-2 border-brand/20" />
        </motion.div>
        <motion.div variants={shapeVariants} custom={1} animate="animate" className="absolute right-[10%] top-[16%]">
          <div className="h-14 w-14 rotate-45 rounded-2xl border-2 border-teal/20" />
        </motion.div>
        <motion.div variants={shapeVariants} custom={2} animate="animate" className="absolute bottom-[18%] left-[12%]">
          <div className="h-16 w-16 rounded-full border-2 border-dashed border-brand/20" />
        </motion.div>
        <motion.div variants={shapeVariants} custom={3} animate="animate" className="absolute bottom-[20%] right-[12%]">
          <svg width="56" height="50" viewBox="0 0 64 56" fill="none">
            <path d="M32 4L60 52H4L32 4Z" stroke="#13A6E8" strokeOpacity="0.2" strokeWidth="2" />
          </svg>
        </motion.div>

        {[
          { x: "26%", y: "22%" },
          { x: "74%", y: "30%" },
          { x: "18%", y: "66%" },
          { x: "82%", y: "70%" },
        ].map((d, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={floatVariants}
            animate="animate"
            className="absolute"
            style={{ left: d.x, top: d.y }}
          >
            <div className="h-2 w-2 rounded-full bg-brand/30" />
          </motion.div>
        ))}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#13A6E8 1px, transparent 1px), linear-gradient(90deg, #13A6E8 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-md text-center"
      >
        {/* 404 number */}
        <motion.p
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="text-8xl font-extrabold leading-none text-gradient md:text-9xl"
        >
          404
        </motion.p>

        <h1 className="mt-6 text-2xl font-extrabold text-ink md:text-3xl">
          Halaman Tidak Ditemukan
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
          Maaf, halaman yang Anda cari tidak ada atau sudah dipindahkan.
        </p>

        {/* Back button */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-glow"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Beranda
        </motion.a>
      </motion.div>
    </main>
  );
}
