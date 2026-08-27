import { ImageResponse } from "next/og";
import fs from "node:fs/promises";
import path from "node:path";
import { PROFILE, CONTENT, SKILLS } from "../content/portfolio";

// This file is a Next.js special convention: having "opengraph-image.tsx"
// directly in app/ makes Next.js auto-generate the link-preview image and
// wire it into the page's metadata — no manual <meta og:image> needed.
//
// It pulls its text straight from content/portfolio.ts (PROFILE + the
// English CONTENT block), so editing your bio/role there keeps this image
// in sync automatically. No need to ask Claude to regenerate a picture.

export const runtime = "nodejs";
export const alt = "Ramanda Syahputra — IT Developer / Fullstack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#090c12";
const PANEL = "#11151f";
const PANEL2 = "#161b28";
const BORDER = "#232a3b";
const GOLD = "#e7b93f";
const TEAL = "#37d0b5";
const TEXT = "#e7e9ee";
const MUTED = "#8b93a7";

export default async function OpengraphImage() {
  const [monoRegular, monoBold, photoBuffer] = await Promise.all([
    fs.readFile(path.join(process.cwd(), "app/fonts/DejaVuSansMono.ttf")),
    fs.readFile(path.join(process.cwd(), "app/fonts/DejaVuSansMono-Bold.ttf")),
    // A dedicated, pre-cropped square photo — kept separate from
    // /public/ramanda-photo.jpg because the OG image renderer (Satori)
    // does not support CSS object-position, so the source file itself
    // needs to already be framed correctly on the face.
    fs.readFile(path.join(process.cwd(), "public/ramanda-og-avatar.jpg")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photoBuffer.toString("base64")}`;

  // Always render the OG image in English, regardless of which language
  // a visitor eventually picks on the site itself — link previews only
  // ever show one fixed version.
  const t = CONTENT.en;
  const roleLine = t.terminal[0].output; // "Ramanda Syahputra — IT Developer / Fullstack Developer"
  const tagline = [...SKILLS["core-banking"], ...SKILLS.frameworks.slice(0, 3)].join(" · ");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: INK,
          position: "relative",
          fontFamily: "Mono",
        }}
      >
        {/* ambient glow blobs */}
        <div
          style={{
            position: "absolute",
            top: -160,
            left: -140,
            width: 480,
            height: 480,
            borderRadius: 480,
            background: GOLD,
            opacity: 0.18,
            filter: "blur(90px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            right: -140,
            width: 480,
            height: 480,
            borderRadius: 480,
            background: TEAL,
            opacity: 0.16,
            filter: "blur(90px)",
          }}
        />

        {/* terminal window panel */}
        <div
          style={{
            position: "absolute",
            top: 60,
            left: 60,
            right: 60,
            bottom: 60,
            display: "flex",
            flexDirection: "column",
            borderRadius: 20,
            border: `2px solid ${BORDER}`,
            background: PANEL,
            overflow: "hidden",
          }}
        >
          {/* header bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: 56,
              background: PANEL2,
              padding: "0 24px",
              borderBottom: `1px solid ${BORDER}`,
            }}
          >
            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ width: 14, height: 14, borderRadius: 14, background: "#ff5f57" }} />
              <div style={{ width: 14, height: 14, borderRadius: 14, background: "#febc2e" }} />
              <div style={{ width: 14, height: 14, borderRadius: 14, background: "#28c840" }} />
            </div>
            <div style={{ marginLeft: 16, color: MUTED, fontSize: 18 }}>profile.sh</div>
          </div>

          {/* logo mark, top right */}
          <div
            style={{
              position: "absolute",
              top: 76,
              right: 30,
              width: 56,
              height: 56,
              borderRadius: 14,
              border: `2px solid ${BORDER}`,
              background: INK,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: GOLD,
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            {">"}
          </div>

          {/* main content row */}
          <div style={{ display: "flex", alignItems: "center", padding: "50px 70px 0 70px" }}>
            <img
              src={photoSrc}
              width={220}
              height={220}
              style={{ borderRadius: 220, border: `3px solid ${GOLD}`, objectFit: "cover" }}
            />
            <div style={{ display: "flex", flexDirection: "column", marginLeft: 55 }}>
              <div style={{ color: TEXT, fontSize: 52, fontWeight: 700 }}>{PROFILE.name}</div>
              <div style={{ color: GOLD, fontSize: 28, fontWeight: 700, marginTop: 14 }}>
                {roleLine.split("—")[1]?.trim() ?? roleLine}
              </div>
              <div style={{ color: TEAL, fontSize: 22, marginTop: 10 }}>{tagline}</div>
            </div>
          </div>

          {/* bottom terminal prompt */}
          <div style={{ display: "flex", flexDirection: "column", padding: "0 70px", marginTop: "auto", marginBottom: 60 }}>
            <div style={{ color: TEAL, fontSize: 22 }}>$ whoami</div>
            <div style={{ color: MUTED, fontSize: 22, marginTop: 6 }}>
              {`> ${t.about.bio.split(".")[0]}.`}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Mono", data: monoRegular, weight: 400, style: "normal" },
        { name: "Mono", data: monoBold, weight: 700, style: "normal" },
      ],
    }
  );
}
