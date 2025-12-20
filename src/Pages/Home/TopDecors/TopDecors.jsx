import { useQuery } from "@tanstack/react-query";
import { FaStar, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import Loading from "../../../Components/Shared/Loading/Loading";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Title from "../../../Components/Shared/Title/Title";

const TopDecors = () => {
  const axiosSecure = useAxiosSecure();
  const { data: decors = [], isLoading } = useQuery({
    queryKey: ["topDecors"],
    queryFn: async () => {
      const res = await axiosSecure("/topdecors");
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="w-11/12 px-4 rounded-2xl mx-auto  py-14 bg-[#caf0f8]">
      {/* Section Header */}
      <Title
        text="Top Decorators"
        subText=" Highly rated professionals for your special moments"
      />
      {/* <div className="text-center mb-12">
        <h1 className="text-3xl font-bold">Top Decorators</h1>
        <p className="text-gray-500 mt-2">
          Highly rated professionals for your special moments
        </p>
      </div> */}

      {/* Cards Grid */}
      <div
        className="grid gap-6 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3"
      >
        {decors.map((decor) => (
          <div
            key={decor._id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300"
          >
            {/* Image */}
            <figure>
              <img
                src={decor.image}
                alt={decor.name}
                className="h-48 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              {/* Name & Verified */}
              <div className="flex justify-between items-center">
                <h2 className="card-title text-lg">{decor.name}</h2>
                {decor.isVerified && (
                  <FaCheckCircle className="text-primary" title="Verified" />
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 text-sm">
                <FaStar className="text-warning" />
                <span className="font-semibold">{decor.rating}</span>
                <span className="text-gray-500">
                  ({decor.reviewsCount} reviews)
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <FaMapMarkerAlt />
                <span>{decor.location}</span>
              </div>

              {/* Specialties */}
              <div className="flex flex-wrap gap-2 mt-3">
                {decor.specialties?.slice(0, 3).map((item, index) => (
                  <span
                    key={index}
                    className="badge badge-outline badge-primary text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center mt-4 text-sm">
                <span>{decor.experienceYears}+ yrs exp</span>
                <span className="font-semibold">{decor.priceRange}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopDecors;
