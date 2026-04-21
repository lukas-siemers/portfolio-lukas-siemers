import type { Metadata } from "next";
import BlurText from "@/components/BlurText";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}`,
};

export default function AboutPage() {
  return (
    <div className="space-y-section">
      {/* ---------- MASTHEAD ---------- */}
      <section className="pt-10 sm:pt-16">
        <h1 className="font-serif italic tracking-tighter text-on-surface text-display-lg sm:text-display-xl md:text-display-2xl">
          <BlurText text="A few things" as="span" stagger={40} duration={0.8} />
          <br />
          <span className="ml-10 sm:ml-20 md:ml-32">
            <BlurText
              text="about me"
              as="span"
              stagger={60}
              startDelay={0.55}
              duration={0.9}
            />
            <BlurText
              text="."
              as="span"
              className="text-primary-container"
              stagger={0}
              startDelay={1.03}
              duration={0.9}
            />
          </span>
        </h1>
      </section>

      {/* ---------- INTRO ---------- */}
      <section className="grid grid-cols-12 gap-y-10">
        <div className="col-span-12">
          <div className="max-w-4xl space-y-6 text-body-lg leading-relaxed text-on-surface/90">
            <p>
              I was born in Hamburg, Germany. Spent a stretch in Toulouse,
              France. Now I live in Saint Joseph, Missouri, with a small
              family, a dog, and a cat.
            </p>
            <p>
              A quiet life, and I like it that way. I notice the day-to-day
              more than the big stuff. It&apos;s where most of the actual
              life happens.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- BACKGROUND ---------- */}
      <section className="grid grid-cols-12 gap-y-8">
        <div className="col-span-12 md:col-span-3">
          <p className="label-md">Background</p>
        </div>
        <div className="col-span-12 md:col-span-8 md:col-start-5">
          <div className="space-y-6 text-body-lg leading-relaxed text-on-surface/90">
            <p>
              I studied engines before I studied software. A diesel
              program at Bishop State Community College in Alabama, then
              a CS degree from Missouri Western. Different fields on
              paper, same question underneath. How does this thing
              actually work when you open it up?
            </p>
            <p>
              Engines let me ask it with my hands. Software lets me ask
              it faster, at larger scale, across more surfaces. The tools
              change. The curiosity doesn&apos;t.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- BOOKS THAT STUCK ---------- */}
      <section className="grid grid-cols-12 gap-y-8">
        <div className="col-span-12 md:col-span-3">
          <p className="label-md">Books that stuck</p>
        </div>
        <div className="col-span-12 md:col-span-8 md:col-start-5">
          <ul className="space-y-5 text-body-lg leading-relaxed text-on-surface/90">
            <li>
              <span className="font-serif italic text-on-surface">
                The Pragmatic Programmer
              </span>
              , Hunt and Thomas. The first software book that felt like
              a set of habits, not a set of rules.
            </li>
            <li>
              <span className="font-serif italic text-on-surface">
                Clean Code
              </span>
              , Robert Martin. I don&apos;t agree with all of it anymore.
              The posture still holds. Care about what you leave behind.
            </li>
            <li>
              <span className="font-serif italic text-on-surface">
                Can&apos;t Hurt Me
              </span>
              , David Goggins. For the days when the work is just what
              it is.
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}
