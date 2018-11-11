import React, { Component } from 'react';
import HeroSection from './HeroSection/HeroSection';
import VideoSection from './VideoSection/VideoSection';

class HomePage extends Component {
    render() {
        return (
            <div>
                <HeroSection />
                <VideoSection />
            </div>
        );
    }
}

export default HomePage;