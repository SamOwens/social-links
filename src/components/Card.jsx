import SocialButton from './SocialButton';

import data from '../data/data.json';

const Card = () => {
  return (
    <div className="card font-inter flex flex-col justify-center items-center w-card-sm md:w-card-md lg:w-card-lg bg-custom-grey-800 p-6 sm:md:p-10 rounded-xl text-white text-center leading-normal">
      <img
        src={data.image}
        alt={data.name}
        className="mb-6 w-avatar h-avatar rounded-full"
      ></img>
      <h1 className="text-2xl font-semibold mb-1">{data.name}</h1>
      <p className="text-green-1 text-sm font-bold mb-6">{data.location}</p>
      <p className="mb-6 text-sm">{data.text}</p>
      <div className="flex flex-col w-full">
        {data.socials.map((social, index) => (
          <SocialButton
            key={index}
            data={social}
            lastChild={index === data.socials.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
