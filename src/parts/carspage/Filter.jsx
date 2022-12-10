import { driverTypeOptions, timeOptions } from "../../utils/option";

const Filter = () => {
  return (
    <form id="search">
      <div className="row row-cols-lg-5 row-cols-1 g-3">
        <div>
          <label htmlFor="driver-type" className="form-label">
            Tipe Driver
          </label>
          <select
            id="driver-type"
            className="form-select trigger"
            required
            defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled>
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
            className="form-control trigger"
            placeholder="Pilih Tanggal"
            required
          />
        </div>
        <div>
          <label htmlFor="time" className="form-label">
            Waktu Jemput/Ambil
          </label>
          <select
            id="time"
            className="form-select trigger"
            required
            defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled>
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
            className="form-control trigger"
            placeholder="Jumlah Penumpang"
          />
        </div>
        <div className="d-flex align-items-end justify-content-around">
          <button
            id="clear"
            type="button"
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
  );
};

export default Filter;
