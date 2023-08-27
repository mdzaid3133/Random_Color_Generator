
 const button = document.querySelector('#btn')
 const color = document.querySelector('#color-text')

const hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];


  button.addEventListener('click',()=>{
    
       let hexColor = generateHexColor(); 

       document.body.style.backgroundColor = hexColor;

       color.textContent = hexColor

  });

  function generateHexColor(){

    let hexColor = '#'

     for(let i =0 ; i < 6; i++ )
     {
        hexColor += hex[genreateRandomColor()]
     }
      return hexColor
  }

   function genreateRandomColor()
   {
    return Math.floor(Math.random()*hex.length)
   }



