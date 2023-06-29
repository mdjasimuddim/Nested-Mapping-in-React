import React from 'react'
 const date = new Date();
 const dateName = date.getDate();
 const monthName = date.getMonth();
 const YearName = date.getFullYear();

export default function Card(props) {
    const {titleText, descText} = props;
  return (
    <div className='Card'>
        <h3 className='cardTitle'>{titleText}</h3>
        <p className='cardDesc'>{descText}</p>
        <p className='cardFooter'>{dateName + "/" + monthName + "/" + YearName}</p>
    </div>
  )
}
