import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { FaArrowLeft } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";



const News = () => {
    const news = useLoaderData();
    const { id } = useParams();
    const aNews = news.find(singleNews => singleNews._id === id)
    const { image_url, title, details, category_id } = aNews;
    const sameCategoryNews = [];
    for (const categoryNews of news) {
        const mNews = categoryNews.category_id === category_id;
        if (mNews) {
            sameCategoryNews.push(categoryNews)
        }
    }

    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-1 md:grid-cols-7 mt-20">
                <div className="col-span-5">
                    <div className="card card-compact bg-base-100 border shadow-xl p-4 pb-10">
                        <figure><img src={image_url} alt="Shoes" className="w-full" /></figure>
                        <div className="">
                            <h2 className="text-2xl py-5 font-bold">{title}</h2>
                            <p className="text-justify">{details}</p>
                            <div className="mt-10">
                                <button className="flex items-center px-3 py-2 bg-rose-600 text-white">
                                    <FaArrowLeft /> <span className="ml-1">All news in this category</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="text-2xl mt-7 mb-5">Editors Insight</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {
                                sameCategoryNews?.map(category => <>
                                    <Link to={`/news/${category._id}`}>
                                        <div className="card card-compact bg-base-100 shadow-xl p-2 pb-4">
                                            <figure><img src={category.image_url} alt="Shoes" /></figure>
                                            <div className="">
                                                <h2 className="text-justify my-5">{category.title.slice(0, 50)}</h2>
                                                <p className="flex items-center">
                                                    <CiCalendar />
                                                    <span className="ml-1">{category.author.published_date}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </>)
                            }
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;