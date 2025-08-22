type HomeHeroProps = {
  realtorName: string;
  realtorDescription: string;
};

export default function HomeHero({ realtorName, realtorDescription }: HomeHeroProps) {
  return (
    <div>
      <h1 className="text-4xl font-bold">{realtorName}</h1>
      <p className="text-gray-600">{realtorDescription}</p>
    </div>
  );
}
