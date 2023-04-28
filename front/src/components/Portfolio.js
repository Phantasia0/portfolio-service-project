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

  const { fetchUser, fetchError, loading, user } = useSelector(
    ({ profile, loading, user }) => ({
      fetchUser: profile.user,
      fetchError: profile.error,
      loading: loading['profile/GET_USER'],
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

  if (loading) {
    return 'loading...';
  }

  if (fetchError) {
    return <ErrorMessage>에러발생</ErrorMessage>;
  }

  return (
    <div>
      {!loading && (
        <Container fluid>
          <Row>
            <Col md="3" lg="3">
              {!loading && fetchUser && user && (
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
      )}
    </div>
  );
};

export default Portfolio;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 1rem;
  margin-top: 1rem;
`;
