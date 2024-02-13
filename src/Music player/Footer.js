import React,{useState} from 'react'

const Footer = () => {
  const [click,setClick] = useState(0);
    return (
      <div>
        <p>Your no.of Attempt =  {click } times</p>
        <button onClick={() => setClick(click+1)}>click here</button>
        <ul>
          <li>
            {/* <img  style ={{height:'155px'}}src={'Images/dev.png'}/>
            <img  style ={{height:'155px'}} src='https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3'/> */}
          </li>
        </ul>
      </div>
    )
  }

export default Footer
