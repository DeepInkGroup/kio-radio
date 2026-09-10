const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");

test("ships fifteen secure radio signals", () => {
  assert.equal((app.match(/^    id: "/gm) || []).length, 15);
  assert.equal((app.match(/^    url: "https:\/\//gm) || []).length, 15);
  assert.doesNotMatch(app, /^    url: "http:\/\//m);
});

test("includes every requested listening category", () => {
  ["All Classical", "Atma FM Ambient", "Kalizo Lo-Fi", "BBC World Service", "CNN", "Iran International", "NTS 1", "WRTI Jazz", "YourClassical Relax"].forEach((name) => {
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
