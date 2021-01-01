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
        status: false
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
            status: !this.state.status
        })
    }

    render(){
        const {visible, status} = this.state
        return (
            <div>
                <div>
                    <div>
                        {/* modals */}
                    <Button type="primary" onClick={this.showModal}>
                                    Donate now
                                </Button>
                            <Modal
                                visible={visible}
                                width={600}
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                                footer={null}
                                >
                                <div  >
                                    <h3>Make a secure donation </h3>
                                    <hr/>
                                    <div>
                                        <button onClick={this.handleClick} >one Time</button>
                                        <button onClick={this.handleClick}>Monthly</button>
                                    </div>
                                    {
                                        status?<Monthly/>:<OneTime/>
                                    }
                                </div>
                                </Modal>
                    </div>
                    <div>Generate QR</div>
                    <div>scan and donate with any app</div>
                    <div>
                        <img src="https://cdn.iconscout.com/icon/free/png-512/bhim-3-69845.png" width="40px" />
                        <img src="https://www.searchpng.com/wp-content/uploads/2019/02/Google-Pay-Logo-Icon-PNG.png" width="40px" />
                        <img src="https://cdn.iconscout.com/icon/free/png-512/paytm-226448.png" width="40px" />
                        <img src="https://www.searchpng.com/wp-content/uploads/2018/11/phone-pe.png" width="40px" />
                    </div>
                    <div>download payment receipt</div>
                </div>
            </div>
        );
    }
    
}

export default Card;
