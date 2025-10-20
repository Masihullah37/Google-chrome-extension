

let myLeads =[];

const input = document.getElementById('input');
const inputbtn = document.getElementById('inputBtn');
const unOrderList = document.getElementById('ul-list');
const deleteBtn = document.getElementById('delete-button');
const tabBtn = document.getElementById('tab-btn');
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
;


if(leadsFromLocalStorage){ 
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads){
 

  let listItems = "" 
  for(let i=0; i<leads.length; i++){
    
    listItems += `
      <li>
        <a target='_blank' href='${leads[i]}'>
          ${leads[i]}
        </a>
      </li>
    `;
    
  }
  unOrderList.innerHTML = listItems;
 }

deleteBtn.addEventListener("dblclick",function(){
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputbtn.addEventListener('click',function(){
  
myLeads.push(input.value);

localStorage.setItem("myLeads",JSON.stringify(myLeads));
input.value = "";

render(myLeads);



})



tabBtn.addEventListener("click", function(){
  //grab the url of current tab

chrome.tabs.query({active: true, currentWindow: true},function(tabs){
// console.log(tabs);
 myLeads.push(tabs[0].url);
   localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);

} )

 
})




