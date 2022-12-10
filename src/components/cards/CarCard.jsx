import {
  FiCircle,
  FiCalendar,
  FiSettings,
  FiUserCheck,
  FiUserX,
} from "react-icons/fi";

const CarCard = ({ data }) => {
  return (
    <div>
      <div
        className="card shadow-sm border-0 p-2 flex-fill"
        style={{ height: "100%" }}>
        <div className="p-2 img-container">
          <img
            src={data.image}
            alt={data.manufacture + " " + data.model}
            className="card-img-top img-center rounded"
          />
        </div>
        <div className="card-body d-flex flex-column gy-3">
          <p>
            {data.manufacture}/{data.model}
          </p>
          <h5>
            <b>
              {data.rentPerDay.toLocaleString("id", {
                style: "currency",
                currency: "IDR",
              })}{" "}
              / hari
            </b>
          </h5>
          <p>{data.description}</p>
          <p className="d-inline-flex">
            {data.driverType === 1 ? (
              <>
                <FiUserCheck className="me-2" /> <span>Dengan Sopir</span>
              </>
            ) : (
              <>
                <FiUserX className="me-2" />{" "}
                <span>Tanpa Sopir (Lepas Kunci)</span>
              </>
            )}
          </p>
          <p className="d-inline-flex">
            <FiCircle className="me-2" />
            {data.capacity} orang
          </p>
          <p className="d-inline-flex">
            <FiSettings className="me-2" />
            {data.transmission}
          </p>
          <p className="d-inline-flex">
            <FiCalendar className="me-2" />
            {data.year}
          </p>
          <p>Tersedia: {new Date(data.availableAt).toLocaleString()}</p>
          <button
            type="button"
            className="btn btn-lgreen-400 fw-bold py-2 px-3 text-white mt-auto mb-0">
            Pilih Mobil
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
