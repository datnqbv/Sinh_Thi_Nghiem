# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Critical Rules

BEFORE modifying, writing, or refactoring any code files, you MUST ALWAYS:
1. Read the design specification file `Rule_Design_Sinh.md` at the repo root, in full.
2. Ensure the proposed code changes strictly follow the logic and rules defined in `Rule_Design_Sinh.md`.

This is also enforced by an `always_on` agent rule at `.agents/rules/read-design.md` — do not skip step 1 even for a small change.

## What this repo is

A Vietnamese high-school Biology 11 practical "virtual lab" module: *Bài 5 — Thực hành: Quang hợp ở thực vật*, starch formation in photosynthesis, module code `SH11_B05_M03`. There is no package manager, build step, linter, or test suite — the deliverable is hand-authored HTML.

The shipped module is **three standalone HTML files**, not one:

| File | Part | Screens (`state.stage`) |
|---|---|---|
| `SH11_B05_M03_P1_MUC_TIEU_CHUAN_BI.html` | P1 — Mục tiêu và chuẩn bị | 3 |
| `SH11_B05_M03_P2_TIEN_TRINH_THUC_HIEN.html` | P2 — Tiến trình thực hiện | 4 |
| `SH11_B05_M03_P3_BAO_CAO_GIAI_THICH.html` | P3 — Báo cáo và giải thích | 3 |

10 screens total. This 3-file split comes from the content script and **overrides** `Rule_Design_Sinh.md`'s "one HTML file per build session" framing — that rule is about scope per conversation, not about the module shipping as one file. The three files are fully independent: no shared JS, no cross-file `href`, no data handed between them. P2 and P3 each open with a `.recap-bar` prose summary precisely so they don't depend on P1 having been run.

Working-tree caveat: as of this writing the three HTML files and the content script are **untracked**, and `CLAUDE.md`/`Rule_Design_Sinh.md` have uncommitted edits. This repo's file inventory has churned a lot across commits (files deleted in one commit have reappeared later), so run `git status` before assuming any file below exists or is committed.

## Running and checking a build

No build. Serve over HTTP rather than `file://` — each page loads a header background image from the local `Pic_SH11_B05/` folder by **relative path**, so it must be served with the repo root as the web root. VS Code Live Server is pre-configured on port 5503 (`.vscode/settings.json`): right-click an HTML file → "Open with Live Server".

"Testing" is manual: step through every stage of each part and watch the canvas. Useful greps for the `Rule_Design_Sinh.md` §17 pre-delivery checklist:

```bash
grep -i "playfair\|inter\|jakarta\|roboto" SH11_B05_M03_P*.html   # font leaks — must be empty
grep -n "localStorage\|sessionStorage\|document.cookie" SH11_B05_M03_P*.html  # forbidden — must be empty
grep -n "min-height:100vh\|height:100vh" SH11_B05_M03_P*.html     # breaks LMS iframe embed — must be empty
```

## The two spec files and which one wins

- **`FILE_1_..._KICH_BAN_NOI_DUNG_v4_NO_DESIGN.txt` — the content script ("kịch bản"): WHAT.** Explicitly design-free (`DESIGN: THEO HỆ THỐNG CHUNG CỦA ĐỘI SẢN XUẤT – KHÔNG ĐẶC TẢ TRONG KỊCH BẢN`). Structure: section A = module dossier (research question, hypothesis, variables, the 8 "khóa khoa học" science locks, the 7-step "khóa an toàn" safety lock); sections B/C/D = one block per screen keyed `SH11_B05_M03_P<n>_S<nn>`; section E = shared feedback rules, pre-delivery checklist, and AI-tutor notes. Each screen is specified as KHỐI A–E (pedagogy → on-screen content → interaction & per-error feedback → imagery/effects → acceptance criteria). Don't read it front-to-back; jump to the screen ID you're building.
- **`Rule_Design_Sinh.md` — the design system and canvas engine: HOW.** Vietnamese-language, ~930 lines, numbered §0–§18. §16 is a worked example for this exact module — read it first when rebuilding. §17 is the pre-delivery checklist, §18 caps debugging at 2 failed attempts before stopping to ask the user 3 specific questions.

On conflict: the content script governs pedagogy, wording, screen count, and interaction semantics; the design spec governs layout, tokens, drawing code, and animation. Both independently forbid the same safety/science violations — if either says no, it's no.

`Rule_Design_Sinh.md`'s §0 credits three sibling Aiducation templates (a Chemistry canvas engine, a Math design-tokens/LMS template, a UI retrofit playbook). None are in this repo, none are Biology-specific, and none should be applied to this module even if they reappear.

## The per-file architecture (all three HTML files share this skeleton)

Each file is self-contained: inline `<style>` + one inline `<script>`, external requests only to Google Fonts (Be Vietnam Pro, Vietnamese subset) and the Tabler Icons webfont CDN. No `localStorage`/`sessionStorage`/cookies — state lives in JS variables plus `LMS().state()`.

Document order: `#athena-context` JSON in `<head>` → `header` (image banner) → `.goal-bar` → `.recap-bar` (P2/P3 only) → `.lab-wrapper` (3-column grid, max-width 1720px) → `.link-section`.

`.lab-wrapper` grid areas: `sideLeft` (equipment chips + numbered step cells) spans all rows; middle column stacks `guide` → `controls` (single row, never wraps) → `canvas`; `sideRight` holds the observation table + conclusions/quiz. Collapses to one column ≤1100px with the interactive parts hoisted to the top.

Script layout, top to bottom — mirror this order when adding code:

1. `LMS()` safe accessor — returns a no-op stub outside the LMS iframe so the file still runs standalone.
2. Canvas globals: `const W = 760, H = <560|600>` is the **fixed logical coordinate space**; every draw call uses it. `canvasW`/`canvasH` are the real pixel size, refreshed by `resizeCanvas()` at the top of every frame.
3. Engine primitives, declared exactly once: `tweens`/`rings`/`particles` arrays, `tween()`, `updateTweens()`, `spawnRing()`/`updateRings()`, `spawnSplash()`/`spawnParticle()`/`updateParticles()`/`drawParticles()`, `drawGrid()`, plus `lerp`/`clamp`/`easeOut`/`easeInOut`/`lerpColor`.
4. Equipment draw functions — `drawLeaflet`, `drawAlcoholLamp`, `drawBeaker`, `drawTestTube`, `drawTongs`, `drawDrop`, `drawDropper`, `drawPetriDish`, `drawBlackPaper`, `drawClip`, `drawStream`. These are pure canvas drawing, positioned in logical coordinates.
5. `const exp = {...}` — the experiment's scientific state (`coveredRegion`, `leafState`, `iodineProgress`, `flameOn`).
6. Per-stage blocks: `drawStage<N>()`, optional `canvasClickHandlers.stage<N> = function(mx,my)`, and `runStage<N>Animation()`, each with its own `s<N>_*` locals.
7. `loop()` — `resizeCanvas()` → `drawGrid()` at real size (so it fills edge to edge) → `ctx.translate(offsetX, offsetY)` + `ctx.scale(fitScale, fitScale)` → dispatch to `drawStage<N>()` → rings/particles → `ctx.restore()`.
8. Canvas click listener — inverts `loop()`'s transform inline to convert pointer coords to logical coords, then dispatches to `canvasClickHandlers['stage'+state.stage]`. If you change `fitScale`/offset math in `loop()`, change it here too (`Rule_Design_Sinh.md` §11E).
9. UI plumbing: `updateGuide()` (fades guide text and stashes it in `window._guideText` for TTS), `syncUI()`, `setAnimating()`, `gotoStage()`.
10. LMS instrumentation + init + `ResizeObserver`-driven `reportHeight()`.

Conventions worth preserving because they encode real bugs already fixed:

- **`runId`** — a monotonic counter bumped in `gotoStage()`, which also clears `tweens`/`rings`/`particles`. Every async callback captures `const myRun = runId` and bails on `if (myRun !== runId) return`. This is what stops a stale timeout from an interrupted "Làm lại" resurrecting `flameOn` while the ethanol tube is open. Any new `setTimeout`/`tween` chain must follow it.
- **Interaction happens on the canvas, not by drag-and-drop.** The script mandates click/tap on hotspots and image cards; hotspots must stay comfortably tappable once divided by `fitScale`.
- **Complete-once guard** — `window._p<N>complete` gates the single `LMS().complete()` call. `LMS().progress({done, total})` and `LMS().state({currentStep, totalSteps, ...})` fire from `gotoStage()`; `LMS().event()` fires from real answer/action handlers, never bolted on afterward.
- **`athenaGuidance`** in the `#athena-context` manifest must enumerate every question with verbatim A/B/C/D options and must **not** reveal which is correct. `structure[].id` (`p1`/`p2`/`p3`) must match the IDs used in the LMS calls.
- **No instant state changes.** Every action runs a multi-phase tween chain (§13 lists per-action minimum durations, e.g. iodine drop 1.8s, indirect heating 3s) with controls disabled while `state.isAnimating`.
- TTS is opt-in via `#btnTTS`, reads only the current guide text, never the answer.

## Two color systems that must never mix

UI chrome uses only the `:root` tokens from `Rule_Design_Sinh.md` §3 (cream/ink neutrals, jade primary, sage secondary, semantic correct/wrong/warning/info). Anything drawn on canvas depicting a real phenomenon uses the fixed science-color table in §4A, written as literal hex/rgb since `ctx.fillStyle` can't read CSS vars. Science colors never appear on buttons or feedback states, and UI tokens never color a simulated substance. No gradients, heavy shadows, glassmorphism, dark theme, or emoji in the UI — gradients and glow *are* allowed inside the canvas for glass, metal, and flame.

## Domain-specific Biology rules (gate correctness — do not regress, in spec text or generated HTML)

- Iodine **detects** pre-existing starch — never state or imply it creates starch.
- Ethanol (cồn) and an open/lit flame must never coexist in any frame or state. Required sequence: heat the outer water bath with the alcohol lamp → extinguish the lamp and confirm it's out (`flameOn = false`) → move the lamp away → only then open the ethanol → place the small ethanol+leaf vessel into the hot water bath for indirect heating. The student only chooses a safety layout (A/B); the system runs the correct animation — never let the student drag ethanol through the flame zone. A wrong safety choice is hard-blocked: explain, return to a safe state, do not simulate fire, do not allow continuing.
- Hot equipment is handled with tongs, never bare hands.
- The potato plant leaf is compound (lá kép); the experiment is performed on one sufficiently large leaflet (lá chét), not the whole compound leaf drawn as a single blade. Keep the same leaflet across all states for visual continuity.
- Dark treatment reduces the influence of starch already accumulated before the experiment — never claim it's "completely depleted."
- The black paper must cover the *same* region on *both* sides of the leaflet (`coveredRegion` must persist unchanged across every leaf state), and must not be placed near the heat source.
- Positive (light-exposed) result color is locked to dark blue-violet (`#241C3D`, xanh tím đậm); negative (covered) result color is locked to light yellowish-brown (`#C9A24B`, vàng nâu nhạt) — never pure white, never invented, and only the corresponding region is colored — never the whole leaf.
- Hot-water treatment of the leaf comes *before* ethanol decolorization; ethanol removes chlorophyll and neither creates nor destroys starch.
- Conclusions must not exceed the tested condition (don't generalize to all species, don't claim absolute proof) — the correct conclusion for this module is scoped to "in this experimental condition."
- Wrong-answer feedback must name the specific error, explain why, and let the student redo just that step — never reset already-correct progress, never reduce it to a single forced cause. Correct-answer feedback is a short confirmation plus scientific meaning — no long praise, no childish tone.
- Don't address the student as "em"; keep language neutral/direct. Don't say "chứng minh tuyệt đối" (absolute proof).
- No distractor equipment (microscopes, chromatography paper, acetone, etc.) and no clutter in lab scenes.

Two rules were added to `Rule_Design_Sinh.md` recently (currently uncommitted) and are **not yet implemented** in the HTML — apply them when next touching a result or time-lapse screen: §4B requires every color-read result to carry a second, non-color channel (an explicit "Dương tính (+)" / "Âm tính (−)" label, a pattern, or a labeled fixed position) so it stays readable for colorblind students, with the observation table spelling color names out in words; §13 #8 requires any time-compressed biological process to display its real-world duration ("Xử lí tối · ~48 giờ") plus a fast-forward indicator.

## `Pic_SH11_B05/` assets

Three prefixes, matched to the module code `SH11B05M03`:
- `AST_SH11B05M03_<NAME>_NN.svg` — reusable loose equipment/object assets (`ALCOHOL_LAMP`, `TONGS`, `IODINE_BOTTLE`, `PETRI_DISH`, `OUTER_BEAKER`, `INNER_ETHANOL_BEAKER`, `BLACK_PAPER_PAIR`, `CLIPS`, `WASH_WATER_BEAKER`, `POTATO_PLANT`, `POTATO_LEAFLET`).
- `STATE_SH11B05M03_LEAF_<STATE>_NN.svg` — leaflet-state overlays (`HOT_WATER`, `DECOLORIZED`, `RESULT`) — the states `drawLeaflet()` steps through.
- `IMG_SH11B05M03_<SCENE>_NN.png` — composite scene renders (`LAB_OVERVIEW`, `DARK_COVER_LIGHT`, `HOT_WATER`, `SAFE_DECOLOR`, `IODINE_OBSERVE`, `PROCESS_STRIP`, `RESULT_CORRECT`).

Only the three `IMG_*.png` header banners are actually referenced by the HTML; everything else in the lab scenes is drawn procedurally on canvas, so the SVGs are reference art rather than runtime dependencies.

Note the asset-ID mismatch: the content script cites codes like `SH11-B05-M03-A01`, which resolve through a separate image dossier ("FILE 2", an `.xlsx`) that is **not in this repo**. There is no mapping file from those codes to the `Pic_SH11_B05/` filenames — match them by scene description, and treat any asset not referenced by a live spec or HTML file as provisional/unapproved.
