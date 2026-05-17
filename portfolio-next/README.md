# Sabeer Khan — Developer Portfolio (Next.js)

Professional developer portfolio built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS (PostCSS)
- Framer Motion
- EmailJS (`@emailjs/browser`)
- next-themes (dark / light mode)
- react-hook-form (contact validation)

## Getting Started

### 1. Install dependencies

```bash
cd portfolio-next
pnpm install
```

### 2. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Production build

```bash
pnpm build
pnpm start
```

## EmailJS Configuration

The contact form uses [EmailJS](https://www.emailjs.com/) — no backend required.

1. Create a free account at https://www.emailjs.com/
2. Add an **Email Service** (Gmail, Outlook, etc.) and copy the **Service ID**
3. Create an **Email Template** with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`
4. Copy your **Public Key** from Account → API Keys
5. Copy `.env.example` to `.env.local` and fill in your values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

6. Restart the dev server after changing env variables.

See the comment block in `src/lib/emailjs.ts` for full setup details.

## Project Structure

```
src/
  app/           layout, page, global styles
  components/    UI sections and interactive widgets
  data/          portfolio.ts — all content as typed constants
  lib/           emailjs.ts — contact form helper
  providers/     ThemeProvider
public/
  images/        professional photo, projects, certificates
  resume/        downloadable CV
```

## Notes

- This project lives in `portfolio-next/` and does not modify the original HTML portfolio.
- Update content in `src/data/portfolio.ts` only — components read from there.
- Place new images under `public/images/`.
