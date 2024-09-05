import React, { useEffect, useState } from 'react';
import { getUserTracks } from '../services/trackService';

function Dashboard() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const userTracks = await getUserTracks();
        setTracks(userTracks);
      } catch (error) {
        console.error('Failed to fetch tracks:', error);
      }
    };

    fetchTracks();
  }, []);

  return (
    <div>
      <h1>Your Tracks</h1>
      <ul>
        {tracks.map((track) => (
          <li key={track._id}>
            {track.title} - {track.artist}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;