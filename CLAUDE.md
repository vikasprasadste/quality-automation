# quality-automation

Central test automation for Edvantaze: Playwright (`tests/web`, `tests/admin`), pytest API tests (`tests/api`), mobilewright (`tests/mobile`), AI eval contracts (`tests/ai_evals`). Tests skip when their staging endpoint is not configured; use synthetic accounts only (`docs/data-residency.md`, `config/data-classification.yaml`). Never point suites at production data without explicit approval.
