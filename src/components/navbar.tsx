const NavBar = () => {
  return (
    <div className="w-full bg-cyan-700 p-3 flex justify-end">
      <div className="font-nunito font-bold text-lg p-3 space-x-4 ">
        <a
          href="/"
          className="active:text-white hover:bg-blue-800 p-3 rounded-full"
        >
          Home{" "}
        </a>
        <a
          href="/deposit"
          className="active:text-white hover:bg-blue-800 p-3 rounded-full"
        >
          Deposit
        </a>
        <a
          href="/withdraw"
          className="active:text-white hover:bg-blue-800 p-3 rounded-full"
        >
          Withdraw
        </a>
        <a
          href="/transfer"
          className="active:text-white hover:bg-blue-800 p-3 rounded-full"
        >
          Transfer
        </a>
        <a
          href="/signout"
          className="active:text-white hover:bg-blue-800 p-3 rounded-full"
        >
          SignOut
        </a>
        <a
          href="/signin"
          className="active:text-white hover:bg-blue-800 p-3 rounded-full"
        >
          SignIN
        </a>
        <a
          href="/signup"
          className="active:text-white hover:bg-blue-800 p-3 rounded-full"
        >
          SignUp
        </a>
      </div>
    </div>
  );
};

export default NavBar;
