"use client";
import Image from "next/image";
import { Fira_Sans } from "next/font/google";
import "./gallery.scss";

interface Props {
  imagesArray: never[];
}

//font
const fira_sans = Fira_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "200",
});

const ArrayOfPictures = ({ imagesArray }: Props) => {
  
  const arrayDataImages: (JSX.Element | undefined)[] = imagesArray.map(
      (object: any, index) => {
        if (
          object.image_id != null &&
          !object.image_id.includes("883af6d-fd95-c855-ee7e-2093348774")
        ) {
          return (
            <article className="images__container" key={index}>
              <Image
                key={index}
                src={`https://www.artic.edu/iiif/2/${object.image_id}/full/843,/0/default.jpg`}
                alt="Picture of the author"
                width={400}
                height={400}
              />
              <h5
                className={`images__container--title ${fira_sans.className}`}
                key={index}
              >
                {object.title}
              </h5>
            </article>
          );
        }
      }
    ) 

  return (
    <>
      <section className="images">{arrayDataImages}</section>
    </>
  );
};

export default ArrayOfPictures;
