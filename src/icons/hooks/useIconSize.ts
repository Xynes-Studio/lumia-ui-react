import { useEffect, useState } from "react";

const useIconSize = (widthOld: number, heightOld: number, size: number) => {
  const [width, setWidth] = useState<number>(widthOld * size);
  const [height, setHeight] = useState<number>(heightOld * size);

  useEffect(() => {
    let widthNow: number = widthOld ?? 0;
    let heightNow: number = heightOld ?? 0;
    widthNow *= size;
    heightNow *= size;
    setWidth(widthNow);
    setHeight(heightNow);
  }, [size, widthOld, heightOld]);

  return [width, height];
};

export default useIconSize;
