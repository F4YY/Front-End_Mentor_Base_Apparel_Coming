import styled from "styled-components";
import herodesktop from '../images/hero-desktop.jpg';
import heromobile from '../images/hero-mobile.jpg';
import logo from '../images/logo.svg';

export const BaseApparel = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: 2fr 1.45fr;
    grid-template-rows: .4fr 2fr .2fr;
    grid-template-areas:
        'Logo Heroimg'
        'Hero Heroimg'
        'Footer Heroimg';
    @media screen and (max-width:1025px) {
        grid-template-columns: 1fr;
        grid-template-rows: .1fr 1fr 1fr .5fr;
        grid-template-areas:
            'Logo'
            'Heroimg'
            'Hero'
            'Footer';
    }
    @media screen and (max-width:600px) {
        grid-template-columns: 1fr;
        grid-template-rows: .1fr 1fr 1fr .5fr;
        grid-template-areas:
            'Logo'
            'Heroimg'
            'Hero'
            'Footer';
    }
`
export const LogoApparel = styled.div`
    width: 160px;
    height: 60px;
    margin: 25px auto 20px 130px;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: contain;
    grid-area: Logo;
    @media screen and (max-width:600px) {
        width: 28%;
        height: 55px;
        margin: 35px 0 0 30px;
    }
`
export const HeroApparel = styled.div`
    grid-area: Hero;
    text-align: left;
`
export const ImageApparel = styled.div`
    background-image: url(${herodesktop});
    background-position: left;
    background-size: cover;
    grid-area: Heroimg;
    @media screen and (max-width:1025px) {
        height:600px;
        background-position: auto;
    }
    @media screen and (max-width:600px) {
        height:300px;
        background-image: url(${heromobile});
        background-position: left;
    }
`
export const FooterApparel = styled.footer`
    grid-area: Footer;
    text-align: center;
    margin: 20px auto 5px;
`
export const Styledform = styled.form`
    height:auto;
    margin: 40px auto 0;
    @media screen and (max-width:1025px){
        width: auto;
        justify-content: center;
    }
    @media screen and (max-width:600px){
        width: auto;
        justify-content: center;
        margin: 40px 30px 0;
    }
`
export const InputWrapper = styled.div`
    position: relative;
    width: 578px;
    @media screen and (max-width:600px){
        width: auto;
    }
`
export const InputboxEmail = styled.input.attrs({
    id:'email',
    name:'email',
    type:'email',
    placeholder:'Email Address',
})`
    width: 410px;
    height: 51px;
    font-size:.9em;
    font-weight:var(--reguler);
    padding-left:30px;
    border-radius: 30px;
    border: 1px solid var(--Desaturated-Red);
    margin:0 0 0 130px;
    ::placeholder{
        color:var(--Desaturated-Red);
    }
    @media screen and (max-width:600px){
        width: 89%;
        height: 40px;
        margin: 0 auto;
    }
`
export const ButtonNext = styled.button.attrs({
    type: 'submit'
})`
    position: absolute;
    top: 0;
    right:3px;
    width: 100px;
    height: 55px;
    font-size: .85em;
    font-weight: var(--semibold);
    color:#fff;
    background-image: var(--btn-gradient);
    border-radius: 30px;
    border-style: none;
    cursor:pointer;
    box-shadow: 0 2px 2px 0 var(--Soft-Red);
    :hover{
        opacity: .9;
    }
    :active{
        color:var(--Soft-Red);
        background-color: var(--Soft-Red);
        border: 1px solid var(--Soft-Red);
        background-image: var(--Soft-Red);
    }
    @media screen and (max-width:600px){
        right:-3px;
        width: 22%;
        height:44px;
    }
`
export const IconError = styled.img`
    position: absolute;
    width: 25px;
    height: 25px;
    top: 15px;
    right: 110px;
    color: var(--Red);
    @media screen and (max-width:1025px){
        right: 110px;
    }
    @media screen and (max-width:600px){
        top: 10px;
        right: 90px;
    }
`
//Styled for attribution:
export const Attribution = styled.div`
    height:auto;
    display: flex;
    margin: 10px auto 5px;
    text-align: center;
    @media screen and (max-width:600px){
        flex-direction: column;
        margin: 10px auto 5px;
    }
`
export const AttributionA = styled(Attribution)`
    margin:0;
    color: hsl(228, 45%, 44%);
    p{
        font-size: .7rem;
    }
`