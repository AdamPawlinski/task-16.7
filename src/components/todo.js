import React from 'react';
import styles from '../styles/ToDo.css';

const ToDo = (props) => {
  return (
      <li id={props.data.id} className={styles.ToDo}>
        <h3>{props.data.id}</h3>
        <span>{props.data.text}</span>
      </li>
  )
}

export default ToDo;
