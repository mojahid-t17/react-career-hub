
import banner from '../../assets/images/user.png';
const Banner = () => {
    return (
        <div className='md:flex justify-center items-center'>
            <div className='mt-20 p-4'>
                <h1 className="text-7xl font-bold">
                One Step Closer <br /> To Your  <br />
                <span className="text-violet-400"> Dream Job</span>
                </h1>
                <p className="text-[#757575] text-xl my-6">
                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>
                <div>
                    <button className='bg-purple-400 text-white font-bold px-3 py-2 rounded hover:bg-purple-500'>Get Started</button>
                </div>
            </div>
            <div className=''>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;