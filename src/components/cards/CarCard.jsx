import React from "react";

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
        <div className="card-body d-flex flex-column mt-3 gy-3">
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
          <p>
            <i className="feather-10" data-feather="circle" />
            {data.capacity} orang
          </p>
          <p>
            <i className="feather-10" data-feather="settings" />{" "}
            {data.transmission}
          </p>
          <p>
            <i className="feather-10" data-feather="calendar" /> Tahun{" "}
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
