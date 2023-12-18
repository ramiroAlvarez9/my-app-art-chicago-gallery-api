export default async function Gallery() {

  const getGalleryInfo = await fetch( `https://api.artic.edu/api/v1/artworks/3752`, { cache: 'no-store' });
  const data = await getGalleryInfo.json();
  console.log(data.data.title);  

  return (
    <section>
      
    <h1>
     
      CONTENT

    </h1>

    </section>     
    )
}
 