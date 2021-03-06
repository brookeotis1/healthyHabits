import React from "react";
import "./style.css";

class BMI extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        height: 170,
        weight: 65,
        bmi: 22.49,
        bmiClass: 'Normal'
      }
    }  
  heightChange(height) {
      console.log(height);
      this.setState({
        height: height
      }, this.setBmi);
    }
    weightChange(weight) {
      console.log(weight);
      this.setState({
        weight: weight
      }, this.setBmi);
    }
  
    setBmi() {
        let bmi = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(2);
        this.setState({
            bmi: bmi,
            bmiClass: this.getBmiClass(bmi)
        }, function() {
            console.log(this.state);
        });
    }
    
        getBmiClass(bmi) {
          if(bmi < 18.5) return 'Underweight';
          if(bmi >= 18.5 && bmi <= 24.9) return 'Normal';
          if(bmi >= 25 && bmi <= 29.9) return 'Overweight';
          if(bmi >= 30) return 'Obese';
      }
    
     render() {
      return (
        <div className="BMI">
          <div className="header">  
            <h1>Body mass index (BMI)</h1>
            <p>A measure of body fat in adults
            </p>
          </div>
            <form>
               <div>
                 <label>Height: </label>
                 {this.state.height}
                 <Range onChange={this.heightChange.bind(this)} value={this.state.height} />
               </div>
               <div>
                  <label>Weight: </label>
                 {this.state.weight}
                 <Range onChange={this.weightChange.bind(this)} value={this.state.weight} />
               </div>
            </form>
           <br /><br />
           <Output data={this.state}/>        
        </div>
      );
    }
  
  }
  
  
  class Range extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              value: props.value
          }
      }
    
       onChange(event) {
  
          this.props.onChange(this.state.value);
          this.setState({
              value: event.target.value
          });
      }
    
        render() {
          return (
              <div className="range">
            <input type="range"
              value={this.state.value}
              min={this.props.min}
              max={this.props.max}
              step={this.props.step}
              onChange={this.onChange.bind(this)}
             />
              </div>
          );
      }
    
  }
  
  class Output extends React.Component {
      toFeet(n) {
          let realFeet = ((n*0.393700)/12);
          let feet = Math.floor(realFeet.toFixed(2));
          let inches = Math.round((realFeet - feet) * 12);
          return feet + "'" + inches;
      }
      toLbs(n) {
          let nearExact = n/0.45359237;
          let lbs = Math.floor(nearExact);
          return lbs;
      }
      render() {
          let height = this.toFeet(this.props.data.height);
          let weight = this.toLbs(this.props.data.weight);
          let bmi = this.props.data.bmi;
          let bmiClass = this.props.data.bmiClass;
          return (
              <div className="output">
                 <h3>{height}</h3>
                 <h3>{weight} lbs</h3>
                 <h3>{bmi}</h3>
                 <h3
          className={(this.props.data.bmiClass === "Obese") ? "danger" : ""}>
          {bmiClass}
           {(this.props.data.bmiClass === "Obese") ? <a href='#'>You need to get some help</a> : ""}
      </h3>
              </div>
      );
      }
  }
  
  /*
   * Render the above component into the div#app
   */
//   React.render(<BMI />, document.getElementById('BMI'));

  export default BMI;