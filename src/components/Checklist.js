import React, { useState } from 'react';
import '../styles/checklist.css';


//checklist function
const Checklist = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');


    // handling additem function
    const handleAddItem = () => {
        if (inputValue.trim() !== '') {
            setItems([...items, inputValue]);
            setInputValue('');
        }
    };

    //handle remove item from checklist
    const handleRemoveItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    return (
        <div className="checklist">
            <h2>Checklist</h2>
            <div className="checklist-input">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add new task..."
                />
                <button onClick={handleAddItem}>Add</button> 
            </div>
            <ul>
                {items.map((item, index) => (
                    <li key={index} onClick={() => handleRemoveItem(index)}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Checklist;
