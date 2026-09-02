from __future__ import annotations

import os

import httpx
import pytest


@pytest.fixture(scope="session")
def api_base_url() -> str:
    value = os.getenv("API_BASE_URL")
    if not value:
        pytest.skip("API_BASE_URL is not configured")
    return value.rstrip("/")


@pytest.fixture(scope="session")
def api_client(api_base_url: str):
    with httpx.Client(base_url=api_base_url, timeout=15.0) as client:
        yield client
