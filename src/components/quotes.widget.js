import React, { useEffect, useState } from 'react';
import '../styles/quotes.css'; // Include your CSS for styling

const RandomQuotes = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [error, setError] = useState('');

    const fetchRandomQuote = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random');  //calling API
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setQuote(data.content); //setting data
            setAuthor(data.author);
        } catch (error) {
            setError('Failed to fetch quote.');
        }
    };

    useEffect(() => {
        fetchRandomQuote();
    }, []);

    //fetching when page loads using useEffect

    return (
        <div className="quotes">
            <h2>Random Quote</h2>
            {error && <p className="error">{error}</p>}
            {quote && (
                <blockquote>
                    <p>"{quote}"</p>
                    <footer>- {author}</footer>
                </blockquote>
            )}
        </div>
    );
};

export default RandomQuotes;
