
/*
import React from 'react';
import { Bar } from 'react-chartjs-2';
//line
//Pie 
//Bar
//Scatter

function BarChart() {
    return <div>
      <Bar
        data={{
            labels: ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'],
            //bottom of chart representing the columns 
            datasets: [{
                label: 'Goal One',
                data: ['1','2','3','4','5','6','7',],
                backgroundColor: 'rgba(255, 99, 132, 0.8)',
                borderColor: 'black',
                borderWidth: 2
            },
            {
                label: 'Goal Two',
                data: ['3','4','5','6','6','8','9'],
                backgroundColor: 'rgba(0, 0, 250, 0.8)',
                borderColor: 'black',
                borderWidth: 2
            },
            {
                label: 'Goal Three',
                data: ['2','3','5','7','7','5','6'],
                backgroundColor: 'rgba(0, 500, 0, 0.8)',
                borderColor: 'black',
                borderWidth: 2
            }
        ],
        }}
        width={400}
        height={600}
        options={{ 
            maintainAspectRatio: false,
            scales: {
                yAxes: [
                    {
                       ticks: {
                           beginAtZero:true,
                       },
                    },
                ],
                
            },
            legend: {
                labels:{
                    fontsize: 2,
                }
            }
        }}
    />  
</div>
}

export default BarChart 

//npm install --save react-chartjs-2 chart.js

/*
class BarChart extends React.Component {
constructor(props) {
 super(props);
 this.state = {
   chartData: {
     labels: ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'],
     datasets: [
       {
         label: "Goals",
         backgroundColor: 'rgba(255, 99, 132, 0.8)',
         data: [this.props.goals]
       }
     ]
   }
 };
}

render() {
 return <Bar onClick={this.props.handleClick} data={this.state.chartData} />;
}
}

export default BarChart;
 














class HabitsApp extends React.Component {
constructor(props) {
 super(props);
 this.state = {
   Monday: 0,
   Tuesday: 0,
   Wednesday: 0,
   Thursday: 0,
   Friday: 0,
   Saturday: 0,
   Sunday: 0,
   chartData: []
 };
 this.handleChange = this.handleChange.bind(this);
 this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
    this.setState({value: event.target.value});
  }



      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

 */ 

import React, { Component } from "react";
import {  Bar } from "react-chartjs-2";


export default class App extends Component {
    
    state = {
        
        dataPie: {
            datasets: [{
                data: [],
                label: ['monday']['tuesday'],
                
            }],

        },
        first: "",
        second: "",
    }
    handleSubmit = () => {
        const { dataPie } = this.state;
        this.setState({
            dataPie: {
                ...dataPie,
                datasets: [...dataPie.datasets,{
                    
                    data: [
                    this.state.first,
                     this.state.second,
                      this.state.third
                       ]
                }]
            }
        })
    }
    
    handleChange = (evt) => {
        let a = parseInt(evt.target.value)
        this.setState({
            [evt.target.name]: a,
        })
    }
    
    render() {


        const { data, dataPie } = this.state;
        console.log(dataPie);
        return (
            <React.Fragment>
                <input type="number"
                    value={this.state.first}
                    name="first"
                    onChange={(evt) => this.handleChange(evt)} />
                <input type="number"
                    value={this.state.second}
                    name="second" onChange={(evt) => this.handleChange(evt)} />
                <button onClick={() => this.handleSubmit()}>add data to chart</button>
                <h1>My Goals Progress</h1>
                <Bar data={dataPie} />
            </React.Fragment>

        )
    }
}

