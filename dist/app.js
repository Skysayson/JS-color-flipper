const colorChange = () => {
    
    const element = document.getElementById("color-bg");
    const retVal = getRandomColor();

    element.classList.remove("bg-blue-500");  
    element.classList.remove("bg-red-500");  
    element.classList.remove("bg-green-500");
    element.classList.add(retVal);
    

    if(retVal === "bg-red-500") {
        document.getElementById("colorName").innerHTML = "RED";

    } else if(retVal === "bg-blue-500") {
        document.getElementById("colorName").innerHTML = "BLUE";
    
    } else if (retVal === "bg-green-500") {
        document.getElementById("colorName").innerHTML = "GREEN";
    }


}



function getRandomColor() {
    const color = ["red","blue","green"];

    var randomIndex = Math.floor(Math.random() * color.length);
    
    var rColor ="bg-" + color[randomIndex] + "-500";

    return rColor;
  }

