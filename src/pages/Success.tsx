import InfoCard from "../components/InfoCard";
import Squares from "../components/Squares";

const Success = () => {
  return (
    <>
      <div
        className="container"
        style={{
          height: "100dvh",
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
