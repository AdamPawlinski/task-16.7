import React from 'react';
import styles from '../styles/ToDo.css';

const ToDo = (props) => (
      <li id={props.data.id} className={styles.todo}>
        <span  onClick={() => props.remove(props.data.id)} className={styles.remove}>x</span>
        <h3>{props.data.id}</h3>
        <span>{props.data.text}</span>
      </li>
  )

export default ToDo;
