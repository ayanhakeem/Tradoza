import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt="smallcase" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            className="mb-3"
            src="media/images/streakLogo.png"
            style={{ width: "200px" }}
            alt="streak"
          />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            className="mb-3"
            src="media/images/sensibullLogo.svg"
            style={{ width: "200px" }}
            alt="sensibull"
          />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            className="mb-3"
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "250px" }}
            alt="fundhouse"
          />
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            className="mb-3"
            src="media/images/goldenpiLogo.png"
            style={{ width: "230px" }}
            alt="goldenpi"
          />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            className="mb-3"
            src="media/images/dittoLogo.png"
            style={{ width: "180px" }}
            alt="ditto"
          />
          <p className="text-small text-muted">Insurance</p>
        </div>
        <Link
          to="/signup"
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
}

export default Universe;