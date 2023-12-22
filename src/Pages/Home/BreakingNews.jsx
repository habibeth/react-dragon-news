import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div className="flex items-center">
            <button className="btn btn-secondary uppercase rounded-none mr-5">Breaking News</button>
            <Marquee pauseOnHover={true}>
                <Link to="" className="ml-10">
                    I can be a React component, multiple React components, or just some text......
                </Link>
                <Link to="" className="ml-10">
                    I can be a React component, multiple React components, or just some text......
                </Link>
                <Link to="" className="ml-10">
                    I can be a React component, multiple React components, or just some text......
                </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;