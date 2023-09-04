import { nav,footer } from "../components/nav.js";

document.getElementById("navbar").innerHTML = nav();
document.getElementById("footer").innerHTML = footer();

let fil = [];
let id = 1;
let dispalymed =(data)=>{

    document.querySelector("#medicine").innerHTML=""
    data.map((ele)=>{
        
        let img = document.createElement("img");
        img.src=ele.image;

        let title = document.createElement("p");
        title.innerHTML=ele.title;

        let unit = document.createElement("h4");
        unit.innerHTML=ele.unit;

        let category = document.createElement("h4");
        category.innerHTML=ele.category;

        let price = document.createElement("h2");
        price.innerHTML=`₹ ${ele.price}`;

        let div = document.createElement("div");
        div.append(title,unit,category,price);

        let div2 = document.createElement("div");
        div.setAttribute("class","div2");
        div2.append(img,div);
        div2.addEventListener("click",()=>{
           id= ele.id;
           console.log(id);
            fetch(`http://localhost:3000/medicine/${id}`)
                .then((res)=>res.json())
                .then((data)=>{
                    console.log(data)
                    localStorage.setItem("productDetails", JSON.stringify(data));
                    window.location.href="/pages/product.html";
                })
          
        })

        document.querySelector("#medicine").append(div2);

    })
    
}
let catsearch =()=>{
    let val = document.querySelector("#value").value;
    fetch("http://localhost:3000/medicine")
    .then((res)=>res.json())
    .then((data)=>{
        let sss = data.filter((key)=>key.category.toLowerCase().match(val.toLowerCase()))
        dispalymed(sss)
    })
}

document.querySelector("#medsearch").addEventListener("click",catsearch)
document.getElementById("value").addEventListener("input",()=>{
    catsearch();
   
})

let htol = ()=>{
    let data = fil.sort((a,b)=>(b.price - a.price))
    dispalymed(data)
}

let dravya = (pass)=>{
    let data = fil.filter((ele)=>ele.pharmacy == pass)
    dispalymed(data)
}


let ltoh = ()=>{
    let data = fil.sort((a,b)=>(a.price - b.price))   
    dispalymed(data)
}

let atoz = ()=>{
    let data = fil.sort((a,b)=>(a.title.localeCompare(b.title)))    
    dispalymed(data)
}

let ztoa = ()=>{
    let data = fil.sort((a,b)=>(b.title.localeCompare(a.title)))    
    dispalymed(data)
}

let price1 = ()=>{
    let data = fil.filter((a)=>(a.price >= 0 && a.price <=99))   
    dispalymed(data)
}

let price2 = ()=>{
    let data = fil.filter((a)=>(a.price >= 100 && a.price <=299))  
    dispalymed(data)
}

let price3 = ()=>{
    let data = fil.filter((a)=>(a.price >= 300 && a.price <=499)) 
    dispalymed(data)
}

let price4 = ()=>{
    let data = fil.filter((a)=>(a.price >= 500 && a.price <=699))
    dispalymed(data)
}

let price5 = ()=>{
    let data = fil.filter((a)=>(a.price >= 700 && a.price <=899))
    dispalymed(data)
}

let price6 = ()=>{
    let data = fil.filter((a)=>(a.price >= 900))
    dispalymed(data)
}

const get = async()=>{
    fetch("http://localhost:3000/medicine")
    .then((res)=>res.json())
    .then((data)=>{
        
    dispalymed(data) 
    fil=data
    })
}
get();

document.querySelector("#all").addEventListener("click",get);
document.querySelector("#atoz").addEventListener("click",atoz);
document.querySelector("#ztoa").addEventListener("click",ztoa);
document.querySelector("#tab").addEventListener("click",()=>dravya("tablet"));
document.querySelector("#cap").addEventListener("click",()=>dravya("capsule"));
document.querySelector("#pow").addEventListener("click",()=>dravya("powder"));
document.querySelector("#liq").addEventListener("click",()=>dravya("liquid"));
document.querySelector("#htol").addEventListener("click",htol);
document.querySelector("#ltoh").addEventListener("click",ltoh);
document.querySelector("#price1").addEventListener("click",price1);
document.querySelector("#price2").addEventListener("click",price2);
document.querySelector("#price3").addEventListener("click",price3);
document.querySelector("#price4").addEventListener("click",price4);
document.querySelector("#price5").addEventListener("click",price5);
document.querySelector("#price6").addEventListener("click",price6);

document.querySelector("#filtoggle").addEventListener("click",()=>{
    document.querySelector(".filter").style.display="block";
    // document.querySelector(".filter").style.display="none";
});
document.querySelector("#filterclose").addEventListener("click",()=>{
    document.querySelector(".filter").style.display="none";
})
