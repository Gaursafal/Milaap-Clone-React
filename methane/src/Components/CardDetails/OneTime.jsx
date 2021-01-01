import React from 'react';

const OneTime = () => {
    return (
        <div>
            <div style={{backgroundColor:"#9c3353", height:"100px"}} >
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
            <div>Donate using</div>
            <div>Netbanking, Credit/Debit Cards & more</div>
            <div>Pay using PayTM</div>
            <div>Pay using any of UPI apps or Scan QR</div>
            <div>Make Direct Bank Transfer (NEFT/RTGS/IMPS)
                Bank Account details and instructions are provided in the next step
            </div>
            <div>
                <input placeholder="Name" />
                <input placeholder="Mobile number/Email id" />
            </div>
            <button>Continue to pay Rs.2800</button>
        </div>
    );
}

export default OneTime;
