import Image from "next/image"
import Link from "next/link"
import Logo from "../public/img/logo.svg"
import Menu from "../public/img/menu.svg"
import Close from "../public/img/close.svg"
import { NavWrap } from "../styles/NavWrap"
import { useRouter } from "next/router"
import { useState } from "react"


  const Navigation = () => {
    const[isNavOpen, setNavOpen] = useState(false)
    const router = useRouter();
    return (
        <div>
         <NavWrap>
          <Link href={"/"}>
          <div className="logoContainer">
          
          <div className="theLogo">
          <Image  src={Logo} alt="logo"  layout="fill"/>
          </div>

          </div>
          </Link>

           <div className="nav-items">
            <ul className={isNavOpen ? "openedNav" : "closedNav"}>
            <Link href="/">
              <li className= {router.pathname== "/" ? "active" : ""}>Biz Haqimizda</li>
            </Link>
            <Link href="/courses">
            <li className= {router.pathname== "/courses" || router.pathname=="/course" ? "active" : ""}>Kurslar</li>
            </Link>
               <Link href={"/blogs"}>
               <li className= {router.pathname== "/blogs" || router.pathname=="/blog" ?"active" : ""}>Blog</li>
               </Link>
             
                
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