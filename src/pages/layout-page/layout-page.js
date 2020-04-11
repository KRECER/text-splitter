import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MUIGrid from '@material-ui/core/Grid';
import MUIContainer from '@material-ui/core/Container';
import MUISnackbar from '@material-ui/core/Snackbar';
import MUIBorderClearIcon from '@material-ui/icons/BorderClear';

import { getColumnsText, getFullText } from '@/redux/selectors';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { ActionCreators } from '@/redux/reducer';
import { Item, Row, TextArea, Wrap } from './styled-components';
import AppButton from '@/components/atoms/app-button';

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
      const text = Object.keys(columnTexts).reduce((acc, numColumn) => acc + ' ' + columnTexts[numColumn], '');
      dispatch(ActionCreators.changeFullText(text.trim()));
      dispatch(ActionCreators.splitText(countColumns, text.trim()));
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
    dispatch(ActionCreators.splitText(count, fullText));
  };

  const handleChangeColumnText = (e) => {
    dispatch(ActionCreators.changeColumnText(selectedCol, e.target.value));
  };

  const renderBtn = (num) => {
    return (
      <MUIGrid key={num} item>
        <AppButton
          variant="contained"
          color="primary"
          startIcon={<MUIBorderClearIcon />}
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
      <MUIGrid item xs={12} md={4} key={`column-${num}`} ref={columnRefs[num - 1]}>
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
