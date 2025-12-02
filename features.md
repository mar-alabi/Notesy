**Notty: A note taking application**

- User can take notes and categorise them
- Display the existing notes
- Allow the user to create, edit and delete notes
- We should be able to filter the notes based on category
- Store notes in localStorage
- Use an API to store notes and sync the data across the backend and what's stored in the local storage

**Stretch goals**

- Import and export notes
- Implement simple markdown previe for note content
- Add keyboard shortcuts (Ctrl + N: New, Ctrl + D: Delete)
- The notes can either be arranged by name or latest edited/created
- Add a “last edited” timestamp and sort by last edited.

## **Step 1: Plan your data structure**

Before writing any code, think about:

- **What is a note?** What properties does it need?

  - `id` (to uniquely identify it)
  - `title`
  - `content`
  - `createdAt` or `timestamp`
  - Maybe `tags` (if doing bonus features)

- **Where will you store notes?**
  - In memory: An array of note objects
  - In localStorage: Same array, but serialized as JSON

---

## **Step 2: Break it into smaller modules/functions**

Think about what **actions** your app needs to perform:

**Data management functions:**

- `createNote(title, content)` - creates a new note object with unique ID ✅
- `updateNote(id, title, content)` - finds and updates an existing note
- `deleteNote(id)` - removes a note from the array
- `getNotes()` - retrieves all notes
- `searchNotes(query)` - filters notes by title/content

**localStorage functions:**

- `saveToLocalStorage(notes)` - saves the notes array to localStorage ✅
- `loadFromLocalStorage()` - retrieves notes from localStorage on page load ✅

**UI/rendering functions:**

- `renderNotesList(notes)` - displays all notes in the DOM ✅
- `renderNoteDetail(note)` - shows a single note for editing
- `clearForm()` - resets the input fields

**Mock API function:**

- `syncWithAPI(notes)` - returns a Promise that resolves after a delay (simulating network)

---

## **Step 3: Start with the simplest feature - Create Note**

**Think through the flow:**

1. User types title and content into input fields
2. User clicks "Save" button
3. What should happen?
   - Create a note object with a unique ID (hint: `Date.now()` or `crypto.randomUUID()`)
   - Add it to your notes array
   - Save the updated array to localStorage
   - Re-render the notes list to show the new note
   - Clear the form

**HTML elements you'll need:**

- Input field for title
- Textarea for content
- Save button
- A container (like `<div id="notes-list">`) to display notes

---

## **Step 4: Display notes (Read)**

**Think about:**

- When the page loads, what should happen?
  - Load notes from localStorage
  - Display them in the notes list container

**How to render notes:**

- Loop through your notes array
- For each note, create DOM elements (like a `<div>` card with title and preview of content)
- Append them to your notes list container
- Most recent first (hint: sort by timestamp descending)

---

## **Step 5: Edit notes**

**Flow:**

1. User clicks on a note in the list
2. What should happen?

   - Populate the form fields with that note's title and content
   - Store the note's ID somewhere (maybe in a variable or data attribute) so you know which note you're editing
   - Change the "Save" button to "Update" mode

3. User edits and clicks "Update"
4. What should happen?
   - Find the note by ID in your array
   - Update its title and content
   - Save to localStorage
   - Re-render the list
   - Clear the form

**Hint:** You might need a variable like `currentEditingNoteId` to track which note is being edited.

---

## **Step 6: Delete notes**

**Flow:**

1. Add a delete button to each note card
2. When clicked:
   - Show a confirmation (use `confirm()`)
   - If confirmed, remove the note from the array (hint: `filter()` or `splice()`)
   - Save to localStorage
   - Re-render the list

---

## **Step 7: Search/filter**

**Think about:**

- Add a search input field
- Listen for the `input` event (fires as user types)
- Filter your notes array based on whether the query appears in title OR content
  - Hint: `note.title.toLowerCase().includes(query.toLowerCase())`
- Render only the filtered notes

---

## **Step 8: Mock API sync**

**The mock API function:**

```javascript
// Simulates sending data to a server
function syncWithAPI(notes) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate success 90% of the time
      if (Math.random() > 0.1) {
        resolve({ success: true, notes: notes });
      } else {
        reject(new Error("Sync failed"));
      }
    }, 2000); // 2 second delay
  });
}
```

**Your sync flow:**

1. User clicks "Sync" button
2. Show "Syncing..." status
3. Call `syncWithAPI(notes)`
4. Use `.then()` to handle success - show "Synced!" message
5. Use `.catch()` to handle errors - show error message, keep local data

---

## **Step 9: Structure your code**

Think about organizing like this:

```
1. Define your data array (let notes = [])
2. Define all your helper functions
3. Initialize the app:
   - Load notes from localStorage
   - Render the initial list
   - Set up event listeners (save button, search input, etc.)
```

---

## **Step 10: Start coding!**

**Suggested order to implement:**

1. Create the HTML structure (form, notes list container, search box)
2. Implement `createNote()` and basic rendering
3. Add localStorage persistence
4. Implement delete
5. Implement edit
6. Add search
7. Add mock API sync
8. Style it with CSS

---

## **Key questions to ask yourself as you code:**

- When should I save to localStorage? (After every create/update/delete)
- How do I generate unique IDs? (`Date.now()` or `crypto.randomUUID()`)
- How do I know if I'm creating a new note vs editing? (Check if `currentEditingNoteId` exists)
- How do I prevent duplicate code? (Create reusable functions like `renderNotesList()`)

---

**Start with step 1-4** (create and display notes), get that working, then move forward. Code a little, test a little. Don't try to build everything at once!
