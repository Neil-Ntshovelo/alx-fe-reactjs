import React, { useState } from 'react';
import { fetchUser  } from '../services/githubService'; 

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUser, Data] = useState(null); // Fixed the variable name here
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setUser, Data(null); // Fixed the variable name here

        try {
            const data = await fetchUser (username); 
            setUser, Data(data); // Fixed the variable name here
        } catch (err) {
            setError('Looks like we can\'t find the user');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={handleInputChange}
                    placeholder="Enter GitHub username"
                    required
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {userData && (
                <div>
                    <h2>{userData.name}</h2>
                    <img src={userData.avatar_url} alt={userData.name} width="100" />
                    <p>
                        <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                            View Profile
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Search;