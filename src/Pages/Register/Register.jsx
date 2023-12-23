import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

const Login = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister=(e)=>{
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        // console.log(name, photo, email, password);

        createUser(email, password)
        .then(result =>{
            console.log(result.user)
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: photo
              }).then(() => {
                alert('User Created Successfully')
              }).catch((error) => {
                console.log(error)
              });
        })
        .catch(error=> console.log(error))

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="md:w-1/2 mx-auto">
                <h2 className="text-3xl my-10 text-center font-bold">This is Register</h2>
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>                            
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">Register</button>
                            </div>
                        </form>
                        <p className="ml-8 pb-8">Already Have a account. Please <Link to="/login" className="text-green-600">Login your Account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;