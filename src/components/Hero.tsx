import Link from 'next/link';
import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa';

export default function Hero() {
  return (
      <div className="max-w-5xl md:text-left h-[70vh] flex justify-center flex-row items-center mx-auto">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline text-gray-800">
              Ship authentic.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#732fff] to-[#a75eff] pb-4">
              RouteX
            </span>
            <span className="block font-semibold text-[#732fff] text-2xl">
              Provenance with trust
            </span>
          </h1>
          <p className="mt-3 text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Verify the authenticity of products by unique product ID.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex lg:justify-start md:flex-col lg:flex-row">
            <div>
              <Link
                href="/"
                className="w-full md:w-[70%] lg:w-full flex items-center justify-center px-7 py-3 gap-2 border-0 border-transparent text-base font-medium rounded-3xl text-gray-200 bg-gradient-to-r from-[#a13bf7] to-[#7500ff] shadow-lg md:py-2 md:text-lg md:px-8"
              >
                Track <FaLocationArrow size={15} />
              </Link>
            </div>
          </div>
        </div>
        <div className="md:flex hidden my-auto w-[30%] md:w-[60%] ml-10 items-end">
          <Image
            src="https://github.com/vrajdesai78/Learning-GIT/assets/43074241/e37b7212-84ec-4f17-9c12-6a1575d603cd"
            width="600"
            height="300"
            className="ml-10"
            alt="Banner"
          />
        </div>
      </div>
  );
}
