import { GiDigitalTrace } from 'react-icons/gi';
import FeatureCard from './FeatureCard';
import { MdSecurity } from 'react-icons/md';
import { BsFillCheckCircleFill, BsFillCloudCheckFill } from 'react-icons/bs';

import { FC } from 'react';

const Features: FC = () => {
  return (
    <div id='features' className="bg-white/50 pt-5 pb-10">
      <div className="flex flex-col text-center w-full mb-5">
        <h1 className="text-4xl mb-5 font-semibold title-font text-[#732fff]">
          Features
        </h1>
      </div>
      <dl className="space-y-10 mx-auto max-w-6xl md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <FeatureCard
          icon={<GiDigitalTrace size={25} />}
          title="Traceability"
          desc="The user can track the movement and ownership of a product through its life cycle, creating a transparent record of its history."
        />
        <FeatureCard
          icon={<MdSecurity size={25} />}
          title="Security"
          desc="Everything on-chain! Prevent any forgery and errors while authenticating a product. No one can change provenance except the authorized person."
        />
        <FeatureCard
          icon={<BsFillCheckCircleFill size={25} />}
          title="Verification"
          desc="It also ensures that the right person is adding or updating the product. User can explore the listed products and check the provenance."
        />
        <FeatureCard
          icon={<BsFillCloudCheckFill size={25} />}
          title="Data availability"
          desc="All of the data is stored in weaveDB which is based on Arweave. It ensures that data is available forever and no one can delete it."
        />
      </dl>
    </div>
  );
};

export default Features;
