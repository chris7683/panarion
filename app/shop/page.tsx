import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShoppingBag, MapPin, Phone, Mail, Package, ScrollText, GraduationCap, BookMarked, BookOpen, Heart, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Shop — Panarion Center",
  description:
    "Browse and purchase Panarion Center publications, patristic translations, and educational resources.",
};

const categories = [
  {
    title: "Patristic Texts",
    desc: "Critical translations of Church Fathers from Greek, Coptic, Syriac, and Latin.",
    Icon: ScrollText,
    count: "Series I",
    color: "bg-byzantine-600",
  },
  {
    title: "Academic Studies",
    desc: "Monographs and edited volumes on Eastern Christian theology and history.",
    Icon: GraduationCap,
    count: "Series II",
    color: "bg-gold-500",
  },
  {
    title: "Liturgical Heritage",
    desc: "Resources on Eastern Christian liturgy, hymnography, and worship.",
    Icon: BookMarked,
    count: "Series III",
    color: "bg-byzantine-700",
  },
  {
    title: "Educational Resources",
    desc: "Textbooks and materials for students from introductory to advanced levels.",
    Icon: BookOpen,
    count: "Series IV",
    color: "bg-gold-400",
  },
  {
    title: "Popular & Devotional",
    desc: "Accessible introductions to patristic wisdom for general readers.",
    Icon: Heart,
    count: "Series V",
    color: "bg-byzantine-500",
  },
  {
    title: "Free E-Books",
    desc: "Select digital publications available free of charge for all readers.",
    Icon: Download,
    count: "Digital",
    color: "bg-gray-600",
  },
];

const featured = [
  {
    title: "Letters of Saint Ignatius of Antioch",
    subtitle: "Translation & Critical Commentary",
    series: "Series I",
    seriesColor: "bg-byzantine-600",
    coverColor: "from-byzantine-700 to-byzantine-900",
  },
  {
    title: "On the Holy Spirit",
    subtitle: "Saint Basil the Great",
    series: "Series I",
    seriesColor: "bg-byzantine-600",
    coverColor: "from-byzantine-600 to-byzantine-800",
  },
  {
    title: "Lectures on the Faith",
    subtitle: "Saint Cyril of Alexandria",
    series: "Series I",
    seriesColor: "bg-byzantine-600",
    coverColor: "from-byzantine-800 to-byzantine-950",
  },
  {
    title: "Studies in Coptic Patristic Theology",
    subtitle: "Original Research Monograph",
    series: "Series II",
    seriesColor: "bg-gold-500",
    coverColor: "from-gold-600 to-gold-800",
  },
  {
    title: "Introduction to Ancient Greek",
    subtitle: "For New Testament & Patristics",
    series: "Series IV",
    seriesColor: "bg-gold-400",
    coverColor: "from-gold-500 to-gold-700",
  },
  {
    title: "The Fathers on Prayer",
    subtitle: "An Anthology for the Faithful",
    series: "Series V",
    seriesColor: "bg-byzantine-500",
    coverColor: "from-byzantine-500 to-byzantine-700",
  },
];

export default function ShopPage() {
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
          <p className="text-gold-300 text-sm font-semibold uppercase tracking-widest mb-3">Shop</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white max-w-2xl leading-tight mb-4">
            Browse Our Publications
          </h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
            Discover our full catalog of patristic translations, academic studies, and devotional
            resources — available at our Heliopolis center and online.
          </p>
        </div>
      </section>

      {/* Notice */}
      <section className="py-6 sm:py-10 bg-gold-50 border-b border-gold-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Package className="w-5 h-5 text-gold-600 shrink-0" />
              <p className="text-gold-800 text-sm font-medium">
                Our full online catalog is coming soon. For immediate orders, contact us directly or
                visit our Heliopolis location.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a
                href="tel:01220020525"
                className="flex items-center gap-2 px-4 py-2 bg-gold-400 hover:bg-gold-500 text-white font-semibold rounded-lg text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5" /> Call to Order
              </a>
              <a
                href="mailto:info@panarion.org"
                className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gold-50 border border-gold-300 text-gold-700 font-semibold rounded-lg text-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5" /> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
              Featured
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-byzantine-700 mb-4">
              Selected Publications
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A sample from our growing catalog. Contact us to order any title or inquire about our full collection.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((book) => (
              <div key={book.title} className="group bg-[#FAFAF8] border border-gray-100 hover:border-gold-300 rounded-2xl overflow-hidden transition-all hover:shadow-lg">
                {/* Book cover */}
                <div className={`bg-gradient-to-br ${book.coverColor} p-8 flex flex-col justify-between h-44 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 18v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/svg%3E")` }} />
                  <div className="font-serif text-5xl text-white/20 leading-none select-none">Π</div>
                  <div>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full text-white ${book.seriesColor} bg-opacity-80`}>
                      {book.series}
                    </span>
                  </div>
                </div>
                {/* Info */}
                <div className="p-5">
                  <h3 className="font-serif font-bold text-byzantine-700 text-base leading-snug mb-1">
                    {book.title}
                  </h3>
                  <p className="text-gray-400 text-xs mb-4">{book.subtitle}</p>
                  <a
                    href="mailto:info@panarion.org"
                    className="inline-flex items-center gap-1 text-gold-500 hover:text-gold-600 text-xs font-semibold transition-colors group-hover:gap-2"
                  >
                    Inquire to order <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 sm:py-20 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
              Catalog
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-byzantine-700 mb-4">
              Publication Categories
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Our publications span five distinct series, each designed to serve a different aspect of
              Eastern Christian patristic scholarship.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const Icon = cat.Icon;
              return (
                <div
                  key={cat.title}
                  className="group bg-white border border-gray-100 hover:border-gold-300 rounded-2xl p-6 transition-all hover:shadow-md cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl ${cat.color} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs bg-byzantine-50 text-byzantine-600 font-semibold px-2.5 py-1 rounded-full">
                      {cat.count}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-byzantine-700 text-lg mb-2">{cat.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{cat.desc}</p>
                  <div className="flex items-center gap-1 text-gold-500 text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                    Inquire <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="py-12 sm:py-20 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
                In-Store
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-byzantine-700 mb-5">
                Visit Our Heliopolis Center
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our full publication catalog is available at our headquarters in Korba, Heliopolis.
                Visit us to browse the complete collection, speak with our team, and take home
                publications that fit your needs.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-byzantine-700 text-sm">Address</div>
                    <div className="text-gray-500 text-sm">
                      7A Al-Sabbagh Street, off Al-Ahram Street, corner of Metro Market,
                      Korba – Heliopolis, Cairo (2nd Floor)
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                  <div>
                    <div className="font-semibold text-byzantine-700 text-sm">Phone</div>
                    <a href="tel:01220020525" className="text-gray-500 text-sm hover:text-byzantine-600 transition-colors">
                      +20 122 002 0525 / +20 22 414 6374
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold-400 shrink-0" />
                  <div>
                    <div className="font-semibold text-byzantine-700 text-sm">Email</div>
                    <a href="mailto:info@panarion.org" className="text-gray-500 text-sm hover:text-byzantine-600 transition-colors">
                      info@panarion.org
                    </a>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-byzantine-600 hover:bg-byzantine-700 text-white font-semibold rounded-xl text-sm transition-colors shadow-sm"
              >
                Get Directions <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-md">
              <div className="bg-byzantine-600 p-6">
                <ShoppingBag className="w-8 h-8 text-gold-400 mb-3" />
                <h3 className="font-serif font-bold text-white text-xl">Order by Phone or Email</h3>
                <p className="text-white/70 text-sm mt-2">
                  Can&apos;t visit in person? Call or email us with the title or series you&apos;re interested
                  in and we&apos;ll arrange delivery or pickup.
                </p>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { label: "Sales Line", value: "+20 122 002 0525", href: "tel:01220020525" },
                  { label: "Sales Line 2", value: "+20 22 414 6374", href: "tel:0224146374" },
                  { label: "Email", value: "info@panarion.org", href: "mailto:info@panarion.org" },
                  { label: "WhatsApp", value: "+20 122 002 0525", href: "https://wa.me/201220020525" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex justify-between items-center py-2.5 border-b border-gray-100 last:border-0 hover:text-byzantine-600 transition-colors group"
                  >
                    <span className="text-gray-400 text-xs">{item.label}</span>
                    <span className="font-medium text-byzantine-700 text-sm group-hover:text-gold-500 transition-colors">
                      {item.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
