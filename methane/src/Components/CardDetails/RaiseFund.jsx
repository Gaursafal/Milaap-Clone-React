import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import styles from './RaiseFund.module.css'
import SharingCard from './SharingCard'
import SupportersCard from './SupportersCard'
import ReportFund from './ReportFund'

class RaiseFund extends Component {
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
        <div>
            {/* modals */}
            <div style={{marginBottom:"40px"}} >
            <Button className={styles.btn} 
            onClick={this.showModal}>
                Raise funds
            </Button>
            <Modal
                visible={visible} width={600}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={null}>
                <div>
                    <h3>Create a support-fundraiser </h3>
                    <hr/>
                    <p style={{fontSize:"15px"}} >Create a fundraising page in your name for this cause. Your friends can contribute and help us achieve the goal faster. All funds raised will go to the beneficiary.
                    </p>
                    <div style={{fontSize:"20px"}}>Goal</div>
                    <div className={styles.option}>
                        <div>
                            <select>
                                <option>Rs.</option>
                                <option>$</option>
                            </select>
                        </div>
                    <div className={styles.place}>
                        <input placeholder="3000" />
                    </div>
                    </div>
                    <div className={styles.name} >Name your fundraiser</div>
                    <input placeholder="milaap.org/fundraisers/" />
                    <div className={styles.modalcard}>
                        <button style={{backgroundColor:"#b91141"}} >start your fundraiser</button>
                    </div>
                </div>
            </Modal>
            </div>

            <div className={styles.bg} >
                <div>
                    Campaign organiser
                </div>
                <div className={styles.flex}>
                    <div className={styles.name}>
                        L
                    </div>
                    <div className={styles.pname} >
                        <p>Litton</p>
                    </div>
                </div>
            </div>

            <div className={styles.benificiary} >Beneficiary: RAMIT ROY</div>

            <div className={styles.most} >Most raised by sharing</div>
            <SharingCard p_name="Rupa Pal" num="10" avatar="RP" />
            <SharingCard p_name="Deepak Srivastava" num="5" avatar="DS" />
            <SharingCard p_name="Dhraj Khatri" num="4" avatar="DK" />

            <div>Supporters</div>
            <div>Donated to this campaign via Bank transfer/QR Code? Click here if you can’t find your donation listed below.</div>
            <SupportersCard p_name="Shravani" money="1,000" avatar="SR" />
            <SupportersCard p_name="Atchuthan" money="1,00" avatar="A" />
            <SupportersCard p_name="Abhijit" money="2,000" avatar="AB" />
            <SupportersCard p_name="Anonymous" money="2,000" avatar="A" />
            <SupportersCard p_name="Anonymous" money="1,000" avatar="A" />
            <ReportFund/>
        </div>
        );
    }
}

export default RaiseFund