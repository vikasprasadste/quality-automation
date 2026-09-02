import pytest


@pytest.mark.ai_eval
def test_ai_evaluation_scaffold_is_inactive_until_feature_launch():
    """Keeps the future evaluation lane visible without calling a paid model."""
    pytest.skip("No AI capability is currently deployed")
