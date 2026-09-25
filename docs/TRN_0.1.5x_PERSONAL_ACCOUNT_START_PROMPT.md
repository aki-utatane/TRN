# TRN 個人アカウント移行後・開発再開プロンプト

添付した `TRN_0.1.5x_CLOSED_MASTER_HANDOFF_2026-09-25.zip` を、TRN（東京鉄道網シミュレーター）の正式な引継ぎパッケージとして扱ってください。

まず、以下をこの順番で読んでください。

1. `README_START_HERE.md`
2. `FINAL/CLOSEOUT_STATUS.json`
3. `DOCS/CURRENT_STATE.md`
4. `DOCS/MASTER_SPEC.md`
5. `DOCS/REGRESSION_GUARD.md`
6. `DOCS/KNOWN_LIMITATIONS_AND_FUTURE.md`
7. 必要に応じて `DATA_MODEL_SPEC.md` / `Z_MODEL_SPEC.md` / `TIMETABLE_MODEL_SPEC.md`

## 正式な作業起点

0.1.5xは正式クローズ済みです。
最終安定版は：

`FINAL/TRN_0.1.5x_CLOSED_FINAL__build_0.1.5at.html`

です。

0.1.5atを変更せず保存し、新しい開発は原則0.1.6xとして別ファイルから開始してください。
ユーザーの明示指示なしに正本/基準版を昇格・置換しないでください。

## 最重要の継承ルール

- iPad Safariを最重要端末とする。
- ゲーム化しない。時刻運行・鉄道網構造の可視化が目的。
- 既にPASSしたモデルを根拠なく作り直さない。
- 変更前には作業起点を保存する。
- source / confidence A/B/Cを維持する。
- C-confidenceを実測値として扱わない。
- 時刻表は代表運行モデルであり、全列車番号完全再現ではない。
- 将来の外部データ取込は `Import → Normalize → Validate → Diff → Apply` の契約に従う。

## 特に回帰させてはいけない箇所

- 有楽町線辰巳のジャンプ
- 大江戸線六本木の方向別Z表示
- 共有線路上の列車Geometry
- Focus ON時の線路シャギー
- Focus 1km円筒境界
- 駅検索→中央移動→駅YAW軸
- YAWでPanが勝手に中央へ移動しないこと
- YAW/右ドラッグでZ構造が上下しないこと
- 右マウスドラッグがカーソルに追従し続けること
- 120秒未満の不自然な重複TrainRun
- 駅間速度の異常化

## 最初の返答で行うこと

コードを変更せず、以下だけを回答してください。

1. 現在の正式版とversion状態
2. 実装済み主要機能
3. 既知の非ブロッキング課題
4. 回帰防止上の最重要ポイント
5. 0.1.6xで開発を再開する準備ができているか

不足情報があっても、まず引継ぎ資料に基づいて可能な範囲を整理してください。
