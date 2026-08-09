"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-surface-alt py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-ink md:text-4xl">
            Pertanyaan Umum (FAQ)
          </h2>
          <p className="mt-3 text-ink-muted">
            Jawaban singkat untuk pertanyaan yang sering diajukan.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-ink">{item.q}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-slate-50 px-6 pb-5 pt-3 text-sm leading-relaxed text-ink-muted">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
