import React, { Component } from 'react';
import { Navbar } from "./Navbar"
import styles from "./Lend.module.css"
// import AppBar from '@material-ui/core/AppBar';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom"
// import FormControlLabel from "@material-ui/core/FormControlLabel"
// import Switch from "@material-ui/core/Switch"
import { Collapse } from 'antd';
import 'antd/dist/antd.css';
import Checkbox from '@material-ui/core/Checkbox';
import { LinearProgress } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SortIcon from '@material-ui/icons/Sort';


function callback(key) {
    console.log(key);
}

class LendPage extends Component {
    render() {
        // const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const { Panel } = Collapse;
        return (
            <div>
                <Navbar />
                <div className={styles.Container}>
                    <h1 style={{ marginTop: "20px" }}>You can help a family fundraise for a better life. Make a loan.</h1>
                    <h3>Select a loan you feel the most for, based on the cause, geography or the fundraising need.</h3>
                    <div className={styles.top}>
                        <h2>Filter By </h2>
                        <h3 style={{ padding: "0.5% 1% 0% 60%" }}>Sort By</h3>
                        <select style={{ padding: "0px 3% 0px 0%" }}>
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
                            <div className={styles.card}>
                                <div style={{ paddingLeft: "10px", paddingRight: "15px" }}>
                                    <img className={styles.img} src="https://images.milaap.org/milaap/image/upload/v1584345617/production/images/loan/a020o000010MT6ZAAW-Enterprisephoto3_1584345615.jpg?crop=faces&format=jpg&height=215&mode=crop&width=320" alt="name" />
                                    <LinearProgress className={styles.bar} variant="determinate" value="20" />
                                    <div className={styles.display}>
                                        <div>
                                            Funded
                                    <p>$28792.89</p>
                                        </div>
                                        <div style={{ paddingLeft: "140px", textAlign: "right" }}>
                                            Still Requires
                                    <p>$286</p>
                                        </div>
                                    </div>
                                    <button className={styles.btn}>Complete the Loan</button>
                                </div>
                                <div>
                                    <Link><h1 className={styles.h1}>Swarnlata Barik & Group</h1></Link>
                                    <div><LocationOnIcon />NUPATNA, Odisa</div>
                                    <div className={styles.purpose}><b>Purpose</b> : to purchase better crop seeds, fertilizers, herbicides, etc. in order to expand her vegetable selling enterprise</div>
                                    <div>Swarnalata (2nd member from left) is a 35-year-old woman from a small village
                                    near Cuttack, Odisha. She has a family of 5 and a monthly household income
                                    of INR 8,300. She is a hardworking woman engaged in farming activities and
                                    selling varieties of vegetables in the market. She produces cauliflower,
                                    cabbage, potato, tomato, brinjal, etc. in her field. She wishes to expand
                                    her little enterprise so that her household income and savings get a boost
                                    and she can contribute more substantially to the household expenses. She
                                 has formed an ... <Link>Read more</Link>
                                    </div>
                                    <AttachMoneyIcon />
                                    <input className={styles.input} type="text"></input>
                                    <button className={styles.btn1}>Lend</button>
                                </div>
                            </div>
                        </div>

                        {/* Card end */}
                    </div>
                </div>
            </div>
        );
    }
}

export default LendPage;