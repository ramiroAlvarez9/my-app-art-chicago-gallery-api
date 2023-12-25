"use client";
import LoadingScreen from "./LoadingScreen";
import ArrayOfPictures from "./ArrayOfPictures";
import WorksBar from "./WorksBar";
import { useState, useEffect } from "react";
import { getServerSideProps } from "../serverSideApi/getServerSideProps";
import type { InferGetServerSidePropsType } from "next";
import "./gallery.scss";

type Props = {  repo: any };

export default function Gallery  ({ repo }: InferGetServerSidePropsType<typeof getServerSideProps> | Props) 

{
  const [imagesArray, setImagesArray] = 
    useState<never[]>([]);
  const [isLoading, setLoading] = 
    useState <boolean>(true);

  useEffect( ()  => 
  {
    setImagesArray(repo.props.repo.data); //Fetching data from the API and adding it to the array (imagesArray).    
    imagesArray.length === 12 ? 
        setLoading(false) : setLoading(true);
  },[]);

  return isLoading ? 
          (
            <LoadingScreen />
          )
            : 
          (
            <section className="container">
    
              <WorksBar />

              <ArrayOfPictures
                imagesArray={imagesArray}
              />
    
          </section>
          );
}
