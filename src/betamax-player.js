import React, { Component } from 'react'
import BetaMaxCore, { utils as betamaxUtils } from 'betamax-core'

class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.betamaxPlayer = new BetaMaxCore({
      $mediaObj: this.refs['video-example'],
    })
    this.betamaxPlayer.volume(0.5)
    this.betamaxPlayer.addEventListener('stateChange', state => this.setState(state))
  }

  handleVideoClick() {
    if (!this.state.paused) {
      this.betamaxPlayer.pause()
    } else {
      this.betamaxPlayer.play()
    }
  }

  handleFullscreen() {
    this.betamaxPlayer.requestFullscreen()
  }

  handleMute() {
    this.betamaxPlayer.mute()
  }

  render() {
    console.warn(this.state);
    return (
      <div>
        <h1>React Video Example</h1>
        <video ref="video-example" width="400" controls onClick={ this.handleVideoClick.bind(this) }>
          <source src="http://localhost:3000/33763_1_out-there-pluto_wg_480p.mp4" type="video/mp4" />
          <span>Your browser doesn't support HTML5 video tag.</span>
        </video>
        <div id="video-controls">
          <span className="play-pause">{ this.state.paused ? 'Paused' : 'Playing' }</span>
          <span className="timeStamp"> { betamaxUtils.formatTime(this.state.currentTime) } Sec. | { betamaxUtils.formatTime(this.state.duration) } Min. </span>
          <a href="#" className="fullScreen" onClick={ this.handleFullscreen.bind(this) }> | Fullscreen</a>
          <span> | <a href="#" onClick={ this.handleMute.bind(this) }>Mute</a></span>
        </div>
      </div>
    )
  }
}

export { Player as default, Player }
