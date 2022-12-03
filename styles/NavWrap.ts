import styled from "styled-components";
import { primaryColor } from "./MainWrapper";

export const NavWrap = styled.div`

    @media only screen and (min-width:600px) {


        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 24px;
    

        .closedNav {
            list-style-type: none;
            display: flex;
            flex-direction: row;
            gap: 52px;
            font-size: 20px;
            font-family: "Poppins", "sans-serif";

        }

     
        
        .active::after{
            margin-left: 25%;
            display: flex;
            justify-content: center;
            align-items: center;
            content: "";
            width: 50%;
            border-bottom: 2px solid ${primaryColor};
            
        }
        .logoContainer {
           .theLogo {
            width: 44px;
            height: 44px;
            position: relative;
           }
        }

        .menuContainer {
            display: none;
        }

      

       
    }


    //Desktop 

        @media only screen and (max-width:600px) {

            
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 24px;
        
    
        
        .closedNav {
            display: none;
            top: 0;
            left: 0;
            transform: translateX(100%);
            transition: all .45s;
            width: 100%;
            height: 100vh;
            position: absolute;
            list-style-type: none;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            justify-content: center;
            font-size: 32px;
            font-family: "Poppins", "sans-serif";
            background-color: ${primaryColor};
            user-select: none;

        }

        .openedNav {
            display: flex;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            position: absolute;
            list-style-type: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 12px;
            font-size: 32px;
            font-family: "Poppins", "sans-serif";
            background-color: ${primaryColor};
            transform: translateX(0);
            transition: all .45s;
            z-index: 1;
            user-select: none;
           
            

        }

     
        
        .active {
            color: white;
        }
        .logoContainer {
           .theLogo {
            width: 44px;
            height: 44px;
            position: relative;
            user-select: none;
           }
        }

        
        .menuContainer {
            display: inline-block;
            z-index: 1;
            user-select: none;

            .menu {
                position: relative;
                width: 44px;
                height: 44px;
            }
        }

      

       
    }

`