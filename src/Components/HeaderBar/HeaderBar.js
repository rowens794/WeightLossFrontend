import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
import colors from '../Styling/styles';
import LoginModal from '../LoginModal/LoginModal';
import ForgotPasswordModal from '../ForgotPasswordModal/ForgotPasswordModal';

export default class HeaderBar extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.loginOpen = this.loginOpen.bind(this);
        this.loginClose = this.loginClose.bind(this);
        this.forgotPassOpen = this.forgotPassOpen.bind(this);
        this.forgotPassClose = this.forgotPassClose.bind(this);
        this.state = {
            isOpen: false,
            loginOpen: false,
            forgotPassOpen: false,
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    loginOpen() {
        this.setState({
            loginOpen: true,
            forgotPassOpen: false
        })
    }

    loginClose() {
        this.setState({
            loginOpen: false
        })
    }

    forgotPassOpen() {
        this.setState({
            forgotPassOpen: true,
            loginOpen: false
        })
    }

    forgotPassClose() {
        this.setState({
            forgotPassOpen: false
        })
    }

    render() {
        return (
            <div>
                <LoginModal show={this.state.loginOpen} handleClose={this.loginClose} handleFPOpen={this.forgotPassOpen}/>
                <ForgotPasswordModal show={this.state.forgotPassOpen} handleClose={this.forgotPassClose}/>

                <Navbar color="light" light expand="md" className={css(styles.black)}>
                    <NavbarBrand href="/" className={css(styles.logo)}>Bigluzors</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} className={'navbar-dark'}/>
                    
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#" className={css(styles.font)}>Sign-Up</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="#" className={css(styles.font)} onClick={this.loginOpen}>Sign-In</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    black: {
        backgroundColor: colors.black,
    },
    font: {
        color: colors.lightBlue,
        'margin-right': '20px',
        ':hover': {
            color: colors.red,
        }
    },
    logo: {
        color: colors.lightBlue,
        'font-weight': 'bold',
        ':hover': {
            color: colors.red,
        }
    },
});