# LAZ Parking — Code Review Challenge

A tiny Next.js (App Router + TypeScript) app used for a front-end code review
exercise. The interesting file is a single reservations page that was
"reviewed before launch" — and the reviewer left inline notes flagging a
handful of problems.

Your job is to act on that review.

## What's in the repo

```
app/
  layout.tsx                  root layout
  page.tsx                    home, links to the reservations page
  reservations/page.tsx       >>> the file to review/fix <<<
  api/reservations/route.ts   mock data source (note: one price is a string)
```

The `/api/reservations` route is a mock. It intentionally returns one `price`
as a string (`"22"`) so issue #6 is real, not hypothetical. The
`https://rates.api/parking?key=SECRET_123` call is a fictional endpoint used to
illustrate the exposed-secret problem (issue #4) — it does not resolve.

## Getting started

```bash
npm install
npm run dev
```

Then open <http://localhost:3000/reservations>.

Useful checks while you work:

```bash
npm run lint     # ESLint (next/core-web-vitals)
npm run build    # type-check + production build
```
