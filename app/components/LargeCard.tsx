import largeImage from "app\\assets\\Png\\LargeIcon.png";

// uses absolute values
export default function TopBar() {
  return (
    <div className="col-span-3 flex flex-row min-h-screen justify-center items-center">
      <div className="flex space-x-3 w-max h-max ">
        <img src={largeImage} alt=""></img>
      </div>
      <div className=""></div>
    </div>
  );
}
