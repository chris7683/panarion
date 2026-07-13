import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Panarion Center",
  description:
    "Get in touch with Panarion Center. Visit us in Heliopolis, Cairo, or reach us by phone, email, WhatsApp, and social media.",
};

const contacts = [
  {
    icon: Phone,
    title: "Sales & General",
    lines: [
      { label: "+20 122 002 0525", href: "tel:01220020525" },
      { label: "+20 22 414 6374", href: "tel:0224146374" },
    ],
  },
  {
    icon: Phone,
    title: "Education Services",
    lines: [{ label: "+20 111 505 0135", href: "tel:01115050135" }],
  },
  {
    icon: Mail,
    title: "Email",
    lines: [
      { label: "info@panarion.org", href: "mailto:info@panarion.org" },
      { label: "panarionc@gmail.com", href: "mailto:panarionc@gmail.com" },
    ],
  },
];

const socials = [
  {
    name: "Facebook",
    handle: "panarion center for patristic heritage",
    href: "https://www.facebook.com/panarion",
    color: "bg-[#1877F2]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@panarion.center",
    href: "https://www.instagram.com/panarion.center",
    color: "bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "@PanarionCenter",
    href: "https://youtube.com/@PanarionCenter",
    color: "bg-[#FF0000]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    handle: "@panarioncnter",
    href: "https://t.me/panarioncnter",
    color: "bg-[#2CA5E0]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    handle: "+20 122 002 0525",
    href: "https://wa.me/201220020525",
    color: "bg-[#25D366]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-byzantine-600 pt-28 sm:pt-36 pb-12 sm:pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="label-caps text-gold-300 mb-4">Contact</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white max-w-2xl leading-tight mb-4">
            We Would Love to Hear From You
          </h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
            Whether you are interested in our publications, courses, or conferences — reach out
            and our team will be happy to assist you.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact cards */}
            <div className="lg:col-span-2 space-y-6">
              {/* Phone & Email */}
              <div className="grid sm:grid-cols-3 gap-5">
                {contacts.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div
                      key={c.title}
                      className="bg-parchment border border-gray-100 hover:border-gold-300 rounded-2xl p-5 transition-all hover:shadow-md"
                    >
                      <div className="w-10 h-10 rounded-xl bg-byzantine-600 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-gold-400" />
                      </div>
                      <div className="font-semibold text-byzantine-700 text-sm mb-2">{c.title}</div>
                      <div className="space-y-1">
                        {c.lines.map((l) => (
                          <a
                            key={l.label}
                            href={l.href}
                            className="block text-gray-500 text-xs hover:text-byzantine-600 transition-colors"
                          >
                            {l.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Address */}
              <div className="bg-parchment border border-gray-100 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-byzantine-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold-400" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-byzantine-700 mb-1">Visit Us in Heliopolis</div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-3">
                      7A Al-Sabbagh Street, off Al-Ahram Street,
                      corner of Metro Market, Korba – Heliopolis, Cairo, Egypt
                      <br />
                      <span className="text-byzantine-600 font-medium">(Second Floor)</span>
                    </p>
                    <a
                      href="https://maps.google.com/?q=Korba+Heliopolis+Cairo+Egypt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-byzantine-600 hover:text-gold-500 text-xs font-semibold transition-colors"
                    >
                      Open in Google Maps <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-parchment border border-gray-100 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-byzantine-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-byzantine-700 mb-3">Office Hours</div>
                    <div className="space-y-2 text-sm">
                      {[
                        { day: "Saturday – Thursday", hours: "10:00 AM – 6:00 PM" },
                        { day: "Friday", hours: "Closed" },
                      ].map((h) => (
                        <div key={h.day} className="flex justify-between gap-8">
                          <span className="text-gray-500">{h.day}</span>
                          <span className={`font-medium ${h.hours === "Closed" ? "text-red-400" : "text-byzantine-700"}`}>
                            {h.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-52 sm:h-64">
                <iframe
                  src="https://maps.google.com/maps?q=Korba+Heliopolis+Cairo+Egypt&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Panarion Center location"
                />
              </div>
            </div>

            {/* Social sidebar */}
            <div className="space-y-5">
              <div>
                <p className="label-caps text-gold-500 mb-4">
                  Follow Us
                </p>
                <div className="space-y-3">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-parchment border border-gray-100 hover:border-gray-200 hover:shadow-sm rounded-xl p-3.5 transition-all group"
                    >
                      <div className={`${s.color} w-9 h-9 rounded-lg flex items-center justify-center text-white shrink-0`}>
                        {s.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-byzantine-700 text-sm group-hover:text-byzantine-600 transition-colors">
                          {s.name}
                        </div>
                        <div className="text-gray-400 text-xs">{s.handle}</div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-300 ml-auto group-hover:text-gold-400 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact form */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="font-serif font-bold text-xl text-byzantine-700 mb-1">Send a Message</h3>
                <p className="text-gray-400 text-xs mb-5">We usually reply within one business day.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
