import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import colors from '../Styling/styles';

class LoginModal extends Component {

    render() {

        let handleClick = () => { 
            this.props.handleClose()
            this.props.handleFPOpen()
        }

        return (
            <div style={this.props.show ? {} : { display: 'none' }}>
                <div className={css(styles.background)}>
                    <button className={css(styles.x)} onClick={this.props.handleClose}>X</button><br/>
                    <h3 className={css(styles.title)}>Login</h3>
                    <br/>
                    <form>
                        <p className={css(styles.text)}>email</p><input className={css(styles.input)} type="text" name="email"></input><br/><br/>
                        <p className={css(styles.text)}>password</p><input className={css(styles.input)} type="password" name="password"></input><br/><br/>
                        <input className={css(styles.submit)} type="submit" value="Submit"></input>
                    </form>
                    <br/>
                    <br/>
                    <p>Don't yet have an account?  Sign up <span className={css(styles.link)}>HERE</span> it's free!</p>
                    <span className={css(styles.link)} onClick={handleClick}>forgot password</span><br/><br/>
                </div>
            </div>
        );
    }
}

export default LoginModal;


const styles = StyleSheet.create({
    title: {
        'margin-top': '20px',
    },

    x: {
        float: 'right',
        'margin-right': '10px',
        'margin-top': '-50px',
        'background': 'none',
	    color: colors.lightBlue,
	    border: 'none',
        font: 'inherit',
        fontSize: '25px',
	    cursor: 'pointer',
	    outline: 'inherit',
    },

    text: {
        'width': '20%',
        float: 'left',
        'margin-left': '15%' 
    },

    input: {
        'width': '40%',
        float: 'left',
        'margin-right': '25%',
    },

    submit: {
        'width': '30%',
        float: 'left',
        'margin-left': '40%', 
        cursor: 'pointer'
    },

    link: {
        color: 'blue',
        cursor: 'pointer',
    },

    background: {
        position: 'fixed',
        'background-color': colors.lightBlue,
        opacity: 0.95,
        'font-family': 'Patrick Hand',
        color: colors.black,
        border: '8px solid'+ colors.black,
        borderTopWidth: '60px',
        boxShadow: '10px 10px 5px 1px rgba(0, 0, 255, .1)',

        '@media only screen and (max-width:767px)': {
            left: '10%',
            top: '15%',
            width: '80%',
            'border-radius': '5px',
        },

        '@media only screen and (min-width:768px) and (max-width:1024px)': {
            left: '20%',
            top: '20%',
            width: '60%',
            'border-radius': '7px',
        },

        '@media only screen and (min-width:1024px) and (max-width:1400px)': {
            left: '30%',
            top: '20%',
            width: '40%',
            'border-radius': '10px',
        },

        '@media only screen and (min-width:1401px)': {
            left: '35%',
            top: '20%',
            width: '30%',
            'border-radius': '12px',
        },

        'z-index': '99 !important'
    }
    
});