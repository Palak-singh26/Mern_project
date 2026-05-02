# 📌 Enquiry Management System (MERN Stack)

## 🚀 Project Overview

This is a **full-stack Enquiry Management System** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.
It allows users to:

* Add new enquiries
* View all enquiries
* Update existing enquiries
* Delete enquiries

The project demonstrates complete **CRUD operations** with a clean UI and REST API integration.

---

## 🛠️ Tech Stack

### Frontend:

* React.js
* Axios (API calls)
* React Toastify (notifications)
* SweetAlert2 (confirmation popups)
* Tailwind CSS (styling)

### Backend:

* Node.js
* Express.js

### Database:

* MongoDB (Mongoose ODM)

---

## 📂 Project Structure

```
Frontend/
 ├── Enquiry.js
 ├── Enquirylist.js

Backend/
 ├── Models/
 │    └── enquiry.model.js
 ├── Controllers/
 │    └── enquiryController.js
 ├── Routes/
 │    └── enquiryRoutes.js
```

---

## ✨ Features

* ✅ Add new enquiry
* 📋 View enquiry list
* ✏️ Edit enquiry
* ❌ Delete enquiry with confirmation
* 🔔 Toast notifications for actions
* 🔄 Real-time UI updates after operations

---

## ⚙️ API Endpoints

| Method | Endpoint                          | Description        |
| ------ | --------------------------------- | ------------------ |
| POST   | `/api/website/enquiry/insert`     | Create new enquiry |
| GET    | `/api/website/enquiry/view`       | Get all enquiries  |
| GET    | `/api/website/enquiry/single/:id` | Get single enquiry |
| PUT    | `/api/website/enquiry/update/:id` | Update enquiry     |
| DELETE | `/api/website/enquiry/delete/:id` | Delete enquiry     |

---

## 🧠 Backend Logic

### Model (Mongoose Schema)

* name (String)
* email (String, unique)
* phone (String)
* message (String)

### Controller Functions

* `enquiryinsert` → Save data
* `enquiryList` → Fetch all data
* `enquirysingleRow` → Fetch one record
* `enquiryUpdate` → Update record
* `enquirydelete` → Delete record

---

## 💻 Frontend Functionality

### Key Functions:

* `saveEnquiry()` → Handles add/update
* `getAllenquiry()` → Fetch all enquiries
* `getValue()` → Handle input changes
* `editrow()` → Load data into form
* `deleterow()` → Delete with confirmation

---


### 1. Start the servers

#### Backend:

```
npm start
```

#### Frontend:

```
npm run dev
```

---

## 🔗 Base URL

```
http://localhost:8000/api/website/enquiry
```

---

## ⚠️ Notes

* Email field is **unique**, duplicate entries will throw an error.
* Backend must be running before frontend.
* Ensure MongoDB connection is properly configured.


## 🙌 Author

**Palak Singh**
