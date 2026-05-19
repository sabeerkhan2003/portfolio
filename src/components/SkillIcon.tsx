import type { SkillIconId } from "@/data/portfolio";

const iconClass = "h-7 w-7 sm:h-8 sm:w-8";

export function SkillIcon({ icon }: { icon: SkillIconId }) {
  switch (icon) {
    case "html":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#E44D26" aria-hidden>
          <path d="M4.5 2l-.8 9.2 7.3 2.1 7.3-2.1L17.5 2H4.5zm12.4 6.5H8.4l.2 2.2h7.9l-.6 6.4-5.5 1.6-5.5-1.6-.3-3.2H6.3l.5 5.8 8.2 2.3 8.2-2.3.9-10.2z" />
        </svg>
      );
    case "css":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#1572B6" aria-hidden>
          <path d="M4.5 2l-.8 9.2 7.3 2.1 7.3-2.1L17.5 2H4.5zm12.2 6.5H8.2l.2 2.4h7.1l-.5 5.6-5.2 1.5-5.2-1.5-.2-2.4H6.1l.4 4.6 7.8 2.2 7.8-2.2.8-9.2z" />
        </svg>
      );
    case "tailwind":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#06B6D4" aria-hidden>
          <path d="M12 6c-3.3 0-5.4 1.6-6.3 4.8 1.2-1.6 2.6-2.2 4.2-1.7.9.3 1.5 1 2.2 1.8.9 1 1.9 2.1 4.1 2.1 3.3 0 5.4-1.6 6.3-4.8-1.2 1.6-2.6 2.2-4.2 1.7-.9-.3-1.5-1-2.2-1.8C16.2 7.1 15.2 6 13 6zm-6.3 6c-3.3 0-5.4 1.6-6.3 4.8 1.2-1.6 2.6-2.2 4.2-1.7.9.3 1.5 1 2.2 1.8.9 1 1.9 2.1 4.1 2.1 3.3 0 5.4-1.6 6.3-4.8-1.2 1.6-2.6 2.2-4.2 1.7-.9-.3-1.5-1-2.2-1.8-.9-1-1.9-2.1-4.1-2.1z" />
        </svg>
      );
    case "javascript":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#F7DF1E" aria-hidden>
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path fill="#000" d="M15.5 14.2c-.4.7-.8 1.2-1.7 1.2-.8 0-1.3-.4-1.3-1.5V9.2H10v5c0 2.2 1.3 3.2 3.1 3.2 1.7 0 2.7-.8 3.2-1.8l-1.8-1.4zM9.2 14c0 1.3-.6 1.9-1.5 1.9-.9 0-1.4-.6-1.4-1.9V9.2H4.5v4.9c0 2.2 1.3 3.4 3.2 3.4 2 0 3.2-1.2 3.2-3.3V9.2H9.2v4.8z" />
        </svg>
      );
    case "react":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#61DAFB" aria-hidden>
          <circle cx="12" cy="12" r="2.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
        </svg>
      );
    case "nextjs":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1.2 14.5V16l4.3-7.5H13v1.5H15l-2.8 5 2.8 5h2.2v-1.5H13.2zM10 8.5h2.2l-4.3 7.5H10V8.5z" />
        </svg>
      );
    case "typescript":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#3178C6" aria-hidden>
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path fill="#fff" d="M13.6 15.5v1.9h-5.2v-1.9h1.8v-4.6H7.4V9h6.4v1.9h-1.8v4.6h1.6zm4.1-1.9c.7.5 1.1 1 1.1 1.7 0 1.2-1 2-2.6 2-1.1 0-2-.4-2.6-1l1-1.4c.4.4 1 .7 1.6.7.6 0 1-.3 1-.8s-.4-.8-1.2-1.2c-1.4-.7-2.1-1.5-2.1-2.6 0-1.1.9-2 2.4-2 1 0 1.8.3 2.4.9l-1 1.4c-.4-.4-.9-.6-1.4-.6-.5 0-.9.3-.9.7 0 .5.4.8 1.3 1.2z" />
        </svg>
      );
    case "angular":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#DD0031" aria-hidden>
          <path d="M12 2.5L3.5 6.5l1.2 10.5L12 21.5l7.3-4.5 1.2-10.5L12 2.5zm0 2.2l5.8 2.1-.9 7.8L12 18.8l-4.9-3.2-.9-7.8L12 4.7zM11 8v5.5h2V8h-2z" />
        </svg>
      );
    case "nodejs":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#339933" aria-hidden>
          <path d="M12 2.5c-.4 0-.8.2-1 .6L4.2 16.2c-.4.7.1 1.6 1 1.6h3.2l1.8-4.4h5.6l1.8 4.4h3.2c.9 0 1.4-.9 1-1.6L13 3.1c-.2-.4-.6-.6-1-.6zm0 5.2 2.2 5.4h-4.4L12 7.7z" />
        </svg>
      );
    case "python":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" aria-hidden>
          <path
            fill="#3776AB"
            d="M11.9 2C8.2 2 5 3 5 5.5v1.2h6.8V6.2c0-.8.8-1.4 2.1-1.4 1.2 0 2.1.6 2.1 1.4v1.1h-6.2v2.2H13v6.2c0 .8-.9 1.4-2.1 1.4-1.2 0-2.1-.6-2.1-1.4v-1H5v1.2c0 2.5 3.2 3.5 6.9 3.5s6.9-1 6.9-3.5V9.5h-2.4v1.1c0 .8-.8 1.4-2.1 1.4-1.2 0-2.1-.6-2.1-1.4V8.3h6.2V7.1H5V5.5C5 3 8.2 2 11.9 2z"
          />
          <path
            fill="#FFD43B"
            d="M12.1 22c3.7 0 6.9-1 6.9-3.5v-1.2h-6.8v1.5c0 .8-.8 1.4-2.1 1.4-1.2 0-2.1-.6-2.1-1.4v-1.1h6.2v-2.2H11v-6.2c0-.8.9-1.4 2.1-1.4 1.2 0 2.1.6 2.1 1.4v1H19v-1.2c0-2.5-3.2-3.5-6.9-3.5S5.2 16 5.2 18.5v1.2h2.4v-1.1c0-.8.8-1.4 2.1-1.4 1.2 0 2.1.6 2.1 1.4v1.1H5.4v1.2c0 2.5 3.2 3.5 6.7 3.5z"
          />
        </svg>
      );
    case "java":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#ED8B00" aria-hidden>
          <path d="M8.2 17.5s-.9.5.7.7c2 .2 3-.2 3-.2s.5.3 1.2.3c2.5 0 4.3-1.5 4.3-4.2 0-2.2-1.2-3.3-3.2-4.5-1.3-.8-2.1-1.3-2.1-2.1 0-.7.8-1.4 2.1-1.4 1.2 0 2 .4 2.6.8l.9-2.7c-.7-.5-1.8-.9-3.3-.9-2.5 0-4.2 1.3-4.2 3.5 0 2.2 1.4 3.2 3.1 4.2 1.2.7 1.9 1.2 1.9 2 0 .6-.7 1.3-2.2 1.2-1.8-.1-3-.6-3-.6l-.7 2.7zM5.5 17.8c-2.2-.5-3.3-1.5-3.3-3.2 0-2.4 2-3.8 5.3-5.4 1.9-1 2.8-1.7 2.8-2.7 0-.6-.5-1.1-1.4-1.1-.9 0-1.7.3-2.3.7L5.2 5.5c.8-.6 2-1 3.5-1 2.7 0 4.3 1.4 4.3 3.4 0 2.2-1.5 3.4-4 4.8-1.6.8-2.5 1.3-2.5 2.1 0 .5.4 1 1.3 1.2l-1.3 2.6z" />
        </svg>
      );
    case "oops":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h10M4 17h14" className="text-accent" />
          <rect x="14" y="10" width="6" height="8" rx="1" className="text-accent" stroke="currentColor" />
        </svg>
      );
    case "mysql":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#00758F" aria-hidden>
          <path d="M12 3C8 3 4 4.5 4 7.5c0 2.2 2.5 4 6 4.8V19c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-6.7c3.5-.8 6-2.6 6-4.8C20 4.5 16 3 12 3zm0 2c3.5 0 6 .9 6 2.5S15.5 10 12 10 6 9.1 6 7.5 8.5 5 12 5z" />
        </svg>
      );
    case "github":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case "django":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#092E20" aria-hidden>
          <path d="M12 2C7 2 3 4 3 7v10c0 3 4 5 9 5s9-2 9-5V7c0-3-4-5-9-5zm-4 6h2v6H8V8zm6 0c2.2 0 4 1 4 3s-1.8 3-4 3v-2c.6 0 1-.2 1-.5s-.4-.5-1-.5H14V8h2z" />
        </svg>
      );
  }
}
