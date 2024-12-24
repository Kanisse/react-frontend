import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments from the API
    axios.get('http://api-app-app-1:8000') // Remplacer par l'adresse de votre API
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the comments!', error);
      });
  }, []);

  return (
    <div className="App" style={{ backgroundColor: '#121212', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Commentaires</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {comments.map(comment => (
          <li key={comment.id} 
          style={{ margin: '10px 0', padding: '10px', backgroundColor: '#333', 
          borderRadius: '5px' }}>
            {comment.comment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
