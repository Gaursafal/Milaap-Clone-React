import React from 'react';
import {Link} from 'react-router-dom'
import styles from './HomePage.module.css'

const FundData = ({fundData}) => {
    console.log(fundData)
    return (
        <div>
            {
            fundData.map((item)=> (
                    <div className="col-4">
                        <Link to={`/fundraisers/${item.support_name}`} >
                        <div className="card card-body">
                            <img src={item.img} width="400px" alt=""/>
                            <div className={styles.createdby} >
                                <div>
                                    <p>created by</p>
                                    <p>Litton</p>
                                </div>
                                <div>
                                    <p>Raised  </p>
                                </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        ))
                    }
        </div>
    );
}

export default FundData;
