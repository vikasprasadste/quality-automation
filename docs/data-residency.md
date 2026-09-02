# Data residency and privacy

GitHub-hosted CI is restricted to synthetic test data. Production exports, real student identifiers, authentication secrets, and unredacted request or response bodies must never be added to source control or CI artifacts.

Before any workflow processes regulated or production-derived data, security and legal owners must approve an India-resident execution and storage design. External AI providers are limited to synthetic prompts until that approval exists.
