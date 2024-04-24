
document.addEventListener("DOMContentLoaded", function() {

    /* Eugene */
    let modelName = "XYZ";
    let duration = 0;
  
    /**************
     * helper function
     **************/
    function recalculate() {
        let costLabel = document.getElementById("calculated-cost");
        let totalCost;
        if (modelName === "XYZ") {
          totalCost = duration * 100; 
        } else if (modelName === "CPRG") {
          totalCost = duration * 213; 
        }
        costLabel.innerHTML = totalCost.toFixed(2);
      }
    /**************
     * model button logic
     **************/
    let modelButton = document.getElementById("model-button");
    let modelText = document.getElementById("model-text");
  
    function changeModel() {
      if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
      } else {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
      }
      recalculate();
    }
  
    
    if (modelButton) {
      modelButton.addEventListener("click", changeModel);
    }
  
    /**************
     * duration button logic
     **************/
    let durationButton = document.getElementById("duration-button");
    let durationText = document.getElementById("duration-text");
  
    function changeDuration() {
      duration = parseInt(prompt("Enter the new duration in days:"));
      durationText.innerHTML = duration;
      recalculate();
    }
  
    
    if (durationButton) {
      durationButton.addEventListener("click", changeDuration);
    }
  });