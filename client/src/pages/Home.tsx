import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Zap } from "lucide-react";

/**
 * Design Philosophy: Warm Institutional with Narrative Flow
 * - Warm cream background (#faf9f7) with sage accents
 * - Serif typography (Lora/Crimson Pro) for warmth and readability
 * - Flowing, narrative-driven layout with asymmetric placement
 * - Rust (#a85a3a) and gold (#d4a574) accent colors
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-lg font-bold text-accent">
            What Really Happened
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#curriculum" className="text-sm text-text-secondary hover:text-accent transition-colors">
              Curriculum
            </a>
            <a href="#pricing" className="text-sm text-text-secondary hover:text-accent transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-sm text-text-secondary hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm text-text-secondary hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="section-label">A Trauma Education Series</div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-text-primary">
                What happened to you —<br />
                <em className="text-accent-rust not-italic">not what's wrong with you.</em>
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed">
                18 sessions. One documented life. A complete curriculum for understanding Complex PTSD in plain English.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="btn-primary">
                  View Curriculum <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button className="btn-secondary">
                  Request a Proposal
                </Button>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="hidden md:block">
              <div className="bg-secondary rounded-lg p-8 text-center">
                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-card border border-border rounded p-3 text-xs font-mono text-text-secondary hover:bg-accent hover:text-accent-foreground transition-all cursor-pointer"
                    >
                      {String(i).padStart(2, '0')}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container max-w-3xl">
          <blockquote className="text-center">
            <p className="text-2xl md:text-3xl font-serif text-text-primary mb-4 italic">
              "The revolution is trauma-informed — or it is not a revolution at all."
            </p>
            <cite className="text-sm text-text-tertiary font-mono tracking-wider">
              — Daniel Lingar, What Really Happened
            </cite>
          </blockquote>
        </div>
      </section>

      {/* What This Is Section */}
      <section id="about" className="py-20 px-4">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="section-label">01</div>
              <h2 className="text-3xl font-bold mb-4 text-text-primary">What This Is</h2>
            </div>
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">A Psychoeducational Curriculum</h3>
                <p className="text-text-secondary leading-relaxed">
                  <em>What Really Happened</em> is a psychoeducational group curriculum, not a clinical treatment program. It does not diagnose, prescribe, or provide therapy. It teaches the mechanisms of Complex PTSD — its neurological foundations, its relational consequences, its behavioral presentations, and its treatment logic — through the sustained examination of one documented life.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">Five-Part Structure</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex gap-3">
                    <span className="text-accent-rust font-bold">•</span>
                    <span><strong>Part I:</strong> How trauma gets built into a nervous system in early development</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-rust font-bold">•</span>
                    <span><strong>Part II:</strong> What it does to adult relationships</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-rust font-bold">•</span>
                    <span><strong>Part III:</strong> The coping strategies deployed when regulation becomes impossible</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-rust font-bold">•</span>
                    <span><strong>Part IV:</strong> The internal architecture of a nervous system in crisis</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent-rust font-bold">•</span>
                    <span><strong>Part V:</strong> What can be learned late and what systems failed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Pivot Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container max-w-3xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="section-label opacity-50">The Old Question</div>
              <h3 className="text-2xl font-bold text-text-tertiary line-through">What's wrong with you?</h3>
            </div>
            <div className="bg-card border-2 border-accent-rust rounded-lg p-8">
              <div className="section-label">The Right Question</div>
              <h3 className="text-2xl font-bold text-text-primary">What happened to you?</h3>
            </div>
          </div>
          <p className="text-center text-text-secondary mt-8 leading-relaxed">
            That shift changes everything. It moves the focus from pathology to history. It opens the possibility that the nervous system isn't broken — it's surviving.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container max-w-5xl">
          <div className="mb-12">
            <div className="section-label">02</div>
            <h2 className="text-4xl font-bold mb-4 text-text-primary">Modular Deployment</h2>
            <p className="text-lg text-text-secondary">Start with one module. Expand when it works. No long-term commitment required to begin.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { title: "Part I", subtitle: "How It Gets Built Into You", sessions: "Sessions 00–02 · 4 sessions", price: "$1,500" },
              { title: "Part II", subtitle: "How It Destroys Your Relationships", sessions: "Sessions 03–04 · 2 sessions", price: "$750" },
              { title: "Part III", subtitle: "How You Tried to Cope", sessions: "Sessions 05–07.5 · 4 sessions", price: "$1,500" },
              { title: "Part IV", subtitle: "The Internal Battlefield", sessions: "Sessions 08–12 · 5 sessions", price: "$1,750" },
              { title: "Part V", subtitle: "Changing the World Around You", sessions: "Sessions 13–16 · 4 sessions", price: "$1,500" },
            ].map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="section-label text-xs">{item.title}</div>
                <h3 className="text-lg font-bold text-text-primary mb-2">{item.subtitle}</h3>
                <p className="text-xs text-text-tertiary font-mono mb-4">{item.sessions}</p>
                <p className="text-2xl font-bold text-accent-rust">{item.price}</p>
              </div>
            ))}
          </div>

          <div className="bg-accent-rust text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Full Program</h3>
            <p className="mb-4">All 18 Sessions — Complete Curriculum</p>
            <p className="text-4xl font-bold mb-4">$7,000</p>
            <p className="text-sm opacity-90">All pricing includes delivery, materials, and a written outcome report.</p>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 px-4 bg-secondary">
        <div className="container max-w-5xl">
          <div className="mb-12">
            <div className="section-label">03</div>
            <h2 className="text-4xl font-bold mb-4 text-text-primary">18 Sessions · 5 Parts</h2>
            <p className="text-lg text-text-secondary">The Complete Curriculum</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { num: "00", title: "Welcome, Safety, and Why This Course Exists" },
              { num: "01", title: "The Blueprint of Survival" },
              { num: "02", title: "The Masks We Wear" },
              { num: "03", title: "When Love Hurts" },
              { num: "04", title: "The War on Reality" },
              { num: "05", title: "Relapse Isn't a Betrayal" },
              { num: "06", title: "What Healing Actually Looks Like" },
              { num: "07", title: "The Breaking Point" },
              { num: "07.5", title: "Shut Up, I Have Work Tomorrow (Deep Dive · 90 min)" },
              { num: "08", title: "Rewriting the Legacy" },
              { num: "09", title: "Shame vs. Responsibility" },
              { num: "10", title: "Your Brain on Trauma" },
              { num: "11", title: "The Anatomy of a Spiral" },
              { num: "12", title: "Crisis, Suicide Risk, and Staying Alive (Safety Protocol)" },
              { num: "13", title: "The Lessons Nobody Taught Us" },
              { num: "14", title: "Speaking Truth to Power" },
              { num: "15", title: "The Crucial Question" },
              { num: "16", title: "The Revolution Must Be Trauma-Informed" },
            ].map((session, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6 hover:border-accent-rust transition-colors">
                <div className="text-sm font-mono text-accent-rust font-bold mb-2">{session.num}</div>
                <h4 className="text-text-primary font-semibold">{session.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Quotes Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "A concept you can only hold in your head is a concept you cannot use in your body.", session: "Session 02" },
              { quote: "Shame doesn't produce the change it demands. It prevents it.", session: "Session 09" },
              { quote: "The static in my head wasn't proof of brokenness. It was proof of survival.", session: "Session 11" },
            ].map((item, idx) => (
              <div key={idx} className="pull-quote">
                <p className="italic text-text-primary mb-4">"{item.quote}"</p>
                <p className="pull-quote-attribution">{item.session}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Right Fit Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">Right Fit</h3>
              <p className="text-sm text-text-tertiary font-mono uppercase tracking-wider mb-4 text-accent-rust">This curriculum is designed for your program if:</p>
              <ul className="space-y-4 text-text-secondary">
                <li className="flex gap-3">
                  <Zap className="w-5 h-5 text-accent-rust flex-shrink-0 mt-0.5" />
                  <span>Your audience is non-clinical — corrections, recovery, peer support, or workforce</span>
                </li>
                <li className="flex gap-3">
                  <Zap className="w-5 h-5 text-accent-rust flex-shrink-0 mt-0.5" />
                  <span>You need a scripted, facilitator-ready program with no clinical hiring requirement</span>
                </li>
                <li className="flex gap-3">
                  <Zap className="w-5 h-5 text-accent-rust flex-shrink-0 mt-0.5" />
                  <span>Your goal is psychoeducation and trauma literacy, not clinical competency certification</span>
                </li>
                <li className="flex gap-3">
                  <Zap className="w-5 h-5 text-accent-rust flex-shrink-0 mt-0.5" />
                  <span>You are building trauma-informed culture from the ground up</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">Not Designed For</h3>
              <p className="text-sm text-text-tertiary font-mono uppercase tracking-wider mb-4 text-accent-rust">This curriculum is not the right tool if:</p>
              <ul className="space-y-4 text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-accent-rust font-bold">✕</span>
                  <span>You are training licensed clinicians in clinical practice protocols</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-rust font-bold">✕</span>
                  <span>You need to meet accreditation requirements tied to evidence-based clinical interventions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-rust font-bold">✕</span>
                  <span>You are looking for a replacement for therapy, treatment, or psychiatric care</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-rust font-bold">✕</span>
                  <span>Your institution requires a randomized controlled trial evidence base</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-accent-rust text-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to bring this to your program?</h2>
          <p className="text-lg mb-8 opacity-95">
            The curriculum is deployable from day one. Complete facilitator scripts. No clinical training required to facilitate. Start with Part I at $1,500.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-accent-rust hover:bg-gray-100">
              Request a Pilot Proposal
            </Button>
            <Button className="border-2 border-white text-white hover:bg-white/10">
              View Full Curriculum
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-text-primary mb-4">What Really Happened</h4>
              <p className="text-sm text-text-secondary">A trauma education series by Capitol Contracts LLC</p>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary mb-4 text-sm">Navigation</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li><a href="#curriculum" className="hover:text-accent-rust transition-colors">Curriculum</a></li>
                <li><a href="#pricing" className="hover:text-accent-rust transition-colors">Pricing</a></li>
                <li><a href="#about" className="hover:text-accent-rust transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary mb-4 text-sm">Resources</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li><a href="#" className="hover:text-accent-rust transition-colors">Facilitator Guide</a></li>
                <li><a href="#" className="hover:text-accent-rust transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary mb-4 text-sm">Contact</h4>
              <p className="text-sm text-text-secondary">
                <a href="mailto:hello@whatreallyhappened.com" className="hover:text-accent-rust transition-colors">
                  hello@whatreallyhappened.com
                </a>
              </p>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-sm text-text-tertiary">
            <p>© 2026 Capitol Contracts LLC. All rights reserved.</p>
            <p className="mt-2">Built for institutions that need trauma literacy now.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
