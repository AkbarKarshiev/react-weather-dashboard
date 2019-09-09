import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

const uvIndex = (props) => {
    const chartConfigs = {
        type: 'angulargauge',
        renderAt: "chart-container",
        width: "299", //299
        height: "231", //231
        dataFormat: "json",
        dataSource: {
            chart: {
                caption: "UV Index",
                captionFontBold: "0",
                captionFontColor: "#000000",
                captionPadding: "30",
                lowerLimit: "0",
                upperLimit: "15",
                lowerLimitDisplay: "1",
                upperLimitDisplay: "1",
                showValue: "0",
                theme: "fusion",
                baseFont: "Roboto",
                bgAlpha: "0",
                canvasbgAlpha: "0",
                gaugeInnerRadius: "75",
                gaugeOuterRadius: "110",
                pivotRadius: "0",
                pivotFillAlpha: "0",
                valueFontSize: "20",
                valueFontColor: "#000000",
                valueFontBold: "1",
                tickValueDistance: "3",
                autoAlignTickValues: "1",
                majorTMAlpha: "20",
                chartTopMargin: "30",
                chartBottomMargin: "40"
            },
            colorRange: {
                color: [{
                    minValue: "0",
                    maxValue: "0", // uvindex
                    code: "#7DA9E0"
                }, {
                    minValue: "0", // uvindex
                    maxValue: "15",
                    code: "#D8EDFF"
                }, 
                ]
            },
            annotations: {
                groups: [
                    {
                        items: [
                            {
                                id: "val-label",
                                type: "text",
                                text: "0", //uvindex
                                fontSize: "20",
                                font: "Source Sans Pro",
                                fontBold: "1",
                                fillcolor: "#212529",
                                x: "$gaugeCenterX",
                                y: "$gaugeCenterY"
                            }
                        ]
                    }
                    
                ]
            },
            dials: {
                dial: [{
                value: "0", // uvindex
                baseWidth: "0",
                radius: "0",
                borderThickness: "0",
                baseRadius: "0"
                }]
            }
        }
    }
    chartConfigs.dataSource.colorRange.color[0].maxValue = props.uvindex.toString(); 
    chartConfigs.dataSource.colorRange.color[1].minValue = props.uvindex.toString(); 
    chartConfigs.dataSource.annotations.groups[0].items[0].text = props.uvindex.toString();
    chartConfigs.dataSource.dials.dial[0].value = props.uvindex.toString();

    return (
        <div className="highlights-item col-md-4 col-sm-6 col-xs-12 border-top">
            <div className="card-body pt-0" >
            <ReactFC 
                {...chartConfigs}/>
            </div>
        </div>
    );  
}

export default uvIndex;