const input1 = document.getElementById("input-1")
const input2 = document.getElementById("input-2")
const addBtn = document.getElementById("add-btn")
const subBtn = document.getElementById("subtract-btn")
const mulBtn = document.getElementById("multiply-btn")
const divBtn = document.getElementById("divide-btn")
const sumEl = document.getElementById("sum-el")
const sign = document.getElementById("sign")

addBtn.addEventListener("click", ()=>{
  sign.innerHTML = ""
  sumEl.innerHTML = "Sum : "
  let number1 = Number(input1.value)
  let number2 = Number(input2.value)
  let addSum = number1 + number2
  sumEl.innerHTML += addSum
  sign.innerHTML = "+"
})

subBtn.addEventListener("click", ()=>{
  sign.innerHTML = ""
  sumEl.innerHTML = "Sum : "
  let number1 = Number(input1.value)
  let number2 = Number(input2.value)
  let subSum = number1 - number2
  sumEl.innerHTML += subSum
  sign.innerHTML = "-"
})

mulBtn.addEventListener("click", ()=>{
  sign.innerHTML = ""
  sumEl.innerHTML = "Sum : "
  let number1 = Number(input1.value)
  let number2 = Number(input2.value)
  let mulSum = number1 * number2
  sumEl.innerHTML += mulSum
  sign.innerHTML = "*"
})

divBtn.addEventListener("click", ()=>{
  sign.innerHTML = ""
  sumEl.innerHTML = "Sum : "
  let number1 = Number(input1.value)
  let number2 = Number(input2.value)
  let divSum = number1 / number2
  sumEl.innerHTML += divSum
  sign.innerHTML = "/"
})