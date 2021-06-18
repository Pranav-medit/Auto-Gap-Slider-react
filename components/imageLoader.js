import React from 'react';
import styles from './imageLoader.module.scss'

const ImageLoader = () => {
    return (
        <div className={styles.Maindiv}>
            <img src="static/s1.jpg" alt="" />
            <img src="static/s2.jpg" alt="" />
            <img src="static/s3.jpg" alt="" />
            <img src="static/s4.jpg" alt="" />
            <img src="static/s5.jpg" alt="" />
            <img src="static/s6.jpg" alt="" />
        </div>
    );
};

export default ImageLoader;