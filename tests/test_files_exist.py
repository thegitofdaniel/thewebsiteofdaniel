import os

def test_index_html_exists():
    file_name = 'index.html'
    assert os.path.isfile(file_name), f"{file_name} does not exist"
