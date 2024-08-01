"use strict"

const objs1 = document.getElementsByTagName("div")
const objs2 = [...objs1]

objs2.forEach(element => {
    console.log(element.innerHTML = "Curso")
})

console.log(objs2[0])