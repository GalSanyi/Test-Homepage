import Order from "./views/Order/Order";
import Hustle from "./views/Hustle/Hustle";
import Hero from "./views/Hero/Hero";
import Set from "./views/Set/Set";
import RunningLine from "./views/RunningLine/RunningLine";
import SunProtection from "./views/SunProtection/SunProtection";
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
    </div>
  );
};
