# Task Manager Dashboard

## Description

A responsive task management dashboard for adding, editing, filtering, and tracking tasks by status, priority, and due date. Built with React, TypeScript, and MUI to deliver a clean, keyboard-friendly workflow for quick updates.

## Table of Contents

- [Technologies Used](#technologiesused)
- [Features](#features)
- [Future Features](#nextsteps)
- [Deployed App](#deployment)
- [About the Authors](#author)

## <a name="technologiesused"></a>Technologies Used

- **TypeScript + React** - Component architecture and stateful UI
- **Vite + SWC** - Fast dev server and builds
- **Material UI (MUI)** - Accessible inputs, buttons, cards
- **Emotion** - Styling engine for MUI theming
- **CSS3** - Custom layout tweaks and spacing

## <a name="features"></a> Features

**Task Creation** - Add tasks with title and priority directly from the header form  
**Inline Editing** - Switch tasks into edit mode, update title, description, priority, and due date  
**Status Management** - Change status (pending, in-progress, completed) per task  
**Priority & Due Dates** - Color-coded priority chips and due date display  
**Filtering** - Filter by status and priority to focus the list  
**Deletions** - Remove tasks instantly without page reload  
**Responsive Layout** - Card-based list with sensible spacing on varied widths

**In Progress:**

- [ ] Persist tasks (localStorage)  
- [ ] Sort and search (by due date, priority, title)  
- [ ] Completed/active counters and quick filters

## <a name="nextsteps"></a>Future Features

- **Multi-field task creation** - Description and due date at creation time
- **Bulk actions** - Complete or delete multiple tasks at once
- **Drag-and-drop ordering** - Reorder tasks by priority or custom sort
- **Theming** - Light/Dark/Retro palette toggle
- **Reminders** - Due-date reminders and notifications
- **Sync** - Optional backend/API sync for persistence

## <a name="deployment"></a>Deployed Link

**Live Application:**  
_Not yet deployed (run locally with `npm run dev`)_

**Repository:**  
This repository

## <a name="author"></a>About The Authors

**THE TEAM**

- **Clarence Franklin** - UI/UX, React implementation
- _Add collaborators here_

## Development Process

This project was built with:

- Feature-branch workflow with Vite + TypeScript
- Iterative UI passes using MUI components and custom styling
- Manual testing in the browser while developing

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone <your-fork-or-repo-url>
   ```

2. Navigate to project directory:

   ```bash
   cd list-lab
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the dev server:

   ```bash
   npm run dev
   ```

5. Open the app at the printed local URL (typically `http://localhost:5173`).

## Works Cited:

- [React Documentation](https://react.dev/)
- [Material UI Documentation](https://mui.com/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
