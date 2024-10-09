Sticky Notes App
A simple web-based sticky notes application that allows users to add, display, and delete tasks with an optional text-to-speech feature. Tasks are saved to localStorage, so they persist across page reloads.

Features
Add Tasks: Users can add tasks with a description, date, and time.
Display Tasks: Tasks are displayed in a sticky note format. Expired tasks are highlighted in red.
Delete Tasks: Users can delete individual tasks.
Text-to-Speech: When enabled, the app announces tasks and deletions using the browser's speech synthesis.
Persistent Storage: All tasks are saved in localStorage and persist even when the page is reloaded.
How to Use
Add a Task:

Enter the task description, date, and time.
Click "Add" to save the task. If any fields are empty or if the date and time are in the past, the task will not be added.
View Tasks:

Tasks are displayed with their descriptions, dates, and times. Expired tasks are marked in red.
Delete a Task:

Click the delete icon on a task to remove it. You will hear a confirmation message if the text-to-speech feature is enabled.
Text-to-Speech:

Enable the "Text-to-Speech" checkbox to have tasks read aloud when added or deleted.
Reset Input Fields:

Click the "Reset" button to clear all input fields.
Files
index.html: Contains the HTML structure of the app.
styles.css: Contains the styling for the app.
script.js: Contains the JavaScript code for app functionality.
Setup
Clone or download the repository.
Open index.html in a web browser to start using the app.

Notes
This app requires the browser to support localStorage and the SpeechSynthesis API for full functionality.
Tasks are checked for expiry based on the current date and time.