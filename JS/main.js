const midtnight = document.querySelector("#midnightFrappe");
const mochaCrumble = document.querySelector("#mochaCrumble");
const frappuccino = document.querySelector("#esppressoFrappu");
const redes = document.querySelector(".redes");
const information = document.querySelector(".home-allinfo")
const title = document.querySelector(".page-title")

midtnight.addEventListener("click", ()=>{
    redes.style.background = '#d149aa'
    information.innerHTML=`
    <div class="home-info col-sm-12 col-lg-6 col-md-6">
    <h2 class="home-title" style="color:#d149aa">Midnight Frappuccnio</h2>
    <span>Beautiful layered beverage starts with scoops of extra-dark cocoa blended with coffee, milk, and ice, 
    infused with cooling mint sugar crystals and cut with a layer of whipped cream.</span>
    <br>
    <button class="mt-4 botones-dentro" style="background-color: #d149aa; color: white;">Buy Now</button>
    </div>
    <img src="./IMG/img3.png" alt="home-image" class="col-sm-12 col-lg-6 col-md-5 home-img">`
})

frappuccino.addEventListener("click", ()=>{
    redes.style.background = '#eebbc6'
    information.innerHTML=`
    <div class="home-info col-sm-12 col-lg-6 col-md-6">
    <h2 class="home-title" style="color:#eebbc6">Espresso Frappuccino</h2>
    <span>Rich mocha-flavored sauce meets up with chocolaty chips, milk and ice for a blender bash.
     Top it off with sweetened whipped cream and mocha drizzle for a real party in your mouth.</span>
    <br>
    <button class="mt-4 botones-dentro" style="background-color: #eebbc6; color: white;">Buy Now</button>
    </div>
    <img src="./IMG/img2.png" alt="home-image" class="col-sm-12 col-lg-6 col-md-5 home-img">`
})

mochaCrumble.addEventListener("click", ()=>{
    redes.style.background = '#7d9e4b'
    information.innerHTML=`
    <div class="home-info col-sm-12 col-lg-6 col-md-6">
    <h2 class="home-title"  style="color:#7d9e4b">Mocha Cookie Crumble</h2>
    <span>Mocha Cookie Crumble, mocha sauce and Frappuccino chips blended with milk and ice, 
    layered on top of whipped cream and chocolate cookie crumble and topped with vanilla whipped cream, mocha drizzle and even more chocolate cookie crumble.
     Each sip is as good as the last . . . all the way to the end.</span>
    <br>
    <button class="mt-4 botones-dentro" style="background-color: #7d9e4b; color: white;">Buy Now</button>
    </div>
    <img src="./IMG/img1.png" alt="home-image" class="col-sm-12 col-lg-6 col-md-5 home-img">`
})