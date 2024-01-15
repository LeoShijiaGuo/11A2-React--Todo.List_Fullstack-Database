Hi!! Welcome!

# 1 Here are the things you need to change/add to test this on your local computer: 
## 2 You need a file to link your app to a database: add a file named: .env
### 2.1 You need to add your own MongoDB connect string (if you don't know this, watch my video "MongoDB connect", you get how to do it in a minute).
## 3 You need to add the necessary dependencies to allow this app to run:
### 3.1 0pen up your terminal, navigate to the frontend folder and run this command line: yarn
### 3.2 0pen up your terminal, navigate to the backend folder and run this command line: yarn
## 4 Link frontend to backend:
### 4.1 Check the port which the backend server is running on (This case is 5000, you can find it in "backend/server.js" There is a line "const PORT = process.env.PORT || 5000;").
### 4.1 (I already did this for you) Add this URL "http://localhost:5000" to frontend/src/App.js 
## 5 Run both the frontend and backend to see your app working!! Yeah!
### 5.1 Navigate the terminal to the frontend folder and enter the command: yarn start
### 5.2 ### 5.1 Navigate the terminal to the backend folder and enter the command: yarn start

# 2 Here are things you need to add to deploy this online: 
## Add a file: .gitignore
