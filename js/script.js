articles = new Array();
//читання з хмарного сховища
async function populate(){
    const requestURL="https://api.jsonbin.io/v3/b/65547abf12a5d3765999b744";
    const request = new Request(requestURL);
    const response = await fetch(request);
    if (response.ok){
        const art = await response.json();

        newArticle(art.record);
        showHeader();
        ShowArticle();
    }
    else
    alert("ERROR");
}
//Створення масиву об'єктів
function newArticle(obj){
    let art = obj;
    for (a of art){
        let artic = new article(a.name, a.printed);
        articles.push(artic);
    }
}
//Виведення заголовку
function showHeader() {
    const header = document.getElementById("header");
    const myH3 = document.createElement("h3");
    myH3.innerText = "Каталоги статей, які друкуються у";
    header.appendChild(myH3);
}
//Виведення даних
function ShowArticle(){
    const main = document.querySelector("article");
    const div__newspaper=document.createElement("div");
    const div__magazine=document.createElement("div");
    const div__monograph=document.createElement("div");
    const myH4_newspaper=document.createElement("h4");
    const myH4_magazine=document.createElement("h4");
    const myH4_monograph=document.createElement("h4");
    myH4_newspaper.textContent = "Газеті";
    myH4_magazine.textContent = "Журналі";
    myH4_monograph.textContent = "Монографії";
    const myListnewspaper=document.createElement("ul");
    const myListmagazine=document.createElement("ul");
    const myListmonograph=document.createElement("ul");
    for(a of articles){
        const listItem = document.createElement("li");
        listItem.textContent = a.name;
        switch(a.printed){
            case "newspaper":
                myListnewspaper.appendChild(listItem);
                break;
            
            case "magazine":
                myListmagazine.appendChild(listItem);
                break;
            
            case "monograph":
                myListmonograph.appendChild(listItem);
                break;
            default:
                alert("ERROR__switch");
        }
    }
    div__newspaper.appendChild(myH4_newspaper);
    div__newspaper.appendChild(myListnewspaper);
    
    div__magazine.appendChild(myH4_magazine);
    div__magazine.appendChild(myListmagazine);

    div__monograph.appendChild(myH4_monograph);
    div__monograph.appendChild(myListmonograph);

    main.appendChild(div__newspaper);
    main.appendChild(div__magazine);
    main.appendChild(div__monograph);
}
populate();