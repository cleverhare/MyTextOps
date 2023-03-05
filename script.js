const Uppercase = ()=>{
   let textareaInp =  exampleFormControlTextarea1.value
   let newinp = textareaInp.toUpperCase()
//    alert(newinp)
   exampleFormControlTextarea1.value = newinp
   alertfunc("Uppercase")
}
const lowercase = ()=>{
   let textareaInp =  exampleFormControlTextarea1.value
   let newinp = textareaInp.toLowerCase()
//    alert(newinp)
   exampleFormControlTextarea1.value = newinp
   alertfunc("Lowercase")
}
const copytext = ()=>{
  // Get the text field
  var copyText = document.getElementById("exampleFormControlTextarea1");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  alertfunc("Copy")

}
const alertfunc = (data)=>{
let alert = document.querySelector('.alertbox')
alert.innerHTML = `
<div class="alert alert-success alert-dismissible fade show" role="alert">
<strong>Success: </strong> The text Operation ${data} has been completed.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`
}
let upperbtn = document.querySelector('.upperbtn')
upperbtn.addEventListener("click", Uppercase)
let lowerbtn = document.querySelector('.lowerbtn')
lowerbtn.addEventListener("click", lowercase)
let copybtn = document.querySelector('.copybtn')
copybtn.addEventListener("click", copytext)
let emptybtn = document.querySelector('.emptybtn')
emptybtn.addEventListener("click", ()=>{
    exampleFormControlTextarea1.value = ""
    alertfunc("Empty")
})
exampleFormControlTextarea1.addEventListener("keyup", ()=>{
   let length =  exampleFormControlTextarea1.value.length
   emailHelp.innerHTML = `${length} Characters`
})