import largeImage from "app\\assets\\Png\\LargeIcon.png";

// uses absolute values
export default function TopBar() {
  return (
    <div className="col-span-3 flex flex-row min-h-screen justify-center items-center">
      <div className="relative">
        <img className="object-cover" src={largeImage} alt=""></img>
        <div className="absolute left-[50%] top-[50%]">Test</div>
      </div>
      <div className=""></div>
    </div>
  );
}
