import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import styles from './Card.module.css'
import OneTime from './OneTime'
import Monthly from './Monthly'

class Card extends Component {

    // modals code
    state = {
        visible: false,
        status: false,
        color: false,
        text: false
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

    handleClick = () => {
        this.setState({
            status: !this.state.status,
            color: !this.state.color,
            text:!this.state.text
        })
    }

    render(){
        const {visible, status} = this.state
        let btncolor = this.state.color?"red":"white"
        let textcolor = this.state.text?"white":"black"
        return (
            <div>
                <div className={styles.border} >
                    <div>
                        {/* modals */}
                    <Button style={{width:"100%", backgroundColor:"#b91141", color:"white"}} onClick={this.showModal}>
                                    Donate now
                                </Button>
                            <Modal
                                visible={visible}
                                width={600}
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                                footer={null}
                                >
                                <div>
                                    <h3>Make a secure donation </h3>
                                    <hr/>
                                    <div className={styles.btn}>
                                        <div>
                                            <button  onClick={this.handleClick} >one Time</button>
                                        </div>
                                        <div>
                                            <button onClick={this.handleClick}>Monthly</button>
                                        </div>
                                        
                                    </div>
                                    {
                                        status?<Monthly/>:<OneTime/>
                                    }
                                </div>
                                </Modal>
                    </div>
                    <div className={styles.gen}>
                        <div className={styles.generate}>Generate QR</div>
                    </div>
                    
                    <div className={styles.scan} >scan and donate with any app</div>
                    <div className={styles.icon} >
                        <img src="https://cdn.iconscout.com/icon/free/png-512/bhim-3-69845.png" width="40px" />
                        <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Google-Pay-Logo-Icon-PNG.png" width="40px" />
                        <img src="https://cdn.iconscout.com/icon/free/png-512/paytm-226448.png" width="40px" />
                        <img src="https://www.searchpng.com/wp-content/uploads/2018/11/phone-pe.png" width="40px" />
                    </div>
                    <div className={styles.download} >download payment receipt</div>
                </div>
            </div>
        );
    }
    
}

export default Card;
