const modal = document.querySelector(".modal");
const greyout = document.querySelector(".greyout");
const item = modal.querySelector("input");
const addBtn = modal.querySelector("button");


plusBtn.addEventListener("click", openModal);
greyout.addEventListener("click", closeModal);
item.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        handleSubmitAddBtn() ;
    }
    if(event.key === "Escape"){
        closeModal();
    }
})
addBtn.addEventListener("click", handleSubmitAddBtn);

function handleSubmitAddBtn(event){
    //event.preventDefault();
    itemName = item.value.trim();
    if(itemName){
        addShoppingItem(itemName);
        closeModal();
        countFooterLabels();
        item.value = "";
    } 
}


function openModal() {
    greyout.classList.remove("hidden");
    modal.classList.remove("hidden");
    item.focus();
}

function closeModal() {
    modal.classList.add("hidden");
    greyout.classList.add("hidden");
}