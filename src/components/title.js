import React from 'react';
import style from '../styles/title.css';

const Title = props => {
  return (
    <div className={style.title}>
      <h2>To Do list</h2>
      <span>There are still: {props.dataList} tasks on your list</span>
    </div>
  );
};

export default Title;
