# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Critical Rules

BEFORE modifying, writing, or refactoring any code files, you MUST ALWAYS:
1. Read the design specification file `Rule_Design_Sinh.md` at the repo root, in full.
2. Ensure the proposed code changes strictly follow the logic and rules defined in `Rule_Design_Sinh.md`.

This is also enforced by an `always_on` agent rule at `.agents/rules/read-design.md` — do not skip step 1 even for a small change.

## What this repo is

Asset/spec production for a Vietnamese high-school Biology 11 practical "virtual lab" module (Bài 5 – Thực hành: Quang hợp ở thực vật / starch formation in photosynthesis, module code `SH11_B05_M03`). There is no package manager, build step, linter, or test suite — this is a static-content repo. "Building" the module means authoring one self-contained HTML file per `Rule_Design_Sinh.md`; "testing" means opening it in a browser (VS Code Live Server is pre-configured at `.vscode/settings.json`, port 5503 — right-click the HTML file → "Open with Live Server").

## Current state of the working tree — read this before assuming any file exists

The repo has been mid-restructured and **the working tree currently has no HTML and no content/asset-dossier `.txt` spec files** — check `git status` / list the directory yourself before referencing any file this doc mentions, since state here has churned across recent commits and uncommitted edits:

- Present on disk: `Rule_Design_Sinh.md` (tracked), `Pic_SH11_B05/` image assets (tracked), `.agents/rules/read-design.md` (tracked), and two **untracked** generic (non-Biology) authoring templates — `02_design_toan_final_v2.md` (Math design-system builder) and `AIDUCATION_UI_REDESIGN_PLAYBOOK.md` (retrofit playbook for standardizing color/font tokens in existing HTML). Neither template file is Biology-specific; don't apply them directly to this module.
- Deleted, uncommitted (recoverable via `git checkout HEAD -- <path>` if needed): `FILE_1_SH11_B05_M03_KICH_BAN_NOI_DUNG_v4_NO_DESIGN.txt` (the content/pedagogy script) and the three built HTML files `SH11_B05_M03_P1_MUC_TIEU_CHUAN_BI.html` / `_P2_TIEN_TRINH_THUC_HIEN.html` / `_P3_BAO_CAO_GIAI_THICH.html`.
- Already removed at `HEAD` (commit `c75debe "update"`): the image/asset dossier `SH11_B05_M03_HO_SO_HINH_ANH_ASSET_v2_FINAL.txt`, and an older single-file build `SH11_B05_M03_VIRTUALLAB_FINAL.html`. That same commit added `Rule_Design_Sinh.md` and rewrote FILE_1 as `..._v4_NO_DESIGN.txt` (content/pedagogy stripped of the old Playfair-Display design spec it used to carry).

Net effect: **`Rule_Design_Sinh.md` is currently the only design/build spec in the repo**, and there is no shipped HTML to preserve compatibility with. If a new content script ("kịch bản") file appears, or the deleted files are restored, re-derive the picture from `git status`/`git log` rather than trusting this summary — it will go stale.

## `Rule_Design_Sinh.md` — the authoring template (read in full; this section is only an index)

Usage per its own header: paste the whole file plus an approved content script, then ask for one complete self-contained HTML simulation. It's a Vietnamese-language synthesis for Biology, adapted from three sibling subject templates (a Chemistry canvas-drawing engine, the Math `02_design_toan_final_v2.md` design tokens + LMS/Athena wiring, and `AIDUCATION_UI_REDESIGN_PLAYBOOK.md`) — see its own section 0 for provenance. Section 16 gives a worked example specifically for `SH11_B05_M03` (this module), so read that section first when rebuilding this module's HTML.

Architecture it mandates for any generated file:
- **One self-contained HTML file** — inline CSS/JS, only Google Fonts (Be Vietnam Pro, Vietnamese subset) and Tabler Icons webfont via CDN. No `localStorage`/`sessionStorage`/cookies — state lives in JS variables plus `LMS().state()`.
- **Two separate color systems that must never mix**: UI tokens (§3 — cream/ink neutrals, jade primary action, sage secondary, semantic correct/wrong/warning/info) for all interface chrome; a fixed "science color" table (§4A, e.g. iodine-positive `#241C3D` dark blue-violet, iodine-negative `#C9A24B` light yellowish-brown) for anything drawn on canvas depicting real phenomena.
- **3-column dashboard layout** (`.lab-wrapper`, max-width 1720px): left column = equipment list + numbered steps; middle column = context guide bar → single-row controls → canvas; right column = observation table + conclusions/quiz. Collapses to one column ≤1100px.
- **Canvas simulation engine**, not static image + hotspots: fixed logical coordinate space scaled to fit (`resizeCanvas`/`loop()`), a tween/particle/ripple-ring system (§11), and per-object draw functions for lab equipment (`drawBeaker`, `drawAlcoholLamp`, `drawLeaflet`, `drawTongs`, `drawDrop`, `drawPetriDish`, `drawMicroField`, §12). Three interchangeable control patterns — variable-select (A), stepper (B, default for most Bio experiments), timeline slider (C) — §8B.
- **Animation discipline (§13)**: state never changes instantly; every user action runs a multi-phase animation (documented per-action minimum durations); all controls disable while animating.
- **Safety-locked state** (§14A, mirrors the domain rule below): a `flameOn` boolean gates the alcohol-lamp flame; ethanol and an active flame must never render in the same frame; the student only picks a safety layout (A/B), the system always runs the correct animation.
- **Athena/LMS integration (§15C)**: a `#athena-context` JSON manifest in `<head>`, a `LMS()` safe accessor that no-ops outside the LMS iframe, and instrumentation calls (`progress`, `event`, `state`, `complete` exactly once, `resize`) wired directly into real interaction handlers — not bolted on afterward.
- TTS is opt-in only, wired to an explicit button via `speechSynthesis`, reads only the current guide text, never the answer.
- Section 17 is a pre-delivery checklist and section 18 caps debugging loops at 2 attempts before stopping to ask the user 3 specific questions — follow both when finishing a build.

## Domain-specific Biology rules (gate correctness — do not regress, in spec text or generated HTML)

- Iodine **detects** pre-existing starch — never state or imply it creates starch.
- Ethanol (cồn) and an open/lit flame must never coexist in any frame or state. Required sequence: heat the outer water bath with the alcohol lamp → extinguish the lamp and confirm it's out (`flameOn = false`) → move the lamp away → only then open the ethanol → place the small ethanol+leaf vessel into the hot water bath for indirect heating. The student only chooses a safety layout (A/B); the system runs the correct animation — never let the student drag ethanol through the flame zone.
- Hot equipment is handled with tongs, never bare hands.
- The potato plant leaf is compound (lá kép); the experiment is performed on one sufficiently large leaflet (lá chét), not the whole compound leaf drawn as a single blade. Keep the same leaflet across all states for visual continuity.
- Dark treatment reduces the influence of starch already accumulated before the experiment — never claim it's "completely depleted."
- The black paper must cover the *same* region on *both* sides of the leaflet (`coveredRegion` must persist unchanged across every leaf state), and must not be placed near the heat source.
- Positive (light-exposed) result color is locked to dark blue-violet (`#241C3D`, xanh tím đậm); negative (covered) result color is locked to light yellowish-brown (`#C9A24B`, vàng nâu nhạt) — never pure white, never invented, and only the corresponding region is colored — never the whole leaf.
- Conclusions must not exceed the tested condition (don't generalize to all species, don't claim absolute proof) — the correct conclusion for this module is scoped to "in this experimental condition."
- Wrong-answer feedback must name the specific error, explain why, and let the student redo just that step — never reset already-correct progress, never reduce it to a single forced cause.
- Don't address the student as "em"; keep language neutral/direct. Don't say "chứng minh tuyệt đối" (absolute proof).
- No distractor equipment (microscopes, chromatography paper, acetone, etc.) and no clutter in lab scenes.

## `Pic_SH11_B05/` asset naming

Three prefixes, matched to the module code `SH11B05M03`:
- `AST_SH11B05M03_<NAME>_NN.svg` — reusable loose equipment/object assets (e.g. `ALCOHOL_LAMP`, `TONGS`, `IODINE_BOTTLE`, `PETRI_DISH`, `OUTER_BEAKER`, `INNER_ETHANOL_BEAKER`, `BLACK_PAPER_PAIR`, `CLIPS`, `WASH_WATER_BEAKER`, `POTATO_PLANT`, `POTATO_LEAFLET`).
- `STATE_SH11B05M03_LEAF_<STATE>_NN.svg` — leaflet-state overlay variants (e.g. `HOT_WATER`, `DECOLORIZED`, `RESULT`) — these are the visual states any `drawLeaflet()`-equivalent logic must step through.
- `IMG_SH11B05M03_<SCENE>_NN.png` — composite/rendered scene images (e.g. `LAB_OVERVIEW`, `DARK_COVER_LIGHT`, `HOT_WATER`, `SAFE_DECOLOR`, `IODINE_OBSERVE`, `PROCESS_STRIP`, `RESULT_CORRECT`).

There is currently no asset dossier `.txt` cataloging these with approval status (it was removed at `HEAD` — see the state note above); treat any asset not explicitly referenced by a live spec/HTML file as provisional.
