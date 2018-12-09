import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

import Rules from '../Dashboard/Content/Components/Rules'



import colors from '../Styling/styles';

class RegisterFromInvite extends Component {

    constructor(props) {
        super();

        this.state = {
            competitionID:  '',
            competition: null,
    
        }    
    }

    componentDidMount(){
        let self = this
        axios.post('http://localhost:3001/limitedCompData', {
            competitionId: this.props.match.params.id,
        })
        .then(function (response) {
            if (response.data.status === 'failed') {
                self.setState({
                    // this should only be hit if user messes with token 
                    errorMsg: "Something went very wrong.  Signout and signback in.",  
                })
            }else{
                self.setState({ 
                    competition: response.data
                })
            }
        })
    }



    render() {
        return (
            
            <div className={css(styles.RegisterSection)}>
                {(this.state.competition) ?
                    <div>
                        <div>
                            <div className={css(styles.imageContainer)}>
                                <img className={css(styles.image)} src='https://res.cloudinary.com/dfebwzrhb/image/upload/v1542039803/OnYourWay.png' alt='Focus on Results'/>
                            </div>
                        </div>

                        <p className={css(styles.title)}>Join the {this.state.competition.CompetitionName}</p>

                        <form className='formBody' action={"http://localhost:3001/registerfrominvite/"+this.props.match.params.id} method="post">
                            <p className={css(styles.text)}>Name</p><input className={css(styles.input)} type="text" name="name"></input><br/><br/>
                            <p className={css(styles.text)}>Email</p><input className={css(styles.input)} type="text" name="email"></input><br/><br/>
                            <p className={css(styles.text)}>Password</p><input className={css(styles.input)} type="password" name="password"></input><br/><br/>
                            <p className={css(styles.text)}>Confirm Password</p><input className={css(styles.input)} type="password" name="confirm password"></input><br/><br/>
                            <input type="hidden" value={this.props.match.params.id} name="comp_id" />
                            {console.log(this.props.match.params.id)}
                            <input className={css(styles.submit)} type="submit" value="Submit"></input>
                        </form>

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <Container fluid style={{ padding: 0, margin: 0 }}>
                            <Row style={{ padding: 0, margin: 0 }}>
                                <Col sm={{ size: 12, offset: 0 }} 
                                    md={{ size: 10, offset: 1 }}
                                    lg={{ size: 8, offset: 3 }}>
                                    <Rules competitionData={this.state.competition}/>
                                </Col>
                            </Row>
                        </Container>
                        

                    </div>
                : null }
            </div>
            
        );
    }
}

export default RegisterFromInvite;

const styles = StyleSheet.create({
    RegisterSection: {

        '@media only screen and (max-width:480px)': {
            backgroundColor: colors.white ,
            margin: 'auto',
            paddingBottom: '10vh',
            'background-size': 'cover',

        },

        '@media only screen and (min-width:481px) and (max-width:768px)': {
            backgroundColor: colors.white ,
            margin: 'auto',
            padding: '5vh',
            paddingBottom: '10vh',
            'background-size': 'cover',
        },

        '@media only screen and (min-width:769px)': {
            backgroundColor: colors.white ,
            margin: 'auto',
            padding: '5vh',
            paddingBottom: '10vh',
            'background-size': 'cover',
        },
    },
    
    title: {
        'font-family': 'Patrick Hand',
        fontSize: '32px',
        color: colors.graphicsBlue,
        textAlign: 'center',
        textDecoration: 'none',
        paddingBottom: '25px'
    },

    text: {
        '@media only screen and (max-width:480px)': {
            'width': '45%',
            'font-family': 'Patrick Hand',
            fontSize: '16px',
            float: 'left',
            'margin-left': '0%', 
            textAlign: 'right',
            paddingRight: '10px',
        },

        '@media only screen and (min-width:481px) and (max-width:768px)': {
            'width': '45%',
            'font-family': 'Patrick Hand',
            fontSize: '20px',
            float: 'left',
            'margin-left': '0%', 
            textAlign: 'right',
            paddingRight: '10px',
        },

        '@media only screen and (min-width:769px)': {
            'width': '20%',
            'font-family': 'Patrick Hand',
            fontSize: '20px',
            float: 'left',
            'margin-left': '15%', 
            textAlign: 'right',
            paddingRight: '20px',
        },
        
        '@media only screen and (min-width:1000px)': {
            'width': '20%',
            'font-family': 'Patrick Hand',
            fontSize: '20px',
            float: 'left',
            'margin-left': '22.5%', 
            textAlign: 'right',
            paddingRight: '20px',
        },

        
    },

    input: {
        '@media only screen and (max-width:480px)': {
            'width': '30%',
            float: 'left',
            'margin-right': '0%',
        },

        '@media only screen and (min-width:481px) and (max-width:768px)': {
            'width': '30%',
            float: 'left',
            'margin-right': '0%',
        },

        '@media only screen and (min-width:769px) and (max-width:1000px)': {
            'width': '40%',
            float: 'left',
            'margin-right': '25%',
        },
        '@media only screen and (min-width:1000px)': {
            'width': '20%',
            float: 'left',
            'margin-right': '0%',
        },
        
    },

    submit: {
        '@media only screen and (max-width:480px)': {
            'width': '30%',
            'margin-left': '40%',
        },

        '@media only screen and (min-width:481px) and (max-width:768px)': {
            'width': '30%',
            'margin-left': '40%',
        },

        '@media only screen and (min-width:769px) and (max-width:1000px)': {
            'width': '10%',
            'margin-left': '45%',
        },
        '@media only screen and (min-width:1000px)': {
            'width': '10%',
            'margin-left': '45%',
        },

        'font-family': 'Patrick Hand',
        float: 'left',
        cursor: 'pointer'
    },

    image: {
        height: '40vh',
        textAlign: 'center',
        margin: 'auto',
    },

    imageContainer: {
        paddingBottom: '50px',
    },

    formBody: {
        margin: '40px',
        paddingBottom: '50px'
    }

});