import React from 'react';
import styles from './OneTime.module.css'

const Monthly = () => {
    return (
        <div>
            <div className={styles.currency}>
                <div>
                    <div>Currency</div>
                    <input placeholder="INR"/>
                </div>
                <div>
                    <div>Amount</div>
                    <input placeholder="2500"/>
                </div>
            </div>
            <p className={styles.milaap}>Milaap charges NO fees. We rely on donors like you to cover for our expenses. Kindly consider a tip. Thank you 🙏
            </p>
            <div className={styles.tip}>
                <div>include a tip of</div>
                <div>
                    <select>
                        <option>12%(Rs.300) </option>
                    </select>
                </div>
            </div>
            <div className={styles.place} >
                <input placeholder="Name" />
                <input placeholder="Email Id" />
                <input placeholder="Phone Number" />
            </div>
            <div className={styles.donate} >Donate using</div>
            <div className={styles.net} >
            <div>Netbanking, Credit/Debit Cards & more</div>
            <div>Pay using PayTM</div>
            <div>Pay using any of UPI apps or Scan QR</div>
            <div>Make Direct Bank Transfer (NEFT/RTGS/IMPS)
                Bank Account details and instructions are provided in the next step
            </div>
            </div>
            <div className={styles.gap} >
            <button className={styles.contbtn}>Continue to pay Rs.2800/month</button>
            </div>
        </div>
    );
}

export default Monthly;
