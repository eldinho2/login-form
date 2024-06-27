import { UserForm } from "./UserForm";

import { GoogleSVG, FacebookSVG, AppleSVG, TwitterSVG } from "../assets/SVGs";

type AuthPageProps = {
  isRegister: boolean;
};

const handleBack = () => {
  const currentURL = window.location.href;
  const isRegister = currentURL.includes('registro');

  if (isRegister) {
    window.location.href = "/";
  } else {
    window.location.href = "/registro";
  }
}

export const AuthPage = ({ isRegister }: AuthPageProps) => {
  return (
    <div className="min-h-[812px] w-[475px] border-2 shadow-2xl select-none">
      <section>
        <div className="h-[155px] flex overflow-hidden relative">
          <svg
            width="32"
            height="32"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative top-[70px] left-[30px] cursor-pointer"
            onClick={() => handleBack()}
          >
            <path
              d="M28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28C21.732 28 28 21.732 28 14ZM14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.4142 13L20 13C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15L10.4142 15L14.7071 19.2929C15.0976 19.6834 15.0976 20.3166 14.7071 20.7071C14.3166 21.0976 13.6834 21.0976 13.2929 20.7071L7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289Z"
              fill="#8B8B8B"
            />
          </svg>
          <img
            className="w-[275px] h-[275px] object-cover relative -rotate-[115deg] top-[10px] left-[220px] grayscale opacity-60"
            src="/public/1f0eac6f343f568563a2361230744276-removebg-preview.png"
            alt="Login BackGround Plant Image"
          />
        </div>
        <h1 className="text-3xl font-normal ml-8">
          {isRegister ? "Create Account" : "Login"}
        </h1>
        <div className="mt-6">
          {isRegister ? (
            <>
              <p className="ml-8 text-base text-gray-500">Welcome back!</p>
              <p className="ml-8 text-base text-gray-500">
                Please login to continue
              </p>
            </>
          ) : (
            <>
              <p className="ml-8 text-base text-gray-500">
                Enter your information below or continue
              </p>
              <p className="ml-8 text-base text-gray-500">
                with social media account
              </p>
            </>
          )}
        </div>
      </section>
      <section className="flex items-center justify-center mt-6">
        <UserForm isRegister={isRegister} />
      </section>
      <section className="mt-16 mb-4">
        <div className="flex flex-col justify-center items-center gap-7">
          {isRegister ? (
            <p className="text-gray-500 font-thin">
              Or Register with Social Accounts
            </p>
          ) : (
            <p className="text-gray-500 font-thin">
              Or Continue with Social Accounts
            </p>
          )}
          <div className="flex justify-center items-center gap-3">
            <div className="rounded-md p-5 shadow-md cursor-pointer">
              <GoogleSVG />
            </div>
            <div className="rounded-md p-5 shadow-md cursor-pointer">
              <FacebookSVG />
            </div>
            <div className="rounded-md p-5 shadow-md cursor-pointer">
              <AppleSVG />
            </div>
            <div className="rounded-md p-5 shadow-md cursor-pointer">
              <TwitterSVG />
            </div>
          </div>
          {isRegister ? (
            <p className="text-gray-500 font-thin">
              Already have an account?{" "}
              <span
                className="font-thin text-[#BC8363] cursor-pointer"
                onClick={() => (window.location.href = "/")}
              >
                Login Now
              </span>
            </p>
          ) : (
            <p className="font-thin text-gray-500">
              Don’t have an account?{" "}
              <span
                className="font-thin text-[#BC8363] cursor-pointer"
                onClick={() => (window.location.href = "/registro")}
              >
                Create Now
              </span>
            </p>
          )}
        </div>
      </section>
    </div>
  );
};
