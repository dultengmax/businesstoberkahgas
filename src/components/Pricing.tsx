"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { webPricing, posPricing } from "@/lib/content";

type Plan = (typeof webPricing)[number] | (typeof posPricing)[number];

function PlanCard({ plan, tab }: { plan: Plan; tab: "web" | "pos" }) {
  const isCustom = plan.price === "Hubungi Kami";

  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl border p-7 transition ${
        plan.highlight
          ? "border-transparent bg-gradient-navy text-white shadow-card"
          : "border-slate-100 bg-white shadow-soft hover:-translate-y-1 hover:shadow-card"
      }`}
    >
      {/* Highlight badge */}
      {plan.highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-glow">
          Best Seller
        </span>
      )}

      {/* POS badge */}
      {"badge" in plan && plan.badge && (
        <span className="absolute right-5 top-5 rounded-full bg-teal-soft px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-teal-dark">
          {plan.badge}
        </span>
      )}

      <h3 className={`text-lg font-bold ${plan.highlight ? "text-white" : "text-ink"}`}>
        {plan.name}
      </h3>

      <p className="mt-3">
        <span className={`text-2xl font-extrabold tracking-tight ${plan.highlight ? "text-gradient" : ""}`}>
          {plan.price}
        </span>
        <span className={`ml-1 text-xs ${plan.highlight ? "text-white/60" : "text-ink-muted"}`}>
          {plan.unit}
        </span>
      </p>

      <ul className="mt-6 flex-1 space-y-3 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] ${
              plan.highlight
                ? "bg-white/15 text-teal-light"
                : "bg-gradient-brand-soft text-brand"
            }`}>
              ✓
            </span>
            <span className={plan.highlight ? "text-white/85" : "text-ink-muted"}>
              {f}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={isCustom ? "#kontak" : "#kontak"}
        className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-semibold transition ${
          plan.highlight
            ? "bg-gradient-brand text-white hover:scale-105"
            : "border border-slate-200 text-ink hover:border-brand hover:text-brand"
        }`}
      >
        {isCustom ? "Hubungi Kami" : tab === "web" ? "Pilih Paket" : "Daftar Waitlist"}
      </a>
    </article>
  );
}

export default function Pricing() {
  const [tab, setTab] = useState<"web" | "pos">("web");
  const [active, setActive] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const plans = tab === "web" ? webPricing : posPricing;

  useEffect(() => {
    setActive(0);
    scrollerRef.current?.scrollTo({ left: 0 });
  }, [tab]);

  const goTo = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const next = Math.max(0, Math.min(index, plans.length - 1));
    const slide = el.children[next] as HTMLElement | undefined;
    if (!slide) return;
    const left = slide.offsetLeft - (el.clientWidth - slide.offsetWidth) / 2;
    el.scrollTo({ left, behavior: "smooth" });
    setActive(next);
  };

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let nearest = 0;
    let minDist = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const node = child as HTMLElement;
      const mid = node.offsetLeft + node.offsetWidth / 2;
      const dist = Math.abs(mid - center);
      if (dist < minDist) {
        minDist = dist;
        nearest = i;
      }
    });
    setActive(nearest);
  };

  return (
    <section id="harga" className="relative bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold text-brand">PRICING</span>
          <h2 className="mt-2 text-3xl font-extrabold text-ink md:text-4xl">
            Pilih Paket yang <span className="text-gradient">Cocok</span>
          </h2>
          <p className="mt-3 text-ink-muted">
            Harga transparan, tanpa biaya tersembunyi.
          </p>
        </motion.div>

        {/* Tab toggle */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-soft">
            <button
              type="button"
              onClick={() => setTab("web")}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                tab === "web" ? "bg-gradient-brand text-white shadow-glow" : "text-ink-muted hover:text-ink"
              }`}
            >
              Jasa Website
            </button>
            <button
              type="button"
              onClick={() => setTab("pos")}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                tab === "pos" ? "bg-gradient-brand text-white shadow-glow" : "text-ink-muted hover:text-ink"
              }`}
            >
              Langganan POS
            </button>
          </div>
        </div>

        {/* POS disclaimer */}
        {tab === "pos" && (
          <p className="mx-auto mt-6 max-w-xl text-center text-sm text-ink-muted">
            Aplikasi POS masih <strong className="text-teal-dark">early access</strong>. Harga di bawah adalah{" "}
            <strong className="text-ink">estimasi peluncuran</strong> dan dapat berubah.
            Daftar waitlist untuk jadi early adopter.
          </p>
        )}

        {/* Mobile carousel */}
        <div className="mt-12 md:hidden">
          <div
            ref={scrollerRef}
            onScroll={onScroll}
            className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 scrollbar-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {plans.map((plan) => (
              <div key={plan.name} className="w-[85%] shrink-0 snap-center pt-3">
                <PlanCard plan={plan} tab={tab} />
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Paket sebelumnya"
              onClick={() => goTo(active - 1)}
              disabled={active === 0}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-ink disabled:opacity-40"
            >
              ←
            </button>
            <div className="flex items-center gap-1.5">
              {plans.map((plan, i) => (
                <button
                  key={plan.name}
                  type="button"
                  aria-label={`Ke paket ${plan.name}`}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? "w-6 bg-gradient-brand" : "w-2 bg-brand/25"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Paket berikutnya"
              onClick={() => goTo(active + 1)}
              disabled={active === plans.length - 1}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-ink disabled:opacity-40"
            >
              →
            </button>
          </div>
        </div>

        {/* Desktop grid */}
        <div
          className={`mt-12 hidden gap-5 md:grid ${
            plans.length === 4 ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-2"
          }`}
        >
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} tab={tab} />
          ))}
        </div>

        {/* Waitlist CTA banner */}
        {tab === "pos" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-navy px-8 py-8 text-white md:flex-row md:items-center md:px-10"
          >
            <div className="max-w-2xl">
              <p className="flex items-center gap-2 text-lg font-bold md:text-xl">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-brand">🎁</span>
                Early Adopter Bonus
              </p>
              <p className="mt-2 text-sm text-white/70 md:text-base">
                Daftar waitlist sekarang untuk dapat harga spesial saat peluncuran resmi.
                Early adopter mendapat prioritas akses + diskon.
              </p>
            </div>
            <a
              href="#kontak"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-105"
            >
              Daftar Waitlist
              <span>↗</span>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
