# quality automation

Central automation for the mobile application, web application, admin portal, backend APIs, and future AI capabilities.

## Prerequisites

- Node.js 20+
- Python 3.11+
- Java runtime for Allure report generation

## Local setup

```bash
npm install
npx playwright install chromium
python -m venv .venv
. .venv/bin/activate
python -m pip install -e '.[dev]'
cp .env.example .env
```

## Run

```bash
npm run typecheck
npm run test:web
npm run test:admin
python -m pytest tests/api
```

Tests skip when their staging endpoint is not configured. CI configuration must use synthetic accounts and GitHub staging-environment variables/secrets.

See [test strategy](docs/test-strategy.md) and [data-residency policy](docs/data-residency.md).
