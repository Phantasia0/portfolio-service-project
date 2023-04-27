/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import EducationCard from './EducationCard';
import EducationEditForm from './EducationEditForm';

const EducationView = ({ educationData, isEditable }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {isEditing ? (
        <EducationEditForm
          educationData={educationData}
          setIsEditing={setIsEditing}
        />
      ) : (
        <EducationCard
          educationData={educationData}
          setIsEditing={setIsEditing}
          isEditable={isEditable}
        />
      )}
    </div>
  );
};

export default EducationView;
