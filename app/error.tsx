"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ErrorShell } from "./components/ErrorShell";

// Next.js convention: automatically wraps this route segment (the whole
// site, since it's directly in app/) in an error boundary. If anything
// throws while rendering, this shows instead of a blank/broken page.
// Must be a Client Component — Next.js requires that for error.tsx.
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to the browser console for debugging — never shown to the
    // visitor directly, since raw error messages/stacks aren't something
    // a portfolio visitor should see.
    console.error(error);
  }, [error]);

  return (
    <ErrorShell
      code="500"
      fileLabel="error.sh"
      command="$ npm run start"
      output="Error: something went wrong while rendering this page"
      title="Something broke"
      description="An unexpected error occurred. You can try again, or head back home."
      actions={
        <>
          <button
            onClick={() => reset()}
            className="font-ui-mono text-sm px-5 py-2.5 rounded-lg border border-[var(--gold)]/40 bg-[var(--gold)]/10 text-[var(--gold)] hover:bg-[var(--gold)]/20 transition-all duration-200"
          >
            $ retry
          </button>
          <Link
            href="/"
            className="font-ui-mono text-sm px-5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--panel)] text-[var(--muted)] hover:text-[var(--text)] transition-all duration-200"
          >
            $ cd ~
          </Link>
        </>
      }
    />
  );
}
