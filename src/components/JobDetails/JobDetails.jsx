import { AiOutlineDollarCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { getStoredJobs, saveAppliedJobs } from "../../Utility/localStorage";

const JobDetails = () => {
    const {id}=useParams();
    // console.log(id)
    const intId=parseInt(id);
    const jobs=useLoaderData();
    
     const job=jobs.find(job=>job.id===intId);
    //  console.log(job)
   const handleAppliedJobs=()=>{
    
    const stordIds=getStoredJobs();
    const exist=stordIds.find(storeId=>storeId===intId)
    console.log(!exist)
    if(exist){
        // console.log('applied already')
        toast.error('Already applied for the job!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
           
            });
    }
    else{
        toast.success('you have applied successfully');
        saveAppliedJobs(intId);
    }
   
   }
    return (
        <div>
               <h1 className="text-6xl text-center font-bold my-8">Job Details for {job.id}</h1>
            <div className="md:grid md:grid-cols-4 ">
              
                <div className="col-span-3 space-y-8 p-10">
                 <h2><span className="text-xl font-bold">Job Description:</span> {job.job_description
                 }</h2>
                 <h2><span className="text-xl font-bold">Job Responsibility: </span> {job.job_responsibility}</h2>
                 <h2 className="text-xl font-bold">Educational Requirements:</h2>
                 <p>{job.educational_requirements}</p>
                 <h2 className="text-xl font-bold">Experiences:</h2>
                 <p>{job.experiences}</p>
                </div>
                <div>
                   <div  className="bg-[#9873FF19] p-7">
                   <h3 className="text-xl font-bold my-5" >Job Details:</h3>
                     <hr className="w-4/5 mx-auto my-3  bg-purple-300" />
                     <h2 className="flex items-center gap-x-2">
                     <span className="text-purple-400   flex items-center text-xl"><AiOutlineDollarCircle /></span> <span>Salary: {job.salary}</span>
                     </h2>
                     <h2 className="flex items-center my-4 gap-x-2"><span className="text-purple-400 text-xl"><HiBriefcase /></span> <span>Job Title: {job.job_title}</span></h2>
                     <h1 className="text-2xl font-bold">Contact Information</h1>
                     <hr className="my-6" />

                     <h2 className="flex items-center space-x-2"><span><FaPhoneAlt /></span> <span>Phone: {job.contact_information.phone}</span></h2>
                     <h2 className="flex  space-x-2 my-4"><span className="font-bold text-xl mt-1 mr-2"><MdEmail /></span> <span>Email: {job.contact_information.email}</span></h2>
                     <h2 className="flex space-x-2"><span className="font-bold text-xl mt-1 mr-2"><CiLocationOn /></span> Location: {job.contact_information.address}</h2>
                   </div>
                   <div>
                   
                    <button onClick={handleAppliedJobs}  className="bg-purple-400 px-3 py-2 rounded text-white mb-7 hover:bg-purple-500 w-full my-5">Apply Now</button>
                   
                    
                 
                   </div>
                   <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default JobDetails;