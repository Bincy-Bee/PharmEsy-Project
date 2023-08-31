import {nav} from "../components/nav.js"
document.getElementById("navbar").innerHTML= nav();

let jojo = JSON.parse(localStorage.getItem("productDetails"));
console.log(jojo);


let now = new Date();
const sigledetailes=(data)=>{

    document.getElementById("pimg").src=`${data.image}`;
    document.getElementById("img1").src=`${data.images.img1}`;
    document.getElementById("img2").src=`${data.images.img2}`;
    document.getElementById("img3").src=`${data.images.img3}`;
    document.getElementById("img4").src=`${data.images.img4}`;
    document.getElementById("ptitle").innerHTML=`${data.title}`;
    document.getElementById("producttitle").innerHTML=`${data.title}`;
    document.getElementById("punit").innerHTML=`${data.unit}`;
    document.getElementById("pcategory").innerHTML=`${data.category}`;
    document.getElementById("pprice").innerHTML=`${data.price}`;
    document.getElementById("date").innerHTML=`${now.setDate((now.getDate() + 5)) }`;
    document.getElementById("pdesc").innerHTML=`${data.description }`;
       
    document.getElementById("addtocart").addEventListener("click",(e)=>{
        e.preventDefault();
                    let login = localStorage.getItem("loggedIn");
                
                    if (login){
                       
                        fetch(`http://localhost:3000/cart?id=${data.id}`)
                        .then((res)=>res.json())
                        .then((data)=>{
                            console.log(data);
                            if(data.length > 0){
                                alert("alert successfully")
                                console.log(data[0].qty);
                                data[0].qty = Number(data[0].qty) + 1;
                                console.log(data[0].qty);
                                fetch(`http://localhost:3000/cart/${data[0].id}`,{
                                    method : "PATCH",
                                    headers : {"Content-Type": "application/json"},
                                    body : JSON.stringify(...data)
                                })
                            }
                            else{
                                alert("add to card post");
                                 fetch(`http://localhost:3000/cart`,{
                                     method : "POST",
                                     headers : {"Content-Type": "application/json"},
                                     body : JSON.stringify({...jojo , qty : 1})
                                 })
                            }
                        })
                    }
                    else{
                        alert("Please Login 1st");
                    }
                })
};


let mainImg = document.getElementById("pimg");
let smallImg = document.getElementsByClassName("smallImg");

smallImg[0].addEventListener("click",()=>{
    mainImg.src = smallImg[0].src;
});
smallImg[1].addEventListener("click",()=>{
    mainImg.src = smallImg[1].src;
});
smallImg[2].addEventListener("click",()=>{
    mainImg.src = smallImg[2].src;
});
smallImg[3].addEventListener("click",()=>{
    mainImg.src = smallImg[3].src;
});


sigledetailes(jojo); 

