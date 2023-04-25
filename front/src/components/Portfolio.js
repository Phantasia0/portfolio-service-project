/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'modules/sagas/user';
import styled from 'styled-components';

import User from './user/User';

const Portfolio = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const { fetchUser, fetchError, fetchLoading, user } = useSelector(
    ({ profile, loading, user }) => ({
      fetchUser: profile.user,
      fetchError: profile.error,
      fetchLoading: loading['profile/GET_USER'],
      user: user.user,
    }),
  );

  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true });
      return;
    }

    if (params.userId) {
      const ownerId = params.userId;
      dispatch(getUser(ownerId));
    } else {
      const ownerId = user.id;
      dispatch(getUser(ownerId));
    }
  }, [user, navigate, params.userId, dispatch]);

  if (fetchLoading) {
    return 'loading...';
  }

  if (fetchError) {
    return <ErrorMessage>{fetchError}</ErrorMessage>;
  }

  return (
    <Container fluid>
      <Row>
        <Col md="3" lg="3">
          {!fetchLoading && fetchUser && (
            <User
              portfolioOwnerId={fetchUser.id}
              isEditable={fetchUser.id === user?.id}
            />
          )}
        </Col>
        <Col>
          <div style={{ textAlign: 'center' }}>
            학력 목록, 수상이력 목록, 프로젝트 목록, 자격증 목록 만들기
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 1rem;
  margin-top: 1rem;
`;
