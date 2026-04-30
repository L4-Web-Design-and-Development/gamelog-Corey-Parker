import facebook from "app\\assets\\svg\\facebook.svg";
import instagram from "app\\assets\\svg\\instagram.svg";
import twitter from "app\\assets\\svg\\twitter.svg";
import logo from "app\\assets\\svg\\logo-full.svg";

// uses absolute values
export default function TopBar() {
  return (
    <div className="col-span-3 w-full pt-5 flex- justify-between pb-5">
      <div className="flex-row content-center">
        <img className="w-15" src={logo} alt=""></img>
        <div className="flex space-x-3 pt-5">
          <img src={facebook} alt=""></img>
          <img src={instagram} alt=""></img>
          <img src={twitter} alt=""></img>
        </div>
      </div>
    </div>
  );
}
