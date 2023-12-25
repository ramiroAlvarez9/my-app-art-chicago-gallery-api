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
          height={"50%"}
          width={"50%"}
        />
      </section>
    </>
  );
};

export default LoadingScreen;
