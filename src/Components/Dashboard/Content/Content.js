import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import colors from '../../Styling/styles';
import { Container, Row, Col } from 'reactstrap';

class Content extends Component {
    render() {
        return (

            <Container fluid style={{ padding: 0, margin: 0 }}>
                <Row style={{ padding: 0, margin: 0 }}>
                    <Col sm={{ size: 12, offset: 0 }}>
                        <h2 className={css(styles.title)}>Competition Title</h2>
                    </Col>
                </Row>

                <Row style={{ padding: 0, margin: 0 }}>
                    <Col sm={{ size: 10, offset: 1 }}>
                        <div className={css(styles.chartPlaceholder)}>Weekly Weightloss Chart</div>
                    </Col>
                </Row>

                <Row style={{ padding: '40px', margin: 0 }}>
                    <Col sm={{ size: 6, offset: 1 }}>
                        <div className={css(styles.elementPlaceholder)}>
                            <p>Player | Weekly Loss | Total Loss | $'s Won</p>
                        </div>
                    </Col>
                    <Col sm={{ size: 4, offset: 0 }}>
                        <div className={css(styles.elementPlaceholder)}>
                        <p>invite participant prior to competition start | ad placehoder after start</p>
                        </div>
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
        padding: '50px',
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