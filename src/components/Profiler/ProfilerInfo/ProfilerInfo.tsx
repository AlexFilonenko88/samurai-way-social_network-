import React from "react";
// @ts-ignore
import P from "./ProfilerInfo.module.css";

export const ProfilerInfo = () => {
  return (
    <div>
      <div className={P.content}>
        <img
          src='https://vsegda-pomnim.com/uploads/posts/2022-04/1649325800_28-vsegda-pomnim-com-p-foto-morya-plyazha-43.jpg'/>
      </div>
      <div className={P.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}