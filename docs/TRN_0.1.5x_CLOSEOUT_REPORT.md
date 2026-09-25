# TRN 0.1.5x FORMAL CLOSEOUT REPORT

## Closeout decision

2026-09-25、ユーザー確認により0.1.5atの直近確認項目が問題ないと判断され、**0.1.5xを正式クローズ**した。

Final build: **0.1.5at**

## 最終手動確認

ユーザー確認済み：
- 右マウスドラッグでYAWが連続追従する
- VIEW/HEIGHTを付けた状態でもYAWによりZ表示全体が不自然に上下しない

## 累積監査

### Alignment
0.1.5al:
- 107 lines
- 51,422 calibrated TrainRuns（当時）
- 2,858 unique runtime tracks
- runtime track XY >1m: 0
- runtime track Z >0.5m: 0
- boundary XY >1m: 0
- boundary Z >0.5m: 0
- station XY/Z abnormal: 0

### Timetable / speed
0.1.5ap:
- 107 lines
- 45,861 representative TrainRuns
- 5,920 segment patterns
- 214 line/day patterns
- max avg speed 91.405 km/h
- >110 km/h: 0
- >130 km/h: 0
- headway <120 sec: 0

### Final regression
0.1.5aq:
- runtime exceptions: 0
- console errors: 0
- 1024×768 fixed UI overlaps: 0
- 1024×560 fixed UI overlaps: 0
- station-center YAW at 5000%: error 0px
- Focus sample bad: 0 / 12,807

### UI / YAW polish
0.1.5ar/as/at:
- STATION / LABELS / HEIGHT ×10 / FOCUS 1KM / DATA MODEL
- no YAW recentering of Pan
- VIEW/Z datum decoupled from YAW
- selected station screen error 0px
- RMB absolute drag tracking
- manual device QA PASS

## Closeout caveats

丸ノ内線国会議事堂前―霞ケ関の精密化余地は残すが、0.1.5xを閉じる阻害要因とはしない。

完全時刻表再現・汎用Importer・さらなるProduction Bakeは0.1.6x以降の将来課題。
