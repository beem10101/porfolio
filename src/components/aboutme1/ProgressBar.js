import React from 'react'

const ProgressBar = (props) => {
    const {type,bgcolor,completed} = props;
    const containerStyes = {
        height:20,
        width:'100%',
        backgroundColor:"e0e0de",
        margin:10
    }
    const fillterStyles = {
        height:'100%',
        width:`${completed}%`,
        backgroundColor:bgcolor,
        testAglign:"right"
    }
    const labelStyles = {
        padding:5,
        color:'white',
        fontWeight:'bold'
    }
  return (
        <div style={containerStyes}>
            <div style={fillterStyles}>
                <span style={labelStyles}></span>
            </div>
            {`${type}`}
        </div>
    )
}

export default ProgressBar