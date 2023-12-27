let tabLinks=document.getElementsByClassName('tab-links')
let tabContents=document.getElementsByClassName('tab-contents')

function openTab(name){
for(value of tabLinks){
    value.classList.remove('active-link')
}
for(data of tabContents){
    data.classList.remove("active-tab")
}
event.currentTarget.classList.add('active-link')
document.getElementById(name).classList.add('active-tab')
}

const sideMenu=document.getElementById('sideMenu')
function closeMenu(){
    sideMenu.style.right="-200px"
}

function openMenu(){
    sideMenu.style.right="0"
}
const scriptURL = 'https://script.google.com/macros/s/AKfycby8K_3fzZDDDlLzLaAv83O3KJ2dsF_iY19cGEHArdPQYDi4Neec6zwkPN26j-n76vmo/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById('msg')
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent successfully";
        setTimeout(()=>{
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

//   #projects{
//     margin-top: 850px  !important;
// }
// /.view{
//     background-color: #28B463;
//     color: #fff;
//     text-decoration: none !important;
//     padding: 20px 5px 20px 15px;
//     width: 200px;
//     margin: 50px 0px 0px 60px;
//     border-radius: 10px;
    
// } 