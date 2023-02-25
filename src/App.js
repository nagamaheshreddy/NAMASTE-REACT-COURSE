import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Utils/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </Provider>
  );
};

export default App;
