import './nav.scss'
import Image from 'next/image'
import Logo  from '../../../public/assets/art institute.png'
import Hamburguer from '../../../public/assets/icons8-menú.svg';

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
                src= {Hamburguer}
                alt="sound-icon"
                width={15}
                height={15}        
        
        />
    </div>

    </nav>  
    
    )
  }