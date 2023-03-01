import React, { useEffect, useState } from "react";
import styles from './Loading.module.scss';

type propsType = {
    isVisible: boolean;
}

const Loading = ({isVisible} : propsType) => {
    return (
        <div className={styles['loading']} data-visible={isVisible}><span>Vui lòng chờ ... </span></div>
    )
}

export default Loading;