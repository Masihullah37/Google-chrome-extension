# Chrome URL Saver Extension

## What it does
This Google Chrome extension is a simple yet powerful bookmark manager that allows users to save and manage URLs directly from their browser. It provides three main functions:

- **Save Manual Input** - Users can type and save any text or URL
- **Save Current Tab** - One-click saving of the currently active tab's URL  
- **Delete All** - Double-click to clear all saved items (with safety precaution)

## Key Features
- **Persistent Storage**: Uses Chrome's localStorage to save URLs between browser sessions
- **Quick Access**: Saved URLs open in new tabs when clicked
- **Safety Measures**: Double-click requirement for delete to prevent accidental data loss
- **Clean Interface**: Simple, intuitive UI that's easy to use
- **Chrome API Integration**: Leverages Chrome's tabs API to get current tab information

## Technical Implementation
- Pure HTML, CSS, and JavaScript
- Chrome Extension Manifest
- localStorage for data persistence
- Chrome tabs API for current URL capture
- Event listeners for user interactions

## Use Cases
- Quick bookmarking during research sessions
- Temporary URL storage for projects
- Learning Chrome extension development
- Demonstrating web storage APIs

This extension is perfect for users who need a lightweight, fast solution for temporary URL management without the complexity of full bookmark systems.
