# Setup Guide for Local Testing

## Database Configuration

1. **Environment File**: Add a `.env` file to link your app to a database.
   - **MongoDB Connection**: Include your MongoDB connect string. If unsure how to do this, refer to the "MongoDB connect" video for guidance.

## Installing Dependencies

2. **Setting up the Frontend**:
   - Open your terminal.
   - Navigate to the frontend folder.
   - Run the following command: 
     ### `yarn`

3. **Setting up the Backend**:
   - Open your terminal.
   - Navigate to the backend folder.
   - Run the following command: 
     ### `yarn`

## Linking Frontend to Backend

4. **Configuration**:
   - Verify the backend server port in `backend/server.js`. Look for the line `const PORT = process.env.PORT || 5000;`.
   - **Note**: The URL "http://localhost:5000" has been added to `frontend/src/App.js`.

## Running the Application

5. **Start the Application**:
   - For the frontend:
     - Navigate to the frontend folder in the terminal.
     - Enter the command: 
       ### `yarn start`
   - For the backend:
     - Navigate to the backend folder in the terminal.
     - Enter the command: 
       ### `yarn start`

# Deployment Instructions

## Preparing for Online Deployment

1. **Additional File**:
   - Add a `.gitignore` file.
