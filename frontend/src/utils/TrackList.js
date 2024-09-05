import React from 'react';
import { formatDate, formatFileSize } from '../utils/formatters';

function TrackList({ tracks }) {
  return (
    <div className="track-list">
      {tracks.map((track) => (
        <div key={track._id} className="track-item">
          <h3>{track.title}</h3>
          <p>Artist: {track.artist}</p>
          <p>Album: {track.album}</p>
          <p>Uploaded: {formatDate(track.createdAt)}</p>
          <p>File Size: {formatFileSize(track.fileSize)}</p>
        </div>
      ))}
    </div>
  );
}

export default TrackList;