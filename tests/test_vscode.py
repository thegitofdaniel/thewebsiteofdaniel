import json

def test_vscode_settings():
    with open('/workspaces/thewebsiteofdaniel/.vscode/settings.json') as f:
        settings = json.load(f)

    assert 'cSpell.words' in settings, "'cSpell.words' setting is missing"
    assert 'python.testing.pytestArgs' in settings, "'python.testing.pytestArgs' setting is missing"
    assert 'python.testing.unittestEnabled' in settings, "'python.testing.unittestEnabled' setting is missing"
    assert 'python.testing.pytestEnabled' in settings, "'python.testing.pytestEnabled' setting is missing"

    assert settings['python.testing.unittestEnabled'] == False, "'python.testing.unittestEnabled' should be False"
    assert settings['python.testing.pytestEnabled'] == True, "'python.testing.pytestEnabled' should be True"
