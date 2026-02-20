import { Helmet } from "react-helmet-async";
import InfoCard from "../components/InfoCard";
import Squares from "../components/Squares";

const Success = () => {
  return (
    <>
      <Helmet>
        <title>Benfolio - Thank You</title>
      </Helmet>
      <div
        className="container"
        style={{
          minHeight: "100dvh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBlock: 0,
        }}
      >
        <InfoCard />
      </div>
      <Squares />
    </>
  );
};

export default Success;
