import React, { Component } from 'react';
import { DataContext } from '../../Context/DataContextProvider';
//import '../../App.css'
import styles from './StartFundraiser.module.css'
import {v4 as uuid} from "uuid"

class StartFundraiser extends Component {
    constructor(props){
        super(props)
        this.state = {
            full_name:"",
            gender:"",
            age:"",
            story:"",
            title:"",
            goal:""
        }
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({
            [name]:value
        })
    }
    
    handleData =(e) =>{
        e.preventDefault()
        const {full_name,gender,age,story,title,goal} = this.state;
        const {createFundData} = this.context
        let fund_id = uuid()
        console.log(fund_id)
        createFundData({fund_id,full_name,gender,age,story,title,goal})
    }


    render() {
        const {full_name,gender,age,story,title,goal} = this.state
        return (
        <div style={{margin:" 100px auto"}}>
            <h1 className={styles.beneficiary} >Beneficiary details</h1>
            <div>
                <form className={styles.form} onSubmit={this.handleData} >
                    <div>
                        The fund raiser will benefit
                        <select className="form-select">
                            <option value="" ></option>
                            <option>myself</option>
                            <option>myfamily</option>
                            <option>myfriends</option>
                            <option>Others</option>
                        </select>
                    </div>
                    <div>
                        I am
                        <input type="text" placeholder="name" className="form-control" className="form-control" name="full_name" value={full_name} onChange={this.handleChange}/>
                        <input type="text" placeholder="age" className="form-control" name="age" value={age} onChange={this.handleChange} />
                        <select className="form-select" name="gender" value={gender} onChange={this.handleChange}>
                            <option>gender</option>
                            <option>male</option>
                            <option>female</option>
                            <option>others</option>
                        </select>
                    </div>
                    <div>
                        <div>
                            I am raising funds for an 
                            <select className="form-select" >
                                <option>medical</option>
                                <option>memorial</option>
                                <option>education</option>
                                <option>others</option>
                            </select>
                            cause
                        </div>
                        <div>
                            <div>I want to raise
                                <input type="text" placeholder="goal amount" className="form-control" name ="goal" value={goal} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div>
                            <input placeholder="enter title" className="form-control" name ="title" value={title} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <input placeholder="enter description" className="form-control" name ="story" value={story} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <input type="submit" value="add a fund" className={styles.btn} />
                </form>
            </div>
        </div>
        );
    }
}


StartFundraiser.contextType = DataContext
export default StartFundraiser
