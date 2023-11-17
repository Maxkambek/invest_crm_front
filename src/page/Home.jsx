import { useState } from "react";
import ABlock from "../components/ABlock";
import BBlock from "../components/Bblock";
import CBlock from "../components/CBlock";

const Home = () => {
  const [block, setBlock] = useState(0);

  return (
    <>
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="home_name">Fayzli makon</div>
            </div>
          </div>
          <div className="col-12">
            <div className="cat_box">
              <div
                onClick={() => setBlock(0)}
                className={`cat_main ${block === 0 ? "active" : ""}`}
              >
                Barchasi
              </div>
              <div
                onClick={() => setBlock(1)}
                className={`cat_main cat_main_line_1 ${
                  block === 1 ? "active" : ""
                }`}
              >
                A-blok
              </div>
              <div
                onClick={() => setBlock(2)}
                className={`cat_main cat_main_line_2 ${
                  block === 2 ? "active" : ""
                }`}
              >
                b-blok
              </div>
              <div
                onClick={() => setBlock(3)}
                className={`cat_main ${block === 3 ? "active" : ""}`}
              >
                c-blok
              </div>
            </div>
          </div>
        </div>
      </div>
      {block === 1 ? (
        <>
          <ABlock />
        </>
      ) : block === 2 ? (
        <>
          <BBlock />
        </>
      ) : block === 3 ? (
        <>
          <CBlock />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Home;
