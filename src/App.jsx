import React, { useRef } from 'react'
import * as tf from '@tensorflow/tfjs'
import './App.css'
import * as facemesh from '@tensorflow-models/facemesh'
import Webcam from 'react-webcam'


export default function App() {

  //setup references
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)

  return (
    <>
      <div className="App">

        <header className='App-header'>
          <Webcam ref={webcamRef} style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480,
          }} />
          <canvas ref={canvasRef} style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480,
          }} />
        </header>
      </div>
    </>
  )
}
