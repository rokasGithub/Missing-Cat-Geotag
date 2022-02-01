import React from "react";
import { InfoWindow } from "@react-google-maps/api";
import { formatRelative, parseISO } from "date-fns";

export default function AlertWindow({ selected, close }) {
  return (
    <InfoWindow
      position={{ lat: selected.latitude, lng: selected.longitude }}
      onCloseClick={() => close()}
    >
      <div class="info-window-custom">
        <h2>
          <span role="img" aria-label="bear">
            <img src="/kitie.svg" />
          </span>{" "}
          Alert
        </h2>
        <p>
          Spotted {formatRelative(parseISO(selected.createdAt), new Date())}
        </p>
      </div>
    </InfoWindow>
  );
}
