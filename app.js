
const ft = new Fetch();
const ui = new UI();


const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
const reset = document.getElementById("reset");
const info = document.getElementById("content")


button.addEventListener("click", () =>{
    const currentVal = search.value;
    
   
    ft.getCurrent(currentVal).then((data) =>
    {
        ui.populateUI(data);

        
    });
   
  
   
});

reset.addEventListener("click", () => {
    
    const oldVal = search.value = " ";
   
   
        ui.clearUI();

        
    

});