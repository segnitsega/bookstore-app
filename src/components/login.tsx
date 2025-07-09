import hero from "../assets/hero.jpg";

export const Login = () => {
  return (
    <div className="flex flex-row gap-32">
      <img
        src={hero}
        alt="background-book-image"
        className="hidden lg:block w-[600px] h-screen "
      />

      <div className="p-8 flex flex-col gap-4 w-[400px]">
        <h1 className="flex justify-center">Join BookHaven for free</h1>

        <form action="post" className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your first name"
            className="outline-none border border-gray-500 p-3 shadow-lg rounded-md"
          />
          <input
            type="text"
            placeholder="Your last name"
            className="outline-none border border-gray-500 p-3 shadow-lg rounded-md"
          />
          <input
            type="text"
            placeholder="Your email"
            className="outline-none border border-gray-500 p-3 shadow-lg rounded-md"
          />
          <input
            type="text"
            placeholder="Create a password"
            className="outline-none border border-gray-500 p-3 shadow-lg rounded-md"
          />
          <input
            type="text"
            placeholder="Confirm password"
            className="outline-none border border-gray-500 p-3 shadow-lg rounded-md"
          />
          <input
            type="button"
            value="Submit"
            className="outline-none p-3 rounded-md bg-orange-400 text-white"
          />
          <p className="flex justify-center mt-4">or sign up with</p>
          <input
            type="button"
            value="Google"
            className="outline-none p-3 rounded-md bg-orange-400 text-white "
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
