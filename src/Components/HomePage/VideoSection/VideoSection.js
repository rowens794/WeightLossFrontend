import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
//import YouTube from 'react-youtube';
import colors from '../../Styling/styles';


//set the width of the video player
// let windowWidth = window.innerWidth;
// let playerWidth = 720; //default to 640px
// let playerHeight = playerWidth / 16 * 9;

// if (windowWidth < 500){
//     playerWidth = windowWidth * .9; //player width is 90% of viewport on mobile
//     playerHeight = playerWidth / 16 * 9;  //keep player demensions at 16 x 9
// }else{
//     playerWidth = windowWidth * .5 //player width is 50% of viewport on mobile
//     playerHeight = playerWidth / 16 * 9;  //keep player demensions at 16 x 9
// }
// let opts = {
//     height: playerHeight,
//     width: playerWidth,
//     };
//<YouTube className={css(styles.videoPlayer)} videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady}/>

class VideoSection extends Component {
    render() {
        return (
            <div className={css(styles.videoSection)}>
                <div>
                    <p>temp</p>
                </div>
            </div>
        );
    }
}

export default VideoSection;

const styles = StyleSheet.create({
    videoSection: {

        '@media only screen and (max-width:480px)': {
            padding: '5vh',
            borderTop: '1vh solid ' + colors.yellow,
        },

        '@media only screen and (min-width:481px) and (max-width:768px)': {
            padding: '12vh',
            borderTop: '1.5vh solid ' + colors.yellow,
        },

        '@media only screen and (min-width:769px)': {
            padding: '12vh',
            borderTop: '1.5vh solid ' + colors.yellow,
        },

        backgroundColor: colors.black ,
        opacity: '50%',
        'background-size': 'cover',

    },
    videoPlayer: {
        boxShadow: '10px 10px 5px 1px rgba(0, 0, 0, .3)',
        borderRadius: '5px',
    },

});