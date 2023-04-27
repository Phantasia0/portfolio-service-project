/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';

import EducationView from './EducationView';
import EducationAddForm from './EducationAddForm';

const Education = ({ isEditable, portfolioOwnerId }) => {
  const [isVisible, setIsVisible] = useState(false);

  const dummyDatas = [
    {
      id: 1,
      school: '초등학교',
      major: '초등전공',
      status: '상태',
    },
    {
      id: 2,
      school: '중학교',
      major: '중전공',
      status: '상태',
    },
    {
      id: 3,
      school: '고등학교',
      major: '고등전공',
      status: '상태',
    },
    {
      id: 4,
      school: '대학교',
      major: '대전공',
      status: '상태',
    },
    {
      id: 5,
      school: '대학원',
      major: '대학전공',
      status: '상태',
    },
  ];

  useEffect(() => {
    // API 통신을 통해 데이터를 데이터베이스로부터 받아와야함.
    // portfolioOwnerId 필요함.
    // Read API [GET] 를 호출할 수 있는 액션을 발생시켜야함.
    // 지금은 백엔드 서버가 완성되지않았기 때문에
    // 백앤드 팀으로 부터 데이터 테이블을 받아서
    // 그것에 맞춰 faker 라이브러리를 활용하여 데이터를 테스트해봄
  }, []);

  const onClick = () => {
    setIsVisible(true);
  };

  return (
    <Card>
      <Card.Body>
        <h1>학력</h1>
        {dummyDatas.map((data) => (
          <EducationView
            key={data.id}
            educationData={data}
            isEditable={isEditable}
          />
        ))}

        {isEditable && <Button onClick={onClick}>+</Button>}

        {isVisible && (
          <EducationAddForm
            portfolioOwnerId={portfolioOwnerId}
            setIsVisible={setIsVisible}
          />
        )}
      </Card.Body>
    </Card>
  );
};

export default Education;
