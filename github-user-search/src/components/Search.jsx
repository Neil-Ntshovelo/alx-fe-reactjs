import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setUserData([]);

        try {
            const data = await fetchUserData(username, location, minRepos);
            setUserData(data.items); 
        } catch (err) {
            setError('User  not found. Please check the criteria and try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    value={username}
                    placeholder="GitHub Username"
                    onChange={(e) => setUsername(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    value={location}
                    placeholder="Location"
                    onChange={(e) => setLocation(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="number"
                    value={minRepos}
                    placeholder="Minimum Repositories"
                    onChange={(e) => setMinRepos(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className={`bg-blue-500 text-white rounded-md p-2 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                    disabled={loading}
                >
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </form>
            {loading && <p className="text-gray-500">Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {userData.length > 0 && (
                <div className="mt-4 p-4 border border-gray-300 rounded-md">
                    {userData.map(user => (
                        <div key={user.id} className="border-b border-gray-200 py-2">
                            <h2 className="text-xl font-semibold text-gray-600">{user.login}</h2>
                            <p className="text-gray-500">Location: {user.location || 'N/A'}</p>
                            <p className="text-gray-500">Repositories: {user.public_repos}</p>
                            <p className="mt-2">
                                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    View Profile
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;