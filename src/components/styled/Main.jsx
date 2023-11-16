import styled from "styled-components";

export const Container = styled.div`
  grid-area: main;
`;

export const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  possition: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0 0 0 / 15%), 0 0 0 1px rgba(0 0 / 20%);
`;

export const ShareBox = styled(CommonCard)`
  diaply: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0 0 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      padding-top: 4px;

      button {
        img {
          margin: 0 4px 0 -2px;
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  // text-align: center;
  button {
    outline: none;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    line-height: 1.5;
    min-height: 48px;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    font-weight: 600;
  }
`

export const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px 0;
  overflow: visible;
`;

export const SharedActor = styled.div`
 paddinh-right=40px;
 flex-wrap:nowrap;
 padding:12px 16px 0;
 margin-bottom:8px;
 align-items:center;
 display:flex;
 a{
   margin-right:12px;
   flex-grow:1;
   overflow:hidden;
   display:flex;
   text-decoration:none;
   img{
     width:48px;
     height:48px;
   }
   & > div{
     display:flex;
     flex-direction:column;
     flex-grow:1;
     flex-basis:0;
     margin-left:8px;
     overflow:hidden;
     span{
       text-align:left;
       &:first-child{
         font-size:14px;
         font-weight:700;
         color: rgba(0, 0, 0, 1);
       }
       &:nth-child(n +1){
          font-size:12px;
          color: rgba(0, 0, 0, 0.6);
       }
     }
   }
 }
 button{
   possition:absolute;
   right: 12px;
   top:0;
   background:transparent;
   border:none;
   outline: none;
   
   img{
     width:20px;
     height:20px;
     padding-bottom: 20px;
     
   }
 }
`;

export const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

export const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    width: 100%;
  }
`;


export const SocialCount = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: center;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      align-items: center;
      border: none;
      background-color: white;
    }
    img {
      width: 20px;
    }
  }
`;

export const SocialAction = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0;
  min-height: 40px;
  padding: 4px 70px 8px 9px;

  button {
    display: inline-flex;
    align-items: center;
    color: #0a66c2;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;

    img {
      width: 20px;
      height: 20px;
    }
    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
      a {
        margin-left: 8px;
      }
    }
  }
`;

export const Content = styled.div`
  text-align: center;
  & > img {
    width: 30px;
  }
`;
