import React from 'react';
import styled from 'styled-components';
import MUIButton from '@material-ui/core/Button';

const Button = styled(MUIButton)`
  border-radius: 0;
`;

const AppButton = (props) => <Button {...props}>{props.children}</Button>;

export default AppButton;
