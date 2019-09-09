import React, { Component } from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import SingleSeriesSpline2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FusionCharts, SingleSeriesSpline2D, FusionTheme);

class TempVarChart extends Component {
   
    state = {
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
                
            ]
        }
    }
 
    render() {
        console.log(this.props.tempToday);
        const chartConfigs = {
            
        }
        return (       
            <div className="custom-card header-card card">
                <div className="card-body pt-0">
                    <ReactFC 
                    {...this.state}/>
                </div>
            </div>
        );
    }

    // setChartData = (nextProps) => {
    //     let data = [];
    //     for(let i=0; i < nextProps.tempToday.length; i++) {
    //         const dataObject = {
    //             label: nextProps.tempToday[i].hour,
    //             value: nextProps.tempToday[i].temp
    //         };
    //         data.push(dataObject);
    //     }
    //     return data;
    // }

    // componentWillReceiveProps(nextProps) {
        
    //     if (nextProps.tempToday !== this.props.tempToday) {
    //         console.log("new props received");
    //         console.log(nextProps);
    //         this.setState({tempToday: this.setChartData(nextProps)});
    //     }
    // }
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