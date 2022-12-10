import Offcanvas from "react-bootstrap/Offcanvas";

const OffCanvas = ({ show, onClick, children }) => {
  return (
    <Offcanvas
      show={show}
      onHide={onClick}
      placement="end"
      backdrop
      scroll
      backdropClassName="backdrop d-flex d-lg-none"
      bsPrefix="collapse navbar-collapse offcanvas w-50 offcanvas-end py-2 d-flex d-lg-none">
      <Offcanvas.Header closeButton className="w-100">
        <Offcanvas.Title className="mb-0 fw-bold">BCR</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body bsPrefix="w-100">{children}</Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffCanvas;
