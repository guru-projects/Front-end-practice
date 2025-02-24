import { useEffect, useState } from "react";
import Map from "./Map";
import axios from "axios";
import searchIcon from "./images/icon-arrow.svg"
function App() {
  const [ip, setIp] = useState("");
  const [userData, setUserData] = useState(null);

  const userIP = async (ip = "") => {
    try {
      const url = ip
        ? `https://geo.ipify.org/api/v2/country,city?apiKey=at_VsZ3Fz6BoC5N9h7l6pMrKkYll6wwT&ipAddress=${ip}`
        : "https://geo.ipify.org/api/v2/country,city?apiKey=at_VsZ3Fz6BoC5N9h7l6pMrKkYll6wwT";

      const response = await axios.get(url);

      const data = response.data;
      console.log(data);

      if (!ip) setIp(data.ip);
      setUserData(data);
    } catch (error) {
      console.error(
        "Error fetching data:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    userIP();
  }, []);

  const handleChange = (e) => {
    setIp(e.target.value);
    console.log(ip);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userIP(ip);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="h-80 md:h-64 w-full  bg-[url(./images/pattern-bg-mobile.png)] bg-cover bg-no-repeat md:bg-[url(./images/pattern-bg-desktop.png)]">
        <form onSubmit={handleSubmit} className="flex justify-center flex-col items-center h-auto">
          <label htmlFor="ipAddress" className="m-5 text-white font-medium text-2xl">IP Address Tracker</label>
          <div className="flex w-full justify-center p-5">
            <input
            className="h-14 p-4 w-full max-w-[400px] border-none rounded-l-md overflow-hidden bg-origin-padding"
              type="text"
              id="ipAddress"
              name="ipAddress"
              placeholder="Search ip"
              onChange={handleChange}
            />
            <button type="submit" className="h-14 w-12 rounded-r-md bg-black"><img className="mx-auto" src={searchIcon} alt="search" /></button>
          </div>
        </form>

        <div className="flex w-full justify-center z-20 relative">
        <div className="m-10 p-7 text-center  md:text-start bg-white rounded-xl w-full max-w-5xl h-auto flex flex-wrap gap-y-5 md:flex-nowrap justify-center md:divide-x-2">
          <div className="px-5 h-min">
            <p className="uppercase opacity-40 text-[12px] mb-2">ip Address</p>
            <p className="font-medium text-2xl">{userData?.ip}</p>
          </div>
          <div className="px-5">
            <p className="uppercase opacity-40 text-[12px] mb-2">ip Address</p>
            <p className="font-medium text-2xl">{userData?.location?.city}, {userData?.location?.country}</p>
          </div>
          <div className="px-5">
            <p className="uppercase opacity-40 text-[12px] mb-2">ip Address</p>
            <p className="font-medium text-2xl">UTC {userData?.location?.timezone}</p>
          </div>
          <div className="px-5">
            <p className="uppercase opacity-40 text-[12px] mb-2">ip Address</p>
            <p className="font-medium text-2xl">{userData?.isp}</p>
          </div>
        </div>
      </div>
      </div>

      

      
      <div className="flex-1 z-10">
        {userData?.location ? (
          <Map lat={userData.location.lat} lng={userData.location.lng} />
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
