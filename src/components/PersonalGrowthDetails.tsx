import CountUp from "react-countup";

interface Collections {
  endNumber: number;
  suffix: string;
  title: string;
}

export interface PersonalGrowthDetailsProps {
  collections: Collections[];
}

function PersonalGrowthDetails({ collections }: PersonalGrowthDetailsProps) {
  return (
    <div className="md:basis-1/5 flex justify-between text-center mt-110 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
      {collections.map((items) => (
        <div className="mb-10">
          <h2 className="text-blue-900 font-bold text-3xl">
            <CountUp
              start={0}
              end={items.endNumber}
              duration={2}
              suffix={items.suffix}
            />
          </h2>
          <h4 className="text-blue-800 font-semibold text-lg">{items.title}</h4>
        </div>
      ))}
    </div>
  );
}

export default PersonalGrowthDetails;
