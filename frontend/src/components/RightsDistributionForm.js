import React, { useState } from 'react';

function RightsDistributionForm({ onSubmit }) {
  const [publishingRights, setPublishingRights] = useState({});
  const [masterRights, setMasterRights] = useState({});

  const handlePublishingChange = (e) => {
    setPublishingRights({
      ...publishingRights,
      [e.target.name]: parseFloat(e.target.value),
    });
  };

  const handleMasterChange = (e) => {
    setMasterRights({
      ...masterRights,
      [e.target.name]: parseFloat(e.target.value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ publishingRights, masterRights });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Publishing Rights</h3>
      <input
        type="number"
        name="songwriter"
        onChange={handlePublishingChange}
        placeholder="Songwriter %"
      />
      <input
        type="number"
        name="publisher"
        onChange={handlePublishingChange}
        placeholder="Publisher %"
      />
      
      <h3>Master Rights</h3>
      <input
        type="number"
        name="artist"
        onChange={handleMasterChange}
        placeholder="Artist %"
      />
      <input
        type="number"
        name="producer"
        onChange={handleMasterChange}
        placeholder="Producer %"
      />
      
      <button type="submit">Save Rights Distribution</button>
    </form>
  );
}

export default RightsDistributionForm;