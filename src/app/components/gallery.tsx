"use client";
import Image from "next/image";
import { use, useState } from "react";

 
type JSONresponse = any | JSON | Response;

export default async function Gallery() {

  const [imagesInfoData, setimagesInfoData] = useState ();

  // general info from the gallery api, with 12 pictures
  let getGeneralInfoFromGallery: Response = await fetch(`https://api.artic.edu/api/v1/artworks`,{ cache: "force-cache" });
  let generalDataFromGalery: JSONresponse = await getGeneralInfoFromGallery.json();  
  let dataArray = generalDataFromGalery.data;

    //creating images calls 

  dataArray.forEach ( async (element: any)  => {
  
    let getImagesInfo : Response = 
    await fetch(
      `https://api.artic.edu/api/v1/artworks/${element.id}?fields=id,title,image_id`,
        { cache: "force-cache" }
      ); 
  
  //esta linea va en el hook state!
  //let imagesInfo = await getImagesInfo.json();  
  })
  
  return(  
    <section>
   



    </section>
  )
}
