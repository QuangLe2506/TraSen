
//Them vao gio hang
const btn = document.querySelectorAll(".pro_item button")
// console.log(btn)

btn.forEach(function(button,index){
    button.addEventListener("click", function(event){
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src 
        var productName = product.querySelector("h2").innerText
        var productPrice = product.querySelector(".price").innerText
        // var productType = product.querySelector("")
        addcart(productPrice, productImg, productName)
    })   
})
function addcart(productPrice, productImg, productName){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i = 0; i < cartItem.length; i++){
        var productT = document.querySelectorAll(".title")
        if(productT[i].innerHTML == productName){
    //         // var productTp = document.querySelectorAll(".type")
    //         // if(productTp[i].innerHTML == productType){
                alert("Sản phẩm này đã có trong giỏ hàng!")
            return 
    //         // } 
        }
    }
    
    var trContent = '<tr><td style="display: flex; align-items: center;"><img style="width: 70px;" src="'+productImg+'" alt=""><span class="title">'+productName+'</span></td><td><p><span class="price">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px; outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Xoá</span></td></tr>'   
    addtr.innerHTML = trContent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)
    
    cartTotal()
    deleteCart()
}

//Tinh tong tien
function cartTotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalAll = 0;
    // console.log(cartItem.length)
    for(var i = 0; i < cartItem.length; i++){
        var inputValue = cartItem[i].querySelector("input").value
        // console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".price").innerHTML
        // var productType = cartItem[i].querySelector(".type").value
        // console.log(productPrice)
        totalA = inputValue*productPrice*1000
        
        // console.log(totalA)
        totalAll = totalAll + totalA
       
        // console.log(totalAll)
    }
    var cartTotalAll = document.querySelector(".price-total span")
    var cartPrice = document.querySelector(".cart_icon span")
    cartTotalAll.innerHTML = totalAll.toLocaleString('de-DE')
    cartPrice.innerHTML = totalAll.toLocaleString('de-DE')

    inputChange()
    // console.log(cartTotalAll)
}

//Delete Product in cart
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i = 0; i < cartItem.length; i++){
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click", function (event) {
            var cartDelete = event.target
            var cartItems = cartDelete.parentElement.parentElement
            cartItems.remove()
            cartTotal()
            // console.log(cartItems)
          })
       
    }
}

//Thay đổi số lượng--> Tổng tiền thay đổi
function inputChange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i = 0; i < cartItem.length; i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            cartTotal()
        })
       
    }
}

const cartbtn = document.querySelector(".fa-times")
const cartshow = document.querySelector(".fa-cart-shopping")
cartshow.addEventListener("click", function(){
    document.querySelector(".cart").style.right = "0"
})
cartbtn.addEventListener("click", function(){
    document.querySelector(".cart").style.right = "-100%"
})