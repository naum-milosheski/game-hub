import { PlatformType } from "../types/types";
import useData from "./useData";

const usePlatforms = () => useData<PlatformType>("/platforms/lists/parents");

export default usePlatforms;
