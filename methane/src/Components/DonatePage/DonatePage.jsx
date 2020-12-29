import React, { Component } from "react"
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styles from "./DonatePage.module.css"
import {Link} from "react-router-dom"
import SimpleMenu from "./SimpleMenu";



class DonatePage extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return(
            <React.Fragment>
            <AppBar position="relative" style={{background:"#f8f8f8",color:"#5d5d5d"}}>
              <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                  <Link to="/"><img src="https://assets.milaap.org/assets/milaap-logo-tiny-e1fe9eb152a9ab7297c3f9a194868904352a9fa2f19781ad8b39e4e18a372264.png" alt=""/></Link>
                </Typography>
                <div className={styles.nav}>
                   <Link to="/fundraiser" className={styles.link}>Fundraiser</Link>
                   <Link to="/crowdfunding/fundraisers" className={styles.link}>Donate</Link>
                   <Link to="/lend" className={styles.link}>Lend</Link>
                   <Link to="/stories" className={styles.link}>Success stories</Link>
                   <Link to="/careers" className={styles.link}>Careers</Link>
                   
                </div>
                <div className={styles.logged}>
                    <SimpleMenu  history={this.props.history}/>vikash
                </div>
                
               
              </Toolbar>
            </AppBar>
            <main>
              <div className={styles.heroContent}>
                <Container maxWidth="sm">
                  <Typography variant="h5" align="center" color="textSecondary" paragraph>
                     Thousands are crowdfunding for various causes. Support a fundraiser today!
                  </Typography>
                  <div className={styles.heroButtons}>
                    <Grid container spacing={3} justify="center">
                      <Grid item>
                      <button className={styles.button1}>Start a fundraiser</button>
                      </Grid>
                    </Grid>
                  </div>
                </Container>
              </div>
              <Container className={styles.cardGrid} maxWidth="md">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button type="button" class="btn btn-info" style={{background:"#b91141",width:"40px"}}>
                        <span className="glyphicon glyphicon-search"></span>
                        <i className="fas fa-search" aria-hidden="true"></i> 
                    </button>
                    <div  style={{border:"1px solid #e9e9e9",width:"400px",marginLeft:"50px"}}>

                    </div>
                </div>
                
                             
                <Grid container spacing={4}>
                  {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                      <Card className={styles.card}>
                          <div className={styles.CardMedia}>
                          <img src="https://images.milaap.org/milaap/image/upload/v1608709581/production/images/campaign/239753/WhatsApp_Image_2020-12-23_at_13.13.28_1_ynwyi9_1608709584.jpg?crop=faces&format=jpg&height=198&mode=crop&width=264" alt=""/>
                          </div>
                         
                        <CardContent className={styles.cardContent}>
                          <Typography gutterBottom variant="h5" component="h2">
                            $517,345
                          </Typography>
                          <div class="progress">
                            <div class="progress-bar bg-danger" role="progressbar" style={{width: "90%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <Typography style={{ textAlign:"start",fontSize:"12px",letterSpacing:"normal",lineheight:"20px",color:"#5d5d5d",marginTop:"15px",marginBottom:"5px"}} >
                            Support Praveen Kumar To Run We Save Animals (WSA) Welfare Trust
                          </Typography> 
                        </CardContent>
                        <hr style={{width:"90%",marginLeft:"12px"}} />
    
                        <div style={{textAlign:"center"}}>
                            <strong>By</strong> vikash kumar
                        </div>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </main>
            {/* Footer */}
            <footer className={styles.footer}>
              <Typography variant="h6" align="center" gutterBottom>
                Footer
              </Typography>
              <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
               Footer
              </Typography>
            </footer>
            {/* End footer */}
          </React.Fragment>
        )
    }
}

export {DonatePage}