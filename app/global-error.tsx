"use client";

// Next.js convention: only fires if the root layout itself fails to
// render — the true last resort. It has to include its own <html> and
// <body> since it replaces the entire layout. Deliberately self-contained
// (inline styles, no shared components, no Tailwind classes) so it still
// renders even if something else in the app is broken.
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#090c12", color: "#e7e9ee", fontFamily: "ui-monospace, monospace" }}>
        <main
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ fontSize: 48, fontWeight: 700, color: "#e7b93f" }}>500</div>
            <p style={{ marginTop: 12, color: "#8b93a7", maxWidth: 320 }}>
              The app crashed unexpectedly. Try reloading the page.
            </p>
            <button
              onClick={() => reset()}
              style={{
                marginTop: 24,
                padding: "10px 20px",
                borderRadius: 8,
                border: "1px solid rgba(231,185,63,0.4)",
                background: "rgba(231,185,63,0.1)",
                color: "#e7b93f",
                fontFamily: "inherit",
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              Reload
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
