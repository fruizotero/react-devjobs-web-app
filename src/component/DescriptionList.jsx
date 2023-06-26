/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { ListItem } from "./ListItem";

import "./DescriptionList.css";

export function DescriptionList({ data, title, bullet, orderedList }) {
  let { content, items } = data;

  return (
    <article className="description-list">
      <p className="description-list_title">{title}</p>
      <p className="description-list_description">{content}</p>
      <ul className="description-list_list">
        {items.map((el, index) => (
          <ListItem
            key={index}
            number={orderedList && index + 1} 
            bullet={!orderedList && "description-list_bullet"}
            text={el}
          />
        ))}
      </ul>
    </article>
  );
}
