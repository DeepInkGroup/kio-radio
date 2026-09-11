const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const manifest = JSON.parse(fs.readFileSync(path.join(root, "manifest.webmanifest"), "utf8"));
const serviceWorker = fs.readFileSync(path.join(root, "sw.js"), "utf8");

test("ships twenty secure radio signals", () => {
  assert.equal((app.match(/^    id: "/gm) || []).length, 20);
  assert.equal((app.match(/^    url: "https:\/\//gm) || []).length, 20);
  assert.doesNotMatch(app, /^    url: "http:\/\//m);
});

test("includes every requested listening category", () => {
  ["All Classical", "Atma FM Ambient", "Kalizo Lo-Fi", "BBC World Service", "CNN", "Iran International", "NTS 1", "NTS 2", "WRTI Jazz", "Radio Swiss Jazz", "KCRW Eclectic24", "Radio Shoma 93.4", "Radio Yar", "YourClassical Relax"].forEach((name) => {
    assert.match(app, new RegExp(name));
  });
});

test("exposes core accessible controls", () => {
  ["playButton", "volumeSlider", "stationSearch", "stationList", "favoriteButton", "shareButton", "randomButton"].forEach((id) => {
    assert.match(html, new RegExp(`id="${id}"`));
  });
});

test("connects the DeepInk Group footer destinations", () => {
  assert.match(html, /DeepInk Group/);
  assert.match(html, /github\.com\/DeepInkGroup\/kio-radio/);
  assert.match(html, /t\.me\/DeepInkGroup/);
});

test("provides an installable iPhone-friendly PWA shell", () => {
  assert.match(html, /rel="manifest"/);
  assert.match(html, /apple-mobile-web-app-capable/);
  assert.match(html, /apple-touch-icon/);
  assert.match(html, /id="installButton"/);
  assert.match(html, /playsinline/);
  assert.equal(manifest.display, "standalone");
  assert.equal(manifest.icons.some((icon) => icon.sizes === "512x512"), true);
  assert.match(serviceWorker, /url\.origin !== self\.location\.origin/);
  assert.match(serviceWorker, /caches\.open/);
  assert.match(app, /navigator\.mediaSession/);
});
