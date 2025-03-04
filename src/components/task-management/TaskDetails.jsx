import React from 'react';

const TaskDetails = () => {
    const task = {
        interactionId: 'INT12345',
        taskId: 'TSK12345',
        merchantName: 'PQRS Company',
        assignedTo: 'Agent XYZ',
        createdBy: 'Agent ABC',
        createdOn: 'DD-MM-YYYY',
        dueDate: 'DD-MM-YYYY',
        status: 'pending',
    };

    return (
        <div className="h-[70vh] bg-orange-100 flex items-center justify-center ">
            <div className="max-w-3xl w-full bg-orange-200 p-6 rounded-lg shadow-md">
                <button className="bg-blue-900 text-white px-4 py-2 rounded mb-4">
                    Interaction A - Task 1 Details
                </button>
                <div className="border p-6 rounded-lg">
                    <p className="mb-2"><strong>Interaction ID:</strong> {task.interactionId}</p>
                    <p className="mb-2"><strong>Task ID:</strong> {task.taskId}</p>
                    <p className="mb-2"><strong>Merchant Name:</strong> {task.merchantName}</p>
                    <p className="mb-2"><strong>Assigned to:</strong> {task.assignedTo}</p>
                    <p className="mb-2"><strong>Created by:</strong> {task.createdBy}</p>
                    <p className="mb-2"><strong>Created on:</strong> {task.createdOn}</p>
                    <p className="mb-2"><strong>Due date:</strong> {task.dueDate}</p>
                    <p className="mb-2"><strong>Status:</strong> <span className="text-red-500">{task.status}</span></p>
                </div>
            </div>
        </div>
    );
};

export default TaskDetails;

