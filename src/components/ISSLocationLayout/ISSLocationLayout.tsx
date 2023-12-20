import { JSX, useCallback } from "react";
import { FloatButton, Typography } from "antd";
import { AimOutlined, PlusOutlined } from "@ant-design/icons";

import LatLon from "../latLon/latLon.tsx";
import { ILocationISS } from "types.ts";

import c from "../../App.module.scss";

const { Title } = Typography;

interface ILayoutProps {
  currentISS: ILocationISS | undefined;
  savedLocations: ILocationISS[];
  setSavedLocations: (list: ILocationISS[]) => void;
  activeISSId: number | undefined;
  setActiveISSId: (id: undefined) => void;
}

const ISSLocationLayout = ({
  currentISS,
  savedLocations,
  setSavedLocations,
  activeISSId,
  setActiveISSId,
}: ILayoutProps): JSX.Element => {
  const saveLocation = (data: ILocationISS | undefined): void => {
    if (data) {
      const locationIndex = savedLocations.findIndex(
        (el) => el.timestamp === data.timestamp,
      );
      if (locationIndex !== -1) return;

      setSavedLocations([...savedLocations, data]);
    }
  };

  const handeClick = (): void => {
    if (activeISSId) {
      setActiveISSId(undefined);
    } else saveLocation(currentISS);
  };

  const getLocationById = useCallback(() => {
    return savedLocations.find(
      (location) => activeISSId === location.timestamp,
    );
  }, [savedLocations, activeISSId]);

  const dataToShow: ILocationISS | undefined = activeISSId
    ? getLocationById()
    : currentISS;

  return (
    <>
      <div className={c.contentWrap}>
        <Title>{activeISSId ? "Saved location:" : "Current location:"}</Title>
        <LatLon data={dataToShow} />
      </div>

      <FloatButton
        icon={activeISSId ? <AimOutlined /> : <PlusOutlined />}
        type={activeISSId ? "default" : "primary"}
        tooltip={activeISSId ? "Current ISS location" : "Save ISS location"}
        style={{ right: 32, bottom: 94 }}
        onClick={handeClick}
      />
    </>
  );
};
export default ISSLocationLayout;
