import React, { Component } from 'react';
import styles from "./Success.module.css"
import SearchIcon from '@material-ui/icons/Search';

class SuccessStory extends Component {
    render() {
        return (
            <div>
                
                <h1 className = {styles.h1}>Stories Of Crowdfunding</h1>
                <h2 className = {styles.h1}>Read inspiring stories of crowdfunding from across India</h2>
                <input className = {styles.input} type = "text" placeholder = "Search ny name, title, location, cause or fundraiser"></input>
                <button className = {styles.btn}><SearchIcon/></button>
                <div className = {styles.display}>

                     {/* Card1 Start */}
                    <div className = {styles.card1}>
                        <h2>Stories that you need help</h2>
                        <div style = {{border : "0.1px solid rgb(160, 156, 156)"}}></div>
                        <div className = {styles.display1}>
                            <img src = "https://images.milaap.org/milaap/image/upload/v1609404351/production/entity_details/milaap_page/11025/YP1A7355_blrzh7_1609399376.jpg_fl4zvt_1609404359.jpg?crop=faces&format=jpg&height=128&mode=crop&width=170" alt = "img"/>
                            <div className = {styles.font}>
                                After An Unfortunate Road Accident, This 4-Year-Old Struggles To Survive In...
                                <p className = {styles.p}>Medical</p>
                            </div>
                        </div>

                        <div className = {styles.display1}>
                            <img src = "https://images.milaap.org/milaap/image/upload/v1609333400/production/entity_details/milaap_page/11023/3O9A8881_bsb8yz_1609235622.jpg_rkjbam_1609333444.jpg?crop=faces&format=jpg&height=128&mode=crop&width=170" alt = "img"/>
                            <div className = {styles.font}>
                            Just A Week Before His Birthday, This 10 Year Old Was Diagnosed With Cancer
                                <p className = {styles.p}>Medical</p>
                            </div>
                        </div>

                        <div className = {styles.display1}>
                            <img src = "https://images.milaap.org/milaap/image/upload/v1609326813/production/entity_details/milaap_page/11022/DSC_0069_fqab95_1608876471.jpg_u0z8rh_1609160376_1609326812.jpg?crop=faces&format=jpg&height=128&mode=crop&width=170" alt = "img"/>
                            <div className = {styles.font}>
                            6-Month-Old Baby Struggles To Take His Every Breath, Only A Surgery Can...
                                <p className = {styles.p}>Medical</p>
                            </div>
                        </div>

                        <div className = {styles.display1}>
                            <img src = "https://images.milaap.org/milaap/image/upload/v1609302129/production/entity_details/milaap_page/11021/IMG_7334_ritqgn_1603370772.jpg_lqez4y_1603452379_1609302127.jpg?crop=faces&format=jpg&height=128&mode=crop&width=170" alt = "img"/>
                            <div className = {styles.font}>
                            This Father Is Struggling To Save His 9-Year-Old, Her Liver Has Failed...
                                <p className = {styles.p}>Medical</p>
                            </div>
                        </div>

                        <div className = {styles.display1}>
                            <img src = "https://images.milaap.org/milaap/image/upload/v1609160133/production/entity_details/milaap_page/11017/DSC_0069_fqab95_1608876471.jpg_u0z8rh_1609160376.jpg?crop=faces&format=jpg&height=128&mode=crop&width=170" alt = "img"/>
                            <div className = {styles.font}>
                            6-Month-Old Baby Struggles To Take His Every Breath, Only A Surgery Can...
                                <p className = {styles.p}>Medical</p>
                            </div>
                        </div>

                        <div className = {styles.display1}>
                            <img src = "https://images.milaap.org/milaap/image/upload/v1608811642/production/entity_details/milaap_page/11016/4S2A2105_dc3rnt_1608812570.jpg?crop=faces&format=jpg&height=128&mode=crop&width=170" alt = "img"/>
                            <div className = {styles.font}>
                            After Her Husband Left Her, She’s Fighting Alone To Save Her Son From Cancer
                                <p className = {styles.p}>Medical</p>
                            </div>
                        </div>

                        <div className = {styles.display1}>
                            <img src = "https://images.milaap.org/milaap/image/upload/v1608729130/production/entity_details/milaap_page/11015/YP1A5125_pkwbvr_1608557145_rzck41_1608729166.jpg?crop=faces&format=jpg&height=128&mode=crop&width=170" alt = "img"/>
                            <div className = {styles.font}>
                            5 Year Old Zoya Scratches Till It Bleeds, She Needs Urgent Transplant To...
                                <p className = {styles.p}>Medical</p>
                            </div>
                        </div>

                        <div className = {styles.display1}>
                            <img src = "https://images.milaap.org/milaap/image/upload/v1608724386/production/entity_details/milaap_page/11014/IMG_8650_zrcc30_1608636328_1608724382.jpg?crop=faces&format=jpg&height=128&mode=crop&width=170" alt = "img"/>
                            <div className = {styles.font}>
                            This Baby Is Battling Death A 2nd Time, His Desperate Dad Only Has 7 Days...
                                <p className = {styles.p}>Medical</p>
                            </div>
                        </div>

                        <div className = {styles.display1}>
                            <img src = "https://images.milaap.org/milaap/image/upload/v1608709292/production/entity_details/milaap_page/11013/DSC_1430_1_2_rzanhm_1608709569.jpg?crop=faces&format=jpg&height=128&mode=crop&width=170" alt = "img"/>
                            <div className = {styles.font}>
                            This Driver Will Lose His Son To A Dangerous Disease If He Can’t Afford The...
                                <p className = {styles.p}>Medical</p>
                            </div>
                        </div>
                    </div>

                    {/* Card1 End */}


                    {/* Card2 Start */}
                    <div className = {styles.card2}>
                        <h2>Trending Stories</h2>
                        <div style = {{border : "0.1px solid  rgb(160, 156, 156)"}}></div>
                        <div className = {styles.display2}>
                            <img src = "https://images.milaap.org/milaap/image/upload/v1548385632/production/entity_details/milaap_page/6192/cancer-389921_1280_pago94_1548385733.jpg?crop=faces&format=jpg&height=250&mode=crop&width=370" alt = "img"/>
                            <div className = {styles.font1}>6 Ways The Indian Government Helps You Pay For Your Cancer Treatment</div>
                        </div>
                        <div className = {styles.display2}>
                            <img src = "https://images.milaap.org/milaap/image/upload/v1548227415/production/entity_details/milaap_page/6171/baby-baby-feet-bed-733881_bvdi3e_1548227723.jpg?crop=faces&format=jpg&height=250&mode=crop&width=370" alt = "img"/>
                            <div className = {styles.font1}>These 5 Tests During Pregnancy Under Rs. 50,000 Can Save Your Child From...</div>
                        </div>
                        <div className = {styles.display2}>
                            <img src = "https://images.milaap.org/milaap/image/upload/v1548227017/production/entity_details/milaap_page/6169/business-care-clinic-1282308_fngsef_1548227057.jpg?crop=faces&format=jpg&height=250&mode=crop&width=370" alt = "img"/>
                            <div className = {styles.font1}>What Your Health Insurance Does Not Cover And How To Finance For It</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SuccessStory;