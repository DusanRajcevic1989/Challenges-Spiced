import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const allLights = [
  { id: 1, name: "Living Room", isOn: true },
  { id: 2, name: "Kitchen", isOn: true },
  { id: 3, name: "Bedroom", isOn: true },
  { id: 4, name: "Bathroom", isOn: true },
  { id: 5, name: "Garage", isOn: true },
  { id: 6, name: "Porch", isOn: true },
  { id: 7, name: "Garden", isOn: true },
  { id: 8, name: "Office", isOn: true },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(allLights);

  function handleToggle(lightId) {
    setLights(
      lights.map((light) =>
        light.id === lightId ? { ...light, isOn: !light.isOn } : light
      )
    );
  }
  function handleAllLightsOff() {
    setLights(
      lights.map((light) => (light.isOn ? { ...light, isOn: false } : light))
    );
  }

  function handleAllLightsOn() {
    setLights(
      lights.map((light) => (!light.isOn ? { ...light, isOn: true } : light))
    );
  }

  return (
    <Layout lights={lights}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        onToggle={handleToggle}
        onHandleAllLightsOn={handleAllLightsOn}
        onHandleAllLightsOff={handleAllLightsOff}
      />
    </Layout>
  );
}
