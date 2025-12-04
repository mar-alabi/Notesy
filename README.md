# Notesy 📝

A lightweight, responsive note-taking application built with vanilla JavaScript. Users can create, edit, delete, and search through notes with real-time filtering. Features local storage persistence and mock API synchronization. Built as a learning project to master core JavaScript concepts and CRUD operations.

## ✨ Features

- ✅ **Full CRUD Operations** - Create, edit, update, and delete notes seamlessly
- 💾 **Persistent Storage** - Notes saved to localStorage survive page refreshes
- 🔍 **Real-time Search** - Filter notes by title or content as you type
- 🔄 **Mock API Sync** - Simulates server synchronization with error handling
- ⌨️ **Keyboard Shortcuts** - Save notes quickly with `Ctrl+Enter`
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎨 **Clean UI** - Separate views for creating/editing and browsing notes
- ⚠️ **Confirmation Dialogs** - Prevents accidental deletions
- 🕐 **Timestamps** - Displays creation date and time for each note

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Flexbox layout, responsive design, smooth transitions
- **Vanilla JavaScript (ES6+)** - No frameworks, pure JavaScript
- **localStorage API** - Client-side data persistence
- **Promises & Async/Await** - Asynchronous operations handling
- **DOM Manipulation** - Dynamic content rendering

## 🚀 Getting Started

### Live Demo

🌐 [View Live Demo](https://mar-alabi.github.io/Notesy/)

### Run Locally

1. **Clone the repository**

```bash
   git clone https://github.com/mar-alabi/notesy.git
```

2. **Navigate to project directory**

```bash
   cd notesy
```

3. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use Live Server extension in VS Code for better development experience

**No build steps or dependencies required!** Just open and use.

## 📖 Usage

### Creating Notes

1. Click the **"Create Note"** button
2. Enter a title and content for your note
3. Click **"Save"** or press `Ctrl+Enter` to save

### Editing Notes

1. Click the **"Edit"** button on any note card
2. Modify the title or content as needed
3. Click **"Update"** to save your changes

### Deleting Notes

1. Click the **"Delete"** button on any note
2. Confirm the deletion in the confirmation dialog

### Searching Notes

- Type in the search bar at the top to filter notes in real-time
- The search filters through both note titles and content
- Clear the search box to view all notes again

### Syncing to Server

- Click the **"Sync"** button to simulate server synchronization
- Watch the status message for success or failure feedback
- Note: This is a mock API for demonstration purposes

## 📚 What I Learned

This project helped me solidify my understanding of:

- **CRUD Operations** - Implementing create, read, update, and delete functionality from scratch
- **Asynchronous JavaScript** - Working with Promises, async/await, and handling API responses with proper error handling
- **DOM Manipulation** - Dynamically creating, updating, and removing HTML elements based on application state
- **localStorage API** - Persisting data client-side, handling JSON serialization/deserialization, and managing data integrity
- **Event Handling** - Managing various user interactions including clicks, keyboard shortcuts, and form submissions
- **State Management** - Tracking application state (create vs edit mode) and ensuring UI consistency
- **Error Handling** - Gracefully handling failures, edge cases, and providing user feedback
- **Code Organization** - Structuring code into logical sections with clear separation of concerns and comprehensive documentation

## 💪 Challenges Faced

- **localStorage Management** - Initially struggled with saving single note objects instead of the entire notes array. Learned the importance of always serializing the complete array to maintain data consistency across operations.

- **Asynchronous Operations** - Understanding the mock API sync function with Promises took considerable time and practice. Gained confidence working with `.then()`, `.catch()`, and `.finally()` chains for proper async flow control.

- **UI/UX Design** - Creating a cohesive visual style was challenging without prior design experience. Learned the value of researching design patterns and planning the visual hierarchy before implementation.

- **View Management** - Implementing the show/hide logic for switching between form and notes sections required careful state tracking and understanding when to reset form fields.

- **Debugging localStorage** - Learned to use browser DevTools effectively to inspect stored data and troubleshoot persistence issues.

## 🔮 Future Improvements

- 🌐 **Backend Integration** - Connect to an actual backend server with a database for true multi-device synchronization
- 🏷️ **Categories/Tags** - Allow users to organize notes by categories or add tags for better organization
- 📊 **Sorting Options** - Sort notes by last edited, alphabetically, or creation date
- ⌨️ **Additional Keyboard Shortcuts** - Add more shortcuts like `Ctrl+N` for new note, `Esc` to cancel
- 🎨 **Themes** - Implement dark mode and multiple color themes
- 📎 **Rich Text Editing** - Add markdown support or rich text formatting options
- 🔒 **User Authentication** - Add login system for personal note collections
- 📤 **Export/Import** - Allow users to export notes as JSON or text files
- ♻️ **Trash/Archive** - Implement a soft delete with ability to restore deleted notes

## 📁 Project Structure

```
notesy/
│
├── index.html          # Main HTML structure and markup
├── style.css           # All styling, layout, and responsive design
├── script.js           # Application logic, CRUD operations, and event handling
└── README.md           # Project documentation (you are here!)
```

## 🤝 Contributing

This is a personal learning project, but suggestions and feedback are always welcome! Feel free to open an issue or submit a pull request.

## 👨‍💻 Author

**[Mariam Alabi]**

- GitHub: [@mar-alabi](https://github.com/mar-alabi)
