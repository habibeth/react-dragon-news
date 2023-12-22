import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qz1 from '../../../assets/qZone1.png'
import qz2 from '../../../assets/qZone2.png'
import qz3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-xl font-bold mb-4">Login With</h2>
                <button className="btn btn-outline btn-success text-black w-full">
                    <FaGoogle />
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Login With Github
                </button>
            </div>
            <div className="p-4 mb-6">
                <h2 className="text-xl font-bold mb-4">Find Us on</h2>
                <a className="flex p-4 items-center text-xl border rounded-t-lg text-blue-600" href="">
                    <FaFacebook className="mr-3"></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className="flex p-4 items-center text-xl border border-y-0 text-sky-600" href="">
                    <FaTwitter className="mr-3"></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className="flex p-4 items-center text-xl border rounded-b-lg text-pink-600" href="">
                    <FaInstagram className="mr-3"></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-xl font-bold mb-4">Q-Zone</h2>
                <img src={qz1} alt="" />
                <img src={qz2} alt="" />
                <img src={qz3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;