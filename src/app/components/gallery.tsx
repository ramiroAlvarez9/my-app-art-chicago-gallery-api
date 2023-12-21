"use client";
import { Fira_Sans } from "next/font/google";
import ReactLoading from "react-loading";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getServerSideProps } from "../serverSideApi/getServerSideProps";
import type { InferGetServerSidePropsType } from "next";
import "./gallery.scss";

type Props = { repo: any };

const fira_sans = Fira_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "200",
});

export default function Gallery({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps> | Props) {
  const [imagesArray, setImagesArray] = useState<never[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setImagesArray(repo.props.repo.data);
    imagesArray.length === 12 ? setLoading(false) : setLoading(true);
  });

  const arrayDataImages: (JSX.Element | undefined)[] = imagesArray.map(
    (object: any) => {
      if (object.image_id != null) {
        return (
          <div className="images__container">
            <Image
              key={object.id}
              src={`https://www.artic.edu/iiif/2/${object.image_id}/full/843,/0/default.jpg`}
              alt="Picture of the author"
              width={400}
              height={400}
              //style={{display: 'inherit' }}
            />
            <h5 className={`images__container--title ${fira_sans.className}`}>
              {" "}
              {object.title}{" "}
            </h5>
          </div>
        );
      }
    }
  );

  return isLoading ? (
    <section className="loading">
      <ReactLoading
        type="bubbles"
        color="#000000"
        height={"50%"}
        width={"50%"}
      />
    </section>
  ) : (
    <section className="container">
    
      <div className="works__container">
        
        <div className="works__container">.</div>
        <h6 className={`h6 ${fira_sans.className}`}>WORKS</h6>
        
      </div>



      <section className="images">{arrayDataImages}</section>
    
    </section>
  );
}
