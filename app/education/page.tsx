import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, Clock, Users, CheckCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Education — Panarion Center",
  description:
    "Panarion Center's educational programs: Diploma in Early Christianity, Ancient Greek course, and specialized Christian studies.",
};

const programs = [
  {
    badge: "Now Enrolling",
    badgeColor: "bg-gold-100 text-gold-700",
    title: "Diploma in Ancient Greek",
    subtitle: "Koine Greek — Language of the New Testament & Fathers",
    instructor: "Dr. Gerges Boshri",
    starts: "February (Annual Intake)",
    duration: "Academic Year",
    level: "Beginner to Intermediate",
    description:
      "A structured diploma program designed to give students a working knowledge of Koine Ancient Greek — the language of the New Testament, the Septuagint, and the vast majority of the Church Fathers. By the end of the program, students will be able to read original patristic texts with confidence.",
    outcomes: [
      "Read the New Testament in its original Greek",
      "Access patristic texts in their source language",
      "Understand key theological terms in their linguistic context",
      "Lay the groundwork for advanced biblical and patristic scholarship",
    ],
    contact: "01220020525",
    featured: true,
  },
  {
    badge: "Ongoing",
    badgeColor: "bg-byzantine-100 text-byzantine-700",
    title: "Diploma in Early Christianity",
    subtitle: "Comprehensive study of Christianity in its first eight centuries",
    instructor: "Panarion Academic Faculty",
    starts: "Rolling intake",
    duration: "Two semesters",
    level: "All levels",
    description:
      "A comprehensive diploma covering the history, theology, and spiritual heritage of the early Church — from the Apostolic Age through the Ecumenical Councils. Students explore key figures, doctrinal developments, and the patristic writings that shaped Eastern Christianity.",
    outcomes: [
      "Understand the development of Christian doctrine",
      "Study the life and writings of major Church Fathers",
      "Explore the Ecumenical Councils and their theological significance",
      "Engage with primary sources in translation",
    ],
    contact: "01115050135",
    featured: false,
  },
];

const features = [
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    desc: "All courses are taught by researchers with master's and doctoral degrees from leading international universities.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    desc: "Programs are designed to accommodate working professionals alongside full-time students.",
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    desc: "Intimate learning environments that allow for personal attention and deep academic engagement.",
  },
  {
    icon: CheckCircle,
    title: "Certification",
    desc: "Students receive official certificates upon successful completion, recognized by partner institutions.",
  },
];

export default function EducationPage() {
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
          <p className="text-gold-300 text-sm font-semibold uppercase tracking-widest mb-3">Education</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white max-w-2xl leading-tight mb-4">
            Learn the Language of the Fathers
          </h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed">
            From Ancient Greek diplomas to specialized courses in early Christian studies, our
            educational programs open the door to patristic heritage in its original richness.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Programs
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-byzantine-700 mb-4">
              Diplomas & Courses
            </h2>
            <div className="ornament max-w-xs mx-auto"><span className="text-gold-400 text-xs">✦</span></div>
          </div>

          <div className="space-y-10">
            {programs.map((program) => (
              <div
                key={program.title}
                className={`rounded-3xl overflow-hidden border transition-all ${
                  program.featured
                    ? "border-gold-300 shadow-xl shadow-gold-100/50"
                    : "border-gray-100 hover:border-gold-200 hover:shadow-md"
                }`}
              >
                <div className={`p-8 md:p-10 ${program.featured ? "bg-white" : "bg-[#FAFAF8]"}`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${program.badgeColor}`}>
                        {program.badge}
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-byzantine-700 mt-3 mb-1">
                        {program.title}
                      </h2>
                      <p className="text-gray-500 text-sm">{program.subtitle}</p>
                    </div>
                    {program.featured && (
                      <div className="bg-byzantine-600 text-white rounded-2xl px-5 py-3 text-center shrink-0">
                        <div className="font-serif text-3xl font-bold text-gold-400">Α Β Γ</div>
                        <div className="text-xs text-white/70 mt-1">Ancient Greek</div>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    {[
                      { label: "Instructor", value: program.instructor },
                      { label: "Starts", value: program.starts },
                      { label: "Level", value: program.level },
                    ].map((meta) => (
                      <div key={meta.label} className="bg-gray-50 rounded-xl px-4 py-3">
                        <div className="text-xs text-gray-400 mb-0.5">{meta.label}</div>
                        <div className="font-semibold text-byzantine-700 text-sm">{meta.value}</div>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>

                  <div className="grid sm:grid-cols-2 gap-2.5 mb-8">
                    {program.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                        {outcome}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={`tel:${program.contact}`}
                      className="flex items-center gap-2 px-5 py-2.5 bg-byzantine-600 hover:bg-byzantine-700 text-white font-semibold rounded-xl text-sm transition-colors shadow-sm"
                    >
                      <Phone className="w-4 h-4" /> Reserve Your Spot
                    </a>
                    <Link
                      href="/contact"
                      className="flex items-center gap-2 px-5 py-2.5 bg-[#FAFAF8] hover:bg-gold-50 border border-gray-200 hover:border-gold-300 text-byzantine-700 font-semibold rounded-xl text-sm transition-all"
                    >
                      Ask a Question <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-20 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <h2 className="font-serif text-3xl font-bold text-byzantine-700">
              Why Study with Panarion?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gold-300 hover:shadow-md transition-all text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-byzantine-50 group-hover:bg-byzantine-600 flex items-center justify-center mx-auto mb-4 transition-colors">
                    <Icon className="w-6 h-6 text-byzantine-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-byzantine-700 mb-2 text-sm">{f.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* E-Learning */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-byzantine-600 to-byzantine-800 rounded-3xl p-10 md:p-14 text-white">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gold-400/20 border border-gold-400/40 text-gold-300 text-xs font-medium px-3 py-1.5 rounded-full mb-5">
                  Coming Soon
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
                  E-Learning Platform
                </h2>
                <p className="text-white/75 leading-relaxed mb-6">
                  We are expanding our educational reach through a dedicated e-learning platform —
                  bringing Panarion courses to students everywhere in Egypt and beyond. Subscribe to
                  be notified when enrollment opens.
                </p>
                <a
                  href="mailto:info@panarion.org?subject=E-Learning Subscription"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold-400 hover:bg-gold-500 text-white font-semibold rounded-xl transition-all shadow-lg"
                >
                  Get Notified <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="hidden lg:grid grid-cols-2 gap-4">
                {["Video Lectures", "Downloadable Materials", "Live Q&A Sessions", "Digital Certificates"].map(
                  (item) => (
                    <div
                      key={item}
                      className="bg-white/10 rounded-2xl p-4 border border-white/20 text-sm text-white/80 flex items-center gap-3"
                    >
                      <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
