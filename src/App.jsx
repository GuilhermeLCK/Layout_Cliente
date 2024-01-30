import "./App.scss";

import Header from "./Components/Header/Header";

import About from "./Components/About/About";

import Operation from "./Components/Operation/Operation";

import Modalities from "./Components/Modalities/Modalities";

import Plans from "./Components/Plans/Plans";

import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="container-main">
        <Header />

        <div className="container-full">
          <div className="container-mid">
            <About />
            <Modalities />
          </div>
          <div className="container-full-Plans">
            <div className="container-mid">
              <Plans />
            </div>
          </div>

          <div className="container-mid">
            <Operation />
          </div>

          <div className="container-full-Footer">
            <div className="container-mid">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
