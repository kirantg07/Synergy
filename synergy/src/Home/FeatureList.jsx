import React, { useState } from 'react';

const FeatureList = ({ features, onEdit, onAdd }) => {
  const [isEditting, setIsEditting] = useState(null);

  const handleEdit = (index) => {
    setIsEditting(isEditting === index ? null : index);
  };

  const handleEditFeature = (index, newFeature) => {
    features[index] = newFeature;
    setIsEditting(null);
  };

  return (
    <div className="feature-list">
      <h2>Your DreamApp Features:</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            {isEditting === index ? (
              <input type="text" value={feature} onChange={(e) => handleEditFeature(index, e.target.value)} />
            ) : (
              <>
                {feature}
                <i className="fas fa-pencil" onClick={() => handleEdit(index)} />
              </>
            )}
          </li>
        ))}
      </ul>
      <button onClick={onAdd}>Add Feature</button>
      <button>Explain Features</button>
    </div>
  );
};

export default FeatureList;
