import { Link } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";


const NewsCard = ({ news }) => {
    const { _id, title, image_url, details, author, rating } = news;
    return (
        <div className="card bg-base-100 shadow-xl border rounded-md mb-7">
            <div className="flex bg-base-200 items-center justify-between px-7 py-4 rounded-t-md">
                <div className="flex items-center">
                    <img src={author.img} alt="" className="w-12 h-12 rounded-full mr-4" />
                    <div className="">
                        <p>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div className="flex text-2xl">
                    <FaRegBookmark className="mr-1" />
                    <CiShare2 />
                </div>
            </div>
            <div className="px-5">
                <h2 className="text-xl font-bold py-4">{title}</h2>
                <figure><img src={image_url} alt="Shoes" className="w-full rounded-none mb-2" /></figure>
                <div className="">

                    <p>
                        {
                            details?.length > 200
                                ?
                                <p className="mt-2">{details?.slice(0, 200)} <br /> 
                                <Link
                                    to={`/news/${_id}`}
                                    className="text-orange-500 font-medium"
                                >Read More...</Link></p>
                                :
                                <p>{details}</p>
                        }
                    </p>
                    <hr className="mt-4" />
                    <div className="flex justify-between mt-5 pb-5">
                        <div className="flex items-center">
                            <div className="text-orange-500 flex">
                                <FaStar></FaStar>
                                <FaStar className="ml-1"></FaStar>
                                <FaStar className="ml-1"></FaStar>
                                <FaStar className="ml-1"></FaStar>
                                <FaStar className="ml-1"></FaStar>
                            </div>
                            <span className="ml-2">{rating?.number}</span>
                        </div>
                        <div className="flex items-center">
                            <FaEye className="text-2xl mr-2"></FaEye><span>499</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;