import React, { Component } from 'react';
import { DataContext } from '../../Context/DataContextProvider';
import styles from './CardDetails.module.css'


class CardDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }

    
    render() {
        const {details, data} = this.context
        console.log(details, data)
        return (
        <div className={styles.main}>
            <div className="m-auto">
                <div className={styles.border}>
                    <p>Milaap will not charge any fee on your donation to this campaign.</p>
                    
                
                </div>
                <div>
                        {
                        details &&
                        details?.map((card)=> {
                        
                        
                        
                        return (
                            <div>
                                <p>{card.name} </p>
                                <div className="row">
                                    <div className="col-6">
                                    
                                    </div>
                                    <div className="col-6">
                                        <p>Rs.{card.fundraised} </p>
                                    </div>
                                </div>
                                
                            </div>
                            )
                        })
                    
                        }
                    </div>
            </div>
        </div>
        );
    }
}

CardDetails.contextType = DataContext
export default CardDetails
