/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import useInput from 'hooks/useInput';

const EducationAddForm = ({ portfolioOwnerId, setIsVisible }) => {
  const [school, onChangeSchool] = useInput('');
  const [major, onChangeMajor] = useInput('');
  const [status, onChangeStatus] = useInput('');

  const onSubmitForm = (e) => {
    e.preventDefault();

    const newEducationData = { school, major, status };

    // API 호출을 맞춤
    // GET인지? POST인지? PATCH 인지? PUT인지? DELETE인지?
    // portfolioOwnerId 이 정보가 필요함 . 누구인지 특정하기 위함
    // CREATE API [POST] 를 호출하는 액션을 발생시켜야함.
    // 자세한 API 는 백엔드 소통

    // 이후,
    setIsVisible(false);
  };

  const onClick = () => {
    setIsVisible(false);
  };

  return (
    <Form
      onSubmit={onSubmitForm}
      controlId="formEducation"
      style={{ marginLeft: '6px' }}
    >
      <Form.Group controlId="formSchool" style={{ marginBottom: '8px' }}>
        <Form.Control
          type="text"
          placeholder="학교 이름을 입력해 주세요."
          onChange={onChangeSchool}
          value={school}
        />
      </Form.Group>

      <Form.Group controlId="formMajor" style={{ marginBottom: '8px' }}>
        <Form.Control
          type="text"
          placeholder="전공명을 입력해 주세요."
          value={major}
          onChange={onChangeMajor}
        />
      </Form.Group>

      <Form.Group controlId="formStatus" style={{ marginBottom: '8px' }}>
        {['radio'].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="재학중"
              name="group1"
              type={type}
              value="재학중"
              id={`inline-${type}-1`}
              onChange={onChangeStatus}
            />
            <Form.Check
              inline
              label="학사졸업"
              name="group1"
              type={type}
              value="학사졸업"
              id={`inline-${type}-1`}
              onChange={onChangeStatus}
            />
            <Form.Check
              inline
              label="석사졸업"
              name="group1"
              type={type}
              value="석사졸업"
              id={`inline-${type}-1`}
              onChange={onChangeStatus}
            />
            <Form.Check
              inline
              label="박사졸업"
              name="group1"
              type={type}
              value="박사졸업"
              id={`inline-${type}-1`}
              onChange={onChangeStatus}
            />
          </div>
        ))}
      </Form.Group>

      <ButtonWrapper>
        <Button variant="primary" type="submit">
          확인
        </Button>
        <Button variant="primary" onClick={onClick}>
          취소
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default EducationAddForm;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
