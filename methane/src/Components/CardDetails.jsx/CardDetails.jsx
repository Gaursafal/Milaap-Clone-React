import React, { Component } from 'react';
import { DataContext } from '../../Context/DataContextProvider';
import styles from './CardDetails.module.css'
import Card from './Card'
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';


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
            <div className="m-auto">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-6">
                        <div className={styles.border}>
                            <p>Milaap will not charge any fee on your donation to this campaign.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div>
                            <img src="https://images.milaap.org/milaap/image/upload/v1608189362/production/images/campaign/238295/IMG-20201217-WA0080_rdk4ax_1608189366.jpg?crop=faces&enhance=true&format=jpg&height=452&mode=crop&width=603" width="100%" />
                        </div>
                        <div>
                            <button>Ask for an update</button>
                        </div>
                        <div className={styles.story} >
                            <p>Story</p>
                            <hr/>
                            <p>My friend Ramit Roy, requires to undergo an immediate liver transplant.  His medical condition is very bad. He was all through a brilliant student and had completed his MBA from  Nirma Institute of Management. However, due to his medical condition,  he had lost his job due to the pandemic in feb 2020. He is literally penniless and his family cannot afford his medical treatment.  We would be sincerely grateful if anyone can come forward and help us in saving his life.  He has a small daughter,  wife, aged parents, who are all dependent on him. Please help us to save his life.  </p>
                            <div>Details for direct bank transfer / UPI payments</div>
                            <div>
                                <div>Bank Account details: 
                                    <a>click here</a> 
                                </div>
                            </div>
                            <div>Donate</div>
                            <hr/>
                            <Card/>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div style={{display:"flex"}} >
                            <div>Rs.2,257,613</div>
                            <div>raised</div>
                        </div>
                        <div>
                            <div>Goal: 3000000 </div>
                            <div>15 days to go</div>
                        </div>
                        <div>Donate</div>
                        <hr/>
                        <Card/>
                        <div>

                            {/* modals */}

                            <Button type="primary" onClick={this.showModal}>
                                Raise funds
                            </Button>
                        <Modal
                            visible={visible}
                            width={600}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            footer={null}
                            >
                            <div  >
                            <h3>Create a support-fundraiser </h3>
                            <hr/>
                            <p style={{fontSize:"15px"}} >Create a fundraising page in your name for this cause. Your friends can contribute and help us achieve the goal faster. All funds raised will go to the beneficiary.
                            </p>
                            <div style={{fontSize:"20px"}} >Goal</div>
                            <div className={styles.option} >
                                <div>
                                    <select>
                                        <option>Rs.</option>
                                        <option>$</option>
                                    </select>
                                </div>
                                <div className={styles.place} >
                                    <input placeholder="3000" />
                                </div>
                            </div>
                            <div  className={styles.name} >Name your fundraiser</div>
                            <input placeholder="milaap.org/fundraisers/" />
                            <div className={styles.modalcard} >
                                <button style={{backgroundColor:"#b91141"}} >start your fundraiser</button>
                            </div>
                            </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

CardDetails.contextType = DataContext
export default CardDetails
