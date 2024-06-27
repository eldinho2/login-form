import { TypeisRegister } from '../types'
import { GoogleSVG, FacebookSVG, AppleSVG, TwitterSVG } from "../assets/SVGs";

export const FooterAuth = ({isRegister, setIsRegister}: TypeisRegister) => {
  isRegister = isRegister ?? false;
  return (
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
          className="font-thin px-1 text-[#BC8363] cursor-pointer"
          onClick={() => setIsRegister && setIsRegister(false)}
        >
          Login Now
        </span>
      </p>
    ) : (
      <p className="font-thin text-gray-500">
        Don’t have an account?
        <span
          className="font-thin px-1 text-[#BC8363] cursor-pointer"
          onClick={() => setIsRegister && setIsRegister(true)}
        >
          Create Now
        </span>
      </p>
    )}
  </div>
  )
} 