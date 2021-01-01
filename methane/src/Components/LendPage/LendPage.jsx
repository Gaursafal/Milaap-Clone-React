import React, { Component } from 'react';
import styles from "./Lend.module.css"
import { Link } from "react-router-dom"
import { Collapse } from 'antd';
import 'antd/dist/antd.css';
import Checkbox from '@material-ui/core/Checkbox';
import { LinearProgress } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SortIcon from '@material-ui/icons/Sort';
import { DataContext } from '../../Context/DataContextProvider';


function callback(key) {
    console.log(key);
}

class LendPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            lendData :[],
            lendInput:2500.00
        }
    }
    componentDidMount(){
        const {getLendData} = this.context
        getLendData()
    }
    
    handleChange =(e)=>{
        const {name,value} = e.target
        this.setState({
            [name]:value
        })
    }

    handleLend =()=>{
        console.log("lend")
    }

    completeLoan = (id) =>{
        console.log(id,"complete")
        const {addToCart} = this.context
         addToCart(id)
        
    
    }

    render() {
        const {lendData} = this.context
        //console.log(cartArray)
        const {lendInput} = this.state
        const { Panel } = Collapse;
        return (
            <div>
                <div className={styles.Container}>
                    <p style={{ color:"#5d5d5d",marginTop: "20px", fontSize:"30px",lineHeight:"40.2px", textAlign:"start",letterSpacing:"normal" }}>You can help a family fundraise for a better life. Make a loan.</p>
                    <h3 style={{color:"#999999",fontSize:"18px",lineHeight:"24.2px", textAlign:"start",letterSpacing:"normal"}}>Select a loan you feel the most for, based on the cause, geography or the fundraising need.</h3>
                    <div className={styles.top}>
                        <p>Filter By </p>
                        <h3 style={{ padding: "0.5% 1% 0% 60%" }}>Sort By</h3>
                        <select >
                            <option>Popularity</option>
                            <option>Expirey</option>
                            <option>Pending Amount</option>
                            <option>Recent</option>
                            <option>Interest Rate</option>
                        </select>
                        <button style={{ backgroundColor: "white" }}><SortIcon /></button>
                    </div>

                    {/* Filter By Component start */}
                    <div className={styles.display}>
                        <Collapse defaultActiveKey={['1']} onChange={callback} className={styles.collapse}>
                            <Panel header="Cause" key="1">
                                <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} />
                                {<Link>Enterprise Development</Link>}
                            </Panel>

                            <Panel header="State" key="2">
                                <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} />
                                {<Link>Madhya Pradesh</Link>}
                                <div> <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} />
                                    {<Link>Odisa</Link>}</div>
                            </Panel>

                            <Panel header="Repayment" key="3">
                                <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} />
                                {<Link>12 months or less</Link>}
                                <div>
                                    <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} />
                                    {<Link>13 to 17 months</Link>}
                                </div>
                                <div>
                                    <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} />
                                    {<Link>18 to 23 months</Link>}
                                </div>
                                <div>
                                    <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} />
                                    {<Link>24 months and more</Link>}
                                </div>
                            </Panel>

                            <Panel header="Gender" key="4">
                                <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} />
                                {<Link>Male</Link>}
                                <div>
                                    <Checkbox value="checkedA" inputProps={{ 'aria-label': 'Checkbox A' }} />
                                    {<Link>Female</Link>}
                                </div>
                            </Panel>
                        </Collapse>
                        {/* Filter By Component end */}


                        {/* Card Start */}
                        <div>
                            {
                                lendData?.map((item)=>{
                                        return(
                                            <div key={item.fund_id} className={styles.card}>
                            
                                            <div style={{ paddingLeft: "10px", paddingRight: "15px" }}>
                                                <img className={styles.img} src={item.img} alt="name" />
                                                <LinearProgress className={styles.bar} variant="determinate" value="20" />
                                                <div className={styles.display}>
                                                    <div>
                                                         Funded
                                                        <p>Rs.{item.raised}</p>
                                                    </div>
                                                    <div style={{ paddingLeft: "120px", textAlign: "right" }}>
                                                        Still Requires
                                                        <p>{item.goal-item.raised}</p>
                                                    </div>
                                                </div>
                                                <button onClick = {()=>this.completeLoan(item.lend_id)} className={styles.btn}>Complete the Loan</button>
                                            </div>
                                            <div>
                                                <Link to="" style={{textDecoration:"red",borderBottomColor:"red"}}><h1 className={styles.h1}>Swarnlata Barik & Group</h1></Link>
                                                <div><LocationOnIcon />NUPATNA, Odisa</div>
                                                <div className={styles.purpose}><b>Purpose</b> : to purchase better crop seeds, fertilizers, herbicides, etc. in order to expand her vegetable selling enterprise</div>
                                                <div className={styles.desc}>{item.story}
                                                ... <Link>Read more</Link>
                                                </div>
                                                <AttachMoneyIcon />
                                                <input className={styles.input} name = "lend" value={lendInput} type="text" onChange={this.handleChange}></input>
                                                <button className={styles.btn1} onClick={this.handleLend}>Lend</button>
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                            
                        </div>

                        {/* Card end */}
                    </div>
                </div>
            </div>
        );
    }
}

LendPage.contextType = DataContext
export default LendPage;