import React from 'react'
import './CSS/Personal.css';



function Personal({FormData,setFormData}) {



  return (
    <div className='personal-container'>
        <input type='Date of birth' value={FormData.dateofbirth} 
        onChange={(event)=>setFormData({...FormData, dateofbirth: event.target.value})}  placeholder='DD/MM/YYYY' />
        <input type='text' value={FormData.gender} onChange={(event)=>setFormData({...FormData, gender: event.target.value})}  placeholder='Gender'/>
        <input type='Phone number' value={FormData.phonenumber} onChange={(event)=>setFormData({...FormData, phonenumber: event.target.value})}  placeholder='Enter Phone Number...'/>
    </div>
  )
}

export default Personal;