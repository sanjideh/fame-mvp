import React, { useState } from 'react';
import { uploadTrack } from '../services/trackService';

function UploadTrack() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('artist', artist);
      formData.append('album', album);
      formData.append('file', file);

      const response = await uploadTrack(formData);
      console.log('Track uploaded:', response);
      // Handle successful upload (e.g., show success message, redirect)
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Track Title"
        required
      />
      <input
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        placeholder="Artist"
        required
      />
      <input
        type="text"
        value={album}
        onChange={(e) => setAlbum(e.target.value)}
        placeholder="Album"
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        accept=".mp3"
        required
      />
      <button type="submit">Upload Track</button>
    </form>
  );
}

export default UploadTrack;