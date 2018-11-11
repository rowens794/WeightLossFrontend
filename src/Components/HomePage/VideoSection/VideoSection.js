import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import YouTube from 'react-youtube';
import colors from '../../Styling/styles';

let opts = {};

class VideoSection extends Component {
    render() {
        return (
            <div className={css(styles.videoSection)}>
                <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady}/>
                <p>aasdfasdfwij</p>
            </div>
        );
    }
}

export default VideoSection;

const styles = StyleSheet.create({
    videoSection: {
        height: '70vh',
        backgroundColor: colors.lightBlue,
        'background-size': 'cover',
        position: 'relative',
    },

});