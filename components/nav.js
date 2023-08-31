const nav =()=>{
    return `<header class="p-2 border text-[16px]">
    <div class="flex flex-wrap justify-between items-center">
        <div class="logo">
            <a href="../index.html"><img src="../img/pharmeasy-logo2.jpg" class="h-[80px]" alt=""></a>
        </div>
        <nav>
            <ul class="flex">
                <li><a href="../index.html" class="px-2 py-1 font-[400] hover:text-teal-500">Home</a></li>
                <li><a href="../pages/medicine.html" class="px-2 py-1 font-[400] hover:text-teal-500">Medicine & Healthcare</a></li>

                <li><a href="#" class="px-2 py-1 font-[400] hover:text-teal-500">Services</a></li>
            </ul>
        </nav>
        <div class="user-cart flex">
            <div>
                <a href="" class="pr-9 font-[400] hover:text-teal-500 relative px-4"><i class="fa-solid fa-user text-sm pr-2 text-teal-500"></i><span id="user">User</span></a>
                <div class="absolute right-0 top-0 w-[450px] h-[100vh] bg-white drop-shadow-2xl hidden" id="signuptab">
                    <div class="flex flex-wrap justify-between  bg-teal-600 p-6 relative">
                        <div class="login-bg">
                            <img src="../img/phaWsy.png" class="h-[70px] z-10" alt="">
                        </div>
                        <div class="bg">
                            <img src="../img/loginbgimg.svg" class="scale-[2] mt-6 mr-12" alt="">
                        </div>
                        <div class="absolute left-[-50px]">
                            <button class="px-5 py-3 text-[20px] bg-teal-600 text-white" id="signuptabclose"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                    </div>
                    <form class="p-3" id="signup">
                        <h3 class="text-[16px] font-bold text-teal-600">Quick SignUp / Register</h3>

                        <input type="text" id="name" placeholder="Enter your username" class="p-3 border w-full rounded-xl placeholder:text-sm border-slate-400 mt-4">
                        <p class="text-sm text-red-500 font-bold pl-4" id="namealert"></p>

                        <input type="email" id="email" placeholder="Enter your email" class="p-3 border w-full rounded-xl placeholder:text-sm border-slate-400 mt-4">
                        <p class="text-sm text-red-500 font-bold pl-4" id="emailalert"></p>

                        <label class="relative block">
                            <span class="absolute inset-y-0 right-0 flex pt-4 items-center pr-2 z-50">
                                <i class="fa-regular fa-eye text-teal-600 " id="passshow"></i>
                                <i class="fa-regular fa-eye-slash text-teal-600 hidden" id="passhide"></i>
                            </span>
                        <input type="password" id="password" placeholder="Enter your password" class="p-3 border w-full rounded-xl placeholder:text-sm border-slate-400 mt-4">
                        </label>
                        <p class="text-sm text-red-500 font-bold pl-4" id="passalert"></p>
                        
                        <input type="tel" id="tel" placeholder="Enter your phone number" class="p-3 border w-full rounded-xl placeholder:text-sm border-slate-400 mt-4">
                        <p class="text-sm text-red-500 font-bold pl-4" id="telalert"></p>

                        <input type="submit" id="sub" class="p-3 border w-full rounded-xl bg-teal-600 font-bold text-white border-slate-400 mt-4">

                        <h3 class="text-[12px] text-slate-500 p-3 text-center">Already Register ? <a href="" class="underline text-slate-900 text-base text-teal-600" id="signinopen">Sign In</a></h3>

                        <h3 class="text-[12px] text-slate-500 p-3 mt-[90px]">By continuing, you agree with our <span class="underline text-slate-900">Privacy Policy</span> and  <span class="underline text-slate-900">Terms and Conditions</span></h3>
                    </form>
                </div>
                <div class="absolute right-0 top-0 w-[450px] h-[100vh] bg-white drop-shadow-2xl hidden" id="signintab">
                    <div class="flex flex-wrap justify-between  bg-teal-600 p-6 relative">
                        <div class="login-bg">
                            <img src="../img/phaWsy.png" class="h-[70px] z-10" alt="">
                        </div>
                        <div class="bg">
                            <img src="../img/loginbgimg.svg" class="scale-[2] mt-6 mr-12" alt="">
                        </div>
                        <div class="absolute left-[-50px]">
                            <button class="px-5 py-3 text-[20px] bg-teal-600 text-white" id="signintabclose"><i class="fa-solid fa-xmark"></i></button>
                        </div>
                    </div>
                    <form class="p-3" id="signin">
                        <h3 class="text-[16px] font-bold text-teal-600">Quick SignIn</h3>

                        <input type="email" id="inemail" placeholder="Enter your email" class="p-3 border w-full rounded-xl placeholder:text-sm border-slate-400 mt-4">
                        <p class="text-sm text-red-500 font-bold pl-4" id="inemailalert"></p>

                        <label class="relative block">
                            <span class="absolute inset-y-0 right-0 flex pt-4 items-center pr-2 z-50">
                                <i class="fa-regular fa-eye text-teal-600 " id="inpassshow"></i>
                                <i class="fa-regular fa-eye-slash text-teal-600 hidden" id="inpasshide"></i>
                            </span>
                        <input type="password" id="inpassword" placeholder="Enter your password" class="p-3 border w-full rounded-xl placeholder:text-sm border-slate-400 mt-4">
                        </label>
                        <p class="text-sm text-red-500 font-bold pl-4" id="inpassalert"></p>

                        <input type="submit" id="insub" class="p-3 border w-full rounded-xl bg-teal-600 font-bold text-white border-slate-400 mt-4">

                        <h3 class="text-[12px] text-slate-500 p-3 text-center">If you are not Register ? <a href="" class="underline text-slate-900 text-base text-teal-600" id="signupopen">Sign Up</a></h3>

                        <h3 class="text-[12px] text-slate-500 p-3 mt-[220px]">By continuing, you agree with our <span class="underline text-slate-900">Privacy Policy</span> and  <span class="underline text-slate-900">Terms and Conditions</span></h3>
                    </form>
                </div>
                <div class="absolute w-[500px] h-[200px] top-[60px] right-[150px] p-6 bg-white drop-shadow-lg rounded-md border hidden" id="account">
                    <div class="absolute right-0 top-0">
                        <button class="px-2 text-[20px] bg-teal-600 text-white" id="accountclose"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class=" w-[50%]" id="userdetailes">
                            <div class="details p-1">
                                <div class="w-[40px] h-[40px] mb-1 rounded-full bg-teal-600">
                                    <h1 class="text-center m-auto leading-[40px]" id="letter"></h1>
                                </div>
                                <h3 class="text-sm" id="uname">Bhvain PAtel</h3>
                                <h3 class="text-sm" id="uemail">Email</h3>
                                <h3 class="text-sm" id="utel">997884787878</h3>
                            </div>
                        </div>
                        <div class="list flex-col  w-[50%]">
                            <h2 class="font-bold text-normal ">Your Account</h2>
                            <ul>
                                <li><a class="inline-block my-1 text-sm" href="#">Orders</a></li>
                                <li><a class="inline-block my-1 text-sm" href="#">My Adresses</a></li>
                                <li><a class="inline-block my-1 text-sm" href="#">Need Help ?</a></li>
                            </ul>
                            <hr class="w-full">
                            <button class="py-3 text-normal text-teal-600" id="logout">Logout</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <a href="../pages/cart.html" class="pl-4 pr-2 font-[400] hover:text-teal-500"><i class="fa-solid fa-cart-shopping text-sm pr-2 text-teal-500"></i>Cart</a>
            </div>
        </div>
    </div>
</header>`
}
const footer=()=>{
    return`
    <section id="footer">
      <div id="container">          
      <div id="footer-top" class="row justify-between">
        <div>
          <ul>
            <h3>Company</h3>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Partner with PharmEasy</a></li>
            <li><a href="#">Sell at PharmEasy</a></li>
          </ul>
          <ul>
            <h3>Our Services</h3>
            <li><a href="#">Order Medicine</a></li>
            <li><a href="#">Healthcare Products </a></li>
            <li><a href="#">Lab Tests</a></li>
          </ul>
        </div>          
        <div>
          <ul>
            <h3>Featured Categories</h3>
            <li><a href="#">Mattresses</a></li>
            <li><a href="#">Personal Care</a></li>
            <li><a href="#">Healthcare Devices</a></li>
            <li><a href="#">Top Products</a></li>
            <li><a href="#">Health Food and Drinks</a></li>
            <li><a href="#">Skin Care</a></li>
            <li><a href="#">Mother and Baby Care</a></li>
            <li><a href="#">Accessories & Wearables</a></li>
            <li><a href="#">Fitness Supplements</a></li>
            <li><a href="#">Ayurvedic Care</a></li>
            <li><a href="#">Mega Clearance Sale</a></li>
            <li><a href="#">Trending Products</a></li>
            <li><a href="#">Elderly Care</a></li>
            <li><a href="#">Diabetic Care</a></li>
            <li><a href="#">Health Condition</a></li>
            <li><a href="#"></a></li>
          </ul>
        </div>
        <div>            
          <ul>
            <h3>Need Help</h3>
            <li><a href="#">Browse All Medicines</a></li>
            <li><a href="#">Browse All Molecules</a></li>
            <li><a href="#">Browse All Cities</a></li>
            <li><a href="#">Browse All Areas</a></li>
            <li><a href="#">Browse All Stores</a></li>
          </ul>
          <ul>
            <h3>Policy Info</h3>
            <li><a href="#">Policy Info</a></li>
            <li><a href="#">Editorial Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Vulnerability Disclosure Policy</a></li>
            <li><a href="#">Terms and Condition</a></li>
            <li><a href="#">Customer Support Policy</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <h3>Follow us on</h3>
            <div class="row">                
              <li><a href="#"><img src="../img/Instagram.svg" alt="Instagram"></a></li>
              <li><a href="#"><img src="../img/facebook.svg" alt="Facebook"></a></li>
              <li><a href="#"><img src="../img/Youtube.svg" alt="Youtube"></a></li>
              <li><a href="#"><img src="../img/Twitter.svg" alt="Twitter"></a></li>
            </div>
          </ul>
        </div>
      </div>
      <div id="footer-bottom">
        <h3>Our Payment Partners</h3>
        <div>
          <div class="row align-center">
            <img src="../img/gpay.png" alt="Google Pay">
            <img src="../img/paytm.png" alt="PayTM">
            <img src="../img/phonepe.png" alt="Phonepe">
            <img src="../img/amazon.png" alt="Amazon Pay">
            <img src="../img/mobikwik.png" alt="Mobikwik Pay">
            <img src="../img/maestro.png" alt="Maestro Pay">
            <img src="../img/mastercard.png" alt="Mastercard">
            <img src="../img/visa.png" alt="Visa">
            <img src="../img/rupay.png" alt="Rupay">
          </div>
          <p>© 2023 PharmEasy. All Rights Reserved</p>
        </div>
      </div>
      </div>
    </section>
    `
}



export {nav, footer}