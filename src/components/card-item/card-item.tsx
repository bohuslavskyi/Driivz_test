import React, { useContext } from "react";
import { Button, Flex } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { ILocationISS } from "types.ts";
import LatLon from "../latLon/latLon.tsx";
import { MyContext } from "../../App.tsx";

import c from "../../App.module.scss";

interface IProps {
  location: ILocationISS;
}

const CardItem = ({ location }: IProps) => {
  const { activeISSId, setActiveISSId, savedLocations, setSavedLocations } =
    useContext(MyContext) || {};

  const cardLocationClassName = `${c.cardLocation} ${
    activeISSId === location.timestamp && c.active
  }`;

  const handleActive = () => {
    if (location.timestamp === activeISSId) {
      setActiveISSId?.(undefined);
    } else {
      setActiveISSId?.(location.timestamp);
    }
  };

  const deleteSavedISS = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    if (!location.timestamp) return;
    const newISSList = savedLocations?.filter(
      (ISS) => ISS.timestamp !== location.timestamp,
    );
    if (location.timestamp === activeISSId) setActiveISSId?.(undefined);
    if (newISSList) setSavedLocations?.(newISSList);
  };

  return (
    <div
      key={location.timestamp}
      className={cardLocationClassName}
      onClick={handleActive}
    >
      <Flex justify="flex-end">
        <Button
          type="text"
          size="small"
          className={c.delete}
          icon={<CloseOutlined />}
          onClick={deleteSavedISS}
        />
      </Flex>
      <LatLon data={location} />
    </div>
  );
};

export default CardItem;
