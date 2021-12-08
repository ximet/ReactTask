import React, { useCallback } from 'react';
import { getTitle } from '../../store/pages/AboutUs/reducers';
import { changeTitle } from '../../store/pages/AboutUs/actions';
import { useDispatch, useSelector } from 'react-redux';

export function AboutUs() {
  const dispatch = useDispatch();
  const title = useSelector(getTitle);
  const onTitleChange = useCallback(() => dispatch(changeTitle()), [dispatch]);
  return (
    <>
      <div>Hello Kseniya! {title}</div>
      <span>We will add AboutUs component later</span>
      <button type="button" onClick={onTitleChange}>
        Click me!
      </button>
    </>
  );
}
