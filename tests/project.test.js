import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const indexHtml = await readFile(new URL("../index.html", import.meta.url), "utf8");
const animationHtml = await readFile(
  new URL("../bat-pixel-animation.html", import.meta.url),
  "utf8",
);
const mainJs = await readFile(new URL("../src/main.js", import.meta.url), "utf8");
const stylesheet = await readFile(new URL("../src/style.css", import.meta.url), "utf8");

test("the page exposes every control hook used by the app", () => {
  for (const id of [
    "animation-frame",
    "toggle-animation",
    "toggle-label",
    "speed",
    "speed-value",
  ]) {
    assert.match(indexHtml, new RegExp(`id="${id}"`));
  }
});

test("the animation iframe uses a deploy-safe relative URL", () => {
  assert.match(indexHtml, /src="\.\/bat-pixel-animation\.html"/);
  assert.match(mainJs, /addEventListener\("load", updateAnimation\)/);
});

test("the scene keeps its gradient and stars without extra scenery", () => {
  assert.doesNotMatch(indexHtml, /class="moon"/i);
  assert.match(indexHtml, /class="star star-/);
  assert.match(stylesheet, /\.flight-stage\s*\{[^}]*linear-gradient/s);
  assert.match(stylesheet, /\.star\s*\{/);
  assert.doesNotMatch(stylesheet, /\.moon|\.flight-stage::(?:before|after)/);
});

test("the pixel animation contains three controllable bat tracks", () => {
  const tracks = animationHtml.match(/class="bat-track(?:\s|")/g) ?? [];
  assert.equal(tracks.length, 3);
  assert.match(mainJs, /querySelectorAll\("\.bat-track"\)/);
  assert.match(mainJs, /querySelectorAll\("\.bat"\)/);
});
