import React, { useEffect, useState } from 'react';
import '../styles/StocksNews.css';

const StocksNews = () => {
    const [newsData, setNewsData] = useState([]);
    const [randomNews, setRandomNews] = useState([]);
    const [error, setError] = useState('');

    const fetchStockNews = async () => {
        const API_KEY = 'YOUR_ALPHA_VANTAGE_API_KEY'; // Replace with your API key
        const ticker = 'MSFT'; // Example ticker symbol
        const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${ticker}&apikey=${API_KEY}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            const news = data.feed || []; // Assuming 'feed' contains the news articles
            setNewsData(news);
            setRandomNews(getRandomNews(news, 2)); // Get 2 random news articles
        } catch (err) {
            setError('Failed to fetch stock news.');
        }
    };

    // Function to get random news articles
    const getRandomNews = (newsArray, num) => {
        const shuffled = newsArray.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    };

    useEffect(() => {
        fetchStockNews();
    }, []);

    return (
        <div className="stocks-news">
            <h2>Random Stock News</h2>
            {error && <p className="error">{error}</p>}
            <ul>
                {randomNews.length > 0 ? (
                    randomNews.map((news, index) => (
                        <li key={index}>
                            <a href={news.url} target="_blank" rel="noopener noreferrer">
                                {news.title}
                            </a>
                            <p>{news.summary}</p>
                            <span>{new Date(news.published_on).toLocaleString()}</span>
                        </li>
                    ))
                ) : (
                    <p>No random news available.</p>
                )}
            </ul>

            <h2>All Stock News</h2>
            <ul>
                {newsData.length > 0 ? (
                    newsData.map((news, index) => (
                        <li key={index}>
                            <a href={news.url} target="_blank" rel="noopener noreferrer">
                                {news.title}
                            </a>
                            <p>{news.summary}</p>
                            <span>{new Date(news.published_on).toLocaleString()}</span>
                        </li>
                    ))
                ) : (
                    <p>No news available.</p>
                )}
            </ul>
        </div>
    );
};

export default StocksNews;
