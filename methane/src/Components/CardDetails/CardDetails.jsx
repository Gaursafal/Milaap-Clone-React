import React, { Component } from 'react';
import { DataContext } from '../../Context/DataContextProvider';
import styles from './CardDetails.module.css'
import Card from './Card'
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import RaiseFund from './RaiseFund'

class CardDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible: false,
            fundData:[]
        };
    }

    componentDidMount(){
        console.log(this.props)
        const {getDonateId} = this.context
        this.setState({
            fundData:getDonateId(this.props.match.params.support_name)
        });
        
    }

    // modals code
      
        
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
        const { visible,fundData } = this.state;
        console.log(fundData)
        const {img,story} = fundData

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
                        <div>
                            <img src={img} width="100%" alt=""/>
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
                            <p>{story}</p>
                            <div className={styles.details} >Details for direct bank transfer / UPI payments</div>
                            <div className={styles.bank} >Bank Account details: 
                                    <p>click here</p> 
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
