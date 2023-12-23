import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './LeftSideNav.css'


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className="text-2xl">All Category</h2>
            <div className="left-side-nav">
                {
                    categories?.map(category => <NavLink
                        className="block ml-4 text-xl py-4"
                        to={`/category/${category.id}`}
                        key={category.id}
                    >{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;