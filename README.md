# Quotes-REST-API

# Quotes API

A small Express REST API with in-memory quotes.

## Install and run
```bash
npm install
npm start
```
Server runs at http://localhost:3000

## Endpoints

| Method | Route | Description | Status |
|---|---|---|---|
| GET | /quotes | Get all quotes | 200 |
| GET | /quotes/:id | Get one quote | 200 / 404 |
| POST | /quotes | Add a quote | 201 / 400 |
| DELETE | /quotes/:id | Delete a quote | 204 / 404 |

## Example requests

**GET /quotes/2**
```json
{ "id": 2, "text": "Simplicity is the ultimate sophistication.", "author": "Leonardo da Vinci" }
```

**POST /quotes**
```json
{ "text": "Premature optimization is the root of all evil.", "author": "Donald Knuth" }
```
Response (201):
```json
{ "id": 5, "text": "Premature optimization is the root of all evil.", "author": "Donald Knuth" }
```

**DELETE /quotes/1** returns 204 No Content
