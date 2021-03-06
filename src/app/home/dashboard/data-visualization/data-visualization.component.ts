import { Component, OnInit } from '@angular/core';
import {HomeComponent} from './../../home.component';
import { _ } from 'underscore';
@Component({
  selector: 'app-data-visualization',
  templateUrl: './data-visualization.component.html',
  styleUrls: ['./data-visualization.component.css']
})
export class DataVisualizationComponent implements OnInit {
  chartOpt = [];
  xOpt = [];
  yOpt = [];
  colorOpt = [];
  all_charts = [];
  chart_type: string = '';
  x: any;
  y: any;
  color: any;
  
  scatter_chart: any;
  box_plot_chart: any;
  correlation_plot_chart: any;
  constructor(private home: HomeComponent) {
    this.chartOpt = [
      {label:'Select', value:''},
      {label: 'Correlation Plot', value:'correlation_plot'},
      {label: 'Box Plot', value:'box_plot'},
      {label:'Scatter', value: 'scatter'},
      {label:'Bar', value: 'bar'},
      {label:'Column', value: 'column'},
      {label:'Line', value: 'line'}
    ];
    // dummy init data for chart
    this.scatter_chart = {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'Impact of Age and DailyRate on Attrition'
    },
    xAxis: {
        title: {
            text: 'Age'
        }
    },
    yAxis: {
        title: {
            text: 'DailyRate'
        }
    },
    series: [
        {
        name: 'Attrition: Yes',
        data: [[61.2, 51.6], [67.5, 59.0], [59.5, 49.2], [57.0, 63.0], [55.8, 53.6],
            [70.0, 59.0], [59.1, 47.6], [66.0, 69.8], [76.2, 66.8], [60.2, 75.2],
            [72.5, 55.2], [70.9, 54.2], [72.9, 62.5], [53.4, 42.0], [60.0, 50.0],
            [47.2, 49.8], [68.2, 49.2], [75.0, 73.2], [57.0, 47.8], [67.6, 68.8],
            [59.5, 50.6], [75.0, 82.5], [66.8, 57.2], [76.5, 87.8], [70.2, 72.8],
            [74.0, 54.5], [73.0, 59.8], [79.9, 67.3], [70.5, 67.8], [60.0, 47.0],
            [54.4, 46.2], [62.0, 55.0], [76.5, 83.0], [60.0, 54.4], [52.0, 45.8],
            [62.1, 53.6], [70.0, 73.2], [60.2, 52.1], [61.3, 67.9], [66.4, 56.6],
            [68.9, 62.3], [63.8, 58.5], [67.6, 54.5], [60.0, 50.2], [61.3, 60.3],
            [67.6, 58.3], [65.1, 56.2], [60.0, 50.2], [70.0, 72.9], [57.5, 59.8],
            [67.6, 61.0], [60.7, 69.1], [63.2, 55.9], [52.4, 46.5], [57.5, 54.3],
            [68.3, 54.8], [80.3, 60.7], [65.5, 60.0], [65.0, 62.0], [64.5, 60.3],
            [56.0, 52.7], [60.0, 74.3], [63.0, 62.0], [65.7, 73.1], [61.0, 80.0],
            [62.0, 54.7], [66.0, 53.2], [74.0, 75.7], [72.7, 61.1], [67.6, 55.7],
            [51.1, 48.7], [64.5, 52.3], [63.5, 50.0], [52.0, 59.3], [69.0, 62.5],
            [64.0, 55.7], [61.2, 54.8], [55.0, 45.9], [70.0, 70.6], [76.2, 67.2],
            [70.0, 69.4], [62.5, 58.2], [70.3, 64.8], [64.1, 71.6], [69.5, 52.8],
            [63.2, 59.8], [54.5, 49.0], [59.8, 50.0], [73.2, 69.2], [70.0, 55.9],
            [61.4, 63.4], [69.0, 58.2], [66.2, 58.6], [59.4, 45.7], [62.5, 52.2],
            [59.0, 48.6], [62.8, 57.8], [59.0, 55.6], [79.8, 66.8], [62.9, 59.4],
            [61.0, 53.6], [51.1, 73.2], [68.2, 53.4], [68.9, 69.0], [73.2, 58.4],
            [71.8, 56.2], [78.0, 70.6], [64.3, 59.8], [63.0, 72.0], [68.5, 65.2],
            [66.8, 56.6], [72.7, 105.2], [63.5, 51.8], [69.4, 63.4], [67.8, 59.0],
            [59.5, 47.6], [67.6, 63.0], [61.2, 55.2], [60.0, 45.0], [63.2, 54.0],
            [62.2, 50.2], [61.3, 60.2], [49.5, 44.8], [57.5, 58.8], [63.2, 56.4],
            [72.7, 62.0], [55.0, 49.2], [56.5, 67.2], [64.0, 53.8], [60.9, 54.4],
            [62.8, 58.0], [67.0, 59.8], [60.0, 54.8], [60.0, 43.2], [68.9, 60.5],
            [58.2, 46.4], [56.0, 64.4], [60.0, 48.8], [67.1, 62.2], [58.0, 55.5],
            [67.6, 57.8], [56.0, 54.6], [62.1, 59.2], [73.4, 52.7], [59.8, 53.2],
            [70.5, 64.5], [59.2, 51.8], [57.5, 56.0], [61.3, 63.6], [62.6, 63.2],
            [60.0, 59.5], [68.9, 56.8], [65.1, 64.1], [62.6, 50.0], [65.1, 72.3],
            [66.4, 55.0], [60.0, 55.9], [52.4, 60.4], [70.2, 69.1], [62.6, 84.5],
            [70.2, 55.9], [58.8, 55.5], [72.7, 69.5], [67.6, 76.4], [62.6, 61.4],
            [67.6, 65.9], [56.2, 58.6], [75.2, 66.8], [72.1, 56.6], [62.6, 58.6],
            [60.0, 55.9], [65.1, 59.1], [82.9, 81.8], [66.4, 70.7], [65.1, 56.8],
            [77.8, 60.0], [65.1, 58.2], [75.3, 72.7], [54.9, 54.1], [58.8, 49.1],
            [72.7, 75.9], [68.9, 55.0], [61.3, 57.3], [67.6, 55.0], [65.1, 65.5],
            [75.3, 65.5], [57.5, 48.6], [63.8, 58.6], [67.6, 63.6], [65.1, 55.2],
            [65.1, 62.7], [68.9, 56.6], [62.6, 53.9], [64.5, 63.2], [76.5, 73.6],
            [68.9, 62.0], [75.3, 63.6], [59.4, 53.2], [60.0, 53.4], [70.2, 55.0],
            [62.6, 70.5], [67.6, 54.5], [62.6, 54.5], [60.7, 55.9], [60.0, 59.0],
            [57.5, 63.6], [62.6, 54.5], [52.4, 47.3], [70.2, 67.7], [65.1, 80.9],
            [72.7, 70.5], [65.1, 60.9], [70.2, 63.6], [70.2, 54.5], [70.2, 59.1],
            [61.3, 70.5], [67.6, 52.7], [67.6, 62.7], [65.1, 86.3], [62.6, 66.4],
            [52.4, 67.3], [68.9, 63.0], [70.2, 73.6], [75.2, 62.3], [75.2, 57.7],
            [60.0, 55.4], [65.1, 104.1], [74.0, 55.5], [70.2, 77.3], [60.0, 80.5],
            [67.6, 64.5], [67.6, 72.3], [67.6, 61.4], [54.9, 58.2], [62.6, 81.8],
            [75.3, 63.6], [71.4, 53.4], [57.5, 54.5], [65.1, 53.6], [60.0, 60.0],
            [74.0, 73.6], [62.6, 61.4], [74.0, 55.5], [62.6, 63.6], [61.3, 60.9],
            [56.2, 60.0], [49.9, 46.8], [69.5, 57.3], [60.0, 64.1], [75.3, 63.6],
            [69.5, 67.3], [60.0, 75.5], [72.7, 68.2], [62.6, 61.4], [57.5, 76.8],
            [76.5, 71.8], [64.4, 55.5], [60.7, 48.6], [74.0, 66.4], [63.8, 67.3]]
},
        {
        name: 'Attrition: No',
        data: [[74.0, 65.6], [75.3, 71.8], [93.5, 80.7], [86.5, 72.6], [87.2, 78.8],
            [81.5, 74.8], [84.0, 86.4], [84.5, 78.4], [75.0, 62.0], [84.0, 81.6],
            [80.0, 76.6], [77.8, 83.6], [92.0, 90.0], [76.0, 74.6], [74.0, 71.0],
            [84.0, 79.6], [92.7, 93.8], [71.5, 70.0], [73.0, 72.4], [76.0, 85.9],
            [76.0, 78.8], [80.5, 77.8], [72.7, 66.2], [76.0, 86.4], [73.5, 81.8],
            [78.0, 89.6], [80.3, 82.8], [80.3, 76.4], [64.5, 63.2], [73.0, 60.9],
            [83.5, 74.8], [75.5, 70.0], [88.0, 72.4], [89.2, 84.1], [72.8, 69.1],
            [70.0, 59.5], [82.0, 67.2], [70.0, 61.3], [77.8, 68.6], [84.2, 80.1],
            [86.7, 87.8], [71.4, 84.7], [72.7, 73.4], [75.3, 72.1], [80.3, 82.6],
            [82.9, 88.7], [88.0, 84.1], [77.2, 94.1], [72.1, 74.9], [67.0, 59.1],
            [69.5, 75.6], [74.0, 86.2], [72.7, 75.3], [82.2, 87.1], [64.1, 55.2],
            [63.0, 57.0], [71.5, 61.4], [84.2, 76.8], [74.0, 86.8], [74.0, 72.2],
            [77.0, 71.6], [86.0, 84.8], [67.0, 68.2], [71.8, 66.1], [82.0, 72.0],
            [67.0, 64.6], [77.8, 74.8], [64.5, 70.0], [92.0, 101.6], [75.5, 63.2],
            [71.2, 79.1], [81.6, 78.9], [67.4, 67.7], [81.1, 66.0], [77.0, 68.2],
            [74.5, 63.9], [77.5, 72.0], [70.5, 56.8], [82.4, 74.5], [97.1, 90.9],
            [80.1, 93.0], [75.5, 80.9], [80.6, 72.7], [84.4, 68.0], [75.5, 70.9],
            [80.6, 72.5], [77.0, 72.5], [77.1, 83.4], [81.6, 75.5], [76.5, 73.0],
            [75.0, 70.2], [74.0, 73.4], [65.1, 70.5], [77.0, 68.9], [92.0, 102.3],
            [76.5, 68.4], [69.4, 65.9], [82.1, 75.7], [79.8, 84.5], [75.3, 87.7],
            [84.9, 86.4], [77.3, 73.2], [67.4, 53.9], [78.1, 72.0], [68.9, 55.5],
            [57.2, 58.4], [80.3, 83.2], [70.2, 72.7], [77.8, 64.1], [72.7, 72.3],
            [65.1, 65.0], [86.7, 86.4], [65.1, 65.0], [74.0, 88.6], [75.3, 84.1],
            [85.4, 66.8], [77.8, 75.5], [80.3, 93.2], [80.3, 82.7], [77.8, 58.0],
            [77.8, 79.5], [77.8, 78.6], [77.8, 71.8], [77.8, 116.4], [63.8, 72.2],
            [88.0, 83.6], [98.1, 85.5], [75.3, 90.9], [66.4, 85.9], [90.5, 89.1],
            [66.4, 75.0], [77.8, 77.7], [79.7, 86.4], [72.7, 90.9], [90.5, 73.6],
            [85.4, 76.4], [68.9, 69.1], [67.6, 84.5], [75.3, 64.5], [70.2, 69.1],
            [90.5, 108.6], [77.8, 86.4], [90.5, 80.9], [77.8, 87.7], [84.2, 94.5],
            [76.5, 80.2], [77.8, 72.0], [80.3, 71.4], [71.4, 72.7], [72.7, 84.1],
            [72.7, 76.8], [77.8, 63.6], [77.8, 80.9], [82.9, 80.9], [70.2, 85.5],
            [67.6, 68.6], [75.3, 67.7], [65.1, 66.4], [85.4, 102.3], [81.6, 70.5],
            [72.7, 95.9], [90.5, 84.1], [79.1, 87.3], [75.3, 71.8], [70.2, 65.9],
            [93.0, 95.9], [71.4, 91.4], [77.8, 81.8], [77.8, 96.8], [67.6, 69.1],
            [67.6, 82.7], [80.3, 75.5], [82.9, 79.5], [76.5, 73.6], [86.7, 91.8],
            [88.0, 84.1], [88.0, 85.9], [77.8, 81.8], [74.0, 82.5], [77.8, 80.5],
            [71.4, 70.0], [85.4, 81.8], [85.4, 84.1], [88.0, 90.5], [88.0, 91.4],
            [82.9, 89.1], [76.5, 85.0], [75.3, 69.1], [75.3, 73.6], [88.0, 80.5],
            [88.0, 82.7], [75.3, 86.4], [70.5, 67.7], [79.1, 92.7], [77.8, 93.6],
            [75.3, 70.9], [82.9, 75.0], [70.8, 93.2], [88.0, 93.2], [80.3, 77.7],
            [77.8, 61.4], [85.4, 94.1], [68.9, 75.0], [85.4, 83.6], [80.3, 85.5],
            [74.0, 73.9], [67.6, 66.8], [82.9, 87.3], [60.0, 72.3], [80.3, 88.6],
            [67.6, 75.5], [86.7, 101.4], [75.3, 91.1], [75.3, 67.3], [75.9, 77.7],
            [75.3, 81.8], [79.1, 75.5], [81.6, 84.5], [77.8, 76.6], [82.9, 85.0],
            [77.8, 102.5], [84.2, 77.3], [79.1, 71.8], [76.5, 87.9], [88.0, 94.3],
            [74.0, 70.9], [67.6, 64.5], [70.2, 77.3], [67.6, 72.3], [88.0, 87.3],
            [74.0, 80.0], [76.5, 82.3], [80.3, 73.6], [67.6, 74.1], [88.0, 85.9],
            [80.3, 73.2], [67.6, 76.3], [83.0, 65.9], [83.0, 90.9], [79.1, 89.1],
            [70.2, 62.3], [77.8, 82.7], [79.1, 79.1], [90.5, 98.2], [77.8, 84.1],
            [80.3, 83.2], [80.3, 83.2]]
    }
    ]
};
    this.box_plot_chart = {

    chart: {
        type: 'boxplot'
    },

    title: {
        text: 'Highcharts Box Plot Example'
    },

    legend: {
        enabled: true
    },

    xAxis: {
        categories: ['1', '2', '3', '4', '5'],
        title: {
            text: 'Experiment No.'
        }
    },

    yAxis: {
        title: {
            text: 'Observations'
        },
        plotLines: [{
            value: 932,
            color: 'red',
            width: 1,
            label: {
                text: 'Theoretical mean: 932',
                align: 'center',
                style: {
                    color: 'gray'
                }
            }
        }]
    },

    series: [{
        name: 'Observations',
        data: [
            [760, 801, 848, 895, 965],
            [733, 853, 939, 980, 1080],
            [714, 762, 817, 870, 918],
            [724, 802, 806, 871, 950],
            [834, 836, 864, 882, 910]
        ],
        tooltip: {
            headerFormat: '<em>Experiment No {point.key}</em><br/>'
        }
    }, {
        name: 'Outlier',
        type: 'scatter',
        data: [ // x, y positions where 0 is the first category
            [0, 644],
            [4, 718],
            [4, 951],
            [4, 969]
        ],
        marker: {
            fillColor: 'white',
            lineWidth: 1
        },
        tooltip: {
            pointFormat: 'Observation: {point.y}'
        }
    }]

};
    this.correlation_plot_chart = {

    chart: {
        type: 'heatmap',
        marginTop: 40,
        marginBottom: 80,
        plotBorderWidth: 1
    },


    title: {
        text: 'Sales per employee per weekday'
    },

    xAxis: {
        categories: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
    },

    yAxis: {
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        title: null
    },

    colorAxis: {
        min: 0,
        minColor: '#FFFFFF',
    },

    legend: {
        align: 'right',
        layout: 'vertical',
        margin: 0,
        verticalAlign: 'top',
        y: 25,
        symbolHeight: 280
    },

    series: [{
        name: 'Sales per employee',
        borderWidth: 1,
        data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96], [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30], [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84], [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]],
        dataLabels: {
            enabled: true,
            color: '#000000'
        }
    }]

};
  }

  ngOnInit() {
    if(this.home.userSelectionData){
       _.each(this.home.userSelectionData.selection.col,(e)=>{
           if(e.type === 'numerical'){
            this.xOpt.push(Object.assign({},e));
            this.yOpt.push(Object.assign({},e));
           }else{
               this.colorOpt.push(Object.assign({},e));
           }
        
      });
    }
  }
  plot(){
     // this array will contain all the charts that may be a single or many , viz_msg and data(will be the highchart obj)
     let chartOne = {viz_message: 'This is a sample message', data:this.scatter_chart};
     this.all_charts = []; 
     
     this.all_charts.push(chartOne);
     this.all_charts.push(chartOne);
     this.all_charts.push(chartOne);
  }
}
