import './nav.scss'
import Image from 'next/image'
import Hamburguer from '../../../public/assets/icons8-menú.svg';

export default function Nav() {
    return (
      <nav className= 'nav' >


    <div className='logo__container'>
        <Image  
                src= {`https://yt3.googleusercontent.com/ytc/AIf8zZR3QiXAQ3mMmGmNAEFHZX9Z5DvSrmE7C6HkdXRS5A=s900-c-k-c0x00ffffff-no-rj`}
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