'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [authMsg, setAuthMsg] = useState('');
  const [authErr, setAuthErr] = useState(false);

  const handleSignIn = () => {
    if (!email.trim()) {
      setAuthErr(true);
      setAuthMsg('Enter your email to continue.');
      return;
    }
    setAuthErr(false);
    setAuthMsg('Sign-in isn\u2019t connected yet \u2014 this is the shell.');
  };

  return (
    <>
      <header className="site-header">
        <div className="wrap bar">
          <div className="mark">
            <span className="dot" />
            June Guided Solutions <span className="sub">/ JGS</span>
          </div>
          <nav className="nav">
            <a href="#work">Work</a>
            <a href="#record">Record</a>
          </nav>
        </div>
      </header>

      <main>
        <div className="wrap">
          <section className="hero">
            <h1 style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 1.25rem' }}>June Guided Solutions</h1>
            <p
              className="lede"
              lang="en"
              style={{ textAlign: 'center', margin: '0 auto', maxWidth: '620px', textWrap: 'balance' }}
            >
              A software company building custom web applications and AI-supported workflows for law firms
              and professional-service businesses: legal intake, document generation, and workflow
              automation.
            </p>
          </section>
        </div>

        <div className="wrap">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '10px',
              padding: '4px 0 8px',
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            {[
              'Next.js',
              'Claude API',
              'Document generation',
              'Intake workflows',
              'Secure infrastructure',
              'Bilingual EN / KR',
              'NY / NJ',
            ].map((t) => (
              <span
                key={t}
                style={{
                  fontSize: '13px',
                  letterSpacing: '.02em',
                  color: 'rgba(255,255,255,.55)',
                  border: '1px solid rgba(255,255,255,.10)',
                  borderRadius: '999px',
                  padding: '6px 14px',
                  whiteSpace: 'nowrap',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="wrap">
          <section id="work">
            <div className="sec-label">What I do</div>
            <div className="cards">
              <div className="card">
                <h3>Firm web apps</h3>
                <p>Custom intake, document preparation, and client-facing tools built around how a firm actually runs &mdash; not a template bolted onto a practice.</p>
              </div>
              <div className="card">
                <h3>Supervised AI</h3>
                <p>AI that drafts and speeds up the work, with a licensed professional reviewing every output before it reaches a client. The model assists; the attorney decides.</p>
              </div>
              <div className="card">
                <h3>Security &amp; infrastructure</h3>
                <p>Tenant migration, secrets handling, access control &mdash; the quiet work that keeps confidential client data where it belongs.</p>
              </div>
            </div>
          </section>
        </div>

        <div className="wrap">
          <section id="record">
            <div className="sec-label">Selected project</div>
            <div className="rec">
              <div className="rec-head">
                <div className="rec-title">
                  divorcegpt.com{' '}
                  <a
                    href="/divorcegpt-demo.mp4"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '13px',
                      fontWeight: 400,
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      letterSpacing: '.02em',
                    }}
                  >
                    (Demo Video)
                  </a>
                </div>
                <div className="rec-tag">Retired &mdash; early automated build</div>
              </div>
              <div className="rec-body">
                <div className="rec-col">
                  <h4>What it was</h4>
                  <p>An early build &mdash; a fully automated, AI-only tool for uncontested divorce paperwork, with no attorney review in the process. It was technically functional.</p>
                  <h4>Why I retired it</h4>
                  <p>Fully automated legal work raises real accountability and professional-responsibility concerns. A tool that generates legal documents without a licensed professional standing behind the output is the wrong design, regardless of how well it runs.</p>
                </div>
                <div className="rec-col">
                  <h4>Where the work went</h4>
                  <p>I treat it as a useful lesson rather than something to hide. Shipping it, and recognizing why it had to change, informed everything I built afterward.</p>
                  <p>The work now continues as an attorney-supervised system, where every document is reviewed and finalized by a licensed attorney before use. Same problem, sounder architecture.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="wrap">
          <section id="access">
            <div className="sec-label">Client access</div>
            <div className="access">
              <div className="ac-copy">
                <h3>A private workspace.</h3>
                <p>The tools behind this page are gated. If you have credentials, sign in. Access is arranged directly.</p>
                <p className="fine">Sign-in isn&rsquo;t connected to a live backend yet &mdash; this is the shell. Nothing is collected.</p>
              </div>
              <div className="ac-form">
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@firm.com"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="pw">Password</label>
                  <input id="pw" type="password" placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;" autoComplete="off" />
                </div>
                <button className="btn" onClick={handleSignIn}>Sign in</button>
                <div className="auth-msg" style={{ color: authErr ? '#C98A8A' : 'var(--accent)' }}>{authMsg}</div>
                <div className="ac-note">No data retained &middot; Access by arrangement</div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <div className="wrap foot">
          <div>June Guided Solutions, LLC &middot; juneguidedsolutions.com</div>
          <div><a href="mailto:jsk@jakekimlaw.com">jsk@jakekimlaw.com</a></div>
          <div>&copy; 2026</div>
        </div>
      </footer>
    </>
  );
}
