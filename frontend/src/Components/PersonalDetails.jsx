import React from "react";
import { FormControl, Select,MenuItem ,InputLabel} from "@mui/material";
import { Link } from "react-router-dom";
const PersonalDetails = () => {
    const [identity, setIdentity] = React.useState('');

  const handleChange = (event) => {
    setIdentity(event.target.value);
  };
  return (
    <>
    <div style={{ borderRadius:'2px', height:'500px',width:'400px', display:'flex', justifyContent:'center',marginLeft:'400px'}}>
    <form className="w-full max-w-sm" autoComplete="off" method="post">
  <div className="md:flex md:items-center mb-6" style={{marginTop:'50px'}}>
  <h1 className="text-base font-semibold leading-7 text-gray-900">Personal Details</h1>
</div>

    <div style={{display:'flex',justifyContent:'center'}}>
    <div style={{width:'200px'}}>
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name" style={{fontSize:'20px'}}>
        Full Name:-
      </label>
    </div>
    <div style={{marginTop:'-10px'}}>
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " id="name"  type="text" placeholder="Enter your fullname" style={{height:'20px',width:'300px',marginTop:'10px',marginLeft:'10px'}} autoComplete="false"/>
    </div>
    </div>

    <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
  <div style={{width:'200px'}}>
      <label className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="mname" style={{fontSize:'20px'}}>
        Mother Name:-
      </label>
    </div>
    <div style={{marginTop:'-10px'}}>
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " id="mname"  type="text" placeholder="Enter your mother's name" style={{height:'20px',width:'300px',marginTop:'10px'}} autoComplete="false"/>
    </div>
    </div>

    <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
  <div style={{width:'200px'}}>
      <label className=" text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="fname" style={{fontSize:'20px'}}>
        Father Name:-
      </label>
    </div>
    <div style={{marginTop:'-10px'}}>
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " id="fname"  type="text" placeholder="Enter your father's name" style={{height:'20px',width:'300px',marginTop:'10px'}} autoComplete="false"/>
    </div>
    </div>


    <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
        <div style={{width:'200px'}}>
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="contact number" style={{fontSize:'20px'}}>
        Contact Number:-
      </label>
    </div>
    <div style={{marginTop:'-10px'}}>
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " id="contact number"  type="number" placeholder="Enter your Contact Number" style={{height:'20px',width:'300px',marginTop:'10px'}} autoComplete="false"/>
    </div>
    </div>

    <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
  <div style={{width:'200px'}}>
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="gender" style={{fontSize:'20px'}}>
        Gender:-
      </label>
    </div>
    <div style={{marginTop:'-10px'}}>
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " id="gender"  type="number" placeholder="Gender" style={{height:'20px',width:'300px',marginTop:'10px'}} autoComplete="false"/>
    </div>
    </div>

    <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
  <div style={{width:'200px'}}>
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="dob" style={{fontSize:'20px'}}>
        Date of Birth:-
      </label>
    </div>
    <div style={{marginTop:'-10PX'}}>
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " id="dob"  type="date" placeholder="Enter your D.O.B" style={{height:'20px',width:'300px',marginTop:'10px'}} autoComplete="false"/>
    </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <div style={{ width: '200px' }}>
        <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="fname" style={{ fontSize: '20px' }}>
          Select your Identity:-
        </label>
      </div>
      <div style={{ marginTop: '-10px' }}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Identity</InputLabel>
          <Select
            style={{width:'300px'}}
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={identity}
            onChange={handleChange}
            label="Identity"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'adhar'}>Aadhar</MenuItem>
            <MenuItem value={'pan'}>Pan</MenuItem>
            <MenuItem value={'passport'}>Passport</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>



<div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
  <div style={{width:'200px'}}>
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="id-no." style={{fontSize:'20px'}}>
        Identification Number:-
      </label>
    </div>
    <div style={{marginTop:'-10px'}}>
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " id="id-no."  type="number" placeholder="Enter your identification number" style={{height:'20px',width:'300px',marginTop:'10px'}} autoComplete="false"/>
    </div>
    </div>


    <div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
  <div style={{width:'200px'}}>
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="address" style={{fontSize:'20px'}}>
       Residential Address:-
      </label>
    </div>
    <div style={{marginTop:'-10px'}}>
      <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " id="email"  type="text" placeholder="Enter your address" style={{height:'50px',width:'300px',marginTop:'10px'}} autoComplete="false"/>
    </div>
    </div>



  <div className="md:flex md:items-center">
    <div className="md:w-2/3">
        <Link to='/educationdetails'>
      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "  type="button" style={{marginTop:'20px',height:'30px',width:'310px',borderRadius:'5px',backgroundColor:'darkblue',color:'white',border:'5px'}}>
        Save And Next
      </button>
      </Link>
    </div>
  </div>
  <div>

    
  </div>
  
  
</form>
</div>
    
    </>
  );
};

export default PersonalDetails;
