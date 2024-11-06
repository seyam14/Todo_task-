# Front-End Task Management

A React-based front-end application that allows users to manage tasks in different categories, upload attachments, and view real-time updates. The app provides a responsive interface with dynamic task columns, attachment management, and modal interactions.

## Features

- **Task Columns**: Tasks organized into categories like "Incomplete," "To Do," and "Completed."
- **Dynamic Attachment Count**: Each task card displays a count of attachments, updated in real-time when files are uploaded.
- **File Upload Modal**: A modal dialog to upload files and display the total number of attachments.
- **Responsive UI**: Built with Tailwind CSS for a mobile-first, responsive layout.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Icons**: For including icon sets like file attachments and message bubbles.
- **Axios**: For making HTTP requests to handle file uploads (this assumes you have an API back-end to handle the uploads).

## Installation

1. **Clone the repository**:
   ```bash
   git clone ......
   ```

2. **Navigate to the project folder**:
   ```bash
   cd your-repo
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

## Usage

1. **Run the development server**:
   ```bash
   npm start
   ```

2. **Open the server before** in your browser at [http://localhost:5000](http://localhost:5000).

## Components

- **`Home`**: The main page component that manages the state of modal visibility and attachment counts.
- **`Column`**: Represents a task column that displays tasks in different categories (e.g., Incomplete, To Do).
- **`Card`**: Displays individual task details along with the attachment count and interactions for file uploads.
- **`AttachmentList`**: Handles the file input and manages the attachment count state by interacting with the backend API.

## Example UI Flow

1. The user clicks on a column like **"To Do"**.
2. Each **Card** inside the column shows task details along with the attachment count.
3. The user clicks the **attachment icon** to open a modal to upload files.
4. Files are uploaded and the attachment count in the card is updated dynamically.

## Customization
- You can add more categories to the `Data` array in `Home.js`.
- Update styling using Tailwind CSS to customize the look of the modal, cards, and columns.
- Ensure that the backend API is properly configured for file uploads (e.g., POST requests for file handling and GET for attachment count).
