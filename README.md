# LAZ Parking — Code Review Challenge

A tiny Next.js (App Router + TypeScript) app used for a front-end code review
exercise. The interesting file is a single reservations page that was
"reviewed before launch" — and the reviewer left inline notes flagging a
handful of problems.

Your job is to act on that review.

## The challenge

Open [`app/reservations/page.tsx`](app/reservations/page.tsx). It renders a
list of parking reservations fetched from `/api/reservations`. It works... but
it has **6 flagged issues**, marked inline as `[issue 1]` … `[issue 6]`.

For each flagged issue:

1. **Explain** why it's a problem (correctness, security, performance, or
   maintainability).
2. **Fix** it, and be ready to justify your approach.

### The issues at a glance

| # | Flag in code | Area |
|---|--------------|------|
| 1 | `'use client'` where it isn't needed | Rendering / Next.js architecture |
| 2 | `props` is untyped | TypeScript |
| 3 | `fetch` on every mount, no error handling | Data fetching / robustness |
| 4 | API key hardcoded and called from the browser | Security |
| 5 | Missing `key` on list items | React correctness |
| 6 | `price` may be a string (`price * 1.1`) | Data typing / correctness |

There's no single "correct" answer — we care about the reasoning as much as
the diff.

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

> Heads up: the starter builds and runs clean out of the box. The challenge
> file starts with `// @ts-nocheck` so its type errors don't clutter the editor
> — adding proper types is part of the exercise. Remove that line once you
> start typing things and the compiler will guide you.

## Suggested deliverable

A short write-up (a few sentences per issue) plus your updated
`app/reservations/page.tsx` — and any supporting files you feel the fixes
warrant (e.g. a shared type, a server-side rates helper, etc.).
