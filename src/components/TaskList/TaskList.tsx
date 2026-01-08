import React from 'react';
import type { TaskListProps } from '../../types';
import TaskItem from '../TaskItem/TaskItem';


interface TaskListPropsExtended extends TaskListProps {
    onEdit: (taskId: string, newTitle: string, newDescription: string, newPriority: "low" | "medium" | "high", newDueDate: string) => void;
}

const TaskList: React.FC<TaskListPropsExtended> = ({ tasks, onStatusChange, onDelete, onEdit }) => {
    return (
        <div>
            <div>
                {tasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onStatusChange={onStatusChange}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                ))}
            </div>
        </div>
    );
};

export default TaskList;