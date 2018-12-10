import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import colors from '../../Styling/styles';
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment';

import PlayerList from './Components/PlayerList';
import AddWeight from './Components/AddWeight';
import Rules from './Components/Rules';
import Chart from './Components/Chart';

class Content extends Component {

    constructor(props) {
        super();

        this.state = {
            competitionName: null,
            competitorData: null,
            competitionData: null,
        }    
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.competitionInfo){
            this.setState({
                competitionName: nextProps.competitionInfo.CompetitionName,
                competitorData: nextProps.competitionInfo.Players,
                competitionData: nextProps.competitionInfo
            })
        }
    }

    render() {        
        return (
            <div>
                {this.state.competitionData ? 
                    <Container fluid style={{ padding: 0, margin: 0 }}>
                        <Row style={{ padding: 0, margin: 0 }}>
                            <Col 
                                xs={{ size: 12, offset: 0 }}
                                sm={{ size: 12, offset: 0 }}
                                md={{ size: 12, offset: 0 }}
                                lg={{ size: 12, offset: 0 }}>
                                <h2 className={css(styles.title)}>{this.state.competitionName}</h2>
                                <p className={css(styles.date)}>{moment(new Date()).format('M/D/YY')}</p>
                            </Col>
                        </Row>

                        <Row style={{ padding: 0, margin: 0 }}>
                            <Col 
                                xs={{ size: 10, offset: 1 }}
                                sm={{ size: 10, offset: 1 }}
                                md={{ size: 10, offset: 1 }}
                                lg={{ size: 10, offset: 1 }}>
                                <Chart playerData={this.state.competitionData.Players}/>
                            </Col>
                        </Row>

                        <Row style={{ padding: '60px', margin: 0 }}>
                            <Col 
                                xs={{ size: 6, offset: 1 }}
                                sm={{ size: 6, offset: 1 }}
                                md={{ size: 6, offset: 1 }}
                                lg={{ size: 6, offset: 1 }}>
                                <PlayerList playerData={this.state.competitorData} competitionData={this.state.competitionData}/>
                            </Col>

                            <Col 
                                xs={{ size: 4, offset: 0 }}
                                sm={{ size: 4, offset: 0 }}
                                md={{ size: 4, offset: 0 }}
                                lg={{ size: 4, offset: 0 }}>
                                <AddWeight compUpdate={this.props.compUpdate} competitionData={this.state.competitionData}/>
                            </Col>

                        </Row>

                        <Row style={{ paddingBottom: '40px', margin: 0 }}>
                            <Col 
                                xs={{ size: 10, offset: 1 }}
                                sm={{ size: 10, offset: 1 }}
                                md={{ size: 10, offset: 1 }}
                                lg={{ size: 10, offset: 1 }}>
                                <Rules competitionData={this.state.competitionData}/>
                            </Col>
                        </Row>

                    </ Container>
                : 
                <Container fluid style={{ padding: 0, marginTop: '25vh', marginBottom: '25vh' }}>
                    <Row style={{ padding: 0, margin: 0 }}>
                        <Col 
                            xs={{ size: 12, offset: 0 }}
                            sm={{ size: 12, offset: 0 }}
                            md={{ size: 12, offset: 0 }}
                            lg={{ size: 12, offset: 0 }}>
                            <h2 className={css(styles.title1)}>It's time to create a competition!</h2>
                            <p className={css(styles.text1)}>click the blue button on the sidebar</p>
                        </Col>
                    </Row>
                </ Container>}
            </div>
        );
    }
}

export default Content;

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.white,
        position: 'relative',
    },
    title: {
        paddingTop: '50px',
        paddingLeft: '50px',
        textAlign: 'left',
    },
    title1: {
        paddingTop: '50px',
        paddingLeft: '50px',
        textAlign: 'center',
    },
    text1: {
        paddingTop: '24px',
        paddingLeft: '24px',
        textAlign: 'center',
    },
    date: {
        paddingLeft: '60px',
        paddingBottom: '50px',
        fontStyle: 'italic',
        textAlign: 'left',
    },
    chartPlaceholder: {
        width: '100%',
        height: '400px',
        backgroundColor: 'grey',
        padding: '20px'
    },
    elementPlaceholder: {
        width: '100%',
        height: '200px',
        backgroundColor: 'grey',
        padding: '20px'
    }


});