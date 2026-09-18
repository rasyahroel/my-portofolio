import type { ReactNode } from "react";

// Shared visual shell for the site's error/status pages (404, 500, 403, ...).
// Not a route itself — just a presentational component, reused so all
// these pages stay visually consistent with the rest of the site (same
// terminal-window chrome as the hero section) without repeating markup.
export function ErrorShell({
  code,
  fileLabel,
  command,
  output,
  title,
  description,
  actions,
}: {
  code: string;
  fileLabel: string;
  command: string;
  output: string;
  title: string;
  description: string;
  actions: ReactNode;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--ink)] text-[var(--text)] px-4 py-20">
      <div className="w-full max-w-xl rounded-xl border border-[var(--border)] bg-[var(--panel)]/80 overflow-hidden shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] bg-[var(--panel-2)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="font-ui-mono text-xs text-[var(--muted)] ml-2">{fileLabel}</span>
        </div>
        <div className="p-8 sm:p-10 font-ui-mono">
          <div className="text-[var(--teal)] text-sm">{command}</div>
          <div className="text-[var(--text)]/70 text-sm mt-1">{output}</div>

          <div className="mt-8 text-6xl font-bold text-[var(--gold)]">{code}</div>
          <h1 className="mt-2 text-xl font-semibold text-[var(--text)]">{title}</h1>
          <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed max-w-sm">{description}</p>

          <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
        </div>
      </div>
    </main>
  );
}
