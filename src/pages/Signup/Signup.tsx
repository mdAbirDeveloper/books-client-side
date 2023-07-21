import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { useAppDispatch } from "../../Redux/hooks";
import { createUser } from "../../Redux/features/user/UserSlice";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const SignUp = () => {
  // const handleSubmit = (event: any) => {
  //   // const dispatch = useAppDispatch();
  //   const form = event.target;
  //   const email = form.email.value;
  //   const password = form.password.value;

  //   // dispatch(createUser({ email: email, password: password }));

  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((data) => {
  //       console.log(
  //         `the user is created successfully by use ${data.user.email} email`
  //       );
  //     })
  //     .then((error) => {
  //       console.log(error);
  //     });
  // };

  const { register, handleSubmit } = useForm<Inputs>();

  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(createUser({ email: data.email, password: data.password }));
  };

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-2xl font-bold text-green-500">Sing Up</h2>

              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                placeholder="Enter your email"
                {...register("email")}
                className=" input input-bordered w-full"
              />

              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                placeholder="Enter your Password"
                {...register("password", { required: true })}
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
