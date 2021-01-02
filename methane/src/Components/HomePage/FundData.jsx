import React from 'react';
import {Link} from 'react-router-dom'
import styles from './HomePage.module.css'

const FundData = ({fundData}) => {
    return (
        <div className="row">
        {
            fundData.map((item)=> (
                        <div className="col-lg-4 col-md-6">
                            
                            <Link style={{textDecoration:"none"}} to={`fundraisers/${item.support_name}`}>
                            <div className="card card-body">
                                <img src={item.img[0]} width="400px" alt=""/>
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
