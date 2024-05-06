
import { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { Result } from 'postcss';

const Register = () => {
  const {createUser} = useContext(AuthContext)



    const handelRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        // Create user
        createUser(email, password)
        .then(Result =>{
          console.log(Result.user);
        })
        .catch(error =>{
          console.error(error);
        })

    }
    return (
        <div>
             <Navbar></Navbar>
            <div>
            <h2 className='my-10 text-3xl text-center'>Please Register</h2>
            <form onSubmit={handelRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name' type="text" placeholder="Enter your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo-Url</span>
          </label>
          <input name='photo' type="text" placeholder="give me your Photo link" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className='text-center'>Already Have an account? <Link className='text-blue-600 font-semibold' to="/login">Login</Link> </p>
    </div>
        </div>
    );
};

export default Register;