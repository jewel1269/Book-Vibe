import { NavLink } from "react-router-dom";
import bannerImage from '../../assets/Datting-removebg-preview.png'



const Banner = () => {
    return (
        <div className="p-6 py-12  bg-slate-100 rounded-2xl shadow-xl sha dark:bg-slate-100 text-gray-900 dark:text-gray-50">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <h2 className="text-center text-6xl tracking-tighter font-bold">
                    Books to freshen <br /> up your bookshelf....
                    <br />
                    <NavLink to={'listedBook'}><button className="btn btn-outline w-44 btn-accent">View The List</button></NavLink>
                    </h2>
                    <div className="space-x-2 text-center py-2 lg:py-0">
                        <img src={bannerImage} alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;