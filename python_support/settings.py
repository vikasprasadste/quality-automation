from __future__ import annotations

import os


def require_env(name: str) -> str:
    value = os.getenv(name)
    if not value:
        raise RuntimeError(f"Required environment variable {name} is not configured")
    return value.rstrip("/")
