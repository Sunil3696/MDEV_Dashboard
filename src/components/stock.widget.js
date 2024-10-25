import React, { useEffect, useState } from 'react';
import '../styles/Stocks.css';

const StocksNews = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState('');


    //this function fetches the enews from the given url
    const fetchNews = async () => {
        const API_KEY = '22b913b3d6c0416f935b4bff02b37097'; // Replace with your API key
        const url = `https://newsapi.org/v2/everything?q=stocks&apiKey=${API_KEY}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.status === 'ok') {
                setNews(data.articles.slice(0, 2)); // Get only the first 2 news articles to show on dashboard
            } else {
                setError('Failed to fetch news.');
            }
        } catch (error) {
            setError('Error fetching news.');
        }
    };

    //fetching news on page load
    useEffect(() => {
        fetchNews();
    }, []);


    return (
        <div className="stocks-news">
            <h2>Latest Stock News</h2>
            {error && <p className="error">{error}</p>}
            <ul>
                {news.map((article, index) => (
                    <li key={index}>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            <h3>{article.title}</h3>
                        </a>
                        <p>{article.description}</p>
                        <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StocksNews;
