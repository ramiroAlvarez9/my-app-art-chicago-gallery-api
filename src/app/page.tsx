import Menu    from './components/Nav'
import Gallery from './components/Gallery'
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
 