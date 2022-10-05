import Order from "./views/Order/Order";
import Hustle from "./views/Hustle/Hustle";
import Hero from "./views/Hero/Hero";
import Set from "./views/Set/Set";
import RunningLine from "./views/RunningLine/RunningLine";
import SunProtection from "./views/SunProtection/SunProtection";
import Bicycle from "./views/Bicycle/Bicycle";
import BagSection from "./views/BagSection/BagSection";


export const App = () => {
  return (
    <div>
      <Order/>
      <Hustle/>
      <Hero/>
      <Set/>
      <RunningLine/>
      <Set/>
      <SunProtection/>
      <Set/>
     <Bicycle/>
     <BagSection/>
    </div>
  );
};
