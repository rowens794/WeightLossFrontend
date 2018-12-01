import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import colors from '../../Styling/styles';
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment';

import PlayerList from './Components/PlayerList';
import AddWeight from './Components/AddWeight';

class Content extends Component {

    render() {
        let competitionName = ''
        let competitorData = []
        let competitionData = []

        if(this.props.competitionInfo){
            competitionName = this.props.competitionInfo.CompetitionName
            competitorData = this.props.competitionInfo.Players
            competitionData = this.props.competitionInfo
        }
        
        return (

            <Container fluid style={{ padding: 0, margin: 0 }}>
                <Row style={{ padding: 0, margin: 0 }}>
                    <Col sm={{ size: 12, offset: 0 }}>
                        <h2 className={css(styles.title)}>{competitionName}</h2>
                        <p className={css(styles.date)}>{moment(new Date()).format('M/D/YY')}</p>
                    </Col>
                </Row>

                <Row style={{ padding: 0, margin: 0 }}>
                    <Col sm={{ size: 10, offset: 1 }}>
                        <div className={css(styles.chartPlaceholder)}>Weekly Weightloss Chart</div>
                    </Col>
                </Row>

                <Row style={{ padding: '40px', margin: 0 }}>

                    <Col sm={{ size: 6, offset: 1 }}>
                        <PlayerList playerData={competitorData} competitionData={competitionData}/>
                    </Col>

                    <Col sm={{ size: 4, offset: 0 }}>
                        <AddWeight compUpdate={this.props.compUpdate} competitionData={competitionData}/>
                    </Col>

                </Row>

                <Row style={{ paddingBottom: '40px', margin: 0 }}>
                    <Col sm={{ size: 10, offset: 1 }}>
                        <div className={css(styles.elementPlaceholder)}>
                            <p>Rules Rundown</p>
                        </div>
                    </Col>
                </Row>

            </ Container>
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