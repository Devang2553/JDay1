import "./App.css";
import TrendingProduct from "./pages/TrendingProduct";
import MainScreen from "./pages/mainScreen";
import SearchSection from "./assets/SearchSection.png";
import { ReactComponent as Search } from "./assets/SearchIcon.svg";
import Boutique from "./pages/Boutique";
import TopBrands from "./pages/TopBrands";
import PopularSearches from "./pages/PopularSearches";
import Footer from "./pages/Footer";
import Carousal from "./pages/Carousal";

function App() {
  return (
    <div className="overflow-hidden">
      <MainScreen />
      <div
        style={{
          backgroundImage: `url(${SearchSection})`,
        }}
        className="text-white py-24  text-center lg:h-[400px] h-[360px] mt-auto flex flex-col w-full"
      >
        <h1 className="lg:text-4xl  text-2xl">CLASSIC FROM TOP BRANDS</h1>
        <p className="md:text-xl text-lg py-2 px-2">
          See now buy now,folks!
          <br />
          click to discover the most celebrated styles on special offers here
        </p>
        <div className="flex justify-center mt-12">
  <div className="relative w-full max-w-[755px]">
    <div className="flex">
      <input
        type="text"
        placeholder="Search by name, brand, and more....."
        className="flex-grow h-14 rounded-l-md placeholder-[#AA8787] p-5 placeholder:text-xs text-black"
        onChange={(e) => e.preventDefault()}
      />
      <button className="flex items-center px-4 rounded-r-md bg-gray-200">
        <Search className="w-5 h-5" />
      </button>
    </div>
  </div>
</div>


      </div>
      <TrendingProduct />
      <Boutique />
      <Carousal />

      <TopBrands />
      <PopularSearches />
      <Footer />
    </div>
  );
}

export default App;
