import React from 'react';

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😟</span>
        <br />
        Page is not founded :(
      </h1>
      <p className={styles.description}>Sorry, this page doesn't exist.</p>
    </div>
  );
};

export default NotFoundBlock;
