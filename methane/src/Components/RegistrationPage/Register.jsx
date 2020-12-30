import React from 'react';
import styles from "./Register.module.css"

export default class Register extends React.Component {
    render() {
        return (
            <>
            <div className = {styles.body}>
                <div className = {styles.container}>
                    <img className={styles.img} src="/milap.png" alt = "milap" />
                    <div className={styles.login}>
                        <div className = {styles.top}>Sign up & manage fundraisers, donations &
                        <div>more</div>
                        </div>
                        <div className = {styles.logindetails}>
                            <input type="text"  name="name" placeholder="Full name" onChange={this.handleChange} /> 
                            <input type="text"  name="email" placeholder="Email" onChange={this.handleChange} />
                            <input type="text"  name="password" placeholder="Password" onChange={this.handleChange} />
                            <input className = {styles.loginbtn} type = "button" value = "Sign up" onClick={this.handleClick}></input>
                        </div>
                        <div className = {styles.footer}>
                           <div style = {{marginTop : "10px"}}>Already signed up with Milaap?</div>
                            <button className = {styles.signup}>Login</button>
                        </div>
                    </div>
                </div>
                </div>
            </>
        )
    }
}
