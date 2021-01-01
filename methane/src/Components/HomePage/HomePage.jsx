import React, { Component } from 'react';
import styles from './HomePage.module.css'
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom'
import { DataContext } from '../../Context/DataContextProvider';
import FundData from './FundData';

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    
    render() {
        const {fundData} = this.context
        
        // const {url} = this.props.match
        // console.log(url)
        return (
        <div>
            <div className="row">
                <div className="col-lg-7 col-sm-12">
                    <div className={styles.float}>
                        <Link>Help Daulat Rescue And Employ Acid Attack Survivors</Link>
                    </div>
                    <div className={styles.leftdiv} >
                    <h1>Milaap</h1>
                    <h4>Free Crowdfunding for India</h4>

                    <div className={styles.top} >
                        <p className={styles.medical} >Raise funds online for medical emergencies and social causes</p>
                        <button type="button"  className={styles.mybtn} >Start a fundraiser - it's FREE</button>
                    </div>
                    <div className={styles.flex} >
                        <div>
                            <p>290,000 +</p>
                            <p>Fundraisers</p>
                        </div>
                        <div>
                            <p>Rs.1100 Crores +</p>
                            <p>Raised</p>
                            
                        </div>
                        <div className={styles.right} >
                            <p>4.7 Million +</p>
                            <p>Donations</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-5 col-sm-12">
                    <div>
                        <img src="https://images.milaap.org/milaap/image/upload/v1597899996/production/entity_details/milaap_page/524/banner-image-sample2_1597899995.png?format=jpg" width="100%" alt="" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h4 style={{textAlign:"center"}} >Thousands are fundraising online on Milaap </h4>
                    <div className={styles.input} >
                        <input placeholder="Search by fundraiser name, title, location, cause or other keywords" />
                        <button type="btn" className={styles.searchbtn} >
                            <SearchIcon/>
                        </button>
                    </div>
                </div>
                {/* collapse */}
                <div className={styles.stethoscope}>
                    <div className="shadow-lg p-3 mb-5 bg-white rounded" >
                        <div class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
                        Stethoscope
                    </div>
                    </div>
                    
                    <div className="shadow-lg p-3 mb-5 bg-white rounded">
                        <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                        Education
                        </button>
                    </div>

                    <div className="shadow-lg p-3 mb-5 bg-white rounded">
                        <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                        Memorials
                        </button>
                    </div>

                    <div className="shadow-lg p-3 mb-5 bg-white rounded">
                        <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                        14 others
                        </button>
                    </div>
                    
                </div>
                    <div class="collapse" id="collapseExample">
                    <div className="row">
                        <FundData fundData={fundData}/>
                    </div>
                    </div>
                    <div class="collapse" id="collapseExample1">
                    <div className="row">
                        <FundData fundData={fundData}/>
                    </div>
                    </div>

                    <div class="collapse" id="collapseExample2">
                    <div className="row">
                        <FundData fundData={fundData} />
                    </div>
                    </div>
            </div>
            
            <div className="row">
                <div className="col-12">
                    <div className={styles.link} >
                        <Link>see more fund raisers</Link>
                    </div>
                    
                </div>
                <div className="col-12" >
                    <h4>A friend in your hour of need</h4>
                </div>
                <div className="col-12" >
                    <div className={styles.treatment}>
                        <p>Medical treatments are expensive. They can exhaust your insurance and savings. With Milaap, you receive timely help to pay medical bills. Here’s how:</p>
                    </div>
                </div>
            </div>
            {/* <div style={{height:"500px"}} >
                        <ReactPlayer className="react-player" url='https://d2zcpk7yfyf2dq.cloudfront.net/milaap/video/upload/v1550146729/assets/videos/loan_how_it_works/fund_gif.mp4' width="100%" height="100%" />
            </div> */}
            <div className="row">
                <div className="col-6">
                <div className={styles.setup}>
                    <div>
                        <p>Setup a fundraiser</p>
                        <p>Fill in a few details about yourself, and who you are fundraising for. It takes less than 5 minutes.</p>
                    </div>
                    <div>
                        <p>Start crowdfunding</p>
                        <p>Receive donations from friends, family and even strangers across the world.</p>
                    </div>
                    <div>
                        <p>Withdraw funds</p>
                        <p>Transfer funds to the hospital or to your bank account, whenever you need.</p>
                    </div>
                </div>
                </div>
                <div className="col-6">

                </div>
                <div className="col-12">
                    <div className={styles.bg} >
                        <div className={styles.help} >
                            <div>Need help to setup your free fundraiser?</div>
                            <div>
                                <button>Request a call</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className={styles.people}>
                        <h2>What people are saying about Milaap</h2>
                        <p class="underline"><span class="fancy"><span class="diamond"></span></span></p>
                    </div>
                </div>

                {/* carousal */}
                <div className="col-12">
                    <div>
                    
                    </div>
                </div>
                <div className="col-12">
                    <div className={styles.gap}>
                        <button type="button"  className={styles.mybtn}>Start a fundraiser - it's FREE</button>
                    </div>

                </div>
            </div>
        </div>
        );
    }
}

HomePage.contextType = DataContext

export default HomePage
