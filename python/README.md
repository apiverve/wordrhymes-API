Rhyming Words API
============

Word Rhymes is a simple tool for getting word rhymes. It returns a list of rhyming words.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Python API Wrapper for the [Rhyming Words API](https://wordrhymes.apiverve.com?utm_source=pypi&utm_medium=readme)

---

## Installation

Using `pip`:

```bash
pip install apiverve-rhymingwords
```

Using `pip3`:

```bash
pip3 install apiverve-rhymingwords
```

---

## Configuration

Before using the wordrhymes API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=pypi&utm_medium=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```python
from apiverve_rhymingwords.apiClient import WordrhymesAPIClient

# Initialize the client with your APIVerve API key
api = WordrhymesAPIClient("[YOUR_API_KEY]")

query = { "word": "blue", "limit": 10 }

try:
    # Make the API call
    result = api.execute(query)

    # Print the result
    print(result)
except Exception as e:
    print(f"Error: {e}")
```

---

## Usage

The Rhyming Words API documentation is found here: [https://docs.apiverve.com/ref/wordrhymes](https://docs.apiverve.com/ref/wordrhymes?utm_source=pypi&utm_medium=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```python
# Import the client module
from apiverve_rhymingwords.apiClient import WordrhymesAPIClient

# Initialize the client with your APIVerve API key
api = WordrhymesAPIClient("[YOUR_API_KEY]")
```

---

## Perform Request

Using the API client, you can perform requests to the API.

###### Define Query

```python
query = { "word": "blue", "limit": 10 }
```

###### Simple Request

```python
# Make a request to the API
result = api.execute(query)

# Print the result
print(result)
```

###### Example Response

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

## Error Handling

The API client provides comprehensive error handling through the `WordrhymesAPIClientError` exception. Here are some examples:

### Basic Error Handling

```python
from apiverve_rhymingwords.apiClient import WordrhymesAPIClient, WordrhymesAPIClientError

api = WordrhymesAPIClient("[YOUR_API_KEY]")

query = { "word": "blue", "limit": 10 }

try:
    result = api.execute(query)
    print("Success!")
    print(result)
except WordrhymesAPIClientError as e:
    print(f"API Error: {e.message}")
    if e.status_code:
        print(f"Status Code: {e.status_code}")
    if e.response:
        print(f"Response: {e.response}")
```

### Handling Specific Error Types

```python
from apiverve_rhymingwords.apiClient import WordrhymesAPIClient, WordrhymesAPIClientError

api = WordrhymesAPIClient("[YOUR_API_KEY]")

query = { "word": "blue", "limit": 10 }

try:
    result = api.execute(query)

    # Check for successful response
    if result.get('status') == 'success':
        print("Request successful!")
        print(result.get('data'))
    else:
        print(f"API returned an error: {result.get('error')}")

except WordrhymesAPIClientError as e:
    # Handle API client errors
    if e.status_code == 401:
        print("Unauthorized: Invalid API key")
    elif e.status_code == 429:
        print("Rate limit exceeded")
    elif e.status_code >= 500:
        print("Server error - please try again later")
    else:
        print(f"API error: {e.message}")
except Exception as e:
    # Handle unexpected errors
    print(f"Unexpected error: {str(e)}")
```

### Using Context Manager (Recommended)

The client supports the context manager protocol for automatic resource cleanup:

```python
from apiverve_rhymingwords.apiClient import WordrhymesAPIClient, WordrhymesAPIClientError

query = { "word": "blue", "limit": 10 }

# Using context manager ensures proper cleanup
with WordrhymesAPIClient("[YOUR_API_KEY]") as api:
    try:
        result = api.execute(query)
        print(result)
    except WordrhymesAPIClientError as e:
        print(f"Error: {e.message}")
# Session is automatically closed here
```

---

## Advanced Features

### Debug Mode

Enable debug logging to see detailed request and response information:

```python
from apiverve_rhymingwords.apiClient import WordrhymesAPIClient

# Enable debug mode
api = WordrhymesAPIClient("[YOUR_API_KEY]", debug=True)

query = { "word": "blue", "limit": 10 }

# Debug information will be printed to console
result = api.execute(query)
```

### Manual Session Management

If you need to manually manage the session lifecycle:

```python
from apiverve_rhymingwords.apiClient import WordrhymesAPIClient

api = WordrhymesAPIClient("[YOUR_API_KEY]")

try:
    query = { "word": "blue", "limit": 10 }
    result = api.execute(query)
    print(result)
finally:
    # Manually close the session when done
    api.close()
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=pypi&utm_medium=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=pypi&utm_medium=readme) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
