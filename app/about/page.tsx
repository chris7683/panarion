import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookMarked, Users, Library, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Panarion Center",
  description:
    "Learn about Panarion Center's mission, history, and vision for Eastern Christian patristic scholarship.",
};

const goals = [
  {
    icon: BookMarked,
    title: "Authentic Connection",
    desc: "Fostering an authentic connection with patristic heritage for grounded Christian knowledge rooted in the Eastern tradition.",
  },
  {
    icon: Library,
    title: "Publishing Excellence",
    desc: "Publishing Eastern patristic thought across five carefully curated series, from translations to original academic research.",
  },
  {
    icon: Users,
    title: "Training & Learning",
    desc: "Offering training courses, distance learning programs, and diplomas to make patristic education accessible to all.",
  },
  {
    icon: FlaskConical,
    title: "Academic Conferences",
    desc: "Organizing conferences and academic discussions in churches, dioceses, and academic institutions across Egypt.",
  },
];

const timeline = [
  {
    year: "2006",
    event: "Founding",
    detail: "Established on July 10, 2006, the feast day of Saint Cyril the Great.",
  },
  {
    year: "2010",
    event: "First Publications",
    detail: "Launched the first patristic translation series, drawing on ancient Greek and Coptic sources.",
  },
  {
    year: "2015",
    event: "Educational Programs",
    detail: "Introduced structured diploma programs in Early Christianity and Ancient Greek.",
  },
  {
    year: "2020",
    event: "Digital Expansion",
    detail: "Launched e-learning platform, YouTube channel, and digital library to reach a global audience.",
  },
  {
    year: "2024",
    event: "Today",
    detail: "Continuing to grow our publication catalog, course offerings, and global academic network.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-byzantine-600 pt-28 sm:pt-36 pb-12 sm:pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-300 text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white max-w-2xl leading-tight mb-4">
            Panarion Center for Patristic Heritage
          </h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
            Since 2006, we have been a beacon of Eastern Christian scholarship — publishing,
            teaching, and preserving the patristic tradition for generations to come.
          </p>
        </div>
      </section>

      {/* Name Meaning */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-14 items-center">
            {/* Quote block */}
            <div className="bg-byzantine-600 rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="font-serif text-8xl text-gold-400/20 leading-none absolute top-4 left-6 select-none">Π</div>
              <div className="relative z-10">
                <p className="font-serif text-2xl italic text-gold-300 mb-4 leading-relaxed">
                  &quot;Medicine cabinet for the mind and heart&quot;
                </p>
                <p className="text-white/75 leading-relaxed">
                  Just as a pharmacy is a medicine cabinet for bodily diseases, Panarion aspires to
                  be a medicine cabinet for the mind and the heart — offering the cure of authentic
                  patristic wisdom.
                </p>
              </div>
            </div>

            <div>
              <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
                The Name
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-byzantine-700 mb-5 leading-tight">
                What is a Panarion?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <span className="font-semibold text-byzantine-700">Panarion</span> (Πανάριον) is a
                Greek word meaning <em>&quot;medicine chest&quot;</em> or <em>&quot;pharmacy box&quot;</em> — the case in which
                medicine bottles were kept. In ancient times it referred to the box of remedies
                carried by physicians.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Saint Epiphanius of Salamis (315–403 AD) used this word as the title of his great
                work against heresies — a metaphor: just as a medicine chest holds cures for bodily
                illness, his book held the cure against the poisons of false teaching.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our center carries this name with pride, aspiring to make the riches of Eastern
                Christian patristic thought available as spiritual and intellectual medicine for
                everyone who seeks it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-20 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Purpose
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-byzantine-700 mb-4">
              Mission, Vision & Goals
            </h2>
            <div className="ornament max-w-xs mx-auto"><span className="text-gold-400 text-xs">✦</span></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gold-200 hover:shadow-lg transition-all">
              <div className="text-gold-400 font-serif text-2xl font-bold mb-3">Mission</div>
              <p className="text-gray-600 leading-relaxed">
                To disseminate authentic Orthodox patristic thought through academic excellence,
                maintaining fidelity to the Eastern Church tradition. We connect scholars, students,
                and faithful Christians with the living wellspring of the Fathers.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gold-200 hover:shadow-lg transition-all">
              <div className="text-gold-400 font-serif text-2xl font-bold mb-3">Vision</div>
              <p className="text-gray-600 leading-relaxed">
                A world where the wisdom of the Church Fathers is accessible, studied, and lived —
                where patristic heritage flourishes as a living tradition guiding believers across
                Egypt and the global Eastern Christian community.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {goals.map((g) => {
              const Icon = g.icon;
              return (
                <div
                  key={g.title}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gold-300 hover:shadow-md transition-all group text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-byzantine-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-byzantine-600 transition-colors">
                    <Icon className="w-6 h-6 text-byzantine-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-byzantine-700 mb-2 text-sm">{g.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{g.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Journey
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-byzantine-700">
              History & Milestones
            </h2>
          </div>

          <div className="relative">
            {/* Desktop: center vertical line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-byzantine-200 via-gold-300 to-byzantine-200" />
            {/* Mobile: left vertical line */}
            <div className="md:hidden absolute left-[7px] top-0 bottom-0 w-px bg-gradient-to-b from-byzantine-200 via-gold-300 to-byzantine-200" />

            <div className="space-y-6 md:space-y-10">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-4 md:gap-8 md:items-center ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Mobile dot (left) */}
                  <div className="relative z-10 mt-1.5 md:hidden w-4 h-4 rounded-full bg-gold-400 border-4 border-white shadow-md shrink-0" />

                  {/* Card */}
                  <div className={`flex-1 text-left ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white border border-gray-100 hover:border-gold-300 hover:shadow-md rounded-2xl p-5 transition-all w-full">
                      <div className="font-serif text-gold-400 font-bold text-lg">{item.year}</div>
                      <div className="font-semibold text-byzantine-700 text-sm">{item.event}</div>
                      <p className="text-gray-500 text-xs mt-1 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>

                  {/* Desktop dot (center) */}
                  <div className="hidden md:block relative z-10 w-4 h-4 rounded-full bg-gold-400 border-4 border-white shadow-md shrink-0" />

                  {/* Desktop spacer */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Discussions */}
      <section id="discussions" className="py-20 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-byzantine-600 rounded-3xl p-10 md:p-14 text-white text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
                Academic Discussions & Conferences
              </h2>
              <p className="text-white/75 text-lg leading-relaxed mb-8">
                Panarion organizes meetings, symposia, and conferences on Eastern patristic heritage
                at our Heliopolis headquarters and in churches and dioceses across Egypt. We welcome
                scholars, clergy, and engaged laity.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold-400 hover:bg-gold-500 text-white font-semibold rounded-xl transition-all shadow-lg"
              >
                Inquire About Events <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
