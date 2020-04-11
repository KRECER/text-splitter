import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MUITextField from '@material-ui/core/TextField';

import { marginMixin } from '@/utils/styled-mixins';

const TextField = styled(MUITextField)`
  .MuiInputBase-root {
    padding: 15px;
    font-size: inherit;
    line-height: inherit;
  }

  .MuiInputBase-inputMultiline::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }

  .MuiInputBase-inputMultiline::-webkit-scrollbar-thumb {
    background: #333;
  }

  .MuiInputBase-inputMultiline::-webkit-scrollbar-track {
    background: #fff;
  }

  ${marginMixin};
`;

const AppTextArea = (props) => {
  const { value, onChange, label, fullWidth, rows, autoFocus, ...rest } = props;

  return (
    <TextField
      variant="outlined"
      multiline
      label={label}
      value={value}
      onChange={onChange}
      rows={rows}
      fullWidth={fullWidth}
      autoFocus={autoFocus}
      {...rest}
    />
  );
};

AppTextArea.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool,
  rows: PropTypes.number,
  autoFocus: PropTypes.bool,
};

AppTextArea.defaultProps = {
  label: '',
  fullWidth: false,
  rows: 1,
  autoFocus: false,
};

export default AppTextArea;
