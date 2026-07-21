# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Pre-production content/asset specification for a Vietnamese high-school Biology 11 practical "virtual lab" module (Bài 5 – Thực hành: Quang hợp ở thực vật / starch formation in photosynthesis, module code `SH11_B05_M03`). **No HTML implementation exists yet.** The repo currently holds only the two source-of-truth spec files and the in-progress image/asset deliverables; the three production HTML files described below have not been coded.

- `FILE_1_SH11_B05_M03_KICH_BAN_NOI_DUNG_v3_FINAL.txt` — the authoritative content/pedagogy script (Vietnamese). Defines the module dossier (research question, hypothesis, variables/controls, science key, safety key, design tokens) and the full screen-by-screen spec for all 10 screens across the 3 planned HTML files. Follows template rules from an external doc, `BMH_AI_QUY_TAC_DU_AN_KICH_BAN_SINH_HOC_v3.2.md` (not present in this repo).
- `SH11_B05_M03_HO_SO_HINH_ANH_ASSET_v2_FINAL.txt` — the image/asset dossier: global style key, the full asset code catalog, a detailed spec for every image/asset (composition, required elements, forbidden content, approval status), the pre-code submission checklist, delivery/versioning rules, and the image review checklist.
- `Pic_SH11_B05/` — the actual produced image/asset files (SVG for loose assets and leaf-state overlays, PNG for composite scene images), named to match the asset codes cataloged in the asset dossier (e.g. `IMG_SH11B05M03_LAB_OVERVIEW_01.png`, `AST_SH11B05M03_TONGS_01.svg`, `STATE_SH11B05M03_LEAF_RESULT_01.svg`).

**These files must stay in sync.** Any asset code referenced in FILE_1's screen tables must exist in the asset dossier's catalog (Section II) and have a matching spec entry (Section III); any file added to `Pic_SH11_B05/` should correspond to a cataloged code. When asked to change lab content or visuals, update the relevant txt file(s) first — treat them as the spec, not the HTML (which doesn't exist yet to drift against).

## Production pipeline / current state

This project has a strict linear pipeline, and where the repo currently sits in it matters for what kind of request is even valid right now:

1. Content finalized in FILE_1 (**done** — status `BẢN NỘI DUNG CUỐI SAU RÀ SOÁT`).
2. Image/asset dossier written and assets produced against it (**in progress** — dossier status `CHƯA DUYỆT ẢNH TĨNH`, i.e. static images not yet approved).
3. Each approved image is renamed with an `_APPROVED` suffix (`ASSET_FIRST` rule: approve the asset, only then measure hotspots — never fabricate placeholder coordinates against an unapproved image).
4. Hotspot coordinates measured **only** on `_APPROVED` images.
5. HTML coded for all three parts, embedding the approved assets so each file is self-contained.

Do not treat any image in `Pic_SH11_B05/` as final/hotspot-ready unless its filename carries `_APPROVED`. Do not write HTML coding as if it were already in progress — per FILE_1 section VII, HTML coding starts only after image approval + hotspot measurement.

The module-level status must **never** be marked `APPROVED – KHÔNG TỰ SỬA` until all pending-approval items (images, and later the built HTML) are resolved — don't silently harden that flag.

## Target architecture (once built)

FILE_1 specifies **three independent, self-contained HTML files** — not one:

| File | Screens | Focus |
|---|---|---|
| `SH11_B05_M03_P1_MUC_TIEU_CHUAN_BI.html` | P1_S01–S03 (3) | Research question/hypothesis; materials/tools/chemicals recognition; procedure sequencing + control-region concept |
| `SH11_B05_M03_P2_TIEN_TRINH_THUC_HIEN.html` | P2_S01–S04 (4) | Dark treatment → cover → light exposure; sampling + hot-water treatment; safe indirect ethanol decolorization; wash → iodine → result observation |
| `SH11_B05_M03_P3_BAO_CAO_GIAI_THICH.html` | P3_S01–S03 (3) | Recording results; explaining role of black paper/ethanol/iodine; bounded conclusion + module completion |

Key architectural constraints for whoever builds these:
- Each HTML file must work standalone — **no `localStorage`/`sessionStorage`**, no required shared state between files. P2 and P3 must each open with a short recap summary so they don't depend on data from the previous file.
- No Robot/avatar character (this is a deliberate change from earlier module designs) — each screen has exactly one "current task" panel.
- TTS plays only on explicit user request (a "listen" button); never autoplay, never repeat automatically, never read the answer.
- Every screen's spec entry in FILE_1 has 5 blocks (KHỐI A–E, 39 numbered fields): A = pedagogy/identification, B = what the student sees, C = interaction/feedback, D = imagery/animation, E = production/acceptance (layout, TTS, data to persist, dependencies, static images needing approval, acceptance criteria). Read a screen's full block before implementing or editing it — don't infer behavior from the field number alone.

## Design system (current — do not reuse an older dark/glassmorphism system)

Locked in FILE_1 section 12 and the asset dossier section I:

- Style: "Tom Haugomat editorial flat" — flat, clean, restrained, no decorative gradients, no heavy shadows.
- Single font: Playfair Display.
- UI tokens: `--cream #FAF7F0`, `--ink #1A1A1A`, `--jade #3CA57A` (action), `--correct #2D8B6F` / `--correct-bg #DCEAE1`, `--wrong #C15F3C` / `--wrong-bg #F3E2D6`.
- Explicitly forbidden: dark theme, gradients, glassmorphism, heavy shadows, Robot character, emoji as primary icons.
- Body text minimum 17–18px; mobile is single-column; tap targets minimum 44×44px.
- UI colors and "science colors" (see below) must never be mixed — science colors are never used for buttons/feedback states.

## Domain-specific rules to preserve when editing

From FILE_1 sections 8–9 and the asset dossier's science/safety checklists — these gate correctness and must not regress in either spec file or in future HTML:

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
