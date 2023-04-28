/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';

const EducationCard = ({ educationData, isEditable, setIsEditing }) => {
  const onClick = () => {
    setIsEditing(true);
  };

  return (
    <Container style={{ margin: '12px 0px' }}>
      <Row>
        <Col sm="8">
          <Row>{educationData.school}</Row>
          <Row>
            <p style={{ padding: '0', margin: '0' }}>
              {educationData.major}({educationData.status})
            </p>
          </Row>
        </Col>
        <Col sm="2">
          {isEditable && (
            <Button variant="outline-primary" size="sm" onClick={onClick}>
              편집
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default EducationCard;
