import { type ReactNode, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Check, ChevronDown, Linkedin, Mail, MapPin, Menu, X } from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

const navItems = [
  { label: 'Impact', href: '#impact' },
  { label: 'Work themes', href: '#work' },
  { label: 'Approach', href: '#approach' },
  { label: 'Experience', href: '#experience' },
  { label: 'Toolkit', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const projects = [
  {
    number: '01',
    eyebrow: 'Data quality · MDM',
    title: 'Making healthcare data dependable at the point of use',
    description:
      'Enterprise initiatives across member, provider, and reference domains—connecting business glossaries, data dictionaries, data quality indicators, and high-volume SQL validation.',
    outcome: '~20%',
    outcomeLabel: 'reduction in production data defects',
    detail:
      'A recurring practice: make the definition visible, test the data against it, and bring business, IT, analytics, and governance into the same conversation.',
    accent: 'teal',
  },
  {
    number: '02',
    eyebrow: 'Privacy · sensitive data',
    title: 'Turning privacy controls into measurable practice',
    description:
      'Work that protects PII and supports HIPAA compliance while keeping data useful for the people who need to make decisions with it.',
    outcome: '~45%',
    outcomeLabel: 'reduction in privacy incidents',
    detail:
      'The focus is practical: understand where sensitive information moves, validate controls, and use clear indicators to spot risk before it becomes an incident.',
    accent: 'coral',
  },
  {
    number: '03',
    eyebrow: 'SQL · pipelines · testing',
    title: 'Less waiting. More confidence in every release.',
    description:
      'From SQL optimization and data pipelines to automated validation and regression testing, I look for the friction that makes teams hesitate.',
    outcome: '~70%',
    outcomeLabel: 'reduction in customer data incidents',
    detail:
      'That has included high-volume validation, pipeline and report testing across environments, and automated checks using Cucumber with Ruby and Jenkins.',
    accent: 'ochre',
  },
];

const experience = [
  {
    dates: 'Sep 2021 — present',
    role: 'MDM Lead Data Analyst',
    company: 'Arkansas BlueShield BlueCross',
    location: 'Bentonville, AR',
    current: true,
    body: 'Leads member, provider, and reference data initiatives, aligning definitions, quality, privacy, and analytics across teams.',
  },
  {
    dates: 'Mar 2020 — Sep 2021',
    role: 'MDM Lead Data Analyst',
    company: 'TETRASOFT',
    location: 'Little Rock, AR · client: Arkansas BCBS',
    body: 'Validated data pipelines and reports across environments using SQL, Ab Initio, and unit testing.',
  },
  {
    dates: 'Oct 2014 — Mar 2020',
    role: 'Application Development Specialist / Senior Analyst',
    company: 'Accenture',
    location: 'Hartford, CT · client: Cigna',
    body: 'Led analytics and quality work spanning dashboards, rebates data, SQL optimization, API testing, and automated validation.',
  },
  {
    dates: 'Jul 2010 — Oct 2014',
    role: 'Application Development Analyst',
    company: 'Accenture',
    location: 'Chennai, Tamil Nadu · clients: Cigna and Independence Blue Cross; Bank of America',
    body: 'Supported data migration, ETL review, performance and regression testing, production issues, and stakeholder reporting.',
  },
];

const skillGroups = [
  { label: 'Data & query', values: 'SQL · SQL Server Management Studio · TOAD for Oracle · Teradata SQL Assistant · AQT · SAS · R' },
  { label: 'Pipelines & integration', values: 'PowerCenter Informatica 9/10 · Microsoft SSIS · Ab Initio · stored procedures · ESP · expressIT' },
  { label: 'Quality & delivery', values: 'Selenium · Cucumber with Ruby · Jenkins · TFS · GIT · SonarQube · HP QC/ALM · FITNESSE' },
  { label: 'Reporting & platforms', values: 'Tableau · Power BI · MS SQL Server · MySQL · Oracle · MongoDB' },
  { label: 'Domain & ways of working', values: 'Healthcare insurance · banking · Agile · Waterfall' },
];

function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-3 font-mono-ui text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
      <span className="text-accent">{index}</span>
      <span className="h-px w-8 bg-accent/60" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openProject, setOpenProject] = useState<number | null>(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-[100dvh] overflow-x-hidden">
      <a className="skip-link" href="#main">Skip to main content</a>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-foreground/10 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" onClick={closeMenu} className="group flex items-center gap-3" data-testid="link-brand">
            <span className="flex h-8 w-8 items-center justify-center border border-primary bg-primary font-mono-ui text-[11px] font-medium text-primary-foreground transition-transform group-hover:-rotate-6">VN</span>
            <span className="hidden text-sm font-semibold tracking-[-0.02em] sm:inline">Vikram Nafria</span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-[12px] font-medium text-muted-foreground transition-colors hover:text-foreground" data-testid={`link-nav-${item.label.toLowerCase().replace(' ', '-')}`}>
                {item.label}
              </a>
            ))}
            <a href="mailto:vikramnafria26@gmail.com" className="ml-3 inline-flex items-center gap-2 border border-primary px-4 py-2 text-[12px] font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground" data-testid="link-nav-email">
              Let&apos;s talk <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </nav>
          <button type="button" className="inline-flex items-center justify-center p-2 text-foreground lg:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)} data-testid="button-mobile-menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <nav id="mobile-navigation" className="border-t border-foreground/10 bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={closeMenu} className="border-b border-foreground/10 py-3 text-sm font-medium" data-testid={`link-mobile-${item.label.toLowerCase().replace(' ', '-')}`}>
                  {item.label}
                </a>
              ))}
              <a href="mailto:vikramnafria26@gmail.com" onClick={closeMenu} className="mt-3 inline-flex w-fit items-center gap-2 bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground" data-testid="link-mobile-email">
                Start a conversation <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </nav>
        )}
      </header>

      <main id="main">
        <section id="top" className="page-grid relative border-b border-foreground/10 pt-[72px]" aria-labelledby="hero-title">
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-end gap-14 px-5 pb-16 pt-16 sm:px-8 sm:pt-20 lg:min-h-[600px] lg:grid-cols-[1.3fr_0.7fr] lg:px-12 lg:pb-20 lg:pt-24">
            <div>
              <div className="mb-9 flex items-center gap-3 font-mono-ui text-[11px] uppercase tracking-[0.18em] text-primary">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                Data leader · healthcare
              </div>
              <h1 id="hero-title" className="max-w-[790px] text-balance font-display text-[clamp(3.3rem,8.5vw,7.4rem)] leading-[0.92] tracking-[-0.06em] text-primary">
                Data people can <em className="text-accent not-italic">trust.</em>
              </h1>
              <div className="mt-9 max-w-[540px] border-l-2 border-accent pl-5 text-[17px] leading-7 text-muted-foreground sm:text-[19px]">
                <p>I help healthcare teams turn complex data into trusted decisions through master data management, quality, governance, and analytics.</p>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a href="#work" className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-foreground" data-testid="link-hero-work">
                  Explore selected work <ArrowDownRight size={16} aria-hidden="true" />
                </a>
                <a href="#contact" className="link-underline text-sm font-semibold text-foreground" data-testid="link-hero-contact">Get in touch</a>
              </div>
            </div>
            <div className="relative hidden h-full min-h-[400px] lg:block" aria-hidden="true">
              <div className="absolute bottom-8 right-8 h-[300px] w-[300px] rounded-full border border-primary/20" />
              <div className="absolute bottom-[58px] right-[58px] h-[200px] w-[200px] rounded-full border border-accent/70" />
              <div className="absolute bottom-[128px] right-[128px] h-16 w-16 rounded-full bg-accent" />
              <div className="absolute bottom-0 right-0 h-px w-[390px] bg-primary/35" />
              <div className="absolute bottom-0 right-0 h-[390px] w-px bg-primary/35" />
              <div className="absolute bottom-10 right-[2px] font-mono-ui text-[10px] uppercase tracking-[0.18em] text-muted-foreground [writing-mode:vertical-rl]">data / care / clarity</div>
              <div className="absolute left-3 top-16 max-w-[170px] font-mono-ui text-[10px] leading-5 text-muted-foreground">01<br />definitions before dashboards<br />evidence before confidence</div>
            </div>
          </div>
          <div className="mx-auto flex max-w-[1240px] items-center justify-between border-t border-foreground/10 px-5 py-5 font-mono-ui text-[10px] uppercase tracking-[0.15em] text-muted-foreground sm:px-8 lg:px-12">
            <span data-testid="text-location"><MapPin size={13} className="mr-2 inline text-accent" aria-hidden="true" />USA</span>
            <span>15+ years making data useful</span>
          </div>
        </section>

        <section id="impact" className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32" aria-labelledby="impact-title">
          <SectionLabel index="01">Selected impact</SectionLabel>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <h2 id="impact-title" className="max-w-[450px] font-display text-4xl leading-[1.03] tracking-[-0.04em] text-primary sm:text-5xl">The measure of good data work is what it lets people do.</h2>
              <p className="mt-7 max-w-[390px] text-[16px] leading-7 text-muted-foreground">Results reported in my resume reflect a long view: stronger definitions, better validation, and fewer surprises in the systems people rely on.</p>
            </div>
            <div className="grid grid-cols-2 gap-x-7 gap-y-10 border-t border-foreground/15 pt-7 lg:pt-8">
              {[
                ['~20%', 'reduction in production data defects'],
                ['~45%', 'reduction in privacy incidents'],
                ['~70%', 'reduction in customer data incidents'],
                ['~15%', 'improved operational efficiency'],
              ].map(([value, label], index) => (
                <div key={label} data-testid={`metric-impact-${index}`}>
                  <div className="font-display text-4xl tracking-[-0.05em] text-primary sm:text-5xl">{value}</div>
                  <div className="mt-3 max-w-[130px] text-[13px] leading-5 text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="border-y border-foreground/10 bg-secondary/45" aria-labelledby="work-title">
          <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <SectionLabel index="02">Featured work themes</SectionLabel>
            <div className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <h2 id="work-title" className="max-w-[590px] font-display text-4xl leading-[1.03] tracking-[-0.04em] text-primary sm:text-6xl">A closer look at the questions behind the outcomes.</h2>
              <p className="max-w-[240px] text-[15px] leading-6 text-muted-foreground">These are selected themes from my experience, not formal portfolio projects.</p>
            </div>
            <div className="border-t border-foreground/20">
              {projects.map((project, index) => {
                const isOpen = openProject === index;
                return (
                  <article key={project.number} className="border-b border-foreground/20" data-testid={`card-project-${project.number}`}>
                    <button type="button" onClick={() => setOpenProject(isOpen ? null : index)} className="group grid w-full grid-cols-[42px_1fr_auto] items-start gap-4 py-7 text-left sm:grid-cols-[60px_1fr_120px_auto] sm:gap-7" aria-expanded={isOpen} data-testid={`button-project-${project.number}`}>
                      <span className="font-mono-ui text-[11px] text-accent">{project.number}</span>
                      <span>
                        <span className={`mb-2 block font-mono-ui text-[10px] uppercase tracking-[0.15em] ${project.accent === 'coral' ? 'text-accent' : 'text-primary'}`}>{project.eyebrow}</span>
                        <span className="block max-w-[600px] font-display text-2xl leading-tight tracking-[-0.03em] text-primary transition-colors group-hover:text-accent sm:text-3xl">{project.title}</span>
                      </span>
                      <span className="hidden text-right font-mono-ui text-[10px] uppercase leading-4 tracking-[0.08em] text-muted-foreground sm:block">{project.outcome}<br />{project.outcomeLabel}</span>
                      <span className={`mt-1 flex h-7 w-7 items-center justify-center border border-foreground/20 transition-colors ${isOpen ? 'bg-primary text-primary-foreground' : 'text-primary group-hover:border-primary'}`}><ChevronDown size={15} className={isOpen ? 'rotate-180 transition-transform' : 'transition-transform'} aria-hidden="true" /></span>
                    </button>
                    {isOpen && (
                      <div className="grid grid-cols-[42px_1fr] gap-4 pb-8 sm:grid-cols-[60px_1fr_120px_auto] sm:gap-7">
                        <span aria-hidden="true" />
                        <div className="max-w-[680px]">
                          <p className="text-[15px] leading-7 text-muted-foreground">{project.description}</p>
                          <p className="mt-4 border-l border-accent pl-4 text-[15px] leading-6 text-foreground/75">{project.detail}</p>
                        </div>
                        <div className="col-start-2 mt-2 sm:hidden"><span className="font-mono-ui text-[11px] text-accent">{project.outcome}</span> <span className="text-xs text-muted-foreground">{project.outcomeLabel}</span></div>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="approach" className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32" aria-labelledby="approach-title">
          <SectionLabel index="03">How I work</SectionLabel>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-24">
            <div>
              <h2 id="approach-title" className="max-w-[410px] font-display text-4xl leading-[1.03] tracking-[-0.04em] text-primary sm:text-5xl">Curiosity, with a control check.</h2>
              <p className="mt-7 max-w-[400px] text-[16px] leading-7 text-muted-foreground">I am most useful where a business question meets messy data. The work is analytical, but the outcome is human: a decision made with more context and less guesswork.</p>
            </div>
            <div className="grid gap-0 border-t border-foreground/15">
              {[
                ['01', 'Start with the definition', 'Agree on what a field, measure, or “good” record means before optimizing the workflow around it.'],
                ['02', 'Follow the data trail', 'Use SQL, validation, and thoughtful questions to understand how information behaves across domains and environments.'],
                ['03', 'Leave the system stronger', 'Build checks, documentation, and shared language that make the next release easier to trust than the last.'],
              ].map(([number, title, body]) => (
                <div key={number} className="grid grid-cols-[44px_1fr] gap-5 border-b border-foreground/15 py-7 sm:grid-cols-[62px_1fr]">
                  <span className="font-mono-ui text-[11px] text-accent">{number}</span>
                  <div><h3 className="text-lg font-semibold tracking-[-0.02em] text-primary">{title}</h3><p className="mt-2 max-w-[520px] text-[15px] leading-6 text-muted-foreground">{body}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-8 border-t border-foreground/15 pt-7 sm:grid-cols-3">
            <div className="sm:col-span-2"><p className="max-w-[620px] font-display text-2xl leading-tight tracking-[-0.03em] text-primary sm:text-3xl">I am also building my understanding of AI—carefully, with the same attention to data quality, privacy, and evidence.</p></div>
            <div className="font-mono-ui text-[10px] uppercase leading-5 tracking-[0.12em] text-muted-foreground">Current learning direction<br /><span className="text-accent">AI · healthcare data · responsible use</span></div>
          </div>
        </section>

        <section id="experience" className="border-y border-foreground/10 bg-primary text-primary-foreground" aria-labelledby="experience-title">
          <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
            <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
              <div><div className="mb-8 flex items-center gap-3 font-mono-ui text-[11px] uppercase tracking-[0.18em] text-primary-foreground/60"><span className="text-accent">04</span><span className="h-px w-8 bg-accent" aria-hidden="true" /><span>Professional context</span></div><h2 id="experience-title" className="font-display text-4xl leading-[1.03] tracking-[-0.04em] sm:text-6xl">The path behind the practice.</h2></div>
              <p className="max-w-[280px] text-[15px] leading-6 text-primary-foreground/65">15+ years across healthcare insurance, banking, data, quality, and delivery.</p>
            </div>
            <div className="mt-16 border-t border-primary-foreground/20">
              {experience.map((item, index) => (
                <div key={`${item.company}-${item.dates}`} className="grid grid-cols-1 gap-4 border-b border-primary-foreground/20 py-7 sm:grid-cols-[150px_1fr] sm:gap-10 lg:grid-cols-[190px_1fr_260px] lg:gap-16" data-testid={`experience-item-${index}`}>
                  <div className="font-mono-ui text-[10px] uppercase leading-5 tracking-[0.12em] text-primary-foreground/55">{item.dates}{item.current && <span className="mt-2 flex items-center gap-2 text-accent"><span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />current</span>}</div>
                  <div><h3 className="text-lg font-semibold tracking-[-0.02em]">{item.role}</h3><p className="mt-1 text-[15px] text-accent">{item.company}</p><p className="mt-4 max-w-[580px] text-[15px] leading-6 text-primary-foreground/68 lg:hidden">{item.body}</p></div>
                  <div className="hidden text-[15px] leading-6 text-primary-foreground/68 lg:block"><p>{item.body}</p><p className="mt-3 flex items-center gap-2 font-mono-ui text-[10px] uppercase tracking-[0.1em] text-primary-foreground/50"><MapPin size={12} aria-hidden="true" />{item.location}</p></div>
                  <div className="font-mono-ui text-[10px] uppercase tracking-[0.1em] text-primary-foreground/50 lg:hidden"><MapPin size={12} className="mr-2 inline" aria-hidden="true" />{item.location}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32" aria-labelledby="skills-title">
          <SectionLabel index="05">Skills & toolkit</SectionLabel>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div><h2 id="skills-title" className="font-display text-4xl leading-[1.03] tracking-[-0.04em] text-primary sm:text-5xl">A toolkit for the spaces between teams.</h2><p className="mt-7 max-w-[390px] text-[15px] leading-7 text-muted-foreground">Tools matter. So does knowing when the real problem is a definition, a handoff, or a missing conversation.</p></div>
            <div className="border-t border-foreground/15">
              {skillGroups.map((group) => <div key={group.label} className="grid grid-cols-1 gap-2 border-b border-foreground/15 py-5 sm:grid-cols-[190px_1fr] sm:gap-8"><span className="font-mono-ui text-[10px] uppercase tracking-[0.12em] text-accent">{group.label}</span><span className="text-[15px] leading-6 text-foreground/75">{group.values}</span></div>)}
            </div>
          </div>
        </section>

        <section id="education" className="border-t border-foreground/10 bg-secondary/45" aria-labelledby="education-title">
          <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
            <SectionLabel index="06">Education & credentials</SectionLabel>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">
              <div>
                <h2 id="education-title" className="font-display text-4xl leading-[1.03] tracking-[-0.04em] text-primary sm:text-5xl">Always learning the next layer.</h2>
                <div className="mt-10 border-t border-foreground/15">
                  <div className="grid gap-2 border-b border-foreground/15 py-5 sm:grid-cols-[1fr_auto] sm:gap-5"><div><h3 className="font-semibold text-primary">Master of Applied Business Analytics</h3><p className="mt-1 text-[15px] text-muted-foreground">University of Arkansas, Fayetteville</p></div><span className="font-mono-ui text-[10px] text-accent">Aug 2025 — present</span></div>
                  <div className="grid gap-2 border-b border-foreground/15 py-5 sm:grid-cols-[1fr_auto] sm:gap-5"><div><h3 className="font-semibold text-primary">Bachelor of Engineering, Production Engineering</h3><p className="mt-1 text-[15px] text-muted-foreground">Anna University · PSG College of Technology, Coimbatore</p></div><span className="font-mono-ui text-[10px] text-accent">May 2006 — May 2010</span></div>
                </div>
              </div>
              <div><h3 className="font-mono-ui text-[10px] uppercase tracking-[0.15em] text-accent">Certifications</h3><ul className="mt-5 grid grid-cols-1 gap-3 text-[15px] text-foreground/75 sm:grid-cols-2">{['ISTQB Foundation', 'US healthcare certification and AHM250', 'Certified Professional, Academy for Healthcare Management', 'SAFe Certified Scrum Master', 'SAFe Certified Advanced Scrum Master', 'HP ALM', 'Accenture Test Designer', 'Accenture Testers'].map((item) => <li key={item} className="flex gap-2 leading-5"><Check size={15} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />{item}</li>)}</ul></div>
            </div>
          </div>
        </section>

        <section id="contact" className="page-grid" aria-labelledby="contact-title">
          <div className="mx-auto max-w-[1240px] px-5 py-28 sm:px-8 lg:px-12 lg:py-36">
            <SectionLabel index="07">Contact</SectionLabel>
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-24">
              <div><h2 id="contact-title" className="max-w-[720px] font-display text-5xl leading-[0.95] tracking-[-0.06em] text-primary sm:text-7xl">Have a hard data problem?</h2><p className="mt-8 max-w-[480px] text-[16px] leading-7 text-muted-foreground">I am open to conversations with hiring managers, analytics leaders, healthcare technology teams, and thoughtful collaborators.</p><div className="mt-9 flex flex-wrap items-center gap-4"><a href="mailto:vikramnafria26@gmail.com" className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-foreground" data-testid="link-contact-email"><Mail size={16} aria-hidden="true" />Email Vikram <ArrowUpRight size={15} aria-hidden="true" /></a><a href="https://www.linkedin.com/in/vikramnafria/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-primary px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground" data-testid="link-contact-linkedin"><Linkedin size={16} aria-hidden="true" />LinkedIn</a></div></div>
              <div className="border-t border-foreground/15 pt-5 text-sm text-muted-foreground"><div className="flex items-center gap-3"><Mail size={16} className="text-accent" aria-hidden="true" /><a href="mailto:vikramnafria26@gmail.com" className="link-underline" data-testid="text-contact-email">vikramnafria26@gmail.com</a></div><div className="mt-4 flex items-center gap-3"><MapPin size={16} className="text-accent" aria-hidden="true" /><span data-testid="text-contact-location">USA</span></div></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-foreground/10 bg-primary px-5 py-7 text-primary-foreground sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-4 sm:flex-row sm:items-center"><span className="font-display text-xl">Vikram Nafria</span><span className="font-mono-ui text-[10px] uppercase tracking-[0.14em] text-primary-foreground/55">Healthcare data · analytics · trust</span><a href="#top" className="inline-flex items-center gap-2 text-xs text-primary-foreground/70 transition-colors hover:text-primary-foreground" data-testid="link-back-top">Back to top <ArrowUpRight size={13} aria-hidden="true" /></a></div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
