import { useEffect, useState } from "react";
import Map from "./Map";
function App() {
  const [userData, setUserData] = useState(null);
  // const lat = userData.location;
  // console.log(userData.location);

  // console.log(lat);

  const userIP = async () => {
    try {
      const response = await fetch(
        "https://geo.ipify.org/api/v2/country,city?apiKey=at_VsZ3Fz6BoC5N9h7l6pMrKkYll6wwT"
      );

      if (!response.ok) throw new Error(`Response Status ${response.status}`);

      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    userIP();
  }, []);

  return (
    <div>
      {userData?.location ? (
        <Map lat={userData.location.lat} lng={userData.location.lng} />
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default App;
