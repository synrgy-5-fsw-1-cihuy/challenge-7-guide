const ServiceCard = ({ title, icon, children }) => {
  return (
    <div className="col d-lg-flex align-items-md-stretch">
      <div className="card p-2">
        <div className="card-body">
          {icon}
          <h5 className="my-3 fw-bold">{title}</h5>
          <p className="card-text fw-light">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
