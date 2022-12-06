import Image from "next/image"
import Link from "next/link"
import Logo from "../public/img/logo.svg"
import Menu from "../public/img/menu.svg"
import Close from "../public/img/close.svg"
import { NavWrap } from "../styles/NavWrap"
import { useRouter } from "next/router"
import { use, useState } from "react"
import ArrowDown from "../public/img/arrowDown.svg"
import {Link as ScrollLink} from "react-scroll/modules"


  const Navigation = () => {
    const[isNavOpen, setNavOpen] = useState(false)
    const [dropOpen, setDrop] = useState(false)
    const router = useRouter();
    return (
        <div>
         <NavWrap>
          <Link href={"/"}>
          <div className="logoContainer">
          
          <div className="theLogo">
          <Image  src={Logo} alt="logo"  layout="fill"/>
          </div>

          <p className="logoName">Everbest <br/>IT Academy</p>

          </div>
          </Link>

           <div className="nav-items">
            <ul className={isNavOpen ? "openedNav" : "closedNav"}>
            <Link href="/">
              <li className= {router.pathname== "/" ? "active" : ""}>Asosiy</li>
            </Link>

            <Link href="/courses">
            <li className= {router.pathname== "/courses" || router.pathname=="/course" ? "active" : ""}>Kurslar</li>
            </Link>

            <div className="aboutUsSection" >

            <div className="aboutContainer" onClick={() => setDrop(!dropOpen)}>

            <Link href="#">
              <li className= {router.pathname== "/students" ? "active" : ""}>Biz Haqimizda</li>
            </Link>
            <div className="arrowContainer">
              <div className="arrowDown">
                <Image src={ArrowDown} layout="fill" alt="arrow down"/>
              </div>
            </div>
            </div>

            <div className={dropOpen ? "aboutDropdownActive" : "aboutDropdownInActive"}>
              <ul className="aboutLinks">
                <li>Jamoa</li>
                <li>Talabalar Ishi</li>
              </ul>
            </div>

            </div>
            
        
               <Link href={"/blogs"}>
               <li className= {router.pathname== "/blogs" || router.pathname=="/blog" ?"active" : ""}>Blog</li>
               </Link>
             
           <button className="contactUs">Bog'lanish</button>     
            </ul>
           </div>

           <div className="menuContainer">
            <div className="menu" onClick={()=>setNavOpen(!isNavOpen)}>
              <Image src={isNavOpen ? Close : Menu} alt="menu icon" layout="fill"/>
            </div>
           </div>
         </NavWrap>

        </div>
    )
  }

  export default Navigation