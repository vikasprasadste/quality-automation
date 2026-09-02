# Test strategy

The repository provides independent release evidence for the Edvantaze mobile, web, admin, and backend products. Product repositories own unit and component coverage; this repository owns deployed API, UI, mobile, cross-product, and future AI evaluation.

## Execution policy

- Pull requests run fast API and browser smoke coverage.
- Main and nightly runs expand deterministic coverage.
- Mobile execution is manually enabled until stable staging artifacts exist.
- Release certification permits no P0 or P1 failures.
- Retries are visible and contribute to the flaky-test metric.
- Tests use synthetic data only.

## Future AI features

AI tests will combine schema, policy, grounding, relevance, safety, latency, and cost evaluation. No external model is called until a provider, retention policy, and India data-residency design are approved.
