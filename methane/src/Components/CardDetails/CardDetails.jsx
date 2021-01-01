import React, { Component } from 'react';
import { DataContext } from '../../Context/DataContextProvider';
import styles from './CardDetails.module.css'
import Card from './Card'
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import RaiseFund from './RaiseFund'

class CardDetails extends Component {

    // modals code
        state = {
            visible: false,
        };
        
        showModal = () => {
            this.setState({
            visible: true,
            });
        };
        
        handleOk = () => {
            this.setState({
                visible: false
            })
        };
        
        handleCancel = () => {
            this.setState({ visible: false });
        };
    
    render() {
        const { visible } = this.state;
        return (
        <div className={styles.main}>
            <div>
                <p className={styles.border} >Milaap will not charge any fee on your donation to this campaign.</p>
                <p className={styles.life}>SAVING MY FRIENDS LIFE. HELP FOR RAMIT ROY</p>
                <div className={styles.facebook}>
                    <div>
                        <p className={styles.bold}>32 </p>
                        <p>shares</p>
                    </div>
                    <div className={styles.fac} >
                        
                        <p>Share on Facebook</p>
                    </div>
                    <div className={styles.wats} >
                        <p>Share on Whatsapp</p>
                    </div>
                </div>
            </div>
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className={styles.paddin}>
                            <img src="https://images.milaap.org/milaap/image/upload/v1608189362/production/images/campaign/238295/IMG-20201217-WA0080_rdk4ax_1608189366.jpg?crop=faces&enhance=true&format=jpg&height=452&mode=crop&width=603" width="100%" />
                        </div>
                        <div>
                        <Button className={styles.btn} onClick={this.showModal}>
                            Ask for an update
                                </Button>
                            <Modal
                                visible={visible}
                                
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                                footer={null}
                                >
                                <div className={styles.form} >
                                    <div>Your email address</div>
                                    <input/>
                                    <button>send</button>
                                </div>
                                </Modal>
                        </div>
                        <div className={styles.story}>
                            <p>Story</p>
                            <hr/>
                            <p>My friend Ramit Roy, requires to undergo an immediate liver transplant.  His medical condition is very bad. He was all through a brilliant student and had completed his MBA from  Nirma Institute of Management. However, due to his medical condition,  he had lost his job due to the pandemic in feb 2020. He is literally penniless and his family cannot afford his medical treatment.  We would be sincerely grateful if anyone can come forward and help us in saving his life.  He has a small daughter,  wife, aged parents, who are all dependent on him. Please help us to save his life.  </p>
                            <div className={styles.details} >Details for direct bank transfer / UPI payments</div>
                            <div className={styles.bank} >Bank Account details: 
                                    <a>click here</a> 
                            </div>
                            <div className={styles.donate} >Donate</div>
                            <hr/>
                            <Card/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className={styles.raised} >
                            <div>Rs.2,257,613</div>
                            <p>raised</p>
                        </div>
                        <div>
                        <div className="progress">
                            <div className="progress-bar bg-danger w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className={styles.goal}>
                            <div>Goal: 3000000 </div>
                            <div>15 days to go</div>
                        </div>
                        <div className={styles.donate} >Donate</div>
                        <hr/>
                        <Card/>
                        <div>
                            <RaiseFund/>
                            
                        </div>
                    </div>
                </div>
            
        </div>
        );
    }
}

CardDetails.contextType = DataContext
export default CardDetails
