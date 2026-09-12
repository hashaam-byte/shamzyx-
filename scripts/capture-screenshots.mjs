import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, "..", "public", "images");

const VIEWPORTS = {
  mobile: { width: 390, height: 844 },
  web: { width: 1440, height: 900 },
};

const TARGETS = [
  { slug: "project-attendy", url: "https://attendy-web.vercel.app", type: "web" },
  { slug: "vertical-attendy-edu", url: "https://attendy-edu.vercel.app", type: "web" },
  { slug: "project-nexttalk", url: "https://nexttalk-web.vercel.app", type: "web" },
  { slug: "project-u-plus", url: "https://u-plus.vercel.app", type: "web" },
  { slug: "project-mscakehub", url: "https://mscakehub.vercel.app", type: "web" },
  { slug: "project-chess14", url: "https://chess14.vercel.app", type: "web" },
];

async function captureOne(browser, target) {
  const viewport = VIEWPORTS[target.type] ?? VIEWPORTS.web;
  const page = await browser.newPage();
  await page.setViewport(viewport);

  console.log(`📸 Capturing ${target.slug} (${target.type}, ${viewport.width}x${viewport.height})...`);

  try {
    await page.goto(target.url, { waitUntil: "networkidle2", timeout: 30000 });
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const outputPath = path.join(OUTPUT_DIR, `${target.slug}.jpg`);
    await page.screenshot({ path: outputPath, type: "jpeg", quality: 90, fullPage: false });

    console.log(`   ✅ Saved to public/images/${target.slug}.jpg`);
  } catch (err) {
    console.error(`   ❌ Failed to capture ${target.slug}:`, err.message);
  } finally {
    await page.close();
  }
}

async function main() {
  const browser = await puppeteer.launch();
  for (const target of TARGETS) {
    await captureOne(browser, target);
  }
  await browser.close();
  console.log("\nDone. Re-run anytime a project's live site changes.");
}

main();