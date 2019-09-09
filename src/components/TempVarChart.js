import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import SingleSeriesSpline2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, SingleSeriesSpline2D, FusionTheme);

const tempVarChart = (props) => {
    const setChartData = (props) => {
        let data = [];
        for(let i=0; i < props.tempToday.length; i++) {
            const dataObject = {
                label: props.tempToday[i].hour,
                value: props.tempToday[i].temp
            };
            data.push(dataObject);
        }
        return data;
    }
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
                
            ]
        }
    }
    chartConfigs.dataSource.data = setChartData(props);
    return (         
        <div className="custom-card header-card card">
            <div className="card-body pt-0">
                <ReactFC 
                {...chartConfigs}/>
            </div>
        </div>
    );
}

export default tempVarChart;