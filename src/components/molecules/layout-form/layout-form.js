import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AppTextArea from '@/components/atoms/app-textarea';
import AppButton from '@/components/atoms/app-button';

const Form = styled.form`
  width: 100%;
  text-align: center;
`;

const LayoutForm = (props) => {
  const { text, handleChangeText } = props;

  return (
    <Form>
      <AppTextArea value={text} onChange={handleChangeText} rows={25} m={[0, 0, 20, 0]} fullWidth />
      <AppButton variant="contained" color="primary" component={Link} to={'/layout'} disabled={!text} size={'large'}>
        Layout
      </AppButton>
    </Form>
  );
};

LayoutForm.propTypes = {
  text: PropTypes.string.isRequired,
  handleChangeText: PropTypes.func.isRequired,
};

export default LayoutForm;
