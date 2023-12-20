import { axiosInstance, requestHandler } from "../requestHandler.ts";
import { ILocationISS } from "types.ts";

export const getLocation = requestHandler<undefined, ILocationISS>(() =>
  axiosInstance.get("/iss-now.json"),
);
