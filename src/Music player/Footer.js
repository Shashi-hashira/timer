import React,{useState} from 'react'

const Footer = () => {
  const [click,setClick] = useState(0);
    return (
      <div>
        <p>Your no.of Attempt =  {click } times</p>
        <button onClick={() => setClick(click+1)}>click here</button>
        <img src='' alt='play'/>
      </div>
    )
  }

export default Footer
