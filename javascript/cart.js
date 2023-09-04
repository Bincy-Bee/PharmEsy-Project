import {nav, footer, bactotop} from "../components/nav.js"
document.getElementById("navbar").innerHTML= nav();
document.getElementById("footer").innerHTML= footer();
document.getElementById("backtotop").innerHTML= bactotop();

let login = localStorage.getItem("loggedIn");

let cart= (data)=>{
    let sum = 0
    let dis = 0
    let totdata = 0
    data.map((ele)=>{
        let delt =()=>{
            fetch(`http://localhost:3000/cart/${ele.id}`,{
            method:"DELETE"
        })
        }
        let img = document.createElement("img")
        img.src = ele.image

        let div1 = document.createElement("div")
        div1.setAttribute("class","div1")
        div1.append(img)
        
        let title = document.createElement("h4")
        title.innerHTML=ele.title
        
        let unit = document.createElement("h5")
        unit.innerHTML=ele.unit
        
        let pharmacy = document.createElement("h1")
        pharmacy.innerHTML=ele.category
        
        let price = document.createElement("h6")
        price.innerHTML=`₹ ${ele.price}*`
        
        let dlt = document.createElement("button") 
        dlt.innerHTML=`<i class="ri-delete-bin-line"></i>` 
        dlt.setAttribute("class","dlt")
        dlt.addEventListener("click",()=>{
            delt()
        })       
        let plus = document.createElement("button")
        plus.innerHTML=`<i class="fa-solid fa-plus"></i>`
        plus.addEventListener("click",()=>{
            fetch(`http://localhost:3000/cart/${ele.id}`)
            .then((res)=>res.json())
            .then((data)=>{
                data.qty = data.qty+1
                fetch(`http://localhost:3000/cart/${data.id}`,{
                    method:"PATCH",
                    headers:{"content-type":"application/json"},
                    body:JSON.stringify(data)
                })
            })
        })

        let qty = document.createElement("p")
        qty.innerHTML=ele.qty
        let totpri = ele.price * ele.qty
        sum += totpri 
        totdata += ele.qty        
        let minus = document.createElement("button")
        minus.innerHTML=`<i class="fa-solid fa-minus"></i>`
        minus.addEventListener("click",()=>{
            fetch(`http://localhost:3000/cart/${ele.id}`)
            .then((res)=>res.json())
            .then((data)=>{
                data.qty = data.qty-1
                fetch(`http://localhost:3000/cart/${data.id}`,{
                    method:"PATCH",
                    headers:{"content-type":"application/json"},
                    body:JSON.stringify(data)
                })
            })
        })
        if (ele.qty == 0){
            delt()
        }
        let indiv = document.createElement("div")
        indiv.setAttribute("class","indiv")
        indiv.append(minus,qty,plus)

        let div2 = document.createElement("div")
        div2.setAttribute("class","div2")
        div2.append(title,pharmacy,unit,price,indiv,dlt)

        document.querySelector("#cartpro").append(div1,div2)
    })
    document.querySelector("#item").innerHTML=totdata
    localStorage.setItem("notification", totdata);
    document.querySelector("#mrp").innerHTML=`₹${sum.toFixed(2)}`
    document.querySelector("#chack").addEventListener("click",()=>{
        let value = document.querySelector("#coupon").value
        
        if(value == "awew12"){  
            dis = ((12/100) * sum)
            sum = sum - dis
            document.querySelector("#varify").innerHTML="congrats! couponcode awew12(12%) applied successfully."
            document.querySelector("#varify").style.color="#10847e"
        }
        else if(value == "well25"){
            dis = ((25/100) * sum)
            sum = sum - dis
            document.querySelector("#varify").innerHTML="congrats! couponcode well25(25%) applied successfully."
            document.querySelector("#varify").style.color="#10847e"
        }
        else{
            dis = 0
            document.querySelector("#varify").innerHTML="error! coupon code in not valid. 🙁"
            document.querySelector("#varify").style.color="#CD5C5C"
        }
        console.log(dis);
        console.log(sum);
        document.querySelector("#coupons").innerHTML=`-₹ ${dis.toFixed(2)}`
        console.log(sum);
        document.querySelector("#bepaid").innerHTML= `₹${sum.toFixed(2)}`
        document.querySelector("#carttot").innerHTML= `₹${sum.toFixed(2)}`
    })
    document.querySelector("#carttot").innerHTML= `₹${sum.toFixed(2)}`
    document.querySelector("#bepaid").innerHTML=`₹${sum.toFixed(2)}`
}

document.querySelector("#event").addEventListener("click",()=>{
    // let event = document.querySelector("#event").value
    document.getElementById("pro").style.display="none"
    document.getElementById("address").style.display="block"
    document.querySelector("#event").style.display="none"
})

document.querySelector("#address").addEventListener("submit",(e)=>{
    e.preventDefault()
    // let name = document.getElementById("puname").value
    // let email = document.getElementById("puemail").value
    // let house = document.getElementById("houseno").value
    // let street = document.getElementById("street").value
    // let city = document.getElementById("city").value
    // let state = document.getElementById("state").value
    // let phone = document.getElementById("putel").value
    // let addtype = document.querySelectorAll(".addtype").value

    // console.log(name);

});
document.querySelector("#savecon").addEventListener("click",()=>{
   
    document.querySelector("#address").style.display="none";
    document.getElementById("pro").style.display="none"
    document.querySelector("#event").style.display="none"
    document.querySelector("#upi").style.display="block"

})


document.querySelector("#payinfo").addEventListener("submit",(e)=>{
    e.preventDefault()
    let upivalue = document.querySelector("#upiid").value
    let upiregex = /^[a-zA-Z0-9\\.\\-]{2,256}@[a-zA-Z][a-zA-Z]{2,64}$/;
    console.log(upivalue, upiregex);
    if (upiregex.test(upivalue)){
        alert("payment completed order place")
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
    else{
        alert("Please enter valid upi i'd")
    }
})


if (login){

    fetch("http://localhost:3000/cart")
    .then((res)=>res.json())
    .then((data)=>
    {
        cart(data)
    })
}
else{

    alert("Please Login 1st !!!")
}