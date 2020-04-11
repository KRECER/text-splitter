import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import MUIContainer from '@material-ui/core/Container';

import { ActionCreators } from '@/redux/reducer';
import { getFullText } from '@/redux/selectors';
import LayoutForm from '@/components/molecules/layout-form';

const Container = styled(MUIContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`;

const HomePage = () => {
  const fullText = useSelector(getFullText);
  const dispatch = useDispatch();

  const handleChangeTextArea = (e) => {
    dispatch(ActionCreators.changeFullText(e.target.value));
  };

  return (
    <Container maxWidth={'md'}>
      <LayoutForm text={fullText} handleChangeText={handleChangeTextArea} />
    </Container>
  );
};

export default HomePage;
