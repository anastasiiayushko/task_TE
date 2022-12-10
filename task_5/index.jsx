// ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ И ТЕСТИРОВАНИЯ КОМПОНЕНТОВ ИЗ ТЕСТОВОГО ЗАДАНИЯ

import { useState } from "react";

const Wrapper = ({mouseEnterCallbak, children})=>{
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };

  return (
      <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
        {children}
      </div>
  );

}

export const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => {

  return (
      <Wrapper mouseEnterCallbak={mouseEnterCallbak}>
        <img src={imgSrc} alt={imgAlt} />
      </Wrapper>
  );
};

export const Block2 = ({ mouseEnterCallbak, content }) => {

  return (
      <Wrapper mouseEnterCallbak={mouseEnterCallbak}>
        <p>{content}</p>
      </Wrapper>
  );

};

export const Block3 = ({ mouseEnterCallbak, userData }) => {

  return (
      <Wrapper mouseEnterCallbak={mouseEnterCallbak}>
        <address>
          country: {userData.country}, street: {userData.street}
        </address>
      </Wrapper>
  );

};
