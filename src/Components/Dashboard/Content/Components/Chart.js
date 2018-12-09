import React, { Component } from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, LineSeries, } from 'react-vis';
import { Container, Row, Col } from 'reactstrap';


import colors from '../../../Styling/styles'

//import moment from 'moment';

class Chart extends Component {
    constructor(props) {
        super();

        this.state = {
            playerData: null
        }    
    }

    componentDidMount() {
        this.setState({
            playerData: this.props.playerData
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            playerData: nextProps.playerData
        })
    }


    render() {
        if (this.state.playerData){

            //convert the player weight object to an ordered array
            let object = Object.keys(this.state.playerData[0][2]) //simply grab the first player from the array
            object.sort(function(a, b){
                return new Date(a) - new Date(b)
            });
            
            //create an array of weights for each player
            var correctedPlayerData = []
            var players = []


            //determine whether players have completed initial weigh-in
            var allPlayersWeighedIn = true
            var playersNotWeighedIn = []
            for (let i = 0; i<this.state.playerData.length; i++){
                if(!this.state.playerData[i][2][object[0]]){
                    allPlayersWeighedIn = false
                    playersNotWeighedIn.push(this.state.playerData[i][0])
                }
            }
            if (allPlayersWeighedIn === false){
                var warningText = '<p>Waiting for <strong>' + playersNotWeighedIn.join(', ') + '</strong> to post initial weigh in</p>'
            }

            //if all players have atleast completed an initial weighin then generate the chart
            if (allPlayersWeighedIn) { 
                for (let i=0; i<this.state.playerData.length; i++){
                    correctedPlayerData.push([])
                    players.push(this.state.playerData[i][0]) //collects an array of the players names to produce an chart key
    
                    let beginningWeight = this.state.playerData[i][2][object[0]]
                    let currentWeight = beginningWeight
                    for (let j=0; j<object.length; j++){
    
                        //if statement protects against getting null values in calculation
                        if(this.state.playerData[i][2][object[j]]){
                            currentWeight = this.state.playerData[i][2][object[j]]
                        }
    
                        //if date is past current date then convert reading to NaN
                        var today = new Date()
                        var competitionDay = new Date(object[j])
    
    
                        if(competitionDay >= today){ //if the competition day is greater than todays date  then produce a null value so that it won't display on chart
                            correctedPlayerData[i].push({x: competitionDay, y: null})
                        }else{  //otherwise push weight change
                            let percentageChange = (currentWeight - beginningWeight) / beginningWeight
                            correctedPlayerData[i].push({x: competitionDay, y: percentageChange * 100})
                        }
                    }
                }
            }
        }

        return (
            <div id='chartContainer'>
                { //Check if message failed
                    
                    (this.state.playerData && allPlayersWeighedIn)
                    ?   <Container fluid style={{ padding: 0, marginTop: 0 }}>
                            <Row style={{ padding: 0, margin: 0 }}>
                                <Col sm={{ size: 12, offset: 0 }}>

                                    
                                    <XYPlot xType="time" width={document.getElementById("chartContainer").clientWidth} height={document.getElementById("chartContainer").clientWidth * .5} margin={{bottom: 100}}>
                                    
                                        <VerticalGridLines />
                                        <XAxis tickLabelAngle={-70} style={{marginBottom: '0px', fontSize: '16px',}}/>
                                        <YAxis title="% Weight Change" style={{fontSize: '16px', textAlign: 'left'}}/>
                                        
                                        {correctedPlayerData.map((player, i) => {
                                            return <LineSeries key={i} 
                                                    getNull={(d) => d.y !== null}  
                                                    data={player} 
                                                    curve={'curveMonotoneX'} 
                                                    color={colors.chartColors[i%colors.chartColors.length]} //set the color of the line based off of the array of chart colors defined in the style file
                                          />
                                        })}
                                    </XYPlot>

                                </Col>
                            </Row>

                            <Row>
                                {players.map((player, i) => {
                                    return <Col sm={{ size: 2, offset: 0 }} key={player+i}>
                                        <p style={{'color': colors.chartColors[i]}}>-----{player}</p>
                                    </Col>
                                })}
                            </Row>

                        </ Container>

                        : <div> 
                            <p dangerouslySetInnerHTML={{__html: warningText}} />
                        </div> 
                }
            </div>
        );
    }
}

export default Chart;
