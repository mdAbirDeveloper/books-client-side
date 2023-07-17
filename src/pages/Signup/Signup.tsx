import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";

const SignUp = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        console.log(
          `the user is created successfully by use ${data.user.email} email`
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
              <h2 className="text-2xl font-bold text-green-500">Sing Up</h2>

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
                  Sign Up
                </button>
                <p>
                  if you have a account then{" "}
                  <Link className="text-primary" to={"/login"}>
                    Login
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

export default SignUp;
