import Hero from "../parts/Hero";
import Filter from "../parts/carspage/Filter";
import { getAllCar } from "../services/car.service";
import { useEffect, useState } from "react";
import CarCardSkeleton from "../components/skeletons/CarCardSkeleton";
import CarCard from "../components/cards/CarCard";

const CarsPage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getAllCar().then((res) => {
      setCars(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Hero />
      <section className="mb-5">
        <div id="finder" className="container">
          <div className="card border border-white shadow w-100 p-2">
            <div className="card-body">
              <Filter />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="container">
            <div
              id="cars-container"
              className="row row-cols-md-3 row-cols-1 g-3">
              {cars.length > 0 ? (
                cars.map((car) => <CarCard key={car.id} data={car} />)
              ) : (
                <>
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <CarCardSkeleton key={`skeleton${i}`} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarsPage;
