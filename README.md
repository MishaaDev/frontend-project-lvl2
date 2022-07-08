# Difference finder
This project is a console aplication tool for comparing the `json` and `yaml` files, poweted by **Node.js**.

## Installation
```
git clone https://github.com/MishaaDev/frontend-project-lvl2.git
cd frontend-project-lvl2
make install
npm link
```

# Examples
## Files
file1.json
```
{
  "common": {
    "setting1": "Value 1",
    "setting2": 200,
    "setting3": true,
    "setting6": {
      "key": "value",
      "doge": {
        "wow": ""
      }
    }
  },
  "group1": {
    "baz": "bas",
    "foo": "bar",
    "nest": {
      "key": "value"
    }
  },
  "group2": {
    "abc": 12345,
    "deep": {
      "id": 45
    }
  }
}
```
file2.yml
```
{
  "common": {
    "follow": false,
    "setting1": "Value 1",
    "setting3": null,
    "setting4": "blah blah",
    "setting5": {
      "key5": "value5"
    },
    "setting6": {
      "key": "value",
      "ops": "vops",
      "doge": {
        "wow": "so much"
      }
    }
  },
  "group1": {
    "foo": "bar",
    "baz": "bars",
    "nest": "str"
  },
  "group3": {
    "deep": {
      "id": {
        "number": 45
      }
    },
    "fee": 100500
  }
}
```
## Help info
[![asciicast](https://asciinema.org/a/WaTwkwHJgl6dg0HXNIle38KFO.svg)](https://asciinema.org/a/WaTwkwHJgl6dg0HXNIle38KFO)
## Comparing files using a stylish formatter
[![asciicast](https://asciinema.org/a/IkKLLT7blcr77hEfsPfgoGuIC.svg)](https://asciinema.org/a/IkKLLT7blcr77hEfsPfgoGuIC)
## Comparing files using a plain formatter
[![asciicast](https://asciinema.org/a/iJdpBXuOGDTEBt9Mjnc9Exurf.svg)](https://asciinema.org/a/iJdpBXuOGDTEBt9Mjnc9Exurf)
## Comparing files using a json formatter
[![asciicast](https://asciinema.org/a/GavlWLhkof8uBXnLYdUwpwv4U.svg)](https://asciinema.org/a/GavlWLhkof8uBXnLYdUwpwv4U)

### Hexlet tests and linter status:
[![Actions Status](https://github.com/Suvorov-m/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Suvorov-m/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/172ce26e15b1329bb7ab/maintainability)](https://codeclimate.com/github/MishaaDev/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/172ce26e15b1329bb7ab/test_coverage)](https://codeclimate.com/github/MishaaDev/frontend-project-lvl2/test_coverage)
