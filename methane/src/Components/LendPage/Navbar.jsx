import React, { Component } from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
import 'antd/dist/antd.css';

class Navbar extends Component {
    render() {
            return (
            <React.Fragment>

                {/* Navbar Start */}
                <AppBar position="relative" style={{ background: "#f8f8f8", color: "#5d5d5d" }}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            <Link to="/"><img src="https://assets.milaap.org/assets/milaap-logo-tiny-e1fe9eb152a9ab7297c3f9a194868904352a9fa2f19781ad8b39e4e18a372264.png" alt="" /></Link>
                        </Typography>
                        <div className={styles.nav}>
                            <Link to="/fundraiser" className={styles.link}>Fundraiser</Link>
                            <Link to="/crowdfunding/fundraisers" className={styles.link}>Donate</Link>
                            <Link to="/lend" className={styles.link}>Lend</Link>
                            <Link to="/stories" className={styles.link}>Success stories</Link>
                            <Link to="/careers" className={styles.link}>Careers</Link>
                            <FormControlLabel style={{ paddingLeft: "20px" }}
                                control={<Switch color="primary" value="dynamic-class-name" />} />
                        </div>
                    </Toolbar>
                </AppBar>
              {/* Navbar end */}
            </React.Fragment>
        )
    }
}

export { Navbar }