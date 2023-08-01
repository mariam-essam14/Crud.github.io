// var element=''
// for(var i=0 ; i<100 ;i++){
//     element +='<div class="col-md-3"><h2>hello</h2></div>'
// }

// document.getElementById("myRow").innerHTML= element




// var elementDemo = document.getElementById("demo")
// var userINPUT =document.getElementById("userName")

// function welcome()
// {
//     var userName =userINPUT.value
//     elementDemo.innerHTML="hello " +userName

// }



//CRUD

var productNameInput=document.getElementById("productName");
var productPriceInput=document.getElementById("productPrice");
var productCategoryInput=document.getElementById("productCategory");
var productDescInput=document.getElementById("productDesc");
var searchInput=document.getElementById("searchInput");
 var productList=[];
 if(localStorage.getItem("productList")!=null){
  productList=JSON.parse(localStorage.getItem("productList"))
  display()
 }

function addProduct(){
    
         var product ={
        name:productNameInput.value,
        price:productPriceInput.value,
        Category:productCategoryInput.value,
        desc:productDescInput.value,
      }
  
      productList.push(product)
    localStorage.setItem("productList",JSON.stringify(productList))
    display()
}

function display()
{  
    var temp="";
    for(var i=0;i<productList.length; i++){
         temp+=`   
         <tr> 
         <td>`+i+`</td>
         <td>`+productList[i].name+`</td>
         <td>`+productList[i].price+`</td>
         <td>`+productList[i].Category+`</td>
         <td>`+productList[i].desc+`</td>
         <td><button onclick="updateProduct(`+i+`)"  class="btn btn-warning">Update</button></td>
         <td><button  onclick="deleteProduct(`+i+`)"    class="btn btn-danger">Delete</button></td>
         </tr>
         `
    }

    document.getElementById("tableBody").innerHTML=temp;
    
}


var currentIndex=0


function updateProduct(ind){
  currentIndex=ind
  productNameInput.value=productList[ind].name
  productPriceInput.value=productList[ind].price
  productCategoryInput.value=productList[ind].Category
  productDescInput.value=productList[ind].desc

  document.getElementById("addProduct").style.display="none"
  document.getElementById("addEdit").style.display="inline-block"
}

function addEdit(){

  productList[currentIndex].name=productNameInput.value
  productList[currentIndex].price=productPriceInput.value
  productList[currentIndex].Category=  productCategoryInput.value
  productList[currentIndex].desc=productDescInput.value
  display()
  localStorage.setItem("productList",JSON.stringify(productList))

  
  document.getElementById("addProduct").style.display="inline-block"
  document.getElementById("addEdit").style.display="none"
 }

function deleteProduct(index){
  productList.splice(index,1);
  display()
  localStorage.setItem("productList",JSON.stringify(productList))
}


function clearForm(){
  productNameInput.value=""
  productPriceInput.value=""
  productCategoryInput.value="tv"
  productDescInput.value=""
}


function search(){
  var searchValue=searchInput.value.toLowerCase()
  var temp="";
  for(var i=0 ;i<productList.length; i++){
    if(productList[i].name.toLowerCase().includes(searchValue)==true ||productList[i].Category.toLowerCase().includes(searchValue)==true)
    {
       temp+=
       `   
       <tr> 
       <td>`+i+`</td>
       <td>`+productList[i].name.toLowerCase().replace(searchValue,"<span class='text-danger fw-bolder'>"+searchValue+"</span>")+`</td>
       <td>`+productList[i].price+`</td>
       <td>`+productList[i].Category.toLowerCase().replace(searchValue,"<span class='text-danger fw-bolder'>"+searchValue+"</span>")+`</td>
       <td>`+productList[i].desc+`</td>
       <td><button class="btn btn-warning">Update</button></td>
       <td><button  onclick="deleteProduct(`+i+`)"    class="btn btn-danger">Delete</button></td>
       </tr>
       `
      }
  }

  document.getElementById("tableBody").innerHTML=temp;
}