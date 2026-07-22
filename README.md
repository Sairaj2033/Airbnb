#  Airbnb Clone

A full-stack web application inspired by Airbnb that allows users to discover, create, edit, and manage property listings. The project focuses on building a scalable backend with Express.js, MongoDB, authentication, image uploads, maps integration, and a responsive Airbnb-inspired user interface.

---

## 🚀 Features

### 👤 Authentication
- User Sign Up & Login
- Secure Password Hashing using Passport.js
- Session-based Authentication
- Login Required for Protected Routes

### 🏠 Listings
- Create New Listings
- Edit Existing Listings
- Delete Listings
- View Individual Listing Details
- Responsive Listing Cards
- Listing Ownership

### 🖼️ Image Upload
- Upload Images using Multer
- Cloudinary Image Storage
- Replace Listing Images
- Optimized Image Rendering

### 🌍 Maps & Location
- Automatic Geocoding from Location & Country
- Interactive Maps using MapTiler
- Store Latitude & Longitude in MongoDB

### ⭐ Reviews
- Add Reviews
- Delete Reviews
- Author-based Review Authorization
- Ratings Support

### 🎨 User Interface
- Airbnb Inspired Responsive Design
- Scroll Animated Search Bar
- Responsive Navbar
- Modern Cards & Layout
- Bootstrap 5 Components
- Flash Messages

### 🔒 Security
- Server-side Validation using Joi
- Authentication Middleware
- Protected Routes
- Error Handling Middleware
- Method Override Support

---

## 🛠 Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- EJS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- Passport.js
- Passport Local
- Express Session

### File Upload
- Multer
- Cloudinary
- Multer Storage Cloudinary

### Maps
- OpenStreetMap Nominatim API
- MapTiler API

### Validation
- Joi

### Other Packages
- connect-flash
- method-override
- dotenv
- axios

---

## 📂 Project Structure

```text
Airbnb/
│
├── controllers/
├── models/
├── routes/
├── middleware.js
├── views/
├── public/
│   ├── css/
│   ├── js/
│   ├── images/
│
├── utils/
├── init/
├── app.js
├── schema.js
├── CloudConfig.js
└── package.json
```

---

## 📸 Screenshots

> Add screenshots of your project here.

- Home Page
- Listing Page
- Listing Details
- Add Listing
- Edit Listing
- Login Page

---

## 💻 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Sairaj2033/Airbnb.git
cd Airbnb
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Variables

Create a `.env` file.

```env
ATLASDB_URL=

SECRET=

CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET=

MAP_TILER=
```

### 4. Start the Development Server

```bash
npm start
```

Server will run on:

```
http://localhost:8080
```

---

## 📦 Main Dependencies

- Express.js
- MongoDB
- Mongoose
- Passport.js
- Cloudinary
- Multer
- Joi
- Bootstrap
- EJS
- Axios

---

## 📈 Future Improvements

- ❤️ Wishlist Feature
- 🔍 Advanced Search Filters
- 💳 Online Booking System
- 💰 Payment Gateway Integration
- 📅 Booking Calendar
- 📱 Progressive Web App (PWA)
- 🔔 Email Notifications
- 🌙 Dark Mode
- 🌎 Multi-language Support
- 💬 Real-time Chat between Host & Guest

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Fork the repository and submit a Pull Request.

---

## 📜 License

This project is created for educational purposes only and is not affiliated with Airbnb.

---

## 👨‍💻 Author

**Sairaj Patil**

- GitHub: https://github.com/Sairaj2033
- LinkedIn: *(Add your LinkedIn URL here)*

---

⭐ If you found this project useful, consider giving it a star on GitHub!
