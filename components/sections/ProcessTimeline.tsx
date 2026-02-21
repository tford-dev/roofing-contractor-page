import { PROCESS_STEPS } from '@/lib/data';

export function ProcessTimeline() {
  return (
    <section className="bg-slate-950 py-16 text-white sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-300">Our Process</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">From inspection to final walkthrough, zero guesswork.</h2>
          <p className="text-slate-300">A proven process that protects your time, budget, and property.</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <p className="text-sm font-semibold text-brand-300">0{index + 1}</p>
              <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{step.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
