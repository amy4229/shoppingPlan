const itemList = document.querySelector("main .list");
const total = document.querySelector(".total");
const bought = document.querySelector(".bought");
const left = document.querySelector(".left");
const plusBtn = document.querySelector(".plus-btn");
const clearBtn = document.querySelector(".clear-btn");

countFooterLabels();

clearBtn.addEventListener("click", () => {
    itemList.innerHTML = "";
    countFooterLabels();
})


function countFooterLabels() {

    const list = document.querySelectorAll(".check");
    const totalCnt = list.length;
    total.textContent = `전체 아이템수 : \t ${totalCnt}`;
    const boughtCnt = Array.from(list).filter(item => item.checked).length || 0;
    bought.textContent = `구매 아이템수 : \t ${boughtCnt}`;
    const leftCnt = Array.from(list).filter(item => !item.checked).length || 0;
    left.textContent = `남은 아이템수 : \t ${leftCnt}`;
}

function addShoppingItem(itemName) {
    const li = document.createElement("li");
    li.innerHTML =
        `   <input type="checkbox" class="check"/>
        <span> ${itemName} </span>
        <button class="delete">🗑️</button>
    `;
    itemList.appendChild(li);

    const deleteBtn = li.querySelector(".delete");
    deleteBtn.addEventListener("click", handleDelete);
    li.scrollIntoView({behavior:"smooth"});
    
    const boughtCheck = li.querySelector(".check");
    boughtCheck.addEventListener("change", handleCheck);
}

function handleCheck(event){
    const ischeck = event.target.checked;
    console.log(ischeck);
    const node = event.target.parentNode;
    const btn = node.querySelector(".delete");
    if(ischeck) {
        node.classList.add("checked");
        btn.classList.add("hidden");
    }else{
        node.classList.remove("checked");
        btn.classList.remove("hidden");
    }
    countFooterLabels();
}

function handleDelete(event) {
    const node = event.target.parentNode;
    itemList.removeChild(node);
    countFooterLabels();
}