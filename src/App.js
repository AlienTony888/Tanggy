import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from './context/firebase';
import { collection, getDocs } from 'firebase/firestore';
import './App.css';
import logo from './images/mylogo.png';
import background from './images/background.png';
 
export default function App() {
  const { firebase } = useContext(FirebaseContext);
  const [movies, setMovies] = useState([]);
 
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const snapshot = await getDocs(collection(firebase.db, 'movies'));
        const moviesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setMovies(moviesData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
 
    fetchMovies();
  }, [firebase.db]);
 
  return (
<div className="app" style={{ backgroundImage: `url(${background})` }}>
<div className="header">
<img src={logo} alt="Netflix Clone Logo" className="app-logo" />
<h1 className="app-title"></h1>
</div>
 
      {movies.length === 0 ? (
<p>Loading movies...</p>
      ) : (
<ul>
          {movies.map((movie) => (
<li key={movie.id}>
              {movie.title || "No title"} ({movie.year || "N/A"})
</li>
          ))}
</ul>
      )}
</div>
  );
}