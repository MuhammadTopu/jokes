const url =  
"https://icanhazdadjoke.com/";

let btn =document.querySelector(".get");
btn.addEventListener("click",async ()=>{
   let ress =await getJok();
   let p = document.querySelector(".pp");
   p.innerText = ress;

   let h3 = document.querySelector("h3");
   h3.innerText="";
  
})


async function getJok() {
  try {
    const config= {
      headers: {
        Accept: "application/json"
      }
    }
    let res= await axios.get(url,config);
   
    return res.data.joke;
    console.log(res);
  }
   catch(er) {
    console.log("Error :",er);
   }
   
  
}
const darkModeButton = document.getElementById('darkModeButton');
const body = document.body;

darkModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (darkModeButton === "clicked") {
    darkModeButton.innerText = "Light Mode";
  }
});