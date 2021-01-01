import React from 'react';
import {Link} from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div style={{padding:50}}>
            <hr/>
            <div className="row"  >
                <div className="col-3"  >
                    <div className={styles.main}>
                        <div className={styles.name} >Donate Towards</div>
                        <div>
                            <Link>Medical</Link>
                        </div>
                        <div>
                            <Link>Eduacation</Link>
                        </div>
                        <div>
                            <Link>Memorial</Link>
                        </div>
                    </div>
                    
                </div>

                <div className="col-3">
                    <div className={styles.main} >
                    <div>
                        <button className={styles.mybtn} >Start a fundraiser</button>
                    </div>
                    <div className={styles.price} >
                        <div>pricing</div>
                        <div>FAQs and tips</div>
                    </div>
                    <div style={{display:"flex"}} >
                        <div>find us on</div>
                        <div>
                            <Link>
                                <img src="https://assets.milaap.org/assets/footer/facebook-f415d9cbdff5646a2a29abb68aefb8dc783b6110d668f199a98418dc760a00a0.png" width="30px" />
                            </Link>
                            <Link>
                                <img src="https://assets.milaap.org/assets/footer/twitter-d5a78b18b5df704a5b3144516433e9f643cdb71be98d050d0dfe96f639eac065.png" width="30px"/>
                            </Link>
                            <Link>
                                <img src="https://assets.milaap.org/assets/footer/linkedin-d5288c587401ffbee66b52be8a26a6ae441c18c3e3189ae9f4a4b272b10c27f5.png" width="30px" />
                            </Link>
                            <Link>
                                <img src="https://assets.milaap.org/assets/footer/instagram-ae04f97b313d2e7d566b3b6fca9af23692d1043d5a4c9d25a4db5e780cc6b2f6.png" width="30px" />
                            </Link>
                            <Link>
                                <img src="https://assets.milaap.org/assets/footer/youtube-7d80782e10238307e6d68514f43fc241fdb8dad3508c33b2f1a6484a973c9cd1.png" width="30px"/>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-3" >
                    <div className={styles.main} >
                        <div className={styles.name}>Milaap</div>
                        <div>
                            <Link>About us</Link>
                        </div>
                        <div>
                            <Link>Press & Media</Link>
                        </div>
                        <div>
                            <Link>Team</Link>
                        </div>
                        <div>
                            <Link>Careers</Link>
                        </div>
                        <div>
                            <Link>Contact</Link>
                        </div>
                    </div>
                    
                </div>

                <div className="col-3" >
                    <div className={styles.main} >
                    <div className={styles.office}>Indian office address</div>
                    <div> Milaap Social Ventures India Pvt. Ltd.
                        ClayWorks Create - building,11th KM Create Campus,Arakere Bannerghatta Rd,
                        Bangalore, Karnataka, India 560076
                    </div>
                    <div>Supported by</div>
                    <div style={{display:"flex"}} >
                        <div>
                            <img src="https://assets.milaap.org/assets/footer/visa-2f0810494a6cf6b3c56bb2c4f3f8f8eb56aa9a7fef7ce3e09221da38b99ae22e.png" />
                        </div>
                        <div>
                            <img src="https://assets.milaap.org/assets/footer/master_card-5dd6fa0fc948f5eb5d4a826caecf0871781948403df78bb4f95c5ff6020b6130.png" />
                        </div>
                        <div>
                            <img src="https://assets.milaap.org/assets/footer/paytm-e4064c63e5406550c7b8c13346a5bfef0b826ca5b1289e2407d4dcb4622d67e3.png" />
                        </div>
                    </div>
                    
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
