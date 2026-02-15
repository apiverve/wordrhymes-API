# Rhyming Words API - Go Client

Word Rhymes is a simple tool for getting word rhymes. It returns a list of rhyming words.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Go client for the [Rhyming Words API](https://wordrhymes.apiverve.com?utm_source=go&utm_medium=readme)

---

## Installation

```bash
go get github.com/apiverve/wordrhymes-api/go
```

---

## Configuration

Before using the Rhyming Words API client, you need to obtain your API key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=go&utm_medium=readme)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart?utm_source=go&utm_medium=readme)

The Rhyming Words API documentation is found here: [https://docs.apiverve.com/ref/wordrhymes](https://docs.apiverve.com/ref/wordrhymes?utm_source=go&utm_medium=readme)

---

## Usage

```go
package main

import (
    "fmt"
    "log"

    "github.com/apiverve/wordrhymes-api/go"
)

func main() {
    // Create a new client
    client := wordrhymes.NewClient("YOUR_API_KEY")

    // Set up parameters
    params := map[string]interface{}{
        "word": "blue",
        "limit": 10
    }

    // Make the request
    response, err := client.Execute(params)
    if err != nil {
        log.Fatal(err)
    }

    fmt.Printf("Status: %s\n", response.Status)
    fmt.Printf("Data: %+v\n", response.Data)
}
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "word": "blue",
    "rhymeCount": 20,
    "rhymes": [
      {
        "score": 3,
        "pron": "D EH2 B L UW1",
        "word": "deblois"
      },
      {
        "score": 2,
        "pron": "B AH0 L UW1",
        "word": "ballou"
      },
      {
        "score": 2,
        "pron": "B IH0 L UW1",
        "word": "bellew"
      },
      {
        "score": 2,
        "pron": "K EH2 R AH0 L UW1",
        "word": "carilou"
      },
      {
        "score": 2,
        "pron": "SH AH0 L UW1",
        "word": "chaloux"
      },
      {
        "score": 2,
        "pron": "K L UW1",
        "word": "clue"
      },
      {
        "score": 2,
        "pron": "F L UW1",
        "word": "flew"
      },
      {
        "score": 2,
        "pron": "F L UW1",
        "word": "flu"
      },
      {
        "score": 2,
        "pron": "F L UW1",
        "word": "flue"
      },
      {
        "score": 2,
        "pron": "G L UW1",
        "word": "glew"
      },
      {
        "score": 2,
        "pron": "G L UW1",
        "word": "glue"
      },
      {
        "score": 2,
        "pron": "HH AH2 L AH0 B AH0 L UW1",
        "word": "hullabaloo"
      },
      {
        "score": 2,
        "pron": "K L UW1",
        "word": "klu"
      },
      {
        "score": 2,
        "pron": "L UW1",
        "word": "leu"
      },
      {
        "score": 2,
        "pron": "L UW1",
        "word": "lew"
      },
      {
        "score": 2,
        "pron": "L UW1",
        "word": "lieu"
      },
      {
        "score": 2,
        "pron": "L UW1",
        "word": "loo"
      },
      {
        "score": 2,
        "pron": "L UW1",
        "word": "lou"
      },
      {
        "score": 2,
        "pron": "L UW1",
        "word": "louw"
      },
      {
        "score": 2,
        "pron": "L UW1",
        "word": "loux"
      }
    ]
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=go&utm_medium=readme).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=go&utm_medium=readme), [Privacy Policy](https://apiverve.com/privacy?utm_source=go&utm_medium=readme), and [Refund Policy](https://apiverve.com/refund?utm_source=go&utm_medium=readme).

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
