import Image   from 'next/image'
import styles  from './page.module.css'
import Menu    from './components/nav'
import Gallery from './components/gallery'


export default function Home() {
  return (
    <main>
      <Menu />  
      <Gallery />
     
    </main>
  )
}
 