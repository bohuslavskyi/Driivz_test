import { ChangeEvent, useMemo, useState } from "react";
import { Input } from "antd";

import CardItem from "../card-item/card-item.tsx";
import { ILocationISS } from "types.ts";

import c from "../../App.module.scss";

const { Search } = Input;

interface IProps {
  savedLocations: ILocationISS[];
}

const SidetContent = (props: IProps): JSX.Element => {
  const { savedLocations } = props;

  const [filter, setFilter] = useState<string>("");
  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const ISSFilteredList: ILocationISS[] = useMemo(() => {
    if (!filter.trim()) return savedLocations;

    return savedLocations.filter((ISS) => {
      return (
        ISS?.timestamp?.toString().includes(filter) ||
        ISS?.iss_position?.latitude.toString().includes(filter) ||
        ISS?.iss_position?.longitude.toString().includes(filter)
      );
    });
  }, [filter, savedLocations]);

  return (
    <>
      <div className={c.siderTop}>
        <h2>ISS Tracker</h2>
        <Search
          placeholder="Find ISS"
          onChange={(e) => handleFilterChange(e)}
        />
      </div>
      <div className={c.savedLocations}>
        <h2>{filter ? "Filtered ISS" : "Saved locations"}</h2>
        <div className={c.savedLocationsList}>
          {ISSFilteredList.map((location) => (
            <CardItem location={location} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SidetContent;
