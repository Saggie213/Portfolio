# Portfolio API Contracts

## Overview
This document defines the API contracts for the portfolio website backend.

## Base URL
- Development: `http://localhost:8001/api`
- Production: Uses `REACT_APP_BACKEND_URL` from environment

---

## Endpoints

### 1. Contact Form Submission

**POST** `/api/contact`

Submit a contact form message. Stores in MongoDB and can send email notification.

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "message": "string (required, min 10 chars)"
}
```

**Success Response (201):**
```json
{
  "id": "uuid-string",
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to discuss...",
  "created_at": "2025-01-15T10:30:00Z",
  "status": "received"
}
```

**Error Response (422):**
```json
{
  "detail": [
    {
      "loc": ["body", "email"],
      "msg": "Invalid email format",
      "type": "value_error"
    }
  ]
}
```

---

### 2. Get All Contact Messages (Admin)

**GET** `/api/contact`

Retrieve all contact form submissions.

**Success Response (200):**
```json
[
  {
    "id": "uuid-string",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello...",
    "created_at": "2025-01-15T10:30:00Z",
    "status": "received"
  }
]
```

---

## Data Models

### ContactMessage
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | auto | UUID identifier |
| name | string | yes | Sender's name |
| email | string | yes | Sender's email |
| message | string | yes | Message content |
| created_at | datetime | auto | Submission timestamp |
| status | string | auto | "received" / "read" |

---

## Frontend Integration

### Contact.jsx Changes
- Replace mock submission with actual API call
- Use `REACT_APP_BACKEND_URL` for API endpoint
- Handle loading, success, and error states
- Show toast notifications for feedback

### API Call Example:
```javascript
const response = await axios.post(`${API}/contact`, {
  name: formData.name,
  email: formData.email,
  message: formData.message
});
```

---

## MongoDB Collection
- Collection name: `contact_messages`
- Indexes: `created_at` (descending)
