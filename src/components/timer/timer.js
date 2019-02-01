import React from "react"
import TimerView from "../../converter.js"
class TimerContainer extends React.Component {
   constructor(){
       super()
       this.state={
           timems:0,
           interval:null
       }
    }
       timeOn = () => {
        this.setState({
            timems: this.state.timems + 1000
        })
    }
    start = () => {

            const intervalId = setInterval(this.timeOn, 1000)
            this.setState({
                interval:intervalId
            })

            }
   pause = () =>{
        clearInterval(this.state.interval)
        this.setState({
            interval:null
        })
   }
   playOrPause = () =>{
       return this.state.interval ? this.pause() : this.start()
   }

     reset = () =>{
        this.setState({
            timems:0
        })
        this.pause()
     }

    render() {
    return (
        <div className="container">
            <TimerView time={this.state.timems} />
            <div className="btns">
                <input  className="btn" style={this.state.interval?{color:"red"} : {color:"green"}} onClick={this.playOrPause} type="button" value={ this.state.interval? "Pause" : "Play"} />
                <input  className="btn" onClick={this.reset} type="button" value="Reset" />
            </div>
        </div>
        ) ;

    }
}
    export default TimerContainer
