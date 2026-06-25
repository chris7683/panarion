import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  MessageSquare,
  ShoppingBag,
  ArrowRight,
  Phone,
  Mail,
  Star,
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
  { value: "5", label: "Publishing Series" },
  { value: "3", label: "Languages" },
  { value: "100+", label: "Publications" },
];

const services = [
  {
    icon: BookOpen,
    title: "Publishing",
    description:
      "A specialized team handles translation from ancient and modern languages, delivering academic publications with scientific accuracy, high design quality, and meticulous printing.",
    href: "/publishing",
    color: "from-byzantine-600 to-byzantine-700",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "The center offers a diploma on Christianity in the early ages, alongside specialized courses in Christian studies and ancient languages including Greek and Coptic.",
    href: "/education",
    color: "from-gold-400 to-gold-500",
  },
  {
    icon: MessageSquare,
    title: "Academic Discussions",
    description:
      "Organizing meetings and conferences on Eastern patristic heritage at the Center's headquarters and in various churches and dioceses across Egypt.",
    href: "/about#discussions",
    color: "from-byzantine-500 to-byzantine-600",
  },
  {
    icon: ShoppingBag,
    title: "Shop",
    description:
      "Browse our curated collection of patristic publications, translations, and academic resources available for purchase online and at our Heliopolis location.",
    href: "/shop",
    color: "from-gold-500 to-gold-600",
  },
];

const pillars = [
  {
    number: "01",
    title: "Authentic Heritage",
    desc: "Faithful connection to the Eastern Church tradition, ensuring every publication reflects scholarly accuracy and theological integrity.",
  },
  {
    number: "02",
    title: "Scholarly Excellence",
    desc: "Our team holds master's and doctoral degrees in theology from major international universities, guaranteeing academic rigor.",
  },
  {
    number: "03",
    title: "Broad Dissemination",
    desc: "Publishing across five distinct series and distributing through multiple channels to make patristic thought accessible to all.",
  },
  {
    number: "04",
    title: "Research Support",
    desc: "Supporting emerging researchers through scholarships and conferences, nurturing the next generation of patristic scholars.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-byzantine-600">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-byzantine-900/80 via-byzantine-700/60 to-byzantine-600/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gold-400/20 border border-gold-400/40 text-gold-300 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
                <Star className="w-3 h-3 fill-current" />
                Established July 10, 2006 — Feast of Saint Cyril the Great
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2">
                Panarion Center
                <span className="block text-gold-400">for Patristic Heritage</span>
              </h1>
              <p className="font-arabic text-gold-300/80 text-xl mb-6">مركز باناريون للتراث الآبائي</p>

              <p className="text-white/80 text-lg leading-relaxed mb-4">
                <span className="text-gold-300 font-medium italic">Panarion</span> — from the Greek
                Πανάριον, meaning &quot;medicine chest.&quot; Saint Epiphanius used this word in the 4th century
                for his work against heresies, symbolizing spiritual healing.
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-10">
                We aspire to be a medicine cabinet for the mind and heart — disseminating authentic
                Eastern Christian patristic thought through publishing, education, and academic engagement.
              </p>

              <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/about"
                  className="px-6 py-3 bg-gold-400 hover:bg-gold-500 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-gold-400/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Discover Our Story <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/publishing"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-xl transition-all backdrop-blur-sm text-center text-sm sm:text-base"
                >
                  Our Publications
                </Link>
              </div>

              {/* Mobile-only: compact decorative quote bar */}
              <div className="lg:hidden mt-6 bg-white/10 rounded-xl p-4 border border-white/20 flex items-center gap-4">
                <span className="text-gold-400 text-3xl shrink-0">✝</span>
                <div>
                  <p className="font-serif italic text-gold-300 text-xs leading-snug">
                    &ldquo;Ἐν ἀρχῇ ἦν ὁ Λόγος&rdquo;
                  </p>
                  <p className="text-white/45 text-[10px] mt-0.5">John 1:1 — In the beginning was the Word</p>
                </div>
              </div>
            </div>

            {/* Right — decorative manuscript panel */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-white">
                {/* Cross + Greek scripture */}
                <div className="text-center mb-6">
                  <div className="text-gold-400 text-5xl mb-3">✝</div>
                  <p className="font-serif text-2xl italic text-gold-300 leading-relaxed">
                    &ldquo;Ἐν ἀρχῇ ἦν ὁ Λόγος&rdquo;
                  </p>
                  <p className="text-white/50 text-xs mt-1">John 1:1 — In the beginning was the Word</p>
                </div>
                {/* Mini book grid */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {[
                    { label: "Patristic Texts", sub: "Series I", color: "bg-byzantine-800" },
                    { label: "Academic Studies", sub: "Series II", color: "bg-gold-600" },
                    { label: "Liturgical Heritage", sub: "Series III", color: "bg-byzantine-900" },
                    { label: "Educational", sub: "Series IV", color: "bg-gold-700" },
                  ].map((b) => (
                    <div key={b.label} className={`${b.color} rounded-xl p-3 border border-white/10`}>
                      <div className="font-serif text-gold-400/40 text-2xl leading-none">Π</div>
                      <div className="text-white text-xs font-semibold mt-2 leading-tight">{b.label}</div>
                      <div className="text-white/40 text-xs">{b.sub}</div>
                    </div>
                  ))}
                </div>
                {/* Center stat */}
                <div className="mt-5 pt-5 border-t border-white/10 flex justify-around text-center">
                  <div>
                    <div className="font-serif text-2xl font-bold text-gold-400">100+</div>
                    <div className="text-white/50 text-xs">Publications</div>
                  </div>
                  <div>
                    <div className="font-serif text-2xl font-bold text-gold-400">5</div>
                    <div className="text-white/50 text-xs">Series</div>
                  </div>
                  <div>
                    <div className="font-serif text-2xl font-bold text-gold-400">20+</div>
                    <div className="text-white/50 text-xs">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-byzantine-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
            <div className="grid grid-cols-4 gap-3 sm:gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-serif text-xl sm:text-3xl font-bold text-gold-400">
                    {s.value}
                  </div>
                  <div className="text-white/60 text-xs mt-0.5 hidden sm:block">{s.label}</div>
                  <div className="text-white/50 text-[10px] mt-0.5 sm:hidden">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── About Snippet ── */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-14 items-center">
            <div>
              <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
                Who We Are
              </p>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-byzantine-700 mb-4 sm:mb-6 leading-tight">
                A Sanctuary of Eastern Christian Scholarship
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base">
                Founded in 2006, Panarion Center for Patristic Heritage is an Egyptian academic
                institution dedicated to the preservation and promotion of Eastern Christian patristic
                thought. Our researchers hold advanced degrees from leading international universities
                in theology, ancient languages, and Church history.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base hidden sm:block">
                From translating ancient Greek and Coptic texts to organizing conferences in churches
                and dioceses across Egypt, we bridge millennia of Christian wisdom with the world of
                today.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-byzantine-600 font-semibold hover:text-gold-500 transition-colors group"
              >
                Read our full story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Pillars grid — 2 cols on all screen sizes */}
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              {pillars.map((p) => (
                <div
                  key={p.number}
                  className="bg-[#FAFAF8] border border-gray-100 rounded-2xl p-4 sm:p-5 hover:border-gold-300 hover:shadow-md transition-all group"
                >
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-gold-300 group-hover:text-gold-400 transition-colors">
                    {p.number}
                  </span>
                  <h3 className="font-semibold text-byzantine-700 mt-2 mb-1 text-xs sm:text-sm">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed hidden sm:block">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-12 sm:py-20 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-byzantine-700">
              Our Core Services
            </h2>
            <div className="ornament mt-4 max-w-xs mx-auto"><span className="text-gold-400 text-xs">✦</span></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={svc.title}
                  href={svc.href}
                  className="group bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 hover:border-gold-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-3 sm:mb-4 shadow-sm group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="font-serif font-bold text-byzantine-700 text-sm sm:text-lg mb-0 sm:mb-2 flex-1">
                    {svc.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed hidden sm:block sm:flex-1">{svc.description}</p>
                  <div className="flex items-center gap-1 text-gold-500 text-xs sm:text-sm font-medium mt-3 sm:mt-4 group-hover:gap-2 transition-all">
                    <span className="hidden sm:inline">Learn more</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-12 sm:py-20 bg-byzantine-600 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <p className="text-gold-300 text-sm font-semibold uppercase tracking-widest mb-3">
              Testimonials
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Voices from Our Community
            </h2>
          </div>
          {/* Mobile: horizontal swipe — Desktop: 3-col grid */}
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:mx-0 md:px-0">
            {testimonials.map((t) => (
              <div
                key={t.nameEn}
                className="flex-shrink-0 w-[82vw] sm:w-[60vw] md:w-auto snap-start bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 flex flex-col"
              >
                <Quote className="w-6 h-6 text-gold-400 mb-4 shrink-0" />
                <p className="text-white/85 text-sm leading-relaxed flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <div className="font-arabic text-gold-300 text-sm">{t.name}</div>
                  <div className="text-white/50 text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Swipe hint — mobile only */}
          <p className="text-white/30 text-xs text-center mt-4 md:hidden">Swipe to read more ›</p>
        </div>
      </section>

      {/* ── Featured Program ── */}
      <section className="py-12 sm:py-20 bg-byzantine-600 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gold-400/20 border border-gold-400/40 text-gold-300 text-xs font-medium px-3 py-1.5 rounded-full mb-5">
                Now Enrolling
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
                Diploma in Ancient Greek
              </h2>
              <p className="text-white/75 text-sm sm:text-lg leading-relaxed mb-5 sm:mb-6">
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
                  <li key={item} className="flex items-start gap-3 text-white/80 text-sm">
                    <span className="w-5 h-5 rounded-full bg-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 12 12">
                        <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/education"
                  className="px-6 py-3 bg-gold-400 hover:bg-gold-500 text-white font-semibold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:01220020525"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4" /> Reserve Your Spot
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-white">
                <div className="font-serif text-6xl font-bold text-gold-400 mb-2 text-center">Α Β Γ</div>
                <div className="font-serif text-4xl font-bold text-white/70 mb-6 text-center">Δ Ε Ζ</div>
                <div className="space-y-3 text-sm text-white/70">
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span>Language</span><span className="text-white font-medium">Ancient Greek (Koine)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span>Instructor</span><span className="text-white font-medium">Dr. Gerges Boshri</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/10">
                    <span>Starts</span><span className="text-white font-medium">February</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Contact</span><span className="text-white font-medium">01220020525</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA / Contact strip ── */}
      <section className="py-10 sm:py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-byzantine-700 mb-3">
            Ready to Explore Patristic Heritage?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Reach out by phone, email, or visit us in Heliopolis. We are happy to guide you to the
            right publication, course, or resource.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@panarion.org"
              className="flex items-center gap-2 px-5 py-3 bg-[#FAFAF8] hover:bg-byzantine-50 border border-gray-200 hover:border-byzantine-300 text-byzantine-700 font-medium rounded-xl transition-all text-sm"
            >
              <Mail className="w-4 h-4 text-gold-500" /> info@panarion.org
            </a>
            <a
              href="tel:01220020525"
              className="flex items-center gap-2 px-5 py-3 bg-[#FAFAF8] hover:bg-byzantine-50 border border-gray-200 hover:border-byzantine-300 text-byzantine-700 font-medium rounded-xl transition-all text-sm"
            >
              <Phone className="w-4 h-4 text-gold-500" /> +20 122 002 0525
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-5 py-3 bg-byzantine-600 hover:bg-byzantine-700 text-white font-semibold rounded-xl transition-all text-sm shadow-md"
            >
              Full Contact Details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
