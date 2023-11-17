import { useContext } from "react";
import { Button, Flex } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { ILocationISS, MyContextType } from "types.ts";
import LatLon from "../latLon/latLon.tsx";
import { MyContext } from "../../App.tsx";

import c from "../../App.module.scss";

interface IProps {
  location: ILocationISS;
}

const CardItem = (props: IProps) => {
  const { location } = props;
  const context: MyContextType | undefined = useContext(MyContext);

  const handleActive = (id: number | undefined) => {
    if (id === context?.activeISSId) {
      context?.setActiveISSId(undefined);
    } else {
      context?.setActiveISSId(id);
    }
  };

  const deleteSavedISS = (id: number | undefined): void => {
    if (!id) return;
    const newISSList = context?.savedLocations.filter(
      (ISS) => ISS.timestamp !== id,
    );
    if (id === context?.activeISSId) context?.setActiveISSId(undefined);
    if (newISSList) context?.setSavedLocations(newISSList);
  };

  return (
    <div
      key={location.timestamp}
      className={`${c.cardLocation} ${
        context?.activeISSId === location.timestamp && c.active
      }`}
      onClick={() => handleActive(location.timestamp)}
    >
      <Flex justify="flex-end">
        <Button
          type="text"
          size="small"
          className={c.delete}
          icon={<CloseOutlined />}
          onClick={() => deleteSavedISS(location.timestamp)}
        />
      </Flex>
      <LatLon data={location} />
    </div>
  );
};

export default CardItem;
