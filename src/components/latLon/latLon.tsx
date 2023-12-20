import { ILocationISS } from "types.ts";

import c from "../../App.module.scss";

const LatLon = ({ data }: { data: ILocationISS | undefined }): JSX.Element => {
  const formatTimestamp = (timestamp: number | undefined): string => {
    if (!timestamp) return "";
    const date = new Date(timestamp * 1000); // Convert to milliseconds

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
  };

  if (data === undefined) return <></>;

  return (
    <div className={c.location}>
      <div className={c.latLong}>
        <span>Lat: {data?.iss_position?.latitude}</span>
        <span>Lon: {data?.iss_position?.longitude}</span>
      </div>
      <div className={c.date}>Date: {formatTimestamp(data?.timestamp)}</div>
    </div>
  );
};

export default LatLon;
