import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TaskList from './components/TaskList/TaskList';
import TaskFilter from './components/TaskFilter/TaskFilter';
import type { Task, TaskStatus } from './types';



const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#111',
      paper: '#fff',
    },
    text: {
      primary: '#111',
      secondary: '#333',
    },
    primary: {
      main: '#111',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fff',
      contrastText: '#111',
    },
    error: {
      main: '#d32f2f',
    },
  },
  typography: {
    fontFamily: 'Chicago, Geneva, Arial, sans-serif',
    fontWeightBold: 700,
    fontWeightRegular: 400,
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          fontFamily: 'Chicago, Geneva, Arial, sans-serif',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '2px solid #111',
          boxShadow: '4px 4px 0 #111',
        },
      },
    },
  },
});

function App() {
  // 1. List of all tasks (now dynamic)
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Finish beat",
      description: "Make a new beat for the song",
      status: "pending",
      priority: "high",
      dueDate: "2025-12-20"
    },
    {
      id: "2",
      title: "Write lyrics",
      description: "Write lyrics for the new song",
      status: "in-progress",
      priority: "medium",
      dueDate: "2025-12-22"
    },
    {
      id: "3",
      title: "Record vocals",
      description: "Record vocals for the new song",
      status: "completed",
      priority: "low",
      dueDate: "2025-12-25"
    }
  ]);

  // State for new task input
  const [newTitle, setNewTitle] = useState("");
  const [newPriority, setNewPriority] = useState<"low" | "medium" | "high">("medium");

  // 2. Store the current filter
  const [filter, setFilter] = useState<{ status?: TaskStatus; priority?: "low" | "medium" | "high" }>({});

  // 3. Update filter when TaskFilter changes
  const handleFilterChange = (filters: { status?: TaskStatus; priority?: "low" | "medium" | "high" }) => {
    setFilter(filters);
  };

  // 4. Add new task
  const handleAddTask = () => {
    if (!newTitle.trim()) return;
    const newTask: Task = {
      id: (tasks.length + 1).toString(),
      title: newTitle,
      description: "", // You can add more fields/inputs if you want
      status: "pending",
      priority: newPriority,
      dueDate: new Date().toISOString().slice(0, 10)
    };
    setTasks([newTask, ...tasks]);
    setNewTitle("");
    setNewPriority("medium");
  };

  // 5. Filter tasks based on filter state
  const filteredTasks = tasks.filter(task => {
    const statusMatch = !filter.status || task.status === filter.status;
    const priorityMatch = !filter.priority || task.priority === filter.priority;
    return statusMatch && priorityMatch;
  });

  // 6. Delete task handler
  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // 7. Change status handler
  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  // 8. Edit task handler
  const handleEditTask = (taskId: string, newTitle: string, newDescription: string, newPriority: "low" | "medium" | "high", newDueDate: string) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, title: newTitle, description: newDescription, priority: newPriority, dueDate: newDueDate } : task
    ));
  };

  // 9. Show input, button, TaskFilter and TaskList
  return (

 <div>
  <h1>Task Manager</h1>
<ThemeProvider theme={theme}>
      <div className="unified-task-card">
        <Box
          className="add-task-row-responsive"
          display="flex"
          alignItems="center"
          gap={2}
          mb={2}
          p={2}
        >
      
          
          <TextField
            label="Add a new task..."
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') handleAddTask();
            }}
            size="medium"
            sx={{ flex: 2, background: '#fff', borderRadius: 0, minWidth: 180 }}
          />
          <Select
            value={newPriority}
            onChange={e => setNewPriority(e.target.value as "low" | "medium" | "high")}
            size="medium"
            sx={{ minWidth: 120, background: '#fff', borderRadius: 0, flex: 1 }}
          >
            <MenuItem value="low">Low</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="high">High</MenuItem>
          </Select>
          <Button
            variant="contained"
            onClick={handleAddTask}
            size="large"
            sx={{
              background: '#111',
              color: '#fff',
              fontWeight: 700,
              boxShadow: 2,
              px: 4,
              borderRadius: 0,
              minWidth: 80,
              '&:hover': {
                background: '#333',
              },
            }}
          >
            Add
          </Button>
        </Box>
        <div className="unified-filter-row">
          <TaskFilter onFilterChange={handleFilterChange} />
        </div>
      </div>
      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDeleteTask}
        onEdit={handleEditTask}
      />
    </ThemeProvider>
 </div>

    
  );
}

export default App
