// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: May 6, 2025
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {
  // this calculates volume of a sphere

  const params = new URLSearchParams(document.location.search)

  // 
  
  if (params.get("radius") == null) {
    const radius = 0
  } else {
    const radius = params.get("radius")
  }

  // process
  const volume = 4 / 3 * π * radius ** 3

  // output
  document.getElementById("radius").innerHTML = "<p>The radius = " + radius + " cm</p>"
  document.getElementById("volume").innerHTML = "<p>The volume is: " + volume + " cm³</p>"
}
