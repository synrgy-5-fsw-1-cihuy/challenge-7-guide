import Hero from "../parts/Hero";
import { driverTypeOptions, timeOptions } from "../utils/options";
import { getAllCar } from "../services/car.service";
import { useEffect, useState } from "react";
import CarCardSkeleton from "../components/skeletons/CarCardSkeleton";
import CarCard from "../components/cards/CarCard";
import { filterCar } from "../utils/filter";
import { useRef } from "react";

const CarsPage = () => {
  const driverTypeE = useRef();
  const dateE = useRef();
  const timeE = useRef();
  const passengerE = useRef();

  const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    if (cars.length < 1) {
      getAllCar().then((res) => {
        setCars(res.data);
        setFilteredCars(res.data);
        setIsLoading(false);
      });
    }
    console.log(cars);
    console.log(filteredCars);
  }, [cars, filteredCars]);

  const handleFilter = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const driverType = Number(driverTypeE.current.value);
    const date = dateE.current.value;
    const time = timeE.current.value;
    const passenger = passengerE.current.value;

    filterCar({ driverType, date, time, passenger }, cars).then((cars) => {
      setFilteredCars(cars);
      setIsLoading(false);
    });
  };

  const handleReset = () => {
    setFilteredCars(cars);
    driverTypeE.current.value = "";
    dateE.current.value = "";
    timeE.current.value = "";
    passengerE.current.value = "";
  };

  return (
    <>
      <Hero />
      <section className="mb-5">
        <div id="finder" className="container">
          <div className="card border border-white shadow w-100 p-2">
            <div className="card-body">
              <form id="search" onSubmit={(e) => handleFilter(e)}>
                <div className="row row-cols-lg-5 row-cols-1 g-3">
                  <div>
                    <label htmlFor="driver-type" className="form-label">
                      Tipe Driver
                    </label>
                    <select
                      id="driver-type"
                      className="form-select trigger"
                      ref={driverTypeE}
                      defaultValue="">
                      <option value="" disabled>
                        Pilih Tipe Driver
                      </option>
                      {driverTypeOptions.map((option, index) => (
                        <option key={option.text} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="form-label">
                      Tanggal
                    </label>
                    <input
                      id="date"
                      type="date"
                      ref={dateE}
                      className="form-control trigger"
                      placeholder="Pilih Tanggal"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="form-label">
                      Waktu Jemput/Ambil
                    </label>
                    <select
                      id="time"
                      ref={timeE}
                      className="form-select trigger"
                      defaultValue="">
                      <option value="" disabled>
                        Pilih Waktu
                      </option>
                      {timeOptions.map((option, index) => (
                        <option key={option.text} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="passenger" className="form-label">
                      Penumpang
                    </label>
                    <input
                      id="passenger"
                      type="number"
                      ref={passengerE}
                      className="form-control trigger"
                      placeholder="Jumlah Penumpang"
                    />
                  </div>
                  <div className="d-flex align-items-end justify-content-around">
                    <button
                      id="clear"
                      type="button"
                      onClick={() => handleReset()}
                      className="btn btn-danger fw-bold py-2 px-3 text-white">
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="btn btn-lgreen-400 fw-bold py-2 px-3 text-white">
                      Cari Mobil
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="container">
            {isLoading ? (
              <div
                id="cars-container"
                className="row row-cols-md-3 row-cols-1 g-3">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <CarCardSkeleton key={`skeleton${i}`} />
                ))}
              </div>
            ) : cars.length > 0 && filteredCars.length > 0 ? (
              <div
                id="cars-container"
                className="row row-cols-md-3 row-cols-1 g-3">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} data={car} />
                ))}
              </div>
            ) : (
              <p className="col-12 text-center w-full">
                <b>No Car Available</b>
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CarsPage;
