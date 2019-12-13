import React from 'react';


let Height = (props) => {
  
  return <div>
    <div>
    {props.title}: {props.min}
      <input type="range"
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={props.setHeight}>
      </input>{props.max}
      <b> {props.value} {props.unit}</b>
    </div>
  </div>
}

let Weight = (props) => {
  
  return <div>
    <div>
    {props.title}: {props.min}
      <input type="range"
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={props.setWeight} >
      </input>{props.max}
      <b> {props.value} {props.unit}</b>
    </div>
  </div>
}



export default class App extends React.Component {
  state = {
    height: 150,
    weight: 50
  }

  setHeight = (e) => {
    parseInt(this.setState({height: e.target.value}))
  }

  setWeight = (e) => {
    parseInt(this.setState({weight: e.target.value}))
  }

  calculateBmi = (weight, height) => {
    let bmi = (weight /(height/100) ** 2 ).toFixed(1)
    return bmi
  }

  classifyBmi = (bmi) => {
    return bmi <= 18.4 ? "Underweight" :
    bmi <= 25 ? "Normal Weight" : 
    bmi <= 30 ? "Overweight" :
    bmi > 30 ? "Obese" : ""
  }

  render() {
    let {weight, height} = this.state
    let bmi = this.calculateBmi(weight, height)
    let diagnose = this.classifyBmi(bmi)

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
      <div>BMI: <b> {bmi}</b> <b> {diagnose}</b></div>
    </div>
  }
}


