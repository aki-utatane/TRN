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

This repository is public, so this README and the published GitHub Pages site can be viewed externally.

- Main web version: https://aki-utatane.github.io/TRN/
- Current build: https://aki-utatane.github.io/TRN/releases/0.1.5x/TRN_0.1.5x_CLOSED_FINAL_0.1.5at1.html
- iPad offline launcher: https://aki-utatane.github.io/TRN/releases/0.1.5x/offline/

The Pages deployment workflow is defined at `.github/workflows/pages.yml`.

## iPad offline viewing

The offline launcher is provided separately from the normal web version. It does not modify the closed 0.1.5at1 build.

To prepare TRN for offline viewing on iPad:

1. While online, open the **iPad offline launcher** above in Safari.
2. From Safari's Share menu, choose **Add to Home Screen**. If an option to open as a web app is shown, leave it enabled.
3. Open the newly added home-screen icon **once while still online**.
4. Wait until TRN itself appears. At that point the offline copy has been prepared.
5. Later, launch TRN from that home-screen icon. The cached 0.1.5at1 build can then start without a network connection.

The offline package is isolated under `releases/0.1.5x/offline/`. During GitHub Pages deployment, the current 0.1.5at1 HTML is copied into that directory without modification, and the workflow verifies that the deployed offline copy is byte-for-byte identical to the normal published 0.1.5at1 HTML.

Note: browser or OS storage can be cleared by the user or system. If the offline copy is no longer available, repeat the preparation steps while online.
