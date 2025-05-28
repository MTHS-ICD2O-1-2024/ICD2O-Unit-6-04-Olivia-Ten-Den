// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: May 6, 2025
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {
  // this calculates volume of a pyramid

  const params = new URLSearchParams(document.location.search)

  // input
  const aBase = params.get("aBase")
  const bBase = params.get("bBase")
  const height = params.get("height")
  console.log(aBase)

  // process
  const area = ((aBase + bBase) / 2) * height
  const dimensions =
    "<ul>\n<li>a base = " +
    aBase +
    "</li>\n<li>b base = " +
    bBase +
    "</li>\n<li>height = " +
    height +
    "</li>\n</ul>"

  // output
  document.getElementById("dimensions").innerHTML = dimensions
  document.getElementById("area").innerHTML = "Area is: " + area + " mm²"
}
