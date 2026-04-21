import type { Metadata } from "next";
import { Download, Github, Linkedin } from "lucide-react";
import StarBorder from "@/components/StarBorder";
import BlurText from "@/components/BlurText";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & CV",
  description: `Get in touch with ${site.name}`,
};

/* ---------- Static data ---------- */

const experience = [
  {
    dates: "Jan 2025 – Present",
    title: "Full Stack Software Engineer",
    company: "Herzog Railroad Services",
    location: "Saint Joseph, MO",
    bullets: [
      "Building and maintaining full-stack applications across C#, .NET, MAUI, WPF, WinForms, and TypeScript; migrating legacy systems onto the modern platform.",
      "Redesigned emulator architecture to isolate signals per developer, removing network conflicts and unblocking concurrent testing.",
      "Automated developer support notifications with Power Automate, replacing manual email monitoring.",
    ],
  },
  {
    dates: "Jun 2023 – Jan 2025",
    title: "Accounting Service Assistant",
    company: "Missouri Western State University",
    location: "Saint Joseph, MO",
    bullets: [
      "Audited A/P checks for compliance with state and university policy; prepared monthly invoices and reconciled payments.",
      "Owned year-end operations, inventory assessment, and fixed-asset tagging alongside the CS degree.",
    ],
  },
];

const education = [
  {
    dates: "Dec 2024",
    title: "B.S. Computer Science",
    school: "Missouri Western State University",
    location: "Saint Joseph, MO",
    note: "GPA 3.38. Dean's List Spring 2023, Fall 2023, and Spring 2024.",
  },
  {
    dates: "Dec 2020",
    title: "Associate's in Diesel Engine Technology",
    school: "Bishop State Community College",
    location: "Mobile, AL",
    note: "Dean's List.",
  },
];

const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["C#", "TypeScript", "SQL", "Java", "Python", "C++", "HTML", "VB.NET"],
  },
  {
    label: "Frameworks",
    items: [".NET", "MAUI", "WPF", "WinForms", "Angular", "Java Spring"],
  },
  {
    label: "Tools & infra",
    items: [
      "Azure",
      "RabbitMQ",
      "Git",
      "BitBucket",
      "Jira",
      "SonarQube",
      "Code Rabbit",
      "LinqPad",
      "CI/CD",
      "Linux",
    ],
  },
  {
    label: "Spoken",
    items: [
      "German (native)",
      "English (fluent)",
      "French (intermediate)",
    ],
  },
];

/* ---------- Page ---------- */

export default function ContactPage() {
  return (
    <div className="space-y-section">
      {/* ---------- MASTHEAD ---------- */}
      <section className="pt-10 sm:pt-16">
        <h1 className="font-serif italic tracking-tighter text-on-surface text-display-lg sm:text-display-xl md:text-display-2xl">
          <BlurText text="Short" as="span" stagger={70} duration={0.9} />
          <br />
          <span className="ml-10 sm:ml-20 md:ml-32">
            <BlurText
              text="version"
              as="span"
              stagger={70}
              startDelay={0.4}
              duration={0.9}
            />
            <BlurText
              text="."
              as="span"
              className="text-primary-container"
              stagger={0}
              startDelay={0.89}
              duration={0.9}
            />
          </span>
        </h1>
      </section>

      {/* ---------- SUMMARY + PDF ---------- */}
      <section className="grid grid-cols-12 gap-y-10">
        <div className="col-span-12">
          <div className="max-w-4xl space-y-6">
            <p className="text-body-lg leading-relaxed text-on-surface/90">
              Full-stack engineer at Herzog Railroad Services in Saint
              Joseph, Missouri. I build enterprise CMMS and railroad
              operations software across C#, .NET, TypeScript, Angular,
              and SQL. English and German fluent, French working.
            </p>
            <div className="flex justify-center pt-2">
              <StarBorder className="rounded-lg" color="white" speed="6s">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-surface-container-low px-5 py-2.5 text-sm font-medium text-primary-container transition-colors hover:bg-surface-container"
                >
                  Download PDF
                  <Download className="h-3.5 w-3.5" aria-hidden />
                </a>
              </StarBorder>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- EXPERIENCE ---------- */}
      <section className="grid grid-cols-12 gap-y-8">
        <div className="col-span-12 md:col-span-3">
          <p className="label-md">Experience</p>
        </div>
        <div className="col-span-12 space-y-12 md:col-span-8 md:col-start-5">
          {experience.map((role) => (
            <article key={`${role.title}-${role.company}`}>
              <p className="label-sm">{role.dates}</p>
              <h3 className="mt-2 font-serif text-headline-sm text-on-surface sm:text-headline-md">
                {role.title}
              </h3>
              <p className="mt-1 text-body-md text-on-surface-variant">
                {role.company} · {role.location}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-body-md leading-relaxed text-on-surface/90 marker:text-primary-container">
                {role.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- EDUCATION ---------- */}
      <section className="grid grid-cols-12 gap-y-8">
        <div className="col-span-12 md:col-span-3">
          <p className="label-md">Education</p>
        </div>
        <div className="col-span-12 space-y-10 md:col-span-8 md:col-start-5">
          {education.map((ed) => (
            <article key={ed.title}>
              <p className="label-sm">{ed.dates}</p>
              <h3 className="mt-2 font-serif text-headline-sm text-on-surface sm:text-headline-md">
                {ed.title}
              </h3>
              <p className="mt-1 text-body-md text-on-surface-variant">
                {ed.school} · {ed.location}
              </p>
              <p className="mt-3 text-body-md leading-relaxed text-on-surface/90">
                {ed.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- SKILLS ---------- */}
      <section className="grid grid-cols-12 gap-y-8">
        <div className="col-span-12 md:col-span-3">
          <p className="label-md">Skills</p>
        </div>
        <div className="col-span-12 space-y-8 md:col-span-8 md:col-start-5">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="label-sm">{group.label}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-sharp bg-surface-container px-2.5 py-1 font-mono text-xs text-on-surface-variant"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- REACH ME ---------- */}
      <section className="space-y-6">
        <p className="label-md">Reach me</p>
        <a
          href={`mailto:${site.email}`}
          className="group flex flex-col rounded-xl bg-surface-container-low py-8 pl-10 pr-6 text-primary-container transition-colors hover:bg-surface-container sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="label-md text-on-surface-variant">Email</p>
            <p className="mt-2 font-serif text-headline-sm sm:text-headline-md">
              {site.email}
            </p>
          </div>
          <span
            aria-hidden
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium sm:mt-0"
          >
            Compose{" "}
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </a>

        <div className="grid gap-5 sm:grid-cols-2">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-xl bg-surface-container-low py-6 pl-8 pr-6 transition-colors hover:bg-surface-container"
          >
            <div>
              <p className="label-md">GitHub</p>
              <p className="mt-2 font-serif text-headline-sm text-on-surface">
                @lukas-siemers
              </p>
            </div>
            <Github className="h-5 w-5 text-on-surface-variant transition-colors group-hover:text-primary" />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-xl bg-surface-container-low py-6 pl-8 pr-6 transition-colors hover:bg-surface-container"
          >
            <div>
              <p className="label-md">LinkedIn</p>
              <p className="mt-2 font-serif text-headline-sm text-on-surface">
                Lukas Siemers
              </p>
            </div>
            <Linkedin className="h-5 w-5 text-on-surface-variant transition-colors group-hover:text-primary" />
          </a>
        </div>
      </section>

    </div>
  );
}
