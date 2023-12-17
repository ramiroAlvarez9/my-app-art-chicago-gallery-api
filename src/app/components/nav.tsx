import './nav.css'
import Image from 'next/image'
import Logo  from '../../../public/assets/art institute.png'
import Audio from '../../../public/assets/audio.svg'

export default function Nav() {
    return (
      <nav className= 'nav' >


    <div className='logo__container'>
        <Image  
                src= {Logo}
                alt="Picture of the author"
                width={50}
                height={50}        
        
        />
    </div>

    <div className='audio__container'>
        <Image  
                src= {Audio}
                alt="Picture of the author"
                width={15}
                height={15}        
        
        />
    </div>

    </nav>  
    
    )
  }