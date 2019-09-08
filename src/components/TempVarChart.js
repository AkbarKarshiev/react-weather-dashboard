import React, { Component } from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import SingleSeriesSpline2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FusionCharts, SingleSeriesSpline2D, FusionTheme);

class TempVarChart extends Component {
   
    state = {
        tempToday: []
    }
 
    render() {
        console.log(this.props);
        const chartConfigs = {
            type: 'spline',
            renderAt: "chartContainer",
            width: "100%",
            height: "100%",
            dataFormat: "json",
            dataSource: {
                chart: {
                    caption: "Hourly Temperature",
                    captionFontBold: "0",
                    captionFontColor: "#000000",
                    captionPadding: "30",
                    baseFont: "Roboto",
                    chartTopMargin: "30",
                    showHoverEffect: "1",
                    theme: "fusion",
                    showaxislines: "1",
                    numberSuffix: "°C",
                    anchorBgColor: "#6297d9",
                    paletteColors: "#6297d9",
                    drawCrossLine: "1",
                    plotToolText: "$label<br><hr><b>$dataValue</b>",
                    showAxisLines: "0",
                    showYAxisValues: "0",
                    anchorRadius: "4",
                    divLineAlpha: "0",
                    labelFontSize: "13",
                    labelAlpha: "65",
                    labelFontBold: "0",
                    rotateLabels: "1",
                    slantLabels: "1",
                    canvasPadding: "20"
                },
                data: [
                    this.setChartData()
                ]
            }
        }
        return (       
            <div className="custom-card header-card card">
                <div className="card-body pt-0">
                    <ReactFC 
                    {...chartConfigs}/>
                </div>
            </div>
        );
    }

    setChartData = () => {
        let data = [];
        for(let i=0; i < this.this.props.tempToday.length; i++) {
            const dataObject = {
                label: this.props.tempToday[i].hour,
                value: this.props.tempToday[i].temp
            };
            data.push(dataObject);
        }
        return data;
    }

    componentWillReceiveProps(nextProps) {
        // console.log("new props received");
        if (nextProps.tempToday !== this.props.tempToday) {
            console.log("new props received");
            this.setState({tempToday: this.props.tempToday});
            console.log(this.state);
        }
    }
    // componentDidMount() {
    //     this.setState({tempToday: this.props.tempToday});
    //     console.log(this.state);
    // }
    // componentWillUpdate() {
    //     if(this.props.tempToday.length !== 0){
    //         console.log(this.props.tempToday);
    //         this.setChartData();
    //     }
    // }
}

export default TempVarChart;