import React from 'react';
import styles from "./Login.module.css"
import {Link} from "react-router-dom"

export default class Login extends React.Component {
    render() {
        return (
            <>
                <div className = {styles.body}>
                <div className = {styles.container}>
                    <img className={styles.img} src="/milap.png" alt = "milap"/>
                    <div className={styles.login}>
                        <div className = {styles.top}>Quickly Login Using</div>
                        <div className = {styles.btn}>
                            <button>Facebook</button>
                            <button style = {{backgroundColor : "#dd4b39"}}>Google</button>
                        </div>
                        <div className={styles.seprator}>
                            <div className={styles.middle}> OR </div>
                        </div>
                        <div className = {styles.logindetails}>
                            <input type="text"  name="email" placeholder="Mobile number / Email ID" onChange={this.handleChange} />
                            <input type="text"  name="password" placeholder="Password / OTP" onChange={this.handleChange} />
                            <input className = {styles.loginbtn} type = "button" value = "Login" onClick={this.handleClick}></input>
                        </div>
                        <Link className = {styles.link}>Forget Password ?</Link>
                        <div className = {styles.footer}>
                           <div style = {{marginTop : "10px"}}>New to Milaap?Sign up now, it's quick and free</div>
                            <button className = {styles.signup}>Sign up</button>
                        </div>
                    </div>
                </div>
                </div>
            </>
        )
    }
}