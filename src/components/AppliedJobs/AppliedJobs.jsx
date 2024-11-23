import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobs } from "../../Utility/localStorage";
import AppliedJob from "./appliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [jobApplied, setJobbApplid] = useState([]);



 
  useEffect(() => {
    const stordIds = getStoredJobs();
    const appliedJobs = jobs.filter((job) => stordIds.includes(job.id));
    setJobbApplid(appliedJobs);
  }, []);
  //    console.log(jobApplied)



  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-gray-800 my-10">
        Applied Jobs
      </h1>
      <div className="grid grid-cols-1 ">
        
        {jobApplied.map((job) => (
          <AppliedJob key={job.id} job={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
