import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTrackDetails } from "../services/trackService";
import RightsDistributionForm from "../components/RightsDistributionForm";

function TrackDetails() {
  const { id } = useParams();
  const [track, setTrack] = useState(null);

  useEffect(() => {
    const fetchTrackDetails = async () => {
      try {
        const trackData = await getTrackDetails(id);
        setTrack(trackData);
      } catch (error) {
        console.error("Failed to fetch track details:", error);
      }
    };

    fetchTrackDetails();
  }, [id]);

  const handleRightsSubmit = async (rightsData) => {
    // Implement the logic to save rights distribution
    console.log("Rights distribution:", rightsData);
  };

  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{track.title}</h1>
      <p>Artist: {track.artist}</p>
      <p>Album: {track.album}</p>
      <audio controls src={track.fileUrl} />
      <RightsDistributionForm onSubmit={handleRightsSubmit} />
    </div>
  );
}

export default TrackDetails;
