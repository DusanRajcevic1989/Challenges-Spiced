import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ name, onToggle, lights }) {
  return (
    <LightButton
      type="button"
      onClick={() => {
        onToggle(lights.id);
      }}
    >
      <Icon isOn={lights.isOn}>💡</Icon>
      <Text>
        <Name>{lights.name}</Name>
        <State>{lights.isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
