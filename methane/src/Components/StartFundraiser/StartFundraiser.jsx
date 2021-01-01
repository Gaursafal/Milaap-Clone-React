import React, { Component } from 'react';
import '../../App.css'
import styles from './StartFundraiser.module.css'

class StartFundraiser extends Component {
    render() {
        return (
        <div>
            <h1 className={styles.beneficiary} >Beneficiary details</h1>
            <div>
                <form className={styles.form} >
                    <div>
                        The fund raiser will benefit
                        <select className="form-select">
                            <option value="" ></option>
                            <option>myself</option>
                            <option>myfamily</option>
                            <option>myfriends</option>
                            <option>Others</option>
                        </select>
                    </div>
                    <div>
                        I am
                        <input type="text" placeholder="name" className="form-control" className="form-control" />
                        <input type="text" placeholder="age" className="form-control" />
                        <select className="form-select" >
                            <option>gender</option>
                            <option>male</option>
                            <option>female</option>
                            <option>others</option>
                        </select>
                    </div>
                    <div>
                        <div>
                            I am raising funds for an 
                            <select className="form-select" >
                                <option>medical</option>
                                <option>memorial</option>
                                <option>education</option>
                                <option>others</option>
                            </select>
                            cause
                        </div>
                        <div>
                            <div>I want to raise
                                <input type="text" placeholder="goal amount" className="form-control" />
                            </div>
                        </div>
                        <div>
                            <input placeholder="enter description" className="form-control" ></input>
                        </div>
                    </div>
                    <input type="submit" className={styles.btn} />
                </form>
            </div>
        </div>
        );
    }
}

export default StartFundraiser
