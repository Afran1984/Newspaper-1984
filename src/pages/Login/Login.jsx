
import { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log('location in the login page',location);
    

    const handelLogin = e =>{
      navigate('/');
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signIn(email, password)
        .then(result => {
          console.log(result.user);
          // navigate After Login

        })
        .catch(error => {
          console.error(error);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
            <h2 className='my-10 text-3xl text-center'>Please Login</h2>
            <form onSubmit={handelLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
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
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className='text-center'>Do not Have an account? <Link className='text-blue-600 font-semibold' to="/register">Register</Link> </p>
    </div>
    </div>
    );
};

export default Login;


// import { useContext } from 'react';
// import Navbar from '../Shared/Navbar/Navbar';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../Provider/AuthProvider';

// const Login = () => {
//     const { signIn } = useContext(AuthContext);
//     const location = useLocation();
//     const navigate = useNavigate();

//     const handleLogin = e => {
//         e.preventDefault();
//         const form = new FormData(e.currentTarget);
//         const email = form.get('email');
//         const password = form.get('password');

//         signIn(email, password)
//             .then(result => {
//                 console.log(result.user);
//                 // Navigate to previous location if available, otherwise go to root
//                 navigate(location?.state?.from || '/');
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     };

//     return (
//               <div>
//                   <Navbar></Navbar>
//                   <div>
//                   <h2 className='my-10 text-3xl text-center'>Please Login</h2>
//                   <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input name='email' type="email" placeholder="email" className="input input-bordered" required />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input name='password' type="password" placeholder="password" className="input input-bordered" required />
//                 <label className="label">
//                   <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                 </label>
//               </div>
//               <div className="form-control mt-6">
//                 <button className="btn btn-primary">Login</button>
//               </div>
//             </form>
//             <p className='text-center'>Do not Have an account? <Link className='text-blue-600 font-semibold' to="/register">Register</Link> </p>
//           </div>
//           </div>
//           );
// };

// export default Login;
