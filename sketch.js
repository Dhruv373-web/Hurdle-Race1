let height: [];
let k = 2;

arrayName[arrayName.length - 1];

function preload(){
  
}

function setup() {
  
createCanvas(400,400);

}

function draw() {  
  
  let heightSort = height.sort(function(a, b) {
    return a - b;
});

if(heightSort[heightSort.length -1] > k){
  return heightSort[heightSort.length -1] - k;
}else{
 return 0; 
}



  drawSprites();
}

function hurdleRace(k, height) {
  let heightSort = height.sort(function(a, b) {
    return a - b;
  });
  
  if(heightSort[heightSort.length -1] > k){
    return heightSort[heightSort.length -1] - k;
  }else{
   return 0; 
  }
}
