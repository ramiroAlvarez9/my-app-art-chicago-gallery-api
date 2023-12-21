
import Menu    from './components/nav'
import Gallery from './components/gallery'
import { getServerSideProps } from './serverSideApi/getServerSideProps';



export default async function Home( ) {
  
  return (

    <main>
      
      <Menu />  
      <Gallery 

        repo = { await getServerSideProps() }

      />

    </main>

  )
}
 