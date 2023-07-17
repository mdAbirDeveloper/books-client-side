import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";

const Login = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        console.log(
          `the user is signIn successfully by use ${data.user.email} email`
        );
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content">
          <div className="card-body">
            <form className="lg:w-96 w-full" onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold text-green-500">Login</h2>

              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className=" input input-bordered w-full"
              />

              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                className="input input-bordered w-full"
              />
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
                <p>
                  if you are new for this website{" "}
                  <Link className="text-primary" to={"/signup"}>
                    signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
