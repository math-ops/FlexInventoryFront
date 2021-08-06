import styled from "styled-components";

export const Header = styled.header`
  background: #007fab;
  background-image: linear-gradient(to right, #0EBCE7, #223A8A);
  padding: 1rem 0 1rem;
  text-align: right;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.8rem;
  display: flex;
  justify-content: left;
  align-items: left;
  margin-top: -3rem;
  margin-left: 0.8rem;
  color: #fff;
  text-shadow: 1px 1px 0 #0000004d;
`;

export const Subtitle = styled.h1`
    color: #333;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 4rem 0 2rem;
  color: #333;
  opacity: 0.6;
  margin-top: -1.8rem;
`;

export const MenuButtons = styled.div`
  @media(min-width: 799px){

    margin-left: 60px;
    a {
    margin-left: 1rem;
    background: #fff;
    border-radius: 0.25rem;
    width: 70%;
    padding: 1rem;
    text-decoration: none;
    box-shadow: 1px 1px 0.25 #0000004d;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(10px);
    }
  }

    img {
      width: 32px;
      height: 32px;
      display: inline;
      margin-left: auto;
      margin-right: 10px;
    }

  div {
      margin-left: 5px;
      margin-right: auto;

      

      strong{
        font-size: 25px;
        color: #333;
        display: inline-block;
        justify-content: center;
        
      }
      p {
        font-size: 14px;
        color: #969cb3;
        margin-top: 4px;
      }
    }
  
  }
  
  @media(max-width: 800px){
    a {
    margin-left: 1rem;
    background: #fff;
    border-radius: 0.25rem;
    width: 70%;
    padding: 1rem;
    text-decoration: none;
    box-shadow: 1px 1px 0.25 #0000004d;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(10px);
    }
  }

    img {
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: auto;
    }

  div {
      margin-left: 16px;
      

      strong{
        font-size: 20px;
        color: #333;
      }
      p {
        font-size: 14px;
        color: #969cb3;
        margin-top: 4px;
      }
    }
  
  }
 
`;

export const Options = styled.div`
  div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;