import { useContext } from "react";
import { getClass } from "../utils";
import Image from "../components/Image";
import { Context } from "../Provider";

const Photos = () => {
  const { photoArray } = useContext(Context);

  const showPhotos = photoArray.map((img, idx) => {
    return <Image key={img.id} img={img} className={getClass(idx)} />;
  });
  return <main className="photos">{showPhotos}</main>;
};

export default Photos;
