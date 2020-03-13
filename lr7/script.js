window.onload = ()=> {
    let list = document.querySelector("#li"); 
    list.innerHTML = insert (getChild(null)); 
};

let arr=[
{id: 2, name: "Организация", parent_id: null},
{id: 3, name: "Бухгалтерия", parent_id: 2},
{id: 6, name: " Отдел охраны", parent_id: 2},
{id: 7, name: "Караульная служба", parent_id: 6},
{id: 8, name: "Бюро пропусков", parent_id: 6},
{id: 12, name: "Патентный отдел", parent_id: 2},
{id: 13, name: "Лётная служба", parent_id: 2},
{id: 14, name: "Лётный отряд Боинг 737", parent_id: 13},
{id: 17, name: "Лётный отряд Боинг 747", parent_id: 13},
{id: 18, name: "1-ая авиационная эксадрилия Боинг 737", parent_id: 14},
{id: 19, name: "2-ая авиационная эскадрилия Боинг 737", parent_id: 14},
{id: 21, name: "Лётно-методический отдел", parent_id: 13}
];

let s=(a,b)=>{
    if (a.parent_id>b.parent_id)
        return true;
    else return false;
};
arr.sort(s);

function getChild(id){
    let arrChild=[];
    let len=0;
    for (i=0; i<arr.length; i++){
        if (arr[i].parent_id===id){
            arrChild[len++]=i;
        }
    }
    if (!len){
        return null;
    }
    else{
        return arrChild;
    }
}

function insert (id) { 
    if (id !== null) {
        let li = arr[id[0]].parent_id;
        let l = "<ul class='"+li+"'>"; 

        for (let i = 0; i < id.length; i++) {
            l += "<li>"+arr[id[i]].name+"</li>"; 
            l += insert (getChild (arr[id[i]].id));
        }
        l+= "</ul>";
        return l;
    }
    else return " ";
}
