import Head from "next/head"
import Image from "next/image"
import Navigation from "../components/Navigation"
import Circles from "../public/img/circles2.png"
import { MainWrap } from "../styles/MainWrapper"
import Star from "../public/img/star.svg"
import VR from "../public/img/vr.webp"
import MoneyIcon from "../public/img/money.svg"
import TimeIcon from "../public/img/ttime.svg"
import PeopleIcon from "../public/img/people.svg"
import TestimonialIcon from "../public/img/testimonial.svg"
import AvatarPic from "../public/img/avatar2.png"
import AvatarPic2 from "../public/img/avatar3.png"
import AvatarPic3 from "../public/img/avatar4.png"
import Member from "../components/Member"
import Footer from "../components/Footer"
import { useRouter } from "next/router"


export default function Home() {
  const router = useRouter()
  
  return (
    <div>
      <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>

          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
     <MainWrap>
     <Navigation/>
     <div className="intro">

        <div className="introTexts">

        <h3 className="introHeadline">Biz bilan
          <div className="circlesContainer">
            <div className="theCircles">
          <Image src={Circles} layout="fill" alt="circles"/>
          </div>
        </div>

        <span> </span>Kelajak Kasblarini
        O&apos;rganing
        </h3>


        <p className="introSub">
        Dasturlash va Grafik Dizayn boyicha
        talabi yuqori mutaxassisga aylaning
        </p>

        <div className="introBtns">
          <button className="introPrimaryBtn" onClick={() => router.push("/courses")}>
            Kurslar
          </button>

          <button className="introSecondaryBtn" onClick={() => router.push("/blogs")}>
            Blog
          </button>

        </div> 

        <div className="note">

          <div className="starContainer">
            <div className="theStar">
              <Image src={Star} layout="fill" alt="star"/>
            </div>
          </div>

          <p className="noteSub">
          Hazorasp boyicha yagona zamonaviy
          IT Akademiyasi hisoblanadi
          </p>

        </div>

        </div>

        <div className="introPictureContainer">
          <div className="introPicture">
            <Image src={VR} layout="fill" alt="VR"/>
          </div>

        <div className="resContainer">
        <div className="introResults">
              <div className="teachers">
                <h2> 6</h2>
                <p>Ustoz</p>
              </div>

              <div className="teachers">
                <h2> 4</h2>
                <p>Kurs</p>
              </div>

              <div className="teachers">
                <h2> 120+</h2>
                <p>O&apos;quvchilar</p>
              </div>
          </div>
        </div>
        </div>

  

     </div>

     <div className="benHeadline">
      <h4 className="whyUS">NEGA BIZNI TANLASHINGIZ KERAK</h4>
      <h2 className="studyInUs">Bizda o&apos;qishning <span>afzalliklari</span></h2>
     </div>

     <div className="benefitsContainer">
        <div className="benefit">

         <div className="benIcon">
         <div className="benImgContainer">
            <div className="benImage">
              <Image src={MoneyIcon} alt={"moneyIcon"} layout="fill"/>
            </div>
          </div>

         </div>

         <h3 className="advantageHeadline">Hamyonbop Narxlar</h3>
          <p className="advantageSub">O&apos;rtacha narxda eng yaxshi sifatli ta&apos;limga ega bo&apos;ling</p>
        </div>

            <div className="benefit">

         <div className="benIcon">
         <div className="benImgContainer">
            <div className="benImage">
              <Image src={TimeIcon} alt={"moneyIcon"} layout="fill"/>
            </div>
          </div>

         </div>

         <h3 className="advantageHeadline">Vaqt mosligi</h3>
          <p className="advantageSub">Bizda ertalabgi, tushdan keyingi va kechqurungi kurslarimiz mavjud</p>
        </div>

        <div className="benefit">

<div className="benIcon">
<div className="benImgContainer">
   <div className="benImage">
     <Image src={PeopleIcon} alt={"moneyIcon"} layout="fill"/>
   </div>
 </div>

</div>

<h3 className="advantageHeadline">Qo&apos;llab-quvvatlash</h3>
 <p className="advantageSub">Darsdan tashqari har xil
musobaqalar va bepul
darslar ham bor</p>
</div>
     </div>

     <div className="experienceContainer">

  
    <h1 className="everLogo">
        EVERBEST
      </h1>
  

      <div className="experienceInfo">
        <h4 className="yearsHeadline">Ta’lim boyicha<span> 9+ yillik </span>
        tajribaga egamiz</h4>
        <p className="experienceSub">Everbest 9 yildan beri Hazorasp
        yoshlariga har xil fanlar boyicha
        ta’lim bermoqda</p> 


        <div className="experienceMetricContainer">

            <div className="metric">

            <h4 className="metricHeadline">04</h4>
            <p className="metricSub">O&apos;QUV MARKAZ</p>


            
            </div>


              <div className="metric">

        

            <h4 className="metricHeadline">1000+</h4>
            <p className="metricSub">O’QUVCHILAR</p>


            
            </div>


              <div className="metric">

        

            <h4 className="metricHeadline">40+</h4>
            <p className="metricSub">O’QITUVCHILAR</p>

            
            </div>

        </div>

      </div>

     </div>



      <h2 className="ourCoursesHeadline">Bizning <span>kurslar</span></h2> 
     <div className="coursesContainer">

      <div className="course">
        <p className="courseName" onClick={() => router.push("/courses")}>HAMMA KURSLAR</p>
      </div>

      <div className="course">
        <p className="courseName" onClick={() => router.push("course?courseName=graphicCourse")}>GRAFIK DIZAYN</p>
      </div>

      <div className="course">
        <p className="courseName" onClick={() => router.push("course?courseName=webDevCourse")}>WEB-DASTURLASH</p>
      </div>

      <div className="course">
        <p className="courseName">UI/UX DIZAYN</p>
      </div>

      <div className="course">
        <p className="courseName">KOMPYUTER SAVODXONLIGI</p>
      </div>

      <div className="course">
        <p className="courseName">ROBOTOTEXNIKA</p>
      </div>


      <div className="course">
        <p className="courseName">MOBIL DASTURLASH</p>
      </div>

     </div>

     <div className="testimonialsContainer">

      <div className="testimonialTexts">
        <h4 className="testimonialHeadline">Studentlar <span>biz haqimizda nima</span> deydi</h4>
        <p className="testimonialSub"> 100+ studentlar Everbest IT Academy yordamida zamonaviy kasb egalari bo’lishdi</p>

        <div className="testImgContainer">
          <div className="testImg">
            <Image src={TestimonialIcon} alt="testimonial" layout="fill"/>
          </div>
        </div>
      </div>

      <div className="reviews">

        <div className="review">
          <div className="reviewImgContainer">
            <div className="reviewImg">
              <Image src={AvatarPic} alt="avatar" layout="fill"/>
            </div>
          </div>

         <div className="reviewTexts">

         <p className="reviewText">
          Bunchalik oson
          bo’ladi deb o’ylamagandim
          </p>

          <h3 className="reviewUserName">Jasur Otaxonov</h3>
         </div>
        </div>

        <div className="review">
          <div className="reviewImgContainer">
            <div className="reviewImg">
              <Image src={AvatarPic3} alt="avatar" layout="fill"/>
            </div>
          </div>

         <div className="reviewTexts">

         <p className="reviewText">
         Hammasi ajoyib bo’ldi
         ustozlarga katta rahmat
          </p>

          <h3 className="reviewUserName">Guli Kurbanova</h3>
         </div>
        </div>

        <div className="review">
          <div className="reviewImgContainer">
            <div className="reviewImg">
              <Image src={AvatarPic2} alt="avatar" layout="fill"/>
            </div>
          </div>

         <div className="reviewTexts">

         <p className="reviewText">
         Juda qulay va ajoyib
         darslar
          </p>

          <h3 className="reviewUserName">Sanjar Sobirov</h3>
         </div>
        </div>

        
      </div>
     </div>

     <h2 className="ourTeamHeadline">Bizning <span>jamoa</span></h2>
     <div className="teamContainer">
      <Member name="Bobur Rajabov" status="FOUNDER" avatar="avatar2.png"/>
      <Member name="Lobar Habibova" status="CEO" avatar="avatar2.png"/>
      <Member name="Muhiddin Matchonov" status="GRAFIK DIZAYN USTOZ" avatar="avatar2.png"/>
      <Member name="Alijon Jumanazarov" status="WEB-DASTURLASH USTOZ" avatar="avatar2.png"/>
      <Member name="Yaxshimurod" status="ROBOTOTEXNIKA USTOZ" avatar="avatar2.png"/>
      <Member name="Asad" status="MENEJER" avatar="avatar2.png"/>
 
     </div>

    
    </MainWrap> 
    <Footer/>
    </div>
  )
}
