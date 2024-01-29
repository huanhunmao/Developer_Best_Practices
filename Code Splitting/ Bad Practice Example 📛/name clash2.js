
import React, { useState } from 'react';

const LargeComponent = () => {
    // First useState for user input
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    // ... many other states and handlers ...

    // Accidental redeclaration of the same state and handler
    const [input, setInput] = useState('');

    const handleInputChange = () => {
        // Logic intended for a different purpose
    };

    // ... more code ...

    return (
        <div>
            <input type="text" value={input} onChange={handleInputChange} />
            {/* Other components and logic */}
        </div>
    );
};
