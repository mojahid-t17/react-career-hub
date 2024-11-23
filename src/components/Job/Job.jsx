import PropTypes from 'prop-types';
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Job = ({job}) => {
    const {id,logo,company_name,remote_or_onsite,location,job_type,salary,job_title}=job;
    return (
        <div className='mb-6 bg-slate-50  card card-compact w-96 p-6 mx-auto'>
           <div className='mb-8'>
            <img className='h-10 w-28 font-bold' src={logo}alt="" />
           </div>
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
           <div>
            <Link to={`/job/${id}`}>
            <button className='bg-purple-400 px-3 py-2 rounded text-white mb-7 hover:bg-purple-500'>View Details</button></Link>
           </div>
        </div>
    );
};

Job.propTypes={
    job: PropTypes.object
}
export default Job;