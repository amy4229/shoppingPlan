const modal = document.querySelector(".modal");
const greyout = document.querySelector(".greyout");
const itemInput = modal.querySelector("input");
const addBtn = modal.querySelector("button");


plusBtn.addEventListener("click", openModal);
greyout.addEventListener("click", closeModal);
itemInput.addEventListener("keydown", (event)=>{
    if(event.key === "Enter"){
        handleSubmitAddBtn() ;
    }
    if(event.key === "Escape"){
        closeModal();
    }
})
addBtn.addEventListener("click", handleSubmitAddBtn);

function handleSubmitAddBtn(event){
    itemName = itemInput.value.trim();
    if(itemName){
        addShoppingItem(itemName);
        closeModal();
        countFooterLabels();
        itemInput.value = "";
    } 
}


function openModal() {
    greyout.classList.remove("hidden");
    modal.classList.remove("hidden");
    itemInput.focus();
}

function closeModal() {
    modal.classList.add("hidden");
    greyout.classList.add("hidden");
}