interface FeatureCardProps {
  title: string;
  desc: string;
  icon: any;
}

const FeatureCard = ({ title, desc, icon }: FeatureCardProps) => {
  return (
    <div className="relative bg-white/30 backdrop-blur-sm bg-opacity-20 p-5 shadow-lg border border-violet-200 rounded-lg">
      <dt className="flex items-center md:items-start">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#732fff] text-white">
          {icon}
        </div>
        <p className="flex h-12 ps-5 pt-2 text-2xl leading-6 font-semibold text-[#732fff] justify-center">
          {title}
        </p>
      </dt>
      <dd className="mt-4 text-base text-gray-600 text-center md:text-left">
        {desc}
      </dd>
    </div>
  );
};

export default FeatureCard;
