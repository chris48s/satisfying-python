# satisfying-python

[![Build](https://github.com/chris48s/satisfying-python/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/chris48s/satisfying-python/actions/workflows/test.yml)
[![codecov](https://codecov.io/gh/chris48s/satisfying-python/graph/badge.svg?token=wvSK4hGh8k)](https://codecov.io/gh/chris48s/satisfying-python)

Github action that outputs the maximum (`outputs.max`) and minimum (`outputs.min`) python versions satisfying a range from `pyproject.toml`.

[PEP 621](https://packaging.python.org/en/latest/specifications/declaring-project-metadata/#declaring-project-metadata) and [Poetry](https://python-poetry.org/) formats are supported.

Example usage:

```yaml
- name: Get python versions
  uses: chris48s/satisfying-python@0.2.0
  id: python-versions

- name: Set up Python ${{ steps.python-versions.outputs.min }}
  uses: actions/setup-python@v4
  with:
    python-version: '${{ steps.python-versions.outputs.min }}'
```
