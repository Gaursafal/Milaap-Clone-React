import React from 'react';
import styles from './Card.module.css'

const Monthly = () => {
    return (
        <div>
            <div style={{backgroundColor:"#9c3353"}} >
                <div>
                    <div>Currency</div>
                    <input/>
                </div>
                <div>
                    <div>Amount</div>
                    <input/>
                </div>
            </div>
            <p>Milaap charges NO fees. We rely on donors like you to cover for our expenses. Kindly consider a tip. Thank you 🙏
            </p>
            <div>
                <div>include a tip of</div>
                <div>
                    <select>
                        <option>12%(Rs.300) </option>
                    </select>
                </div>
            </div>
            <div>
                <input placeholder="Name" />
                <input placeholder="Email Id" />
                <input placeholder="Phone Number" />
            </div>
            <div>Select a payment method</div>
            <p>Setup a standing instruction on your card / bank account. The deduction will happen on 1st of every month.
            </p>
            <div className={styles.radio}>
                <input type="radio" id="indian" name="drone" value="indian"
                        checked/>
                <label for="indian">
                    Indian
                    <p>Credit Cards (VISA and Mastercard) and Debit Cards (ICICI, Citibank, Canara, Kotak Mahindra)</p>
                </label>
            </div>
            <div className={styles.radio} >
                
                <input type="radio" id="international" name="drone" value="international"
                        checked/>
                <label for="international">
                    International
                    <p>(Credit / Debit cards issued outside India)</p>
                </label>
            </div>
        </div>
    );
}

export default Monthly;
