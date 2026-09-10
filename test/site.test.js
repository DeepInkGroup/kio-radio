const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");

test("ships eleven secure radio signals", () => {
  assert.equal((app.match(/^    id: "/gm) || []).length, 11);
  assert.equal((app.match(/^    url: "https:\/\//gm) || []).length, 11);
  assert.doesNotMatch(app, /^    url: "http:\/\//m);
});

test("includes every requested listening category", () => {
  ["All Classical", "Atma FM Ambient", "Kalizo Lo-Fi", "BBC World Service", "CNN"].forEach((name) => {
    assert.match(app, new RegExp(name));
  });
});

test("exposes core accessible controls", () => {
  ["playButton", "volumeSlider", "stationSearch", "stationList", "favoriteButton", "shareButton"].forEach((id) => {
    assert.match(html, new RegExp(`id="${id}"`));
  });
});
