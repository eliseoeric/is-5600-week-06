import React from "react";
import { Link } from "react-router-dom";

const Card = ({description, alt_description, id, user, urls, likes}) => {
const Card = (props) => {

  const {description, alt_description, id, user, urls, likes} = props;


  const style = {
    backgroundImage: `url(${urls.small})`
  }