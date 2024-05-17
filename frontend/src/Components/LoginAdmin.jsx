
import { Link } from "react-router-dom";
const LoginAdmin = () => {
  return (
    <>
    <div style={{backgroundColor:'lightblue',borderRadius:'2px solid black',height:'400px',width:'400px', display:'flex', justifyContent:'center',marginLeft:'400px'}}>
    <form className="w-full max-w-sm" autoComplete="off" method="post">
  <div className="md:flex md:items-center mb-6" style={{marginTop:'50px'}}>
  <h1 className="text-base font-semibold leading-7 text-gray-900">Sign in as Admin</h1>

    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="username" style={{fontSize:'20px'}}>
        Username
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " id="username"  type="text" placeholder="Enter your username" style={{height:'20px',width:'300px',marginTop:'10px'}} autoComplete="false"/>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3" style={{marginTop:'10px'}}>
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="password" style={{fontSize:'20px'}}>
        Password
      </label>
    </div>
    <div className="md:w-2/3">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="password" type="password" placeholder="Enter your password" style={{height:'20px',width:'300px',marginTop:'10px'}} autoComplete="false"/>
    </div>
  </div>

  <div className="md:flex md:items-center">
    <div className="md:w-2/3">
      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "  type="button" style={{marginTop:'20px',height:'30px',width:'310px',borderRadius:'5px',backgroundColor:'darkblue',color:'white',border:'5px'}}>
        Sign In
      </button>
    </div>
  </div>
  <div>

    
  </div>
  <div style={{marginTop:'10px',backgroundColor:'transparent'}}>
  <Link to="/register" style={{fontSize:'18px',color:'green'}}>If your are an end user Click here to continue...</Link>
  </div>
  
</form>
</div>
    
    </>
  );
};

export default LoginAdmin;
