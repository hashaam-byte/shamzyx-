// ─────────────────────────────────────────────
// capture-screenshots.mjs
//
// Captures a consistent screenshot for each project
// and saves it directly into public/images/ with the
// exact filename lib/content.ts already expects.
//
// USAGE:
//   1. npm install puppeteer --save-dev
//      (or puppeteer-core if disk space is tight)
//   2. node scripts/capture-screenshots.mjs
//
// Environment variables:
//   CHROME_PATH - path to an existing Chrome/Chromium executable (Windows example:
//                 "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe")
//   PUPPETEER_EXECUTABLE_PATH - alternative name for CHROME_PATH
// ─────────────────────────────────────────────

import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, "..", "public", "images");

const VIEWPORTS = {
  mobile: { width: 390, height: 844 },
  web: { width: 1440, height: 900 },
};

const PROJECTS = [
  { slug: "project-attendy", url: "https://attendy-web.vercel.app", type: "web" },
  { slug: "project-nexttalk", url: "https://nexttalk-web.vercel.app", type: "mobile" },
  { slug: "project-floodguard", url: null, type: "hardware" },
  { slug: "project-ghost-z", url: "https://ghost-z.vercel.app", type: "web" },
  { slug: "project-u-plus", url: "https://u-plus.vercel.app", type: "mobile" },
  { slug: "project-mscakehubco", url: "https://mscakehubco.vercel.app", type: "web" },
  { slug: "project-acex", url: "https://acex.vercel.app", type: "web" },
];

async function captureOne(browser, project) {
  if (!project.url) {
    console.log(`⏭  Skipping ${project.slug} — no URL set`);
    return;
  }
  if (project.type === "hardware") {
    console.log(`⏭  Skipping ${project.slug} — hardware/concept projects aren't live sites`);
    return;
  }

  const viewport = VIEWPORTS[project.type] ?? VIEWPORTS.web;
  const page = await browser.newPage();
  await page.setViewport(viewport);

  console.log(`📸 Capturing ${project.slug} (${project.type}, ${viewport.width}x${viewport.height})...`);

  try {
    await page.goto(project.url, { waitUntil: "networkidle2", timeout: 30000 });
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const outputPath = path.join(OUTPUT_DIR, `${project.slug}.jpg`);
    await page.screenshot({
      path: outputPath,
      type: "jpeg",
      quality: 90,
      fullPage: false,
    });

    console.log(`   ✅ Saved to public/images/${project.slug}.jpg`);
  } catch (err) {
    console.error(`   ❌ Failed to capture ${project.slug}:`, err.message);
  } finally {
    await page.close();
  }
}

async function main() {
  const execPath = process.env.CHROME_PATH || process.env.PUPPETEER_EXECUTABLE_PATH || null;
  const launchOptions = {};
  if (execPath) launchOptions.executablePath = execPath;

  let browser;
  try {
    browser = await puppeteer.launch(launchOptions);
  } catch (err) {
    console.error("Failed to launch browser:", err.message);
    if (!execPath) {
      console.error(
        "No Chrome executable found. Either run `npx puppeteer@24 browsers install chrome`\n" +
          "or set CHROME_PATH to your local Chrome/Chromium executable and re-run the script."
      );
    } else {
      console.error(`Tried executablePath=${execPath}`);
    }
    process.exit(1);
  }
  for (const project of PROJECTS) {
    await captureOne(browser, project);
  }
  await browser.close();
  console.log("\nDone. Re-run anytime a project's live site changes.");
}

main();