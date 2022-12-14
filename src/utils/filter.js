const getUnix = (unix) => new Date(unix).getTime() / 1000;

const combineTime = (date, time) => {
  const [year, month, day] = date.split("-");
  const [hour, minute] = time.split(":");
  return new Date(year, month - 1, day, hour, minute).getTime() / 1000;
};

const filterCar = ({ driverType, date, time, passenger = 1 }, cars) => {
  const dateTime = combineTime(date, time);
  return new Promise(function (resolve, reject) {
    const result = cars.filter(
      (car) =>
        (!driverType || car.driverType === driverType) &&
        (!dateTime || getUnix(car.availableAt) > dateTime) &&
        (!passenger || car.capacity >= parseInt(passenger))
    );

    resolve(result);
  });
};

export { filterCar };
