import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as plotly from 'plotly.js';

@Component({
  selector: 'app-plotly',
  templateUrl: './plotly.component.html',
  styleUrls: ['./plotly.component.css']
})
export class PlotlyComponent implements OnInit {
  @ViewChild('chart') chart: ElementRef;

  scatterTrace1 = {
    x: [1, 2, 3, 4, 5],
    y: [1, 3, 3.5, 10, 13],
    name: 'Measured',
    mode: 'markers',
    type: 'scatter',
    marker: {
      size: 9,
      symbol: 304,
      color: "#000000"
    },
    
  };
  
  lineTrace1 = {
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16],
    name: "Predicted",
    mode: "lines",
    line: {
      color: "#4286f4",
    }
  };
  
  
  
  layout1 = {
    title: "Linear-Linear Plot",
    margin: {
      t: 60,
      pad: 10,
    },
    legend: {
      bgcolor: '#e0ebfc',
      borderwidth: 2,
      bordercolor: '#000000',
    },
    yaxis: {
      color: "#ea275b",
      title: "Y-Axis(mg/L)",
      tickwidth: 3,
    },
    xaxis: {
      color: "#c626ea",
      gridcolor: "#8cf7c3",
      
      title: "X-Axis(days)",
      tickwidth: 3,
      dtick: 0.5,
    }
  };
  

  constructor() { }

  ngOnInit() {

    const data1 = [this.scatterTrace1, this.lineTrace1];

    plotly.plot(this.chart.nativeElement, data1 , this.layout1);
  }

}
