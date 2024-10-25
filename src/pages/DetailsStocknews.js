import React, { useEffect, useState } from 'react';
import '../styles/DetailsStocknews.css'; 

const DetailsStocknews = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState('');

    const fetchAllNews = async () => {
        const API_KEY = '22b913b3d6c0416f935b4bff02b37097';  //api key
        const url = `https://newsapi.org/v2/everything?q=stocks&apiKey=${API_KEY}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.status === 'ok') {
                setNews(data.articles); // Get all news articles
            } else {
                setError('Failed to fetch news.');
            }
        } catch (error) {
            setError('Error fetching news.');
        }
    };

    useEffect(() => {
        fetchAllNews();  //calling on page load
    }, []);

    return (
        <div className="details-stock">
            <h2>All Stock News</h2>
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

export default DetailsStocknews;
