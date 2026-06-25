import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, MapPin, BookOpen, ScrollText } from "lucide-react";

export const metadata: Metadata = {
  title: "Publishing — Panarion Center",
  description:
    "Explore Panarion Center's publishing work: patristic translations, five book series, and distribution network.",
};

const series = [
  {
    id: "I",
    title: "Patristic Texts",
    description:
      "Critical translations of foundational patristic works from Greek, Syriac, Coptic, and Latin into Arabic, preserving both scholarly accuracy and spiritual depth.",
    color: "bg-byzantine-600",
    textColor: "text-white",
  },
  {
    id: "II",
    title: "Academic Studies",
    description:
      "Original research monographs and edited volumes on topics in Eastern Christian theology, Church history, and patristic thought by leading scholars.",
    color: "bg-gold-400",
    textColor: "text-white",
  },
  {
    id: "III",
    title: "Liturgical Heritage",
    description:
      "Resources related to Eastern Christian liturgy, hymnography, and worship — providing historical context and theological commentary for practitioners and researchers.",
    color: "bg-byzantine-700",
    textColor: "text-white",
  },
  {
    id: "IV",
    title: "Educational Resources",
    description:
      "Textbooks, workbooks, and learning materials designed for students at all levels — from introductory courses to advanced doctoral seminars.",
    color: "bg-gold-500",
    textColor: "text-white",
  },
  {
    id: "V",
    title: "Popular & Devotional",
    description:
      "Accessible introductions to patristic wisdom for general readers, offering the riches of the Church Fathers in clear, engaging contemporary language.",
    color: "bg-byzantine-500",
    textColor: "text-white",
  },
];

const languages = [
  { lang: "Ancient Greek", flag: "Α", desc: "New Testament & patristic originals" },
  { lang: "Coptic", flag: "Ⲁ", desc: "Egyptian church heritage" },
  { lang: "Syriac / Aramaic", flag: "ܐ", desc: "Eastern patristic tradition" },
  { lang: "Latin", flag: "A", desc: "Western patristic works" },
  { lang: "French", flag: "A", desc: "Modern scholarship" },
  { lang: "German", flag: "A", desc: "Academic sources" },
];

const distributionPoints = [
  { city: "Cairo — Heliopolis", address: "7A Al-Sabbagh St., Korba (our headquarters)", primary: true },
  { city: "Greater Cairo", address: "Partner bookstores and church bookshops" },
  { city: "Alexandria", address: "Select theological library partners" },
  { city: "Online (Worldwide)", address: "panarion.org Shop — shipping available" },
];

export default function PublishingPage() {
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
          <p className="text-gold-300 text-sm font-semibold uppercase tracking-widest mb-3">Publishing</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white max-w-2xl leading-tight mb-4">
            Bringing the Fathers' Voices to Every Reader
          </h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
            Our specialized translation team works from ancient and modern languages to produce
            academic publications of scientific accuracy, beautiful design, and lasting quality.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-14 items-center">
            <div>
              <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
                Our Approach
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-byzantine-700 mb-5 leading-tight">
                Translation as a Sacred Craft
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every translation produced by Panarion Center is the result of meticulous scholarly
                work. Our translators — all holding advanced academic credentials — work directly from
                the original texts, consulting the best critical editions and manuscript traditions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We believe a translation must be both faithful to the original and accessible to the
                reader. Our editorial process involves multiple review stages to ensure accuracy,
                consistency of terminology, and stylistic quality.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Each volume is accompanied by thorough introductions, footnotes, and scholarly
                apparatus, making our publications valuable both for personal reading and academic
                research.
              </p>
            </div>

            {/* Language badges */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Globe className="w-5 h-5 text-gold-500" />
                <p className="font-semibold text-byzantine-700">Languages We Translate From</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((l) => (
                  <div
                    key={l.lang}
                    className="flex items-center gap-3 bg-[#FAFAF8] border border-gray-100 rounded-xl p-3.5 hover:border-gold-300 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-byzantine-600 text-gold-400 font-serif font-bold flex items-center justify-center text-lg shrink-0 group-hover:bg-gold-400 group-hover:text-white transition-colors">
                      {l.flag}
                    </div>
                    <div>
                      <div className="font-semibold text-byzantine-700 text-sm">{l.lang}</div>
                      <div className="text-gray-400 text-xs">{l.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publishing Series */}
      <section className="py-12 sm:py-20 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Catalog
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-byzantine-700 mb-4">
              Five Publishing Series
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Each series addresses a distinct dimension of patristic heritage, together forming a
              comprehensive library for students, scholars, and faithful readers.
            </p>
            <div className="ornament max-w-xs mx-auto mt-4"><span className="text-gold-400 text-xs">✦</span></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {series.map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gold-300 hover:shadow-lg transition-all group"
              >
                <div className={`${s.color} p-6 flex items-center gap-4`}>
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <ScrollText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white/70 text-xs font-medium">Series {s.id}</div>
                    <div className={`${s.textColor} font-serif font-bold text-lg leading-tight`}>
                      {s.title}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
            {/* CTA card */}
            <div className="bg-byzantine-600 rounded-2xl p-6 flex flex-col justify-between border border-byzantine-500">
              <div>
                <BookOpen className="w-8 h-8 text-gold-400 mb-4" />
                <h3 className="font-serif font-bold text-white text-lg mb-2">Browse the Shop</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Browse our full catalog and order publications from any of our five series online
                  or visit us in Heliopolis.
                </p>
              </div>
              <Link
                href="/shop"
                className="mt-6 inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold text-sm transition-colors"
              >
                Visit Shop <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution */}
      <section id="distribution" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
                Distribution
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-byzantine-700 mb-5">
                Where to Find Our Books
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Panarion publications are available directly from our center, through partner
                bookstores and churches across Egypt, and online for international readers.
              </p>
              <div className="space-y-4">
                {distributionPoints.map((dp) => (
                  <div
                    key={dp.city}
                    className={`flex items-start gap-4 p-4 rounded-xl border transition-all ${
                      dp.primary
                        ? "bg-byzantine-50 border-byzantine-200"
                        : "bg-[#FAFAF8] border-gray-100 hover:border-gold-200"
                    }`}
                  >
                    <MapPin
                      className={`w-5 h-5 mt-0.5 shrink-0 ${
                        dp.primary ? "text-byzantine-600" : "text-gold-400"
                      }`}
                    />
                    <div>
                      <div className="font-semibold text-byzantine-700 text-sm">{dp.city}</div>
                      <div className="text-gray-500 text-xs">{dp.address}</div>
                    </div>
                    {dp.primary && (
                      <span className="ml-auto text-xs bg-byzantine-600 text-white px-2 py-0.5 rounded-full whitespace-nowrap">
                        HQ
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Publishing plan */}
            <div id="plan" className="bg-[#FAFAF8] rounded-3xl p-8 border border-gray-100">
              <h3 className="font-serif text-2xl font-bold text-byzantine-700 mb-5">
                Publishing Plan & Projects
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Our editorial calendar is driven by scholarly need and community demand. We actively
                seek partnerships with researchers, institutions, and churches to expand our catalog
                in areas where patristic literature remains underrepresented in Arabic.
              </p>
              <div className="space-y-3">
                {[
                  "Ongoing translations from 4th–8th century patristic corpus",
                  "Collaborations with international theological universities",
                  "Scholarships for emerging Arab-language patristic scholars",
                  "Annual publishing plan reviewed by our academic board",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="w-5 h-5 rounded-full bg-gold-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-gold-500 text-xs font-bold">›</span>
                    </span>
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-byzantine-600 hover:bg-byzantine-700 text-white font-semibold rounded-xl text-sm transition-colors"
              >
                Inquire About Publishing <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
