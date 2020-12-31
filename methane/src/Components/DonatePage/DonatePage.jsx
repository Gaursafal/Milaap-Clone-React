import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import styles from "./DonatePage.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../../Context/DataContextProvider";

class DonatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fundData: [],
    };
  }

  componentDidMount() {
    const { getDonateData } = this.context;
    getDonateData();
  }

  render() {
    //console.log(this.context.fundData)
    const { fundData } = this.context;
    return (
      <React.Fragment>
        <main>
          <div className={styles.heroContent}>
            <Container maxWidth="sm">
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Thousands are crowdfunding for various causes. Support a
                fundraiser today!
              </Typography>
              <div className={styles.heroButtons}>
                <Grid container spacing={3} justify="center">
                  <Grid item>
                    <button className={styles.button1}>
                      Start a fundraiser
                    </button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={styles.cardGrid} maxWidth="md">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder=""
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                type="button"
                class="btn btn-info"
                style={{ background: "#b91141", width: "40px" }}
              >
                <span className="glyphicon glyphicon-search"></span>
                <i className="fas fa-search" aria-hidden="true"></i>
              </button>
              <div
                style={{
                  border: "1px solid #e9e9e9",
                  width: "400px",
                  marginLeft: "50px",
                }}
              ></div>
            </div>

            <Grid container spacing={4}>
              {fundData?.map((item) => {
                const per = (item.raised/item.goal)*100
                return(
                
                <Grid item key={item.fund_id} xs={12} sm={6} md={4}>
                  <Link  style = {{textDecoration:"none"}} to={`/fundraisers/${item.support_name}`}>
                  <Card className={styles.card}>
                    <div className={styles.CardMedia}>
                      <img height="220px" src={item.img[0]} alt="" />
                    </div>

                    <CardContent className={styles.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Rs.{item.raised}
                      </Typography>
                      <div class="progress">
                        <div
                          class="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: per }}
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <Typography
                        style={{
                          textAlign: "start",
                          fontSize: "12px",
                          letterSpacing: "normal",
                          lineheight: "20px",
                          color: "#5d5d5d",
                          marginTop: "15px",
                          marginBottom: "5px",
                        }}
                      >
                       {item.title}
                      </Typography>
                    </CardContent>
                    <hr style={{ width: "90%", marginLeft: "12px" }} />

                    <div style={{ textAlign: "center" }}>
                      <strong>By</strong> vikash kumar
                    </div>
                  </Card>
                  </Link>
                </Grid>
            
              )})}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <footer className={styles.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Footer
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

DonatePage.contextType = DataContext;
export { DonatePage };
