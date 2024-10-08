import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from './Components/SearchForm';
import GifList from "./Components/GifList";
import CatLoader from "./Components/CatLoader";

const giphyApiKey = 'k33Smddo36RnCOSnaEIXp0IgOkdQkzQX';

function App() {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [gifQuery, setGifQuery] = useState("");
  const [gifRating, setGifRating] = useState('g');
  const [gifLimit, setGifLimit] = useState(24);

  const initalFetchGifs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/trending?api_key=${giphyApiKey}&limit=${gifLimit}&rating=${gifRating}`
      );
      setGifs(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching and parsing the gifs:', error);
      setError('Failed to fetch gifs. Please try again later.');
      setLoading(false);
    }
  }
  
  const fetchGifs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?q=${gifQuery}&api_key=${giphyApiKey}&limit=${gifLimit}&rating=${gifRating}`
      );
      setGifs(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching and parsing the gifs:', error);
      setError('Failed to fetch gifs. Please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {
    initalFetchGifs();
  }, []);

  useEffect(() => {
    if (gifQuery !== "") {
      fetchGifs();
    }
  }, [gifQuery]);

  const handleGifQueryChange = searchText => {
    setGifQuery(searchText);
  }

  return (
    <div className="wrapper">
      <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <header className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm changeGifQuery={handleGifQueryChange}/>
        </div>
      </header>
      <main className="main-content">
        {loading ? (
          <CatLoader />
        ) : error ? (
          <p>{error}</p>
        ) : (
          <GifList data={gifs} />
        )}
      </main>
    </div>
  );
}

export default App;
