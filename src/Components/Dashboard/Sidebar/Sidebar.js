import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import colors from '../../Styling/styles';

class Sidebar extends Component {

    render() {
        const primaryDivClasses = `d-none d-sm-block d-md-block d-lg-block d-xl-block ${css(styles.background)}`

        return (
            <div className={ primaryDivClasses }>
                <div className={css(styles.hello)}>
                    <p>Hello</p>
                    <p>{this.props.userInfo.userName}</p>
                    <hr className={css(styles.horRow)}/>
                    <br />
                    <p>Competitions</p>
                    {
                        (this.props.userInfo.competitions.length === 0)
                        ? <p> no current competitions </p> 
                        : <div> Everything in the world is fine </div> 
                    }
                    <a className={css(styles.newCompButton)} href='/createhunt'>New Competition</a>
                    
                </div>
            </div>
        );
    }
}

export default Sidebar;

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.yellow,
        position: 'relative',
        top: 0,
        left: 0,
        overflowX: 'hidden',
        paddingTop: '30px',
        height: '100%'
    },

    horRow: {
        margin: '10px',
        backgroundColor: colors.black,
    },

    newCompButton: {
        'width': '80%',
        float: 'left',
        'margin-left': '10%', 
        cursor: 'pointer', 
        'background-color': colors.graphicsBlue,
        paddingTop: '10px',
        border: '1px solid'+ colors.black,
        'border-radius': '3px',
        marginTop: '25px',
        marginBottom: '25px',
    },

});