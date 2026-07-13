import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  MessageSquare,
  ShoppingBag,
  ArrowRight,
  Phone,
  Mail,
  Quote,
} from "lucide-react";

const testimonials = [
  {
    quote:
      "These translations have transformed my access to the Church Fathers. Panarion's scholarship is rigorous yet beautifully accessible.",
    name: "د. منى عزيز",
    nameEn: "Dr. Mona Aziz",
    role: "Professor of Patristic Studies, Cairo University",
  },
  {
    quote:
      "The Ancient Greek diploma gave me the tools to read the New Testament in its original language. An experience that changed my understanding of the faith.",
    name: "كريم فهمي",
    nameEn: "Karim Fahmy",
    role: "Seminary Student, Diocese of Heliopolis",
  },
  {
    quote:
      "Panarion Center fills a critical gap in Arabic-language patristic literature. Their work is invaluable for the entire Eastern Church.",
    name: "القس بيشوي ميخائيل",
    nameEn: "Rev. Fr. Bishoy Mikhail",
    role: "Archpriest, Church of St. George, Heliopolis",
  },
];

const stats = [
  { value: "2006", label: "Founded" },
  { value: "5",    label: "Series" },
  { value: "3",    label: "Languages" },
  { value: "100+", label: "Publications" },
];

const services = [
  {
    icon: BookOpen,
    title: "Publishing",
    description:
      "A specialized team handles translation from ancient and modern languages, delivering academic publications with scientific accuracy, high design quality, and meticulous printing.",
    href: "/publishing",
    accent: "bg-byzantine-600",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "The center offers a diploma on Christianity in the early ages, alongside specialized courses in Christian studies and ancient languages including Greek and Coptic.",
    href: "/education",
    accent: "bg-gold-500",
  },
  {
    icon: MessageSquare,
    title: "Discussions",
    description:
      "Organizing meetings and conferences on Eastern patristic heritage at the Center's headquarters and in various churches and dioceses across Egypt.",
    href: "/about#discussions",
    accent: "bg-byzantine-700",
  },
  {
    icon: ShoppingBag,
    title: "Shop",
    description:
      "Browse our curated collection of patristic publications, translations, and academic resources available for purchase online and at our Heliopolis location.",
    href: "/shop",
    accent: "bg-gold-600",
  },
];

const pillars = [
  {
    number: "I",
    title: "Authentic Heritage",
    desc: "Faithful connection to the Eastern Church tradition, ensuring every publication reflects scholarly accuracy and theological integrity.",
  },
  {
    number: "II",
    title: "Scholarly Excellence",
    desc: "Our team holds master's and doctoral degrees in theology from major international universities, guaranteeing academic rigor.",
  },
  {
    number: "III",
    title: "Broad Dissemination",
    desc: "Publishing across five distinct series and distributing through multiple channels to make patristic thought accessible to all.",
  },
  {
    number: "IV",
    title: "Research Support",
    desc: "Supporting emerging researchers through scholarships and conferences, nurturing the next generation of patristic scholars.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-byzantine-600">
        {/* Cross-pattern background */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-byzantine-900/85 via-byzantine-800/60 to-byzantine-600/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-28 sm:pb-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left — text */}
            <div>
              {/* Established badge */}
              <div className="inline-flex items-center gap-2 border border-gold-400/40 text-gold-300 px-4 py-1.5 rounded-full mb-7">
                <span className="font-cinzel text-[0.58rem] tracking-[0.18em] uppercase">
                  <span className="sm:hidden">Est. 2006 · Saint Cyril the Great</span>
                  <span className="hidden sm:inline">Est. July 10, 2006 · Feast of Saint Cyril the Great</span>
                </span>
              </div>

              {/* Name etymology — prominent display */}
              <div className="mb-5">
                <div className="flex items-baseline gap-3 sm:gap-4 flex-wrap mb-2">
                  <span className="font-cinzel text-gold-300 text-3xl sm:text-5xl font-semibold tracking-wide">
                    Panarion
                  </span>
                  <span className="font-serif italic text-gold-200/65 text-xl sm:text-3xl">
                    Πανάριον
                  </span>
                </div>
                <p className="font-cinzel text-white/35 text-[0.6rem] tracking-[0.2em] uppercase">
                  Center for Patristic Heritage
                  <span className="hidden sm:inline"> · مركز للتراث الآبائي</span>
                </p>
              </div>

              {/* Etymology explanation */}
              <div className="border-l-2 border-gold-400/40 pl-4 mb-7">
                <p className="text-white/80 text-sm sm:text-lg leading-relaxed mb-2 sm:mb-3">
                  From the Greek <em className="text-gold-300 font-serif">Πανάριον</em> — meaning{" "}
                  <em className="text-gold-200">&ldquo;medicine chest.&rdquo;</em> Saint Epiphanius
                  of Salamis used this title for his 4th-century work against heresies — each chapter
                  a medicine against spiritual poison.
                </p>
                <p className="text-white/55 text-xs sm:text-sm leading-relaxed hidden sm:block">
                  We carry this name with pride: aspiring to be a medicine cabinet for the mind and
                  heart through authentic Eastern Christian scholarship.
                </p>
              </div>

              <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/about"
                  className="px-7 py-3 bg-gold-400 hover:bg-gold-500 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-gold-400/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <span className="font-cinzel text-xs tracking-widest uppercase">Our Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/publishing"
                  className="px-7 py-3 bg-white/10 hover:bg-white/18 border border-white/25 text-white font-semibold rounded-lg transition-all backdrop-blur-sm text-center"
                >
                  <span className="font-cinzel text-xs tracking-widest uppercase">Publications</span>
                </Link>
              </div>

              {/* Mobile: compact quote bar */}
              <div className="lg:hidden mt-7 bg-white/8 rounded-xl p-4 border border-white/15 flex items-center gap-4">
                <span className="text-gold-400 text-2xl shrink-0">✝</span>
                <div>
                  <p className="font-serif italic text-gold-300 text-xs leading-snug">
                    &ldquo;Ἐν ἀρχῇ ἦν ὁ Λόγος&rdquo;
                  </p>
                  <p className="text-white/40 text-[10px] mt-0.5 font-cinzel tracking-wider uppercase">
                    John 1:1 — In the beginning was the Word
                  </p>
                </div>
              </div>
            </div>

            {/* Right — manuscript panel */}
            <div className="hidden lg:block">
              <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-8 text-white">
                <div className="text-center mb-6 pb-6 border-b border-white/10">
                  <div className="font-cinzel text-gold-400/30 text-7xl mb-2 leading-none select-none">Π</div>
                  <p className="font-serif text-2xl italic text-gold-300 leading-relaxed">
                    &ldquo;Ἐν ἀρχῇ ἦν ὁ Λόγος&rdquo;
                  </p>
                  <p className="font-cinzel text-white/35 text-[0.6rem] mt-2 tracking-[0.2em] uppercase">
                    John 1:1 — In the beginning was the Word
                  </p>
                </div>

                {/* Book series grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: "Patristic Texts",    sub: "Series I",   color: "bg-byzantine-800" },
                    { label: "Academic Studies",   sub: "Series II",  color: "bg-gold-700" },
                    { label: "Liturgical Heritage",sub: "Series III", color: "bg-byzantine-900" },
                    { label: "Educational",        sub: "Series IV",  color: "bg-gold-800" },
                  ].map((b) => (
                    <div key={b.label} className={`${b.color} rounded-xl p-3.5 border border-white/8`}>
                      <div className="font-cinzel text-gold-400/50 text-xs tracking-widest mb-2">{b.sub}</div>
                      <div className="text-white/90 text-xs font-medium leading-tight">{b.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-around text-center">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <div className="font-display text-2xl font-bold text-gold-400">{s.value}</div>
                      <div className="font-cinzel text-white/40 text-[0.55rem] tracking-widest uppercase mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-byzantine-900/90 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div className="grid grid-cols-4 gap-2 sm:gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-lg sm:text-3xl font-bold text-gold-400">{s.value}</div>
                  <div className="font-cinzel text-white/45 text-[0.5rem] sm:text-[0.6rem] tracking-widest uppercase mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── About Snippet ── */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div>
              <p className="label-caps text-gold-500 mb-4">Who We Are</p>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-byzantine-700 mb-5 leading-[1.15]">
                A Sanctuary of Eastern<br className="hidden sm:block" /> Christian Scholarship
              </h2>
              <div className="book-rule mb-6"><span className="text-gold-400 text-sm">✦</span></div>
              <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg">
                Founded in 2006, Panarion Center for Patristic Heritage is an Egyptian academic
                institution dedicated to the preservation and promotion of Eastern Christian patristic
                thought. Our researchers hold advanced degrees from leading international universities
                in theology, ancient languages, and Church history.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8 text-sm sm:text-base hidden sm:block">
                From translating ancient Greek and Coptic texts to organizing conferences in churches
                and dioceses across Egypt, we bridge millennia of Christian wisdom with the world of today.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-byzantine-600 font-semibold hover:text-gold-500 transition-colors group text-sm"
              >
                <span className="font-cinzel text-xs tracking-widest uppercase">Read Our Full Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Pillars grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              {pillars.map((p) => (
                <div
                  key={p.number}
                  className="bg-parchment border border-parchment-dark rounded-xl p-4 sm:p-6 hover:border-gold-300 hover:shadow-md transition-all group"
                >
                  <span className="font-cinzel text-lg sm:text-xl font-semibold text-gold-300 group-hover:text-gold-400 transition-colors">
                    {p.number}
                  </span>
                  <div className="w-8 h-px bg-gold-300/40 my-2" />
                  <h3 className="font-serif font-semibold text-byzantine-700 mb-1 text-sm sm:text-base leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed line-clamp-3 sm:line-clamp-none">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-16 sm:py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <p className="label-caps text-gold-500 mb-4">What We Offer</p>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-byzantine-700 mb-5">
              Our Core Services
            </h2>
            <div className="ornament max-w-xs mx-auto"><span className="text-gold-400 text-sm">✦</span></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={svc.title}
                  href={svc.href}
                  className="group bg-white rounded-xl p-5 sm:p-7 border border-parchment-dark hover:border-gold-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg ${svc.accent} flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-serif font-bold text-byzantine-700 text-base sm:text-xl mb-1 sm:mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed flex-1 line-clamp-3 sm:line-clamp-none">{svc.description}</p>
                  <div className="flex items-center gap-1.5 text-gold-500 font-cinzel text-[0.6rem] tracking-widest uppercase mt-3 sm:mt-5 group-hover:gap-2 transition-all">
                    <span className="hidden sm:inline">Learn more</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Panarion Etymology Spotlight ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="label-caps text-gold-500 mb-4">The Name</p>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-byzantine-700 mb-2">
              What is a <em>Panarion</em>?
            </h2>
            <div className="ornament max-w-xs mx-auto mt-4"><span className="text-gold-400 text-sm">✦</span></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 items-start">
            {/* Greek column */}
            <div className="md:col-span-1 bg-byzantine-600 rounded-2xl p-6 sm:p-8 text-white text-center">
              <div className="font-cinzel text-gold-300/30 text-6xl sm:text-8xl font-bold leading-none mb-3 sm:mb-4 select-none">Π</div>
              <div className="font-serif italic text-gold-300 text-2xl sm:text-3xl mb-2">Πανάριον</div>
              <div className="font-cinzel text-white/40 text-[0.6rem] tracking-[0.2em] uppercase mb-4">Panarion</div>
              <div className="book-rule my-4">
                <span className="text-gold-400/60 text-xs">·</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed italic font-serif">
                &ldquo;Medicine chest&rdquo; — a box of remedies carried by physicians in antiquity.
              </p>
            </div>

            {/* Text columns */}
            <div className="md:col-span-2 space-y-5">
              <div className="bg-parchment rounded-xl p-6 border border-parchment-dark">
                <p className="font-cinzel text-gold-500 text-[0.65rem] tracking-[0.2em] uppercase mb-3">The Saint</p>
                <p className="text-gray-700 leading-relaxed text-base">
                  <strong className="text-byzantine-700 font-serif text-lg">Saint Epiphanius of Salamis</strong>{" "}
                  (315–403 AD) gave this title to his monumental work against heresies. Just as a
                  medicine chest holds cures against bodily disease, his <em>Panarion</em> held
                  eighty remedies against the poisons of false teaching.
                </p>
              </div>
              <div className="bg-parchment rounded-xl p-6 border border-parchment-dark">
                <p className="font-cinzel text-gold-500 text-[0.65rem] tracking-[0.2em] uppercase mb-3">Our Mission</p>
                <p className="text-gray-700 leading-relaxed text-base">
                  We carry this name with pride, aspiring to be a medicine cabinet for the{" "}
                  <em className="text-byzantine-600">mind and the heart</em> — offering the cure
                  of authentic patristic wisdom to everyone who seeks it, through publishing,
                  education, and scholarly engagement.
                </p>
              </div>
              <div className="flex items-start gap-4 p-5 bg-byzantine-50 rounded-xl border border-byzantine-100">
                <span className="text-gold-400 text-2xl shrink-0">✝</span>
                <p className="font-serif italic text-byzantine-700 text-base leading-relaxed">
                  &ldquo;Just as a pharmacy is a medicine cabinet for bodily diseases,{" "}
                  <em>Panarion</em>{" "}aspires to be a medicine cabinet for the mind and the heart —
                  offering the cure of authentic patristic wisdom.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-16 sm:py-24 bg-byzantine-600 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="label-caps text-gold-300 mb-4">Testimonials</p>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Voices from Our Community
            </h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:mx-0 md:px-0">
            {testimonials.map((t) => (
              <div
                key={t.nameEn}
                className="flex-shrink-0 w-[82vw] sm:w-[60vw] md:w-auto snap-start bg-white/8 backdrop-blur-sm border border-white/15 rounded-xl p-7 flex flex-col"
              >
                <Quote className="w-5 h-5 text-gold-400 mb-5 shrink-0 opacity-70" />
                <p className="text-white/85 text-sm sm:text-base leading-relaxed flex-1 font-serif italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="font-arabic text-gold-300 text-sm">{t.name}</div>
                  <div className="font-cinzel text-white/40 text-[0.6rem] tracking-wider uppercase mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-white/25 font-cinzel text-[0.55rem] tracking-widest uppercase text-center mt-5 md:hidden">
            Swipe to read more
          </p>
        </div>
      </section>

      {/* ── Featured Program ── */}
      <section className="py-16 sm:py-24 bg-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-byzantine-50 border border-byzantine-100 text-byzantine-600 px-4 py-1.5 rounded-full mb-6">
                <span className="font-cinzel text-[0.6rem] tracking-[0.18em] uppercase">Now Enrolling</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-byzantine-700 mb-4 leading-[1.15]">
                Diploma in Ancient Greek
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Deepen your understanding of the original language of the New Testament and patristic
                writings. Classes prepared and taught by Dr. Gerges Boshri, beginning each February.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Read the New Testament in its original Greek",
                  "Access patristic texts in their source language",
                  "Structured curriculum for all levels",
                  "Certificates upon completion",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="w-5 h-5 rounded-full bg-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 12 12">
                        <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/education"
                  className="px-7 py-3 bg-byzantine-600 hover:bg-byzantine-700 text-white font-semibold rounded-lg transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <span className="font-cinzel text-xs tracking-widest uppercase">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:01220020525"
                  className="px-7 py-3 bg-white hover:bg-parchment border border-parchment-dark text-byzantine-700 font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-gold-500" />
                  <span className="font-cinzel text-xs tracking-widest uppercase">Reserve a Spot</span>
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-byzantine-600 rounded-2xl p-10 text-white">
                <div className="font-cinzel text-6xl font-bold text-gold-400 mb-2 text-center tracking-widest">
                  Α Β Γ
                </div>
                <div className="font-cinzel text-4xl font-bold text-white/40 mb-8 text-center tracking-widest">
                  Δ Ε Ζ
                </div>
                <div className="space-y-3 text-sm text-white/60">
                  {[
                    ["Language",   "Ancient Greek (Koine)"],
                    ["Instructor", "Dr. Gerges Boshri"],
                    ["Starts",     "February"],
                    ["Contact",    "01220020525"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between py-2 border-b border-white/10 last:border-0">
                      <span className="font-cinzel text-[0.6rem] tracking-wider uppercase text-white/40">{k}</span>
                      <span className="text-white font-medium text-xs">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA / Contact strip ── */}
      <section className="py-12 sm:py-18 bg-white border-t border-parchment-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="label-caps text-gold-500 mb-4">Get in Touch</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-byzantine-700 mb-3">
            Ready to Explore Patristic Heritage?
          </h2>
          <div className="ornament max-w-xs mx-auto mb-6"><span className="text-gold-400 text-sm">✦</span></div>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto leading-relaxed">
            Reach out by phone, email, or visit us in Heliopolis. We are happy to guide you to the
            right publication, course, or resource.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@panarion.org"
              className="flex items-center gap-2 px-6 py-3 bg-parchment hover:bg-parchment-dark border border-parchment-dark text-byzantine-700 font-medium rounded-lg transition-all text-sm"
            >
              <Mail className="w-4 h-4 text-gold-500" />
              <span className="font-cinzel text-[0.65rem] tracking-wider uppercase">info@panarion.org</span>
            </a>
            <a
              href="tel:01220020525"
              className="flex items-center gap-2 px-6 py-3 bg-parchment hover:bg-parchment-dark border border-parchment-dark text-byzantine-700 font-medium rounded-lg transition-all text-sm"
            >
              <Phone className="w-4 h-4 text-gold-500" />
              <span className="font-cinzel text-[0.65rem] tracking-wider uppercase">+20 122 002 0525</span>
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 bg-byzantine-600 hover:bg-byzantine-700 text-white font-semibold rounded-lg transition-all text-sm shadow-md"
            >
              <span className="font-cinzel text-[0.65rem] tracking-wider uppercase">Full Contact Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
