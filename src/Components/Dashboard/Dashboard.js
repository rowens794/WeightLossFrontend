import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

import { MyContext } from '../ContextProvider/ContextProvider';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

class Dashboard extends Component {
    constructor(props) {
        super();

        this.state = {
            userName: 'Waiting for Server',
            errorMsg: null,
            competitions: [],
        }
    }

    render() {
        
        return (
            <MyContext.Consumer>
                {(context) => (
                    
                    (context.state.loggedIn)
                        ?   
                        <Container fluid style={{ padding: 0, margin: 0 }}>
                            <Row style={{ padding: 0, margin: 0 }}>
                                <Col 
                                    style={{ padding: 0, margin: 0, marginBottom: -0 }}
                                    sm={{ size: 4, offset: 0 }} 
                                    md={{ size: 3, offset: 0 }}
                                    lg={{ size: 2, offset: 0 }}>
                                    <Sidebar userInfo={this.state}/>
                                </Col>

                                <Col 
                                    style={{ padding: 0, margin: 0, marginBottom: -0 }}
                                    sm={{ size: 8, offset: 0 }} 
                                    md={{ size: 9, offset: 0 }}
                                    lg={{ size: 10, offset: 0 }}>
                                    <Content />
                                </Col>
                            </Row>
                        </ Container>
                
                        : <Redirect to="/"/>

                )}
            </MyContext.Consumer>
        );
    }

    async componentDidMount(){
        const self = this;  //'this' loses context in axios function ... set to var 'self'

        axios.post('http://localhost:3001/userData', {
            token: localStorage.getItem('userToken'),  //fetch the JWT from local storage
        })
        .then(function (response) {
            if (response.data.status === 'failed') {
                self.setState({
                    // this should only be hit if user messes with token 
                    errorMsg: "Something went very wrong.  Signout and signback in.",  
                })
            }else{
                self.setState({ 
                    userName: response.data.name,
                })
            }
            
        })
        .catch(function (error) {
            self.setState({
                // this should only be hit if there is a server error 
                errorMsg: "Something went very wrong.  Signout and signback in.",
            });
        });


        
        axios.post('http://localhost:3001/userCompData', {
            token: localStorage.getItem('userToken'),  //fetch the JWT from local storage
            compID: 234134 //don't know how to populate this yet
        })
        .then(function (response) {
            if (response.data.status === 'failed') {
                self.setState({
                    // this should only be hit if user messes with token 
                    errorMsg: "Something went very wrong.  Signout and signback in.",  
                })
            }else{
                console.log("****************")
                console.log(response.data)
                console.log("****************")
                self.setState({ 
                    userName: response.data.name,
                })
            }
            
        })
        .catch(function (error) {
            self.setState({
                // this should only be hit if there is a server error 
                errorMsg: "Something went very wrong.  Signout and signback in.",
            });
        });
    }
}



export default Dashboard;
