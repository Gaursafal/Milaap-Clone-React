import React from 'react';
import styles from "./Login.module.css"
import {Link} from "react-router-dom"
import { DataContext } from '../../Context/DataContextProvider';
import { Redirect } from "react-router-dom"

export default class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email:"",
            password:"",
            isFound:true
        }
    }
    handleChange  = (e) =>{
        const {name,value} = e.target
        this.setState({
            [name]:value
        })

    }
    handleClick = (e) =>{
        e.preventDefault()
        let { email, password } = this.state;
        let { authenticateUser } = this.context;
        let found = authenticateUser({ email, password });
       
        this.setState({
            isFound:found
        })
    }
    render() {
        let { isAuth, isLoading , error} = this.context;
        let { email, password,isFound } = this.state;
        return isLoading?(
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>  
        )
        :!isAuth?(
             <> 
                <div className = {styles.body}>
                <div className = {styles.container}>
                    <img className={styles.img} src="https://assets.milaap.org/assets/milaap-logo-tiny-e1fe9eb152a9ab7297c3f9a194868904352a9fa2f19781ad8b39e4e18a372264.png" width="50px" alt = "milap"/>
                    <div className={styles.login}>
                        <div className = {styles.top}>Quickly Login Using</div>
                        <div className = {styles.btn}>
                            <button>Facebook</button>
                            <button style = {{backgroundColor : "#dd4b39"}}>Google</button>
                        </div>
                        <div className={styles.seprator}>
                            <div className={styles.middle}> OR </div>
                        </div>
                        <form onSubmit={this.handleClick}>
                            <div className = {styles.logindetails}>
                                
                                <input type="text"  name="email" placeholder="Email ID" value = {email} onChange={this.handleChange} />
                                <input type="text"  name="password" placeholder="Password" value={password} onChange={this.handleChange} />
                                <input className = {styles.loginbtn} type = "submit" value = "Login" ></input>
                                
                            </div>
                            { error && <div style = {{color:"red",textAlign:"center",margin:"5px"}}> wrong password</div> }
                            { !isFound &&  
                                <div style = {{color:"red"}}>user doesnot exists,pls register</div>
                             }  
                        </form>
                        <Link className = {styles.link}>Forget Password ?</Link>
                        <div className = {styles.footer}>
                           <div style = {{marginTop : "10px"}}>New to Milaap?Sign up now, it's quick and free</div>
                            <button className = {styles.signup}><Link to="/reg">Sign up</Link></button>
                        </div>
                    </div>
                </div>
                </div>
              
            </>
        ): (
            <Redirect to="/" />
        );
    }
}

Login.contextType = DataContext