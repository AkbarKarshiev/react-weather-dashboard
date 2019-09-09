import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

const visibility = (props) => {
    const chartConfigs = {
        type: "hlineargauge",
        renderAt: "chart-container",
        width: "297",
        height: "232",
        dataFormat: "json",
        creditLabel: false,
        dataSource: {
            chart: {
                caption: "Air Visibility",
                captionFontBold: "0",
                captionFontColor: "#000000",
                baseFont: "Roboto",
                numberSuffix: " km",
                lowerLimit: "0",
                upperLimit: "40",
                showPointerShadow: "1",
                animation: "1",
                transposeAnimation: "1",
                theme: "fusion",
                bgAlpha: "0",
                canvasbgAlpha: "0",
                valueFontSize: "20",
                valueFontColor: "#000000",
                valueFontBold: "1",
                pointerBorderAlpha: "0",
                chartBottomMargin: "40",
                captionPadding: "30",
                chartTopMargin: "30"
            },
            colorRange: {
                color: [{
                    minValue: "0",
                    maxValue: "4", 
                    label: "Fog",
                    code: "#6297d9"
                }, {
                    minValue: "10",
                    maxValue: "40", 
                    label: "Clear",
                    code: "#D8EDFF"
                }, 
                ]
            },
            pointers: {
                pointer: [
                  {
                    value: "0"
                  }
                ]
            }
        }
    }
    chartConfigs.dataSource.pointers.pointer[0].value = props.visibility.toString();

    return (
        <div className="highlights-item col-md-4 col-sm-6 col-xs-12 border-left border-right border-top">
            <div className="card-body pt-0" >
                <div>
                    <ReactFC 
                    {...chartConfigs}/>
                </div>
            </div>
        </div>
    );  
}

export default visibility;