import { NextPage } from "next";
import ReactLoading from "react-loading";


interface Props {}

const LoadingScreen: NextPage<Props> = () => {
  return (
    <>
      <section className="loading">
        <ReactLoading
          type="bubbles"
          color="#000000"
          height={"30%"}
          width={"30%"}
        />
      </section>
    </>
  );
};

export default LoadingScreen;
