import Head from "next/head"
import Image from "next/image"
import Navigation from "../components/Navigation"
import { BlogWrap } from "../styles/BlogWrap"
import NumbPic from "../public/img/numbers.svg"



    const Blog = () => {
        
        return (
          <>
           <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet"/>

          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet"/>
          </Head>
          <BlogWrap>
            <Navigation/>
            <div className="blogBody">
              
                <div className="blogThumbnailContainer">
                    <div className="blogThumbnail">
                        <Image src={NumbPic} alt="numbers" layout="fill"/>
                    </div>
                </div>

                <h2 className="theBlogHeadline">Dasturlash Prinsiplari</h2>
                <p className="theBlogSub">
                     KISS: Dasturlash sohasida hech kim disk raskadrovka, texnik xizmat ko'rsatish yoki murakkab kodni o'zgartirishni yoqtirmaydi. “Keep It Simple, Stupid (KISS)” taʼkidlashicha, koʻpchilik tizimlar uni murakkablashtirgandan koʻra sodda boʻlsa yaxshi ishlaydi, shuning uchun siz kod yozayotganda yechimingiz tushunish uchun koʻp vaqt va kuch talab qiladigan murakkab boʻlmasligi kerak. Agar sizning kodingiz oddiy bo'lsa, boshqa ishlab chiquvchilar kod mantig'ini tushunishda hech qanday muammoga duch kelmaydilar va ular sizning kodingiz bilan osongina davom etishlari mumkin. Shuning uchun har doim murakkab muammoni kichikroq bo'laklarga ajratish yoki o'zingiz yozgan keraksiz kodlarni olib tashlash kabi turli yondashuvlar yordamida kodingizni soddalashtirishga harakat qiling. Dasturiy ta'minot muhandisligining maqsadi uni yaratish emas, balki murakkablikni kamaytirishdir. - Pamela Zave 2. QURUQ: Koddagi ma'lumotlar, mantiq yoki funksiyaning takrorlanishi nafaqat kodingizni uzoqlashtiradi, balki kodni saqlash, disk raskadrovka qilish yoki o'zgartirishga kelganda ham ko'p vaqtni behuda sarflaydi. Agar siz kodingizga kichik o'zgartirish kiritishingiz kerak bo'lsa, uni bir necha joyda qilishingiz kerak. "O'zingizni takrorlamang (QURG'I)" asosiy maqsadi kodning takrorlanishini kamaytirishdir. Unda aytilishicha, kodning bir qismi manba kodining faqat bitta joyida amalga oshirilishi kerak. DRY tamoyiliga qarama-qarshi bo'lgan NOM (hamma narsani ikki marta yozing) yoki "hammaning vaqtini behuda sarflash"), agar siz bir xil mantiqni bir nechta joyda yozsangiz, DRY tamoyilini buzadi. Kodingizda takrorlanishni oldini olish uchun umumiy funktsiyani yaratishingiz yoki kodingizni abstrakt qilishingiz mumkin. 3. YAGNI: Agar siz kelajakda kerak bo'lishi mumkin bo'lgan kodni yozayotgan bo'lsangiz, hozirda emas, balki dasturiy ta'minotingiz yoki dasturingiz kattaroq va murakkab bo'lishi mumkin. "Sizga kerak bo'lmaydi (YAGNI)" tamoyili "kerak bo'lmaguncha biror narsani amalga oshirmang", chunki ko'p hollarda siz kelajakda ushbu kod qismini ishlatmaysiz. Dasturchilarning ko'pchiligi .

                </p>
            </div>
          </BlogWrap>
          </>
        )
    }

    export default Blog