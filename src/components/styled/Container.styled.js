import styled from "styled-components";
import bgdesktop from '../images/bg-pattern-desktop.svg';

export const Container = styled.div`
    --Desaturated-Red: hsl(0, 36%, 70%);
    --Soft-Red: hsl(0, 93%, 68%);
    --Dark-Grayish-Red: hsl(0, 6%, 24%);
    --btn-gradient: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
    --bg-gradient: linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%));
    font-size: 16px;
    font-family: 'Josefin Sans';
    --reguler: 300;
    --quitebold: 400;
    --semibold: 600;
    background-image: url(${bgdesktop});
    background-repeat: no-repeat;
    background-size: auto;
    h1{
        font-size: 4.1em;
        font-weight: var(--reguler);
        color:var(--Desaturated-Red);
        text-transform: uppercase;
        text-align: left;
        margin: 70px 0 0 130px;
        letter-spacing: .25em;
        @media screen and (max-width:600px){
            font-size: 2.5em;
            text-align: center;
            margin: 60px auto 0;
        }
    }
    h2{
        font-size: 1.02em;
        font-weight: var(--quitebold);
        color:var(--Desaturated-Red);
        text-align: left;
        margin: 15px 210px 0 130px;
        line-height: 1.67em;
        @media screen and (max-width:600px){
            font-size: .9em;
            text-align: center;
            margin: 15px 30px 0;
        }
    }
    h3{
        font-size: .9em;
        font-weight: var(--semibold);
        color: hsl(0, 100%, 74%);
        margin: 10px 0 0 160px;
        @media screen and (max-width:600px){
            text-align: center;
            margin: 8px auto;
        }
    }
    span{
        font-size: 1em;
        font-weight: var(--semibold);
        color:#413a3a;
        text-transform: uppercase;
        line-height: 1.1em;
    }
`