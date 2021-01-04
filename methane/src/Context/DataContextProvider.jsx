import React, { Component } from "react";
import axios from "axios";
import {v4 as uuid} from "uuid"
export const DataContext = React.createContext();

class DataContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      isLoading: false,
      error: false,
      loggedUserData: null,
      fundData: [],
      userData: null,
      lendData: [],
      cartArray: [],
    };
  }

  authenticateUser = (data) => {
    console.log(data);
    this.setState({
      isLoading: true,
    });
    let { email, password } = data;
    let { usersData } = this.state;
    let auth = false;

    for (let i = 0; i < usersData.length; i++) {
      if (usersData[i].email === email && usersData[i].password === password) {
        console.log("looged");
        this.setState({
          isAuth: true,
          isLoading: false,
          loggedUserData: usersData[i],
        });
        auth = true;
        break;
      } else {
        if (
          usersData[i].email === email &&
          usersData[i].password !== password
        ) {
          this.setState({
            error: true,
          });
          auth = true;
          break;
        }
      }
    }
    return auth;
  };

  componentDidMount() {
    this.setState({
      isLoading: false,
    });

    axios
      .get("https://json-server-milaap.herokuapp.com/users")

      .then((res) => {
        this.setState({
          usersData: res.data,
          isLoading: false,
        });
      })

      .catch(() =>
        this.setState({
          error: true,
          isLoading: false,
        })
      );
  }

  //Donate page data
  getDonateData = () => {
    this.setState({
      isLoading: true,
    });
    axios({
      url: "https://json-server-milaap.herokuapp.com/fundraise",
    })
      .then((res) => {
        this.setState({
          isLoading: false,
          fundData: res.data,
        });
      })
      .then(() => {
        this.setState({
          error: true,
        });
      });
  };

  getDonateId = (id) => {
    const { fundData } = this.state;
    const newData = fundData.find((item) => item.support_name === id);
    return newData;
  };

  getLendData = () => {
    this.setState({
      isLoading: true,
    });
    axios({
      url: "https://json-server-milaap.herokuapp.com/fundDetails",
    })
      .then((res) => {
        this.setState({
          isLoading: false,
          lendData: res.data,
        });
      })
      .then(() => {
        this.setState({
          error: true,
        });
      });
  };
  handleLogOut = () => {
    this.setState({
      isAuth: false,
    });
  };

  addToCart = (id) => {
    const { lendData } = this.state;
    //console.log(lendData)
    const { cartArray } = this.state;
    const newData = lendData.find((item) => item.lend_id === id);
    //console.log(newData)
    this.setState({
      cartArray: [...cartArray, newData],
    });
  };
  
  createFundData=({full_name,gender,age,story,title,goal})=>{
        console.log(full_name,gender,age,story,title,goal)
       
        
        this.setState({
            isLoading: true,
        });

        axios
            .post("http://localhost:3004/fundraise",{
                    name:full_name,
                    support_name: "Education purpose",
                    gender,
                    title,
                    shares: 0,
                    story,
                    supporters: 0,
                    raised:0,
                    goal,
                    img:"https://images.milaap.org/milaap/image/upload/v1608366275/production/images/campaign/238861/cover_photo_m2qbmz_1608366641.jpg?crop=faces&enhance=true&format=jpg&height=452&mode=crop&width=603"
                
            })
            .then((res) => {
                this.setState({
                    isLoading: false,
                    error: false,
                });
              
            })
            .catch((err) => {
                this.setState({
                    error: true,
                    isLoading: false,
                });
            });
   }
//    {
//     fund_id,
//     name:full_name,
//     support_name: "Education purpose",
//     gender,
//     title,
//     shares: 0,
//     story,
//     supporters: 0,
//     raised:0,
//     goal,
//     img:"https://images.milaap.org/milaap/image/upload/v1608366275/production/images/campaign/238861/cover_photo_m2qbmz_1608366641.jpg?crop=faces&enhance=true&format=jpg&height=452&mode=crop&width=603"
// }
  render() {
    const {
      isAuth,
      isLoading,
      error,
      fundData,
      loggedUserData,
      usersData,
      lendData,
      cartArray,
    } = this.state;
    // console.log(usersData,loggedUserData,lendData)
    const {
      authenticateUser,
      getDonateData,
      getDonateId,
      getLendData,
      handleLogOut,
      addToCart,
      createFundData
    } = this;
    const value = {
      authenticateUser,
      getDonateData,
      getDonateId,
      getLendData,
      handleLogOut,
      addToCart,
      createFundData,
      isAuth,
      isLoading,
      error,
      fundData,
      loggedUserData,
      usersData,
      lendData,
      cartArray,
    };
    
    return (
      <DataContext.Provider value={value}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export { DataContextProvider };
