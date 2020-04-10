import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import MUIGrid from '@material-ui/core/Grid';
import MUIContainer from '@material-ui/core/Container';
import MUISnackbar from '@material-ui/core/Snackbar';
import BorderClearIcon from '@material-ui/icons/BorderClear';

import img from './mear.png';
import { getColumnsText, getFullText } from '@/redux/selectors';
import { ActionCreator } from '@/redux/reducer';
import AppButton from '@/components/atoms/app-button';
import AppTextArea from '@/components/atoms/app-textarea';

const useOutsideClick = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

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
  background: url(${img}) no-repeat center;
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

const LayoutPage = () => {
  const [isOpenSnackBar, setIsOpenSnackBar] = useState(false);
  const [countColumns, setCountColumns] = useState(1);
  const [selectedCol, setSelectedCol] = useState(null);
  const dispatch = useDispatch();
  const fullText = useSelector(getFullText);
  const columnTexts = useSelector(getColumnsText);
  const columnRefs = useMemo(() => [...Array(3)].map(() => React.createRef()), []);
  const [activeColumnRef, setActiveColumnRef] = useState(columnRefs[0]);

  useOutsideClick(activeColumnRef, () => {
    setIsOpenSnackBar(false);
    if (selectedCol) {
      const text = Object.keys(columnTexts).reduce((acc, val) => {
        return acc.trim() + ' ' + columnTexts[val];
      }, '');
      dispatch(ActionCreator.changeFullText(text));
      dispatch(ActionCreator.splitText(countColumns, text));
      setSelectedCol(null);
    }
  });

  const handleClickColumn = (num) => {
    setActiveColumnRef(columnRefs[num - 1]);
    setSelectedCol(num);
    setIsOpenSnackBar(true);
  };

  const handleChangeCountCol = (count) => {
    setCountColumns(count);
    dispatch(ActionCreator.splitText(count, fullText));
  };

  const handleChangeColumnText = (e) => {
    dispatch(ActionCreator.changeColumnText(selectedCol, e.target.value));
  };

  const renderBtn = (num) => {
    return (
      <MUIGrid key={num} item>
        <AppButton
          variant="contained"
          color="primary"
          startIcon={<BorderClearIcon />}
          onClick={() => handleChangeCountCol(num)}
          disabled={!!selectedCol}
        >
          {num}
        </AppButton>
      </MUIGrid>
    );
  };

  const renderColumn = (num) => {
    const textArea = (
      <TextArea onChange={handleChangeColumnText} value={columnTexts[`column${selectedCol}`]} fullWidth autoFocus />
    );

    return (
      <MUIGrid item xs={12} md={4} key={num} ref={columnRefs[num - 1]}>
        <Item onClick={() => handleClickColumn(num)}>
          {columnTexts[`column${num}`]}
          {selectedCol === num && textArea}
        </Item>
      </MUIGrid>
    );
  };

  return (
    <Wrap>
      <MUIContainer maxWidth={'lg'}>
        <Row container spacing={1}>
          {[...Array(countColumns)].map((it, idx) => renderColumn(++idx))}
        </Row>
        <MUIGrid container spacing={1}>
          {[...Array(3)].map((it, idx) => renderBtn(++idx))}
        </MUIGrid>
      </MUIContainer>
      <MUISnackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={isOpenSnackBar}
        message="To save, click outside the column"
      />
    </Wrap>
  );
};

export default LayoutPage;
