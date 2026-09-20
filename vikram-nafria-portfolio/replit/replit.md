# Vikram Nafria Portfolio

A single-page personal portfolio for Vikram Nafria, a healthcare data and analytics professional with 15+ years of experience.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/vikram-portfolio/src/App.tsx` — portfolio content, sections, navigation, and interactions
- `artifacts/vikram-portfolio/src/index.css` — editorial visual system, responsive styles, and motion preferences
- `artifacts/vikram-portfolio/src/main.tsx` — React entry point and error boundary

## Architecture decisions

- The portfolio is a presentation-first frontend with no backend dependency.
- Resume-reported project themes are framed as selected work themes, not invented formal case studies.
- Impact metrics are presented as approximate values exactly as reported in the resume.
- AI is described as a current learning direction only; no unverified AI projects or outcomes are claimed.

## Product

- Responsive single-page portfolio for hiring managers, analytics leaders, healthcare technology teams, and collaborators.
- Anchor navigation across impact, work themes, approach, experience, skills, education, and contact.
- Expandable work-theme details with email and LinkedIn contact links.

## User preferences

- Editorial-minimal, professional, thoughtful, analytical, modern, and human.
- Off-white background, charcoal text, deep teal primary accent, and restrained warm accent.
- Avoid purple gradients, skill percentage bars, excessive rounded cards, unnecessary animation, stock photography, generic corporate language, and long resume-style sections.

## Gotchas

- Keep all portfolio copy grounded in the attached resume; do not add unverified projects, metrics, skills, or employment details.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
