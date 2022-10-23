import React from 'react'
import Radarchart from '../chart/Radarchart'
import ProgressBar from './ProgressBar'

const PersonalData = () => {
  const testData = [
    {name:'mind',bgcolor:"#bd1919",completed:80,type:"INTROVERTED"},
    {name:'energy',bgcolor:"#fac020",completed:20,type:"INTUITIVE"},
    {name:'nature',bgcolor:"#37bd19",completed:53,type:"FEELING"},
    {name:'tactics',bgcolor:"#1976bd",completed:20,type:"PROSPECTING"},
    {name:'identity',bgcolor:"#bd19a4",completed:53,type:"ASSERTIVE"}
  ]
  return (
      <div>
        <h1><b>personality</b></h1>
         <div class="row">
            <div class='col-12 col-md-6 ml-5'>
            <Radarchart/>
            </div>
            <div class='col-6 col-md-4 mb-3'>
                <ul class="list-group">
                  {testData.map((item,idx) =>(
                    <li class="list-group-item">
                      <div class='row'>
                        <p>{item.name}</p>
                        <ProgressBar
                          key={idx}
                          bgcolor={item.bgcolor}
                          type={item.type}
                          completed={item.completed}
                          />
                      </div>  
                    </li>
                  ))}
                </ul>
            </div>
         </div>
       </div>
  )
}

export default PersonalData