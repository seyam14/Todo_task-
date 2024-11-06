# Project Name: TOdo
# Live link  : https://ephemeral-caramel-2ee421.netlify.app/

A React-based application for task management with attachment uploads and modal display. Users can view and manage tasks in various categories, each represented in its own column. Attachment upload is managed via an API, allowing for dynamic count updates across components.

## Features

- **Task Columns**: Organized into categories like "Incomplete," "To Do," and "Completed".
- **Attachment Management**: File upload with real-time count updates, displayed in each task card.
- **Responsive Modal**: Upload attachments within a modal and close with ease.
- **Reusable Components**: Includes `Card`, `Column`, `Modal`, and `AttachmentList`.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Axios for API calls
- **Icons**: React-Icons

## Installation

1. Clone the repository:
   ```bash
   git clone .....
   ```
2. Navigate to the project folder:
   ```bash
   cd your-repo
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the local server:
   ```bash
   npm start
   ```
2. Open [http://localhost:5000](http://localhost:5000) to view the application.

## Components Overview

- **`Home`**: Main container managing modal visibility and attachment count.
- **`Column`**: Renders task columns with scrollable content.
- **`Card`**: Displays individual task details with dynamic attachment counts.
- **`AttachmentList`**: Handles file uploads, updates attachment count, and fetches data from an API.

## API Setup

To track attachments, set up an API with endpoints:
- `GET /files/count`: Fetch current attachment count.
- `POST /files`: Upload new files and update count.
