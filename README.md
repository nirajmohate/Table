# Parental Legacy Chart

A dynamic web application that generates a Parental Legacy Chart based on the selected day of the month.

##  Features

- Dynamic values based on selected day (1–31)
- Odd days → Mother dominant
- Even days → Father dominant
- Each life factor stays within defined min/max range
- Total sum of all values always equals 100
- Responsive table UI

---


## Tech Stack

- Frontend: React.js
- Backend: Node.js + Express
- API: REST

---

##  Installation

### Backend

cd backend
npm install
node server.js


### Frontend

cd frontend
npm install
npm start


---

##  API


GET /api/parental-legacy?day=15


Response:

{
dominant: "Mother",
rows: [...],
overallTotal: 100
}




Niraj Mohate
