import { Fira_Sans } from "next/font/google";
import './gallery.scss'

const fira_sans = Fira_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "200",
});

const WorksBar = () => {
  
  return (
    <div className="works__container">
    
      <div className="works__container--line"> </div>
      <h6 className={`h6 ${fira_sans.className}`}>WORKS</h6>
    
    </div>
  );
};

export default WorksBar;
