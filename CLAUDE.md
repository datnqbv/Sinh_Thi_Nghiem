# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Critical Rules

BEFORE modifying, writing, or refactoring any code files, you MUST ALWAYS:
1. Read the design specification file `Rule_Design_Sinh.md` located at the root directory.
2. Ensure the proposed code changes strictly follow the logic and rules defined in `Rule_Design_Sinh.md`.

## What this repo is

Content/asset production for a Vietnamese high-school Biology 11 practical "virtual lab" module (Bài 5 – Thực hành: Quang hợp ở thực vật / starch formation in photosynthesis, module code `SH11_B05_M03`). Unlike earlier stages of this project, **the three production HTML files now exist and are implemented** (not just specified):

- `FILE_1_SH11_B05_M03_KICH_BAN_NOI_DUNG_v3_FINAL.txt` — the authoritative content/pedagogy script (Vietnamese). Defines the module dossier (research question, hypothesis, variables/controls, science key, safety key, design tokens) and the full screen-by-screen spec for all 10 screens across the 3 HTML files.
- `SH11_B05_M03_HO_SO_HINH_ANH_ASSET_v2_FINAL.txt` — the image/asset dossier: global style key, asset code catalog, per-asset spec (composition, required elements, forbidden content, approval status), and the image review checklist.
- `Pic_SH11_B05/` — the produced image/asset files (SVG for loose assets and leaf-state overlays, PNG for composite scene images), named to match the asset codes cataloged in the asset dossier.
- `SH11_B05_M03_P1_MUC_TIEU_CHUAN_BI.html`, `SH11_B05_M03_P2_TIEN_TRINH_THUC_HIEN.html`, `SH11_B05_M03_P3_BAO_CAO_GIAI_THICH.html` — the three built, self-contained HTML files (~500 lines each: inline `<style>` + inline `<script>`, Playfair Display via Google Fonts CDN, embedded references to `Pic_SH11_B05/` images).
- `Rule_Design_Sinh.md` — a separate, mandated authoring prompt for building *new* Biology virtual-lab HTML from scratch. See the dedicated section below — it uses a different design system than the shipped HTML above and must not be conflated with it.

**These must stay in sync.** Any asset code referenced in FILE_1's screen tables or in the HTML must exist in the asset dossier's catalog (Section II) and have a matching spec entry (Section III). When asked to change lab content or visuals, update the relevant `.txt` spec file(s) first, then propagate the change into the corresponding HTML screen — the spec is still the source of truth even though HTML now exists to drift against it.

## Production pipeline / current state — reality has outrun the documented order

FILE_1 section VII describes a strict linear pipeline (content → asset dossier → image approval with `_APPROVED` filename suffix → hotspot measurement on approved images only → HTML coding). **In practice, none of the images in `Pic_SH11_B05/` currently carry an `_APPROVED` suffix (asset dossier status is still `CHƯA DUYỆT ẢNH TĨNH`), yet all three HTML files are already built and reference these unapproved images.** Do not assume the pipeline gate is still being honored — check actual file state (`_APPROVED` suffix presence, or lack thereof) before treating any image as final, and don't be surprised that HTML editing is already live work here.

The module-level status must **never** be marked `APPROVED – KHÔNG TỰ SỬA` until all pending-approval items (images, and the built HTML) are resolved — don't silently harden that flag.

## Architecture of the three HTML files

Each file is a flat, single-screen-at-a-time SPA with no router and no build step:

- A `stagesP{1,2,3}` array (or equivalent) drives a `loadS(idx)` function that shows/hides screen sections and updates a top progress bar.
- Per-screen state lives in a plain JS object (`P1Data`, `P3Data`, ...) scoped to that file only — **no `localStorage`/`sessionStorage`, ever** (explicitly commented in the code as a deliberate constraint, mục 11). Each file must work standalone; P2 and P3 open with a short recap so they don't depend on data from a previous file.
- Interactive images use an absolutely-positioned `.hotspot` overlay grid on top of a `.canvas-bg-img`, not `<canvas>` drawing — this is a static-image-plus-hotspots pattern, not a simulation engine.
- Each `render S*()` function builds one screen's DOM/state; `showFB`/`hideFB` drive the correct/wrong feedback box (colors from `--correct`/`--wrong` tokens).
- TTS is wired to an explicit "Đọc" button using the browser `speechSynthesis` API — never autoplay, never triggered by any other event.
- On the final screen of P3, completion is signaled to a hosting LMS via `window.parent.postMessage({ type: "SH11_B05_M03_COMPLETE", module: "SH11_B05_M03" }, "*")` — this is the only cross-frame communication in the module; there is no other integration surface.
- No Robot/avatar character — each screen has exactly one "current task" panel.

Every screen's spec entry in FILE_1 has 5 blocks (KHỐI A–E, 39 numbered fields): A = pedagogy/identification, B = what the student sees, C = interaction/feedback, D = imagery/animation, E = production/acceptance. Read a screen's full block before implementing or editing it — don't infer behavior from the field number alone.

## Design system actually implemented (Playfair Display / Haugomat editorial flat)

This is what's live in the shipped HTML today — confirmed by reading the `:root` CSS variables in all three files:

- Style: "Tom Haugomat editorial flat" — flat, clean, restrained, no decorative gradients, no heavy shadows.
- Single font: Playfair Display (serif), for both headings and body — loaded from Google Fonts, no other font family.
- UI tokens: `--cream #FAF7F0`, `--ink #1A1A1A`, `--jade #3CA57A` (action/primary), `--correct #2D8B6F` / `--correct-bg #DCEAE1`, `--wrong #C15F3C` / `--wrong-bg #F3E2D6`.
- Explicitly forbidden: dark theme, gradients, glassmorphism, heavy shadows, Robot character, emoji as primary icons.
- Body text minimum 17–18px; mobile is single-column; tap targets minimum 44×44px.
- UI colors and "science colors" (leaf/reagent colors) must never be mixed — science colors are never used for buttons or feedback states.
- Layout is a 2-column `canvas-panel` / info-panel grid (`52% 45%`), not a 3-column dashboard.

This is locked by FILE_1 section 12 and the asset dossier section I. **Do not change it without an explicit content-spec update — see the conflict note below.**

## `Rule_Design_Sinh.md` — the mandated design reference, and how it relates to the shipped HTML

The repo root also carries several authoring-template files, all untracked: `Rule_Design_Sinh.md`, `prompt-Hoa.md`, `02_design_toan_final_v2.md`, `AIDUCATION_UI_REDESIGN_PLAYBOOK.md`, plus `.agents/rules/read-design.md` (an `always_on` agent rule). Both the Critical Rules above and `.agents/rules/read-design.md` mandate reading **`Rule_Design_Sinh.md`** before any design/code work — read it first, every session, no exceptions.

**Where `Rule_Design_Sinh.md` came from:** it's a from-scratch Biology authoring prompt synthesized from the other three template files — `prompt-Hoa.md` (Chemistry canvas-simulation engine: draw/animation primitives, particle/tween/ripple systems, safety-locked animation state machines), `02_design_toan_final_v2.md` (Math design tokens, LMS/Athena manifest integration, DPR-aware canvas sizing, mobile/responsive discipline), and `AIDUCATION_UI_REDESIGN_PLAYBOOK.md` (retrofit playbook for standardizing color/font tokens when embedding into the LMS). None of those three source files mention SH11, quang hợp, or starch — they're generic/other-subject templates. `Rule_Design_Sinh.md` is the Biology-specific synthesis: Be Vietnam Pro font, Tabler Icons, a 3-column dashboard grid (`sideLeft`/`guide`+`controls`+`canvas`/`sideRight`), a Biology "science color" table (chlorophyll, iodine–starch result colors, cell/microscope colors, respiration indicators), safety-locked drawing primitives (e.g. `flameOn` gating alcohol-lamp flames away from ethanol), and Athena/LMS instrumentation.

**Critical distinction — `Rule_Design_Sinh.md` is a template for *future* single-file Bio simulations, not a redesign spec for the shipped HTML.** The three built files (`SH11_B05_M03_P1/P2/P3`) use a *different* architecture than what `Rule_Design_Sinh.md` describes:

| | Shipped `SH11_B05_M03_P*.html` | `Rule_Design_Sinh.md` template |
|---|---|---|
| Font | Playfair Display | Be Vietnam Pro |
| Layout | 2-column (`canvas-panel` 52% / info-panel 45%) | 3-column dashboard (1720px max-width) |
| Interaction | Static image + absolutely-positioned `.hotspot` overlays | `<canvas>` drawing + animation engine (particles, tweens, ripples) |
| Icons | None specified | Tabler Icons webfont |
| LMS integration | One `postMessage` completion signal | Full Athena manifest + `LMS().progress/event/state/complete/resize()` |

**Do not apply `Rule_Design_Sinh.md`'s design system to `SH11_B05_M03_P*.html`** — that would break the design system locked by FILE_1 section 12. Use `Rule_Design_Sinh.md` only when asked to build a *new* Biology virtual-lab HTML from a fresh kịch bản (per its own usage note: paste the prompt + a separate scenario file, then generate one self-contained HTML). If a request is ambiguous about which system applies, ask rather than guessing.

## Domain-specific rules to preserve when editing

From FILE_1 sections 8–9 and the asset dossier's science/safety checklists — these gate correctness and must not regress in either spec file or the HTML:

- Iodine is a reagent that detects pre-existing starch — never state or imply it creates starch.
- Ethanol (cồn) and an open/lit flame must never appear simultaneously in any frame or state. Required safe sequence: heat the outer water bath with the alcohol lamp → extinguish the lamp and confirm the flame is out → move the lamp away → only then open the ethanol → place the small ethanol+leaf beaker into the hot water bath for indirect heating. Students select a safety *layout diagram* (A/B choice); the system runs the correct animation — never let the student drag the ethanol beaker through the flame zone.
- Hot equipment is handled with tongs (`AST_SH11B05M03_TONGS_01`), never bare hands.
- The potato plant leaf is compound (lá kép); the experiment is performed on one sufficiently large leaflet (lá chét), not on the whole compound leaf drawn as a single blade. Keep the same leaflet across all states for visual continuity.
- Dark treatment reduces the influence of starch already accumulated before the experiment — never claim it's "completely depleted."
- The black paper must cover the *same* region on *both* sides of the leaflet, and must not be placed near the heat source.
- Positive (light-exposed) result color is locked to dark blue-violet (xanh tím đậm); negative (covered) result color is locked to light yellow-brown (vàng nâu nhạt) — never pure white, never invented, never applied to the whole leaf.
- Conclusions must not exceed the tested condition (e.g. don't generalize to all species or claim absolute proof) — the correct P3_S03 conclusion is explicitly scoped to "in this experimental condition."
- Wrong-answer feedback must name the specific error, explain why, and let the student redo just that step — never reset already-correct progress, never dumb it down to a single forced cause.
- Don't address the student as "em"; keep language neutral/direct. Don't say "chứng minh tuyệt đối" (absolute proof).
- No distractor equipment (microscopes, chromatography paper, acetone, etc.) and no clutter in lab scenes — the asset dossier's "bố trí bàn thí nghiệm" (table layout) zones are fixed: prep zone (plant, black paper, clips) / heat zone (stand, outer water beaker, alcohol lamp) / chemical zone (ethanol in its own lidded tray, wash water, tongs) / observation zone (iodine, Petri dish, bright background for reading color).

## Working in the two spec files

- Don't read either txt file end-to-end for a small change — jump to the relevant screen header (`## SH11_B05_M03_P#_S##`) or asset header (`` ## `CODE_NAME` ``); each is a self-contained block.
- When adding or changing a screen's asset reference in FILE_1, verify the code exists in the asset dossier's Section II catalog and has a Section III spec entry — add both if it's new, and add a matching placeholder file expectation to `Pic_SH11_B05/` if production is underway.
- Both files carry a version/date/status header at the top (`v3_FINAL_2FILE`, `v2_FINAL`) — bump these and the "Ngày cập nhật" date together when making substantive edits, don't silently drift them out of sync.
- After changing a screen's spec in FILE_1, propagate the change into the matching section of the corresponding built HTML file (and vice versa) — the two are no longer decoupled now that the HTML exists.
