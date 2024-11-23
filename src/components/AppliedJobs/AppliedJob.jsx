/* eslint-disable react/prop-types */
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const AppliedJob = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,salary,location,job_type}=job;
    return (
        <div className="border border-3 my-4 py-5 flex justify-between items-center">
           <div className="flex"> 
            <div className="bg-purple-50 m-4 p-8 flex items-center justify-center w-auto">
                <img src={logo} alt="" className="w-32" />
            </div>
            <div className="ms-4">
           <div>
            <h1 className='text-2xl text-[#474747] font-bold mb-2'>{job_title}</h1>
            <p className='text-[#474747] text-xl font-semibold'>{company_name}</p>
           </div>
           <div className='my-4 space-x-4'>
            <span className='border border-purple-400 py-2 px-3 text-xs font-bold rounded text-purple-500'><button>{remote_or_onsite}</button></span>
            <span className='border border-purple-400 py-2 px-3 text-xs font-bold rounded text-purple-500'><button>{job_type}</button></span>
           </div>
           <div className='flex items-center space-x-8 my-5'>
              
                <h2 className='flex items-center text-xl text-[#757575]'><IoLocationOutline />{location}</h2> 
                <h2 className='flex items-center text-xl text-[#757575]'><AiOutlineDollarCircle />{salary}</h2>
             
           </div>
            </div>
           </div>
           <div className="mr-8">
           <Link to={`/job/${id}`}>
           <button className='bg-purple-400 px-4 py-2 rounded text-white  mb-7 hover:bg-purple-500'>View Details</button></Link>

           </div>
        </div>
    );
};

export default AppliedJob;