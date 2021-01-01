import React from 'react';
import styles from './RaiseFund.module.css'

const SupportersCard = ({p_name, money, avatar}) => {
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
                        <p>{p_name} donated Rs.{money} </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SupportersCard;
