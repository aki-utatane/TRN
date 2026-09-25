# TRN 0.1.5at1 — metadata-only patch record

Date: 2026-09-26

Base: `0.1.5at` (formally closed 0.1.5x functional baseline)

## Scope

Exactly four source-text substitutions were made:

1. `CANONICAL BASELINE` → `MODEL BASELINE`; value `0.1.3s` retained.
2. `RELEASE STATE: QA OPEN · geometry / vertical / kinematic / iPad validation` → `CLOSED · QA PASS · 2026-09-25`.
3. Static fallback `PROTOTYPE 0.1.5y` → `PROTOTYPE 0.1.5at1`.
4. Runtime `VERSION = '0.1.5at'` → `VERSION = '0.1.5at1'`.

No operational logic or model data was changed.

## Verification

- JavaScript syntax check: PASS
- Source replacement count: exactly 1 occurrence for each of the four substitutions
- 0.1.5at SHA-256: `c8be6d8224ba2bb7b7aff22cd8e6b182f3220b583a32e9e4bd6e2a14b3ae7553`
- 0.1.5at1 SHA-256: `287bbad4bd7bec88dc53d33c92b5544524769ded705ddd9faacca82dcebc356a`
- 0.1.5at1 Git blob SHA-1 expected from local audited bytes: `11a1b33e3f85e4e9356bd4ba530662949274945d`

The original 0.1.5at file is preserved unchanged.
