import React, { useState } from "react";
import type { TaskItemProps, TaskStatus } from "../../types";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface TaskItemPropsExtended extends TaskItemProps {
    onEdit: (taskId: string, newTitle: string, newDescription: string, newPriority: "low" | "medium" | "high", newDueDate: string) => void;
}

const TaskItem: React.FC<TaskItemPropsExtended> = ({ task, onStatusChange, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(task.title);
    const [editDescription, setEditDescription] = useState(task.description);
    const [editPriority, setEditPriority] = useState<"low" | "medium" | "high">(task.priority);
    const [editDueDate, setEditDueDate] = useState(task.dueDate);

    const handleSave = () => {
        onEdit(task.id, editTitle, editDescription, editPriority, editDueDate);
        setIsEditing(false);
    };

    // Priority color map
    const priorityColors: Record<string, string> = {
        low: '#4caf50',      // Green
        medium: '#ff9800',   // Orange
        high: '#f44336',     // Red
    };

    return (
        <Card
            sx={{
                mb: 3,
                borderRadius: 0,
                border: '2px solid #111',
                boxShadow: '8px 8px 0 #111',
                fontFamily: 'Chicago, Geneva, Arial, sans-serif',
                transition: 'box-shadow 0.2s',
                width: '520px',
                minWidth: '400px',
                '&:hover': { boxShadow: '12px 12px 0 #111' }
            }}
        >
            <CardContent sx={{ borderRadius: 0, fontFamily: 'Chicago, Geneva, Arial, sans-serif', px: 3, py: 1.5 }}>
                {isEditing ? (
                    <>
                        <TextField
                            label="Title"
                            value={editTitle}
                            onChange={e => setEditTitle(e.target.value)}
                            size="small"
                            sx={{ mr: 2, mb: 1, background: 'rgba(255,255,255,0.8)', borderRadius: 1 }}
                            fullWidth
                        />
                        <TextField
                            label="Description"
                            value={editDescription}
                            onChange={e => setEditDescription(e.target.value)}
                            size="small"
                            sx={{ mr: 2, mb: 1, background: 'rgba(255,255,255,0.8)', borderRadius: 1 }}
                            fullWidth
                        />
                        <Select
                            value={editPriority}
                            onChange={e => setEditPriority(e.target.value as "low" | "medium" | "high")}
                            size="small"
                            sx={{
                                mr: 2,
                                mb: 1,
                                minWidth: 120,
                                background: 'rgba(255,255,255,0.8)',
                                borderRadius: 1,
                                border: '2px solid #111',
                                fontFamily: 'Chicago, Geneva, Arial, sans-serif',
                                fontWeight: 700,
                                color: '#111',
                            }}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        background: 'rgba(255,255,255,0.8)',
                                        color: '#111',
                                        border: '2px solid #111',
                                        fontFamily: 'Chicago, Geneva, Arial, sans-serif',
                                        fontWeight: 700,
                                    }
                                }
                            }}
                        >
                            <MenuItem value="low">Low</MenuItem>
                            <MenuItem value="medium">Medium</MenuItem>
                            <MenuItem value="high">High</MenuItem>
                        </Select>
                        <TextField
                            label="Due Date"
                            type="date"
                            value={editDueDate}
                            onChange={e => setEditDueDate(e.target.value)}
                            size="small"
                            sx={{ mr: 2, mb: 1, background: 'rgba(255,255,255,0.8)', borderRadius: 1, minWidth: 160 }}
                            InputLabelProps={{ shrink: true }}
                        />
                        <Button variant="contained" onClick={handleSave} size="small" sx={{ mr: 2, fontWeight: 700 }}>Save</Button>
                        <Button variant="outlined" onClick={() => setIsEditing(false)} size="small">Cancel</Button>
                    </>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                        <div style={{ fontWeight: 800, fontSize: 22, marginBottom: 8, letterSpacing: 0.5 }}>{task.title}</div>
                        <div style={{ color: '#222', background: 'rgba(255,255,255,0.8)', borderRadius: 4, padding: '8px 12px', marginBottom: 14, fontSize: 15, minHeight: 28 }}>{task.description}</div>
                        <div
                            className="task-details-row-responsive"
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: 32,
                                marginBottom: 8,
                                alignItems: 'center',
                                flexWrap: 'wrap',
                            }}
                        >
                            {/* Priority */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: 100, flex: 1 }}>
                                <div className="task-details-label" style={{ marginBottom: 2 }}>Priority</div>
                                <div className="task-details-value" style={{
                                    fontWeight: 700,
                                    color: priorityColors[task.priority],
                                    background: 'rgba(255,255,255,0.7)',
                                    borderRadius: 4,
                                    display: 'inline-block',
                                    padding: '2px 12px',
                                    border: `2px solid ${priorityColors[task.priority]}`
                                }}>{task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}</div>
                            </div>
                            {/* Due Date */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: 100, flex: 1 }}>
                                <div className="task-details-label" style={{ marginBottom: 2 }}>Due</div>
                                <div className="task-details-value">{task.dueDate}</div>
                            </div>
                            {/* Status */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: 120, flex: 1 }}>
                                <div className="task-details-label" style={{ marginBottom: 2 }}>Status</div>
                                <div className="task-details-dropdown">
                                    <Select
                                        value={task.status}
                                        onChange={e => onStatusChange(task.id, e.target.value as TaskStatus)}
                                        size="small"
                                        sx={{
                                            minWidth: 120,
                                            background: 'rgba(255,255,255,0.8)',
                                            borderRadius: 1,
                                            border: '2px solid #111',
                                            fontFamily: 'Chicago, Geneva, Arial, sans-serif',
                                            fontWeight: 700,
                                            color: '#111',
                                        }}
                                        MenuProps={{
                                            PaperProps: {
                                                sx: {
                                                    background: 'rgba(255,255,255,0.8)',
                                                    color: '#111',
                                                    border: '2px solid #111',
                                                    fontFamily: 'Chicago, Geneva, Arial, sans-serif',
                                                    fontWeight: 700,
                                                }
                                            }
                                        }}
                                    >
                                        <MenuItem value="pending">Pending</MenuItem>
                                        <MenuItem value="in-progress">In Progress</MenuItem>
                                        <MenuItem value="completed">Completed</MenuItem>
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <div className="task-action-buttons">
                            <Button onClick={() => setIsEditing(true)} variant="outlined" size="large" fullWidth sx={{ fontWeight: 700, minWidth: 0 }}>Edit</Button>
                            <Button onClick={() => onDelete(task.id)} variant="contained" color="error" size="large" fullWidth sx={{ fontWeight: 700, minWidth: 0 }}>Delete</Button>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default TaskItem;