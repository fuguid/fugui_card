declare const json: {
  "$id": "https://example.com/person.schema.json",
  "$schema": "https://json-schema.org/draft-07/schema",
  "title": "Person",
  "type": "object",
  "not-easy-key": {},
  "properties": {
    "firstName": {
      "type": "string",
      "description": "The person's first name."
    },
    "lastName": {
      "type": "string",
      "description": "The person's last name."
    },
    "age": {
      "description": "Age in years which must be equal to or greater than zero.",
      "type": "integer",
      "minimum": 0
    }
  }
}

export default json;