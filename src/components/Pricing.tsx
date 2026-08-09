"use client";

import { useEffect, useRef, useState } from "react";
import { webPricing, posPricing } from "@/lib/content";

type Plan = (typeof webPricing)[number] | (typeof posPricing)[number];

function PlanCard({
  plan,
  tab,
  className = "",
}: {
  plan: Plan;
  tab: "web" | "pos";
  className?: string;
}) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl border p-7 transition ${
        plan.highlight
          ? "border-brand bg-brand text-white shadow-card"
          : "border-slate-100 bg-white shadow-soft"
      } ${className}`}
    >
      {plan.highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ink px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          Best Seller
        </span>
      )}
      <h3
        className={`text-lg font-bold ${
          plan.highlight ? "text-white" : "text-ink"
        }`}
      >
        {plan.name}
      </h3>
      <p className="mt-3">
        <span className="text-2xl font-bold tracking-tight">{plan.price}</span>
        <span
          className={`ml-1 text-xs ${
            plan.highlight ? "text-white/70" : "text-ink-muted"
          }`}
        >
          {plan.unit}
        </span>
      </p>
      <ul className="mt-6 flex-1 space-y-2.5 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span
              className={`mt-0.5 ${
                plan.highlight ? "text-white" : "text-brand"
              }`}
            >
              ✓
            </span>
            <span
              className={plan.highlight ? "text-white/90" : "text-ink-muted"}
            >
              {f}
            </span>
          </li>
        ))}
      </ul>
      <a
        href="#kontak"
        className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-semibold transition ${
          plan.highlight
            ? "bg-white text-brand hover:bg-brand-soft"
            : "bg-brand text-white hover:bg-brand-dark"
        }`}
      >
        {tab === "web" ? "Pilih Paket" : "Daftar Waitlist"}
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
    const left =
      slide.offsetLeft - (el.clientWidth - slide.offsetWidth) / 2;
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
    <section id="harga" className="bg-surface-alt py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-ink md:text-4xl">
            Pilih Paket yang Cocok
          </h2>
          <p className="mt-3 text-ink-muted">
            Harga transparan, tanpa biaya tersembunyi.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-soft">
            <button
              type="button"
              onClick={() => setTab("web")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                tab === "web"
                  ? "bg-brand text-white"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              Jasa Website
            </button>
            <button
              type="button"
              onClick={() => setTab("pos")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                tab === "pos"
                  ? "bg-brand text-white"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              Langganan POS
            </button>
          </div>
        </div>

        {tab === "pos" && (
          <p className="mx-auto mt-6 max-w-xl text-center text-sm text-ink-muted">
            Aplikasi POS masih early access. Harga di bawah adalah{" "}
            <strong className="text-ink">estimasi peluncuran</strong> dan dapat
            berubah. Daftar waitlist untuk jadi early adopter.
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
              <div
                key={plan.name}
                className="w-[85%] shrink-0 snap-center pt-3"
              >
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
                    i === active ? "w-6 bg-brand" : "w-2 bg-brand/25"
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
            plans.length === 4
              ? "md:grid-cols-2 xl:grid-cols-4"
              : "md:grid-cols-3"
          }`}
        >
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} tab={tab} />
          ))}
        </div>

        {/* POS promo banner */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl bg-brand px-8 py-8 text-white md:flex-row md:items-center md:px-10">
          <div className="max-w-2xl">
            <p className="text-lg font-bold md:text-xl">
              Layanan POS (Early Access)
            </p>
            <p className="mt-2 text-sm text-white/85 md:text-base">
              Dapatkan harga spesial mulai dari Rp 59.000/bln untuk early
              adopter. Cocok untuk toko yang ingin mencatat transaksi lebih
              rapi.
            </p>
          </div>
          <a
            href="#kontak"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand-soft"
          >
            Daftar Sekarang
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
