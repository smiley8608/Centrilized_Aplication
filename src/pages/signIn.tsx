const SignIn = () => {
  const submitHandler = () => {};

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-3/12 bg-slate-600 p-3 rounded-lg border border-black">
        <form className="p-3 mt-3 mx-6" onSubmit={submitHandler}>
          <div className="gap-3">
            <label className="font-nunito font-bold text-xl">Email :</label>
            <br />
            <input
              className="w-5/6 p-3 mx-5 rounded-xl"
              type={"email"}
              onChange={() => {}}
            />
          </div>
          <div className="gap-3  mt-3">
            <label className="font-nunito font-bold text-xl">Password :</label>
            <br />
            <input
              className="w-5/6 p-3 mx-5 rounded-xl"
              type={"password"}
              onChange={() => {}}
            />
          </div>
          <div className="flex justify-center mt-5">
            <button className=" p-4 bg-black rounded-2xl text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
