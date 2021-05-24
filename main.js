 
function drawChess() {
    var mainBlock = document.querySelector('.main-block');    
    var block;
    var flag = true;

    for (i = 0; i < 8; i++){    
        for (j = 0; j < 8; j++){
            if (j == 0) flag = !flag;
            block = document.createElement('div');           

            if (flag) {
                block.className = "block black";
            } else {
                block.className = "block white";
            }

            mainBlock.appendChild(block);

             flag = !flag;      
      
        }        
    } 
}
drawChess();

var blocks = document.querySelectorAll('.block');
var letters = ["Л", "КО", "С", "Ф", "К", "C", "КО", "Л"];
letters[56] = "Л";
letters[57] = "КO";
letters[58] = "С";
letters[59] = "Ф";
letters[60] = "К";
letters[61] = "С";
letters[62] = "КO";
letters[63] = "Л";
var schessFigure = ["&#9814", "&#9816", "&#9815", "&#9813", "&#9812", "&#9815", "&#9816", "&#9814"];
schessFigure[56] = "&#9820";
schessFigure[57] = "&#9822";
schessFigure[58] = "&#9821";
schessFigure[59] = "&#9819";
schessFigure[60] = "&#9818";
schessFigure[61] = "&#9821";
schessFigure[62] = "&#9822";
schessFigure[63] = "&#9820";

for (var i = 0; i < blocks.length; i++){
    if ((i>=0) && (i <=7)) {
        blocks[i].insertAdjacentHTML('beforeend', schessFigure[i]);
        //  blocks[i].style.color = "black";
       
    } else if (i >= 8 && i < 16) {
        blocks[i].insertAdjacentHTML('beforeend', "&#9817");
        //  blocks[i].style.color = "black";
        
    } else if (i >= 48 && i < 56) {
         blocks[i].insertAdjacentHTML('beforeend', "&#9817");
         blocks[i].style.color = "black";
        
     }else if (i >= 56 && i < 64) {
         blocks[i].insertAdjacentHTML('beforeend', schessFigure[i]);
         blocks[i].style.color = "black";        
     }
    }


var title = document.querySelector('.title');
title.style.color = "brown";
title.insertAdjacentHTML("beforeend", "&#9786");




// function chessDraw() {
//     var shess = document.querySelector(".main-block");
//     var num = 0;

//     for (var i = 0; i < 8; i++){
//         for (var j = 0; j < 8; j++){

//             if (num % 2 == 0) {
//                  shess.innerHTML+= '<div class="block white"></div>';
//             } else {
//                  shess.innerHTML+= '<div class="block black"></div>';
                
//             }
//             num++;
//         }
//         num++;
//     }

// }


// chessDraw();
 



// for (var i = 0; i < 8; i++){  
//   blocks[i].insertAdjacentHTML('beforeend', letters[i]);
     
// }
// for (var j = 8; j < 16; j++){
//     blocks[j].insertAdjacentHTML('beforeend', "П");
// }
// for (var j = 48; j < 56; j++){
//     blocks[j].insertAdjacentHTML('beforeend', "П");
//     blocks[j].style.color = "black";
// }

// for (var k = 56; k < 64; k++){
//      blocks[k].insertAdjacentHTML('beforeend', letters[k]);
//      blocks[k].style.color = "black";
// }
				
    // blocks[0].innerText = "Л";
    // blocks[1].innerText = "КO";    
    // blocks[2].innerText = "С";
    // blocks[3].innerText = "Ф";
    // blocks[4].innerText = "К";
    // blocks[5].innerText = "С";
    // blocks[6].innerText = "КO";
    // blocks[7].innerText = "Л";
				
    // blocks[56].innerText = "Л";
    // blocks[57].innerText = "КO";
    // blocks[58].innerText = "С";
    // blocks[59].innerText = "Ф";
    // blocks[60].innerText = "К";
    // blocks[61].innerText = "С";
    // blocks[62].innerText = "КO";
    // blocks[63].innerText = "Л";












