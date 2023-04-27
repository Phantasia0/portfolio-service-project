/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from 'react-bootstrap';

const EducationCard = ({ educationData, setIsEditing, isEditable }) => {
  const onClick = () => {
    setIsEditing(true);
  };

  return (
    <div>
      <div>{educationData.school}</div>
      <div>{educationData.major}</div>
      <div>{educationData.status}</div>
      <br />
      {isEditable && <Button onClick={onClick}>편집</Button>}
    </div>
  );
};

export default EducationCard;
