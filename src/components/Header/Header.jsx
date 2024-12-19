import reactImage from '../../assets/python-hero.png';
import './Header.css'

export default function Header() {


    return(
      <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>Python Konuları</h1>
      <p>
         Python'un ve programlama'nın temel konuları 
      </p>
    </header>
    );
  }

