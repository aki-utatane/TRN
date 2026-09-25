# Tokyo Rail Network

東京鉄道網シミュレーター（TRN）。

## Current stable build

- Series: **0.1.5x — formally closed**
- Functional closeout baseline: **0.1.5at**
- Current web build: **0.1.5at1**
- Launcher: `index.html`
- Current build: `releases/0.1.5x/TRN_0.1.5x_CLOSED_FINAL_0.1.5at1.html`
- Preserved original: `releases/0.1.5x/TRN_0.1.5x_CLOSED_FINAL_0.1.5at.html`

### 0.1.5at1 scope

0.1.5at1 is a metadata-only maintenance patch after formal closeout. It changes only visible release/version metadata:

- RELEASE STATE: QA OPEN → CLOSED / QA PASS
- CANONICAL BASELINE label → MODEL BASELINE, retaining the historical 0.1.3s model value
- static fallback version text → 0.1.5at1
- runtime VERSION constant → 0.1.5at1

No Geometry, Z model, timetable, TrainRun, YAW, Focus, station search, or rendering logic was changed.

The 0.1.5x line remains closed. New feature development should start from the 0.1.6x series.

## GitHub Pages

This repository includes a Pages deployment workflow at `.github/workflows/pages.yml`.
