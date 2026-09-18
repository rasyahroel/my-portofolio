import Link from "next/link";
import { ErrorShell } from "./components/ErrorShell";

// Next.js convention: this file is automatically used for any URL that
// doesn't match a real page. Works with `output: "export"` too — it gets
// pre-rendered into a plain 404.html file that most static hosts
// (Vercel, Netlify, GitHub Pages) know to serve for unmatched routes.
export default function NotFound() {
  return (
    <ErrorShell
      code="404"
      fileLabel="404.sh"
      command="$ cd ./this-page"
      output="bash: cd: no such file or directory"
      title="Page not found"
      description="The page you're looking for doesn't exist, has moved, or the link might be broken."
      actions={
        <Link
          href="/"
          className="font-ui-mono text-sm px-5 py-2.5 rounded-lg border border-[var(--gold)]/40 bg-[var(--gold)]/10 text-[var(--gold)] hover:bg-[var(--gold)]/20 transition-all duration-200"
        >
          $ cd ~
        </Link>
      }
    />
  );
}
