# MIGRATION GUIDE — PERSONAL ACCOUNT

## 1. 移行するもの

最小構成：
- このMASTER HANDOFF ZIP全体

特に必要：
- `FINAL/TRN_0.1.5x_CLOSED_FINAL__build_0.1.5at.html`
- `README_START_HERE.md`
- `CURRENT_STATE.md`
- `MASTER_SPEC.md`
- `REGRESSION_GUARD.md`
- `START_PROMPT_PERSONAL_ACCOUNT.md`

## 2. 新しい環境での開始手順

1. MASTER HANDOFF ZIPを新しいチャット/Projectへアップロード。
2. `START_PROMPT_PERSONAL_ACCOUNT.md` を貼り付ける。
3. AIにREADME → CURRENT_STATE → MASTER_SPEC → REGRESSION_GUARDを読ませる。
4. 最初の返答ではコードを変更させず、継承状態を要約させる。
5. 0.1.6xで何を実装するかを改めて決める。

## 3. 重要

新しいAIが過去会話を持っていなくても、このパッケージを正とする。

過去会話とパッケージに矛盾がある場合：
1. 0.1.5at最終HTML
2. CLOSEOUT_STATUS
3. CURRENT_STATE / MASTER_SPEC
4. final audit
5. 過去会話
の順に優先する。

## 4. 個人アカウント側で保存しておくとよいもの

- MASTER HANDOFF ZIP
- final HTML単体
- 今後作成する0.1.6x各節目版
- 外部sourceの取得ファイル（可能ならURLだけでなく原ファイル）
- 重大な監査JSON

## 5. 開発再開時のversion

0.1.5xは閉じたため、新規機能を追加する場合は原則 **0.1.6x** を開始する。

0.1.5atへ修正を直接積み上げず、0.1.6a等として作業版を分ける。
