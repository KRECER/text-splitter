import styled from 'styled-components';
import MUIGrid from '@material-ui/core/Grid/Grid';

import AppTextArea from '@/components/atoms/app-textarea';
import bgIMG from './mear.png';

const TextArea = styled(AppTextArea)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  background: #fff;

  .MuiInputBase-root {
    height: 100%;
  }

  .MuiInputBase-input {
    height: 100%;
  }
`;

const Wrap = styled.div`
  height: 100vh;
  padding: 100px 0;
  background: url(${bgIMG}) no-repeat center;
  background-size: cover;
`;

const Row = styled(MUIGrid)`
  margin: 0 -4px;
  margin-bottom: 25px;
`;

const Item = styled.div`
  position: relative;
  height: 100%;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.5);
`;

export { TextArea, Wrap, Row, Item };
