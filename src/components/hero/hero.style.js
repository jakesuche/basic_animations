import styled from "styled-components";

export const Header = styled.div`
  background-image: linear-gradient(
    141deg,
    #009e6c 0,
    #00d1b2 71%,
    #00e7eb 100%
  );
  background-color: #00d1b2;
  color: #fff;
  display: flex;
  justify-content: center;
  height: 250px;
  align-items: center;
  text-align: center;
  margin: auto;
  .content {
  }
`;

export const Section = styled.section`
  background-color: rgb(233, 255, 252);
  position: relative;
  .search{
      position: relative;
      img{
        right: 283px;
        position: absolute;
        z-index: 9999;
        top: 19px;
       }
       input {
    display: block;
    width: 100%;
    padding: 0.375rem 1.75rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    appearance: none;
    border-radius: 0.25rem 0rem 0rem 0.25rem;
    max-width: 700px;
    border-radius: 0.6rem;
    height: 60px;
    border: none;
    outline: none;
    position: absolute;
    left: 50%;
    transform:translateX(-50%);
    box-shadow: 0 2px 3px rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 10%);
    ::before{
        position:absolute;
        content:"sss";
        background-color:red;
        width:100%;
        height:100%;
    }
  }
    }
  }
 
  .section-inner {
    max-width: 1300px;
    margin: auto;
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 3rem 1.5rem;
  }
`;
export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  ${"" /* border: 1px solid rgba(0, 0, 0, 0.125); */}
  border-radius: 0.25rem;
  max-width: 500px;
  padding: 2rem 1rem 2rem 1rem;
  box-shadow: 0 2px 3px rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 10%);
  .actions {
    display: flex;
    justify-content: center;
    input {
      display: block;
      width: 100%;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.5;
      color: #212529;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      appearance: none;
      border-radius: 0.25rem 0rem 0rem 0.25rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      max-width: 300px;
    }
    a {
      border: none;
      border-radius: 0rem 0.25rem 0.25rem 0rem;
      background-color: #ed203d;
      outline: none;
    }
  }
  .body {
    flex: 1 1 auto;
    padding: 1rem 1rem;
    .title {
      margin-bottom: 0.5rem;
    }
    .text {
      width: 300px;
    }
  }
`;
