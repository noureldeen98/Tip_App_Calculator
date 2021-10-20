/* Global Variables */
let theBillAmount,
    theTip,
    numberOfPeople ,
    customValue,
    listOfTipValues,
    valuesOfInputsو
    listOfTipValues= document.querySelectorAll("#btnValue");

    





   /* numberOfPeople= document.querySelector("#peopleNumber")
    theBillAmount = document.getElementById("BillValue")
    customValue   = document.getElementById("custom");
    listOfTipValues = document.querySelectorAll("#btnValue");*/

  

    

    document.addEventListener("keyup",(evt)=>{
      theBillAmount  = parseFloat(document.getElementById("BillValue").value);
      customValue    = parseFloat(document.getElementById("custom").value);
      numberOfPeople = parseInt(document.getElementById("peopleNumber").value);
  
      //The validation
  if(numberOfPeople == 0 || numberOfPeople < 0 ){
        document.getElementById("peopleNumber").style.cssText="border:3px solid red; ";
        document.querySelector(".error-message").innerHTML="Can't be zero";
        document.querySelector(".error-message").innerHTML="Can't less or = than zero";
  }else if(numberOfPeople == "" || numberOfPeople > 0) {
    document.querySelector(".error-message").innerHTML=" ";
    document.getElementById("peopleNumber").style.cssText="border:#26c2ad 2px solid";
  }
  
  else{
    document.getElementById("peopleNumber").style.cssText="border:#26c2ad 2px solid"; 
    
  }

  if(theBillAmount < 0 || theBillAmount == 0 ){
    document.querySelector(".error-messages").innerHTML="Enter value more than zero";
    document.getElementById("BillValue").style.cssText="border:3px solid red;border-radius:15px ";
  }else if(theBillAmount > 0 || theBillAmount == "" ){
    document.querySelector(".error-messages").innerHTML=" ";
    document.getElementById("BillValue").style.cssText="border:#26c2ad 2px solid;border-radius:15px";
  }
  else{
    document.getElementById("BillValue").style.cssText="border:#26c2ad 2px solid; border-radius:15px";
    
  }
  if(customValue > 0){
    theValueOfTip  = (customValue*theBillAmount)/100
  }else{
    document.getElementById("custom").style.cssText="border:red 2px solid; border-radius:15px;"
  }
    
     //The end of validation

       // Mn kimt el fatora 
      theTipResult   = theValueOfTip/numberOfPeople; // de el value bta3t el tips 3la l frd
      totalResult    = (theBillAmount+theValueOfTip)/numberOfPeople; //de el value bta3t el total el fatora 3la l frd
      document.getElementById("tip/Person").innerHTML   ="$" + parseFloat(theTipResult).toFixed(3);
      document.getElementById("total/Person").innerHTML ="$" + totalResult.toFixed(3); 

    }) 

  listOfTipValues.forEach(btn =>{
      btn.addEventListener("click", (evt)=>{
      
      btnValue      = parseFloat(btn.name);
      theValueOfTip = (btnValue*theBillAmount) // Mn kimt el fatora
      theTipResult  = theValueOfTip/parseFloat(numberOfPeople);// de el value bta3t el tips 3la l frd
      totalResult   = (theBillAmount+theValueOfTip)/numberOfPeople;//de el value bta3t el total el fatora 3la l frd

      document.getElementById("tip/Person").innerHTML   = "$" + parseFloat(theTipResult).toFixed(3);
      document.getElementById("total/Person").innerHTML = "$" + totalResult.toFixed(3); 
      })
    })



document.getElementById("reset").addEventListener("click",updateUI);


function updateUI(){


  document.getElementById("BillValue").value    = " ";
  document.getElementById("custom").value       = " ";
  document.getElementById("peopleNumber").value = " ";

  document.getElementById("tip/Person").innerHTML   ="$" + "0.00" ;
  document.getElementById("total/Person").innerHTML ="$" + "0.00";
}


   












  


  



