const mobilehover = document.getElementsByClassName('tst')
var x = window.matchMedia("(max-width: 700px)")
function driver() {
   mobileResponsive(x)
}



//  const onMobileClick = (target) => {
//     mobilehover[0].id += 'newclass'
//    //  window.alert('WORKED') //mobile click should be working
    
//  }
 const mobileResponsive = (x) => {
   if (x.matches) { //media query passed
      mobilehover[0].setAttribute('id','newclass')
      console.log(mobilehover[0])
      window.alert('WORKED') 
      window.alert('WORKED') 
   }
   else {
      window.alert('error')
      console.log(mobilehover[0])
   }
  
   
 }

//  x.addListener(mobileResponsive)