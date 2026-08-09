import { contact } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-surface-alt py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="#" className="text-xl font-bold tracking-tight text-ink">
            <span className="text-brand">busi</span>ness
          </a>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
            Bisnis To Berkah membantu UMKM naik kelas lewat website profesional
            dan aplikasi kasir (POS) yang mudah dipakai.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold text-ink">Links</p>
          <ul className="mt-4 space-y-2 text-sm text-ink-muted">
            <li>
              <a href="#tentang" className="hover:text-brand">
                About
              </a>
            </li>
            <li>
              <a href="#layanan" className="hover:text-brand">
                Services
              </a>
            </li>
            <li>
              <a href="#harga" className="hover:text-brand">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold text-ink">Sosmed</p>
          <ul className="mt-4 space-y-2 text-sm text-ink-muted">
            <li>
              <a href="#portofolio" className="hover:text-brand">
                Portofolio
              </a>
            </li>
            <li>
              <a href="#kontak" className="hover:text-brand">
                Contact
              </a>
            </li>
            <li>
              <a
                href={`https://instagram.com/${contact.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand"
              >
                {contact.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-slate-200 px-6 pt-6 text-center text-xs text-ink-light">
        © {new Date().getFullYear()} Bisnis To Berkah. Semua hak cipta
        dilindungi.
      </div>
    </footer>
  );
}
