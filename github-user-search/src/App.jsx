import React from 'react';
import Search from './components/Search';

const App = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
                GitHub User Search
            </h1>
            <Search />
        </div>
    );
};

export default App;