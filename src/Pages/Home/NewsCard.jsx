import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { _id ,title, image_url, details } = news;
    return (
        <div className="card bg-base-100 shadow-xl rounded-none">
            <figure><img src={image_url} alt="Shoes" className="w-full rounded-none" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>
                    {
                        details.length > 200 
                        ? 
                        <p>{details.slice(0,200)} <Link
                        to={`/news/${_id}`}
                        className="text-blue-600 font-bold"
                        >Read More...</Link></p>
                        :
                        <p>{details}</p>
                    }
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;