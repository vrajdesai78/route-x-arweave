import Image from 'next/image';
import { FC } from 'react';

const About: FC = () => {
  return (
    <div id="about" className="pt-5 pb-10">
      <div className="flex">
        <Image src={'https://github.com/vrajdesai78/Learning-GIT/assets/43074241/d9bf17a1-72a7-4c07-828e-2f4c4d224468'} alt="RouteX" width={500} height={500} />
        <div className="flex flex-col justify-center  max-w-3xl mx-auto">
          <h2 className="font-semibold justify-center items-center text-5xl text-[#732fff] leading-[4rem]">
            Provenance of Product
          </h2>
          <div className="relative mt-10 bg-white/30 text-xl text-justify leading-8 backdrop-blur-sm bg-opacity-20 p-5 shadow-lg border border-violet-200 rounded-lg">
            The RouteX is an platform to verify the authenticity of the product
            and take logistics operations on-chain. The user can have confidence
            that they are purchasing genuine products and not counterfeits. It
            actually provides the whole supply chain operation like adding
            products or updating product locations to maintain a secure channel
            for verifying the provenance of the products. Users can verify
            product by just scanning QR and get all relevant product details.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
