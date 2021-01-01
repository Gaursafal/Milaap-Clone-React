import React from 'react';
import styles from './RaiseFund.module.css'

const SharingCard = ({p_name, num, avatar}) => {
    return (
        <div>
            <div className={styles.bg} >
                <div>
                    Campaign organiser
                </div>
                <div className={styles.flex}>
                    <div className={styles.name}>
                        {avatar}
                    </div>
                    <div className={styles.pname} >
                        <p>{p_name} </p>
                        <p>{num} new donors </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SharingCard;
