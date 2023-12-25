# CONVERSION

## CONVERTING TO NUMBER

| **Value** | **typeof(value)** | **result = Number(value)** | **typeof(result)** |
| --------- | ----------------- | :------------------------: | ------------------ |
| 1234      | number            |            1234            | number             |
| '33'      | string            |             33             | number             |
| '33abc'   | string            |            NaN             | number             |
| 'abc'     | string            |            NaN             | number             |
| true      | boolean           |             1              | number             |
| false     | boolean           |             0              | number             |
| undefined | undefined         |            NaN             | number             |
| null      | object            |             0              | number             |
| -0        | number            |             0              | number             |
| 0n        | number            |             0              | number             |
| Infinity  | number            |          Infinity          | number             |
| -Infinity | number            |         -Infinity          | number             |

## CONVERTING TO STRING

| **Value** | **typeof(value)** | **result = String(value)** | **typeof(result)** |
| --------- | ----------------- | :------------------------: | ------------------ |
| 1234      | number            |          "1234 "           | string             |
| '33'      | string            |            "33"            | string             |
| '33abc'   | string            |          "33abc"           | string             |
| 'abc'     | string            |           "abc"            | string             |
| true      | boolean           |           "true"           | string             |
| false     | boolean           |          "false"           | string             |
| undefined | undefined         |        "undefined"         | string             |
| null      | object            |           "null"           | string             |
| ''        | string            |             ""             | string             |

## CONVERTING TO BOOLEAN

| **Value** | **typeof(value)** | **result = Boolean(value)** | **typeof(result)** |
| --------- | ----------------- | :-------------------------: | ------------------ |
| 1234      | number            |            true             | boolean            |
| '33'      | string            |            true             | boolean            |
| '33abc'   | string            |            true             | boolean            |
| 'abc'     | string            |            true             | boolean            |
| true      | boolean           |            true             | boolean            |
| false     | boolean           |            false            | boolean            |
| undefined | undefined         |            false            | boolean            |
| null      | object            |            false            | boolean            |
| ''        | string            |            false            | boolean            |
| 0         | number            |            false            | boolean            |
| -0        | number            |            false            | boolean            |
| 0n        | number            |            false            | boolean            |
| NaN       | number            |            false            | boolean            |
