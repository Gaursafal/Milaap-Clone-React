import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';
import styles from './ReportFund.module.css'


class ReportFund extends Component {

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

    render(){
        const {visible} = this.state
        return (
            <div>
                <div className={styles.main} >
                    
                        {/* modals */}
                    <Button className={styles.btn} onClick={this.showModal}>
                                    Report Fundraiser
                                </Button>
                            <Modal
                                visible={visible}
                                
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                                footer={null}
                                >
                                <div className={styles.form} >
                                    <div className={styles.report} >Report</div>
                                    <hr/>
                                    <div>Your Name</div>
                                    <input/>
                                    <div>Your email address</div>
                                    <input/>
                                    <div>Your address</div>
                                    <input/>
                                    <button>send</button>
                                </div>
                                </Modal>
                    
                </div>
            </div>
        );
    }
    
}

export default ReportFund;
