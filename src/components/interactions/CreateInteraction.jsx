import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Select from 'react-select';

const merchants = [
    { id: 1, name: 'PQRS Company' },
    { id: 2, name: 'ABCD Company' },
    { id: 3, name: 'UVWX Company' },
    { id: 4, name: 'MNOP Company' },
    { id: 5, name: 'EFGH Company' },
];

const options = {
    businessTypes: [
        { value: 'Retail', label: 'Retail' },
        { value: 'Wholesale', label: 'Wholesale' },
        { value: 'Service', label: 'Service' },
        { value: 'Other', label: 'Other' },
    ],
    interactionTypes: [
        { value: 'Phone', label: 'Phone' },
        { value: 'Chat', label: 'Chat' },
        { value: 'Email', label: 'Email' },
        { value: 'Other', label: 'Other' },

    ],
    statuses: [
        { value: 'Open', label: 'Open' },
        { value: 'In Progress', label: 'In Progress' },
        { value: 'Closed', label: 'Closed' },
    ],
};

const CreateInteraction = () => {
    const { id } = useParams();
    const [merchant, setMerchant] = useState({ id: '', name: '' });

    useEffect(() => {
        const foundMerchant = merchants.find((m) => m.id === parseInt(id));
        if (foundMerchant) {
            setMerchant(foundMerchant);
        }
    }, [id]);
    

    return (
        <div className="min-h-screen bg-orange-100 flex items-center justify-center p-3">
            <div className="max-w-3xl w-full bg-orange-200 p-6 rounded-lg shadow-md">
                {/* <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4">Start a new Interaction</button> */}

                <div className="border p-6 rounded-lg">
                    <h2 className="bg-blue-900 text-white px-4 py-2 rounded mb-4">New Interaction Details</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block font-semibold">Merchant ID:</label>
                            <input value={merchant.id} disabled className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block font-semibold">Merchant Name:</label>
                            <input value={merchant.name} disabled className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block font-semibold">Business Type:</label>
                            <Select options={options.businessTypes} />
                        </div>
                        <div>
                            <label className="block font-semibold">Interaction Type:</label>
                            <Select options={options.interactionTypes} />
                        </div>
                        <div>
                            <label className="block font-semibold">Interaction Title:</label>
                            <input className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block font-semibold">Assigned to:</label>
                            <input className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block font-semibold">Follow-up date:</label>
                            <input type="date" className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block font-semibold">Status:</label>
                            <Select options={options.statuses} />
                        </div>
                    </div>
                        <div className='mt-2'>
                            <label className="block font-semibold">Interaction Description:</label>
                            <textarea className="w-full p-2 border rounded" />
                        </div>
                    <div className='flex justify-center items-center'>
                    <button className="bg-orange-700  text-white px-4 py-3 rounded mt-6">Create</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateInteraction;

