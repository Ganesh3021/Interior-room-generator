import React, { useState } from 'react';

function SearchBox() {
    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            <div className="mt-10 flex items-center">
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    className="bg-zinc-200 text-zinc-600 font-mono rounded-3xl h-10 w-[500px] border-white font-mono ring-1 ring-zinc-400 focus:ring-2 ring-rose-400 outline-none duration-300 placeholder:text-gray-800 placeholder:opacity-50 rounded-full px-4 py-2 shadow-lg shadow-lg shadow-[#739bd0] shadow-lg shadow-[#739bd0] hover:scale-105 transition-all"
                    placeholder="Enter Your Thoughts..."
                    autoComplete="off"
                    name="text"
                />
                <span className="rounded-3xl  font-mono ring-1outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-2 py-2 rotate-[45deg] ml-2 shadow-lg focus:shadow-lg">
                    
                        <path fill="#CA2C31" d="m3.77 71.73l16.34-16.1l27.82-4.93l-2.75 14.56L7.57 76.82l-2.43-1.05z"></path>
                        <path fill="#A02422" d="M22.94 59.76L5.2 75.88l13.05 6.36l19.81-10.11v-4.77l4.05-10.92zm41.98 28.39l-8.57 3.72l-8.09 17.15s7.12 15.77 7.44 15.77c.32 0 4.37.32 4.37.32l14.4-16.1l3.64-27.5l-13.19 6.64z"></path>
                        <path fill="#CA2C31" d="M56.5 100.84s4.77-.97 8.17-2.59c3.4-1.62 7.6-4.04 7.6-4.04l-1.54 13.43l-15.05 17.13s-.59-.73-3.09-6.17c-1.99-4.34-2.68-5.89-2.68-5.89l6.59-11.87z"></path>
                
                </span>
            
            </div>
            <p className="mt-3 text-white w-full">You entered: <strong>{inputValue}</strong></p>
        </div>
    );
}

export default SearchBox;
