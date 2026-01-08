import React from "react";
import '../../types';
import type { TaskFilterProps, TaskStatus } from "../../types";

const TaskFilter: React.FC<TaskFilterProps> = (props) => {
    const [status, setStatus] = React.useState<TaskStatus | ''>('');
    const [priority, setPriority] = React.useState<'low' | 'medium' | 'high' | ''>('');

    return (
        <div className="filter-row-flex">
            <div className="filter-group">
                <label htmlFor="status-filter" className="filter-label">Status:</label>
                <select
                    id="status-filter"
                    className="retro-select"
                    value={status}
                    onChange={e => {
                        const newStatus = (e.target.value || undefined) as TaskStatus | undefined;
                        setStatus(e.target.value as TaskStatus | '');
                        props.onFilterChange({ status: newStatus, priority: priority || undefined });
                    }}
                >
                    <option value="">All</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <div className="filter-group">
                <label htmlFor="priority-filter" className="filter-label">Priority:</label>
                <select
                    id="priority-filter"
                    className="retro-select"
                    value={priority}
                    onChange={e => {
                        const newPriority = (e.target.value || undefined) as 'low' | 'medium' | 'high' | undefined;
                        setPriority(e.target.value as 'low' | 'medium' | 'high' | '');
                        props.onFilterChange({ status: status || undefined, priority: newPriority });
                    }}
                >
                    <option value="">All</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
        </div>
    )
}

export default TaskFilter;