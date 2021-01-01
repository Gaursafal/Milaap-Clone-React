import React, { Component } from 'react';
import styles from './Pricing.module.css'
import { Collapse } from 'antd';
import 'antd/dist/antd.css';

function callback(key) {
    console.log(key);
  }

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const text1 = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class Pricing extends Component {
    constructor(props){
        super(props)

    }

    
    render() {
        const { Panel } = Collapse;
        



        return (
        <div>
            <div className={styles.background} >
                <div className={styles.innerdiv} >
                    <p> Free Fundraising For All </p>
                    <p>0% platform fees for funds raised on Milaap </p>
                </div>
                
                <div className={styles.innerbg} >
                    <button type="button"  className={styles.mybtn}>Start a fundraiser - it's FREE</button>
                </div>
            </div>
                <div>
                    <div>
                    <p>Fundraiser Goal Estimator</p>
                    <p>Check detailed breakup & plan how much you would like to raise</p>
                    <p>I want to raise about</p>
                    </div>
                    <div></div>
                    <div></div>
                    <div className={styles.btndiv} >
                        <button className={styles.btn} >Estimate goal</button>
                    </div>
                    
                </div>
                <div>
                    <p>Related FAQs</p>
                    <div>
                    






  <Collapse defaultActiveKey={['1']} onChange={callback}>
    <Panel header="This is panel header 1" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text1}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>










                    </div>
                </div>
            
        </div>
        );
    }
}

export default Pricing