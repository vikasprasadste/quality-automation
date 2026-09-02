import pytest


@pytest.mark.smoke
def test_api_health(api_client):
    response = api_client.get("/health")
    assert response.status_code == 200
    payload = response.json()
    assert payload.get("status") in {"ok", "healthy"}
