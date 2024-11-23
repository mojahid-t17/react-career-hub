import PropTypes from 'prop-types';
const Category = ({category}) => {
    const {logo,category_name,availability}=category;
    return (
        <div>
            <div className='flex flex-col items-center bg-gradient-to-r from-violet-50 to-purple-50 m-4 p-5 rounded-xl'>
           <div className='bg-violet-100 p-5 '>
           <img src={logo} alt="" />
           </div>
                 <h4 className='text-xl my-3'>{category_name}</h4>
                <p className='text-[#A3A3A3]'>{availability}</p>
            </div>
            

        </div>
    );
};

Category.propTypes={
    category: PropTypes.object
}
export default Category;