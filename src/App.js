import React from 'react';


let Height = (props) => {
  
  return <div>
    <div>{props.title}: {props.min}
    <input type="range"
    min={props.min}
    max={props.max}
    value={props.value}
    onChange={props.setHeight}
    ></input>{props.max}
    <b> {props.value} {props.unit}</b>
    </div>
  </div>
}

let Weight = (props) => {
  
  return <div>
    <div>{props.title}: {props.min}
    <input type="range"
    min={props.min}
    max={props.max}
    value={props.value}
    onChange={props.setWeight}
    ></input>{props.max}
    <b> {props.value} {props.unit}</b>
    </div>
  </div>
}



export default class App extends React.Component {
  state = {
    height: "150",
    weight: "50"
  }

  setHeight = (e) => {
    this.setState({height: e.target.value})
  }

  setWeight = (e) => {
    this.setState({weight: e.target.value})
  }

  bmi = () => {
    let hNum = parseInt(this.state.height)
    let wNum = parseInt(this.state.weight) 
    let bmi = ( wNum /(hNum/100) ** 2 ).toFixed(1)
    return bmi
  }

  render() {
    let diagnose = this.bmi() <= 18.4 ? "Underweight" :
    this.bmi() <= 25 ? "Normal Weight" : 
    this.bmi() <= 30 ? "Overweight" :
    this.bmi() > 30 ? "Obese" : ""

    return <div>
      <Height
        min={90}
        max={245}
        title={"Height"}
        unit={"cm"}
        value={this.state.height} 
        setHeight={this.setHeight}
      />
      <Weight
        min={35}
        max={200}
        title={"Weight"}
        unit={"kg"}
        value={this.state.weight} 
        setWeight={this.setWeight}
      />
      <div>BMI: <b> {this.bmi()}</b> <b> {diagnose}</b></div>
    </div>
  }
  
}


