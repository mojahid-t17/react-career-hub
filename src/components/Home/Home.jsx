import Banner from "../Banner/Banner";
import FeatureJobs from "../FeatureJobs/FeatureJobs";
import JobCategories from "../JobCatagories/JobCategories";

const Home = () => {

   
    return (
        <div>
            <Banner></Banner>
           <JobCategories></JobCategories>
           <FeatureJobs></FeatureJobs>
        </div>
    );
};

export default Home;