
 var offerArray=[];
 var numOfAccountsInRestArr=["kklsla;aldlc"];
 console.log(numOfAccountsInRestArr)
function loginToResturant()
{
  confirm("kkd")
  var name=document.getElementById("name").value;
  console.log(name);
  var  email=document.getElementById("email").value;
  console.log(email);
  var phone=document.getElementById("phone").value;
  console.log(phone);
  var city=document.getElementById("city").value;
  console.log(city);
  var neighborhood=document.getElementById("neighborhood").value;
  console.log(neighborhood)
  var password=document.getElementById("password").value;
  console.log(password);
  var repeatpassword=document.getElementById("repeatpassword").value;
  console.log(repeatpassword);
  var Mincontact=document.getElementById("Mincontact").value;
  console.log(Mincontact);
  var Communicationfee=document.getElementById("Communicationfee").value;
  console.log(Communicationfee);
  var whatsapp=document.getElementById("whatsapp").value;
  console.log(whatsapp);
  var accountInResturant={
    nameOfUser:name,
    emailOfUser:email,
    phoneOfUSer:phone,
    cityOfUser:city,
    neighborhoodOfUser:neighborhood,
    passwordOfUser:password,
    repeatpasswordOfUser:repeatpassword,
    MincontactOfUser:Mincontact,
    CommunicationfeeOfUser:Communicationfee,
    whatsappOfUser:whatsapp,
    
  }
  console.log(accountInResturant)
  numOfAccountsInRestArr.push(accountInResturant)
  // numOfAccountsInRestArr.push(accountInResturant);
  console.log(numOfAccountsInRestArr)
  var numOfAccountsInRest=JSON.stringify(numOfAccountsInRestArr);
  console.log(numOfAccountsInRest)

  if(name!=""&&email!=""&&phone!=""&&city!=""&&neighborhood!=""&&password!=""&&repeatpassword!=""&&Mincontact!=""&&Communicationfee!=""&&whatsapp!="")
  {  
     var numOfAccountsInRestStrge=localStorage.setItem("numOfAccountsInRest",numOfAccountsInRest);
     alert("You are logged in successfully")
     prompt("are you want to save your name and email and your information?")
  }
  else
 { 
   alert("enter your name and your email and missing from rour information");
 }
}
var imgArray=[];

var productArray=[]
function encodeImgtoBase64(element) {
  let file = element.files[0];
  let reader = new FileReader();
    reader.onloadend = function() {
     let img=reader.result
   
   imgArray.push(".images");
   
   $("#myImg").on("click",function()
    {
     $("#myImg").attr("src",$(this).attr('src'));
    })
  
}
 

function previewImage(ew)
{
  console.log(ew.getAttributeNode("Src"))
}
function show()
{
  alert("gff")
  document.getElementById("list").style.display = "block";

}
 function addProduct()
{ 
  let prductname=document.getElementById("prductName").value;
  var productDesc=document.getElementById("prductDesc").value;

  console.log(productDesc)

  // alert("repeat"+prottime)
  // var prductdesc=document.getElementById("prductDesc").value;
  // console.log(prductdesc);
  var prductprice=document.getElementById("prductPrice").value;
  
  console.log(prductprice);
  var protime=document.getElementById("proTime").value;
  console.log(protime);


  var product={
      productame:prductname,
      productDesc:productDesc,
      productPrice:prductprice,
      productTime:protime
      };
      console.log(product);
      productArray.push(product);
     console.log(productArray);
     var products=JSON.stringify(productArray)
     if(prductname!=""&&productDesc!=""&&prductprice!=""&&protime!="")
     {  
        var productStorage=localStorage.setItem("products",products);
        alert("You are logged in successfully")
        prompt("are you want to save your name and email?")
     }
     else
    { 
      alert("enter your name and your email");
    }
    prductname="",
    productDesc="",
    prductprice="",
    protime=""
    
 }
 function choiceDate(ele)
 {
   alert("f")
   var icon=document.getElementById("dateIcon")
   icon.datepicker()

   console.log(icon)
 }
function addOffer()
{ 
  alert("repeat")
  var offerName=document.getElementById("offername").value;
  console.log(offerName);
  console.log("very very very");
  var shrtDesc=document.getElementById("shrtdesc").value;
  console.log(shrtDesc);
  var Price=document.getElementById("price").value;
  console.log(Price);
  var offer={
      offername:offerName,
      offerDesc:shrtDesc,
      offerPrice:Price
      };
     offerArray.push(offer);
     console.log(offerArray);
     var offers=JSON.stringify(offerArray)
     if(offerName!=""&&shrtDesc!=""&&Price!="")
     {  
        var offerStorage=localStorage.setItem("offers",offers);
        alert("You are logged in successfully")
        prompt("are you want to save your name and email?")
     }
     else
    { 
      alert("enter your name and your email");
    }
      offerName="",
      shrtDesc="",
      Price=""
    }


    

 var usersArray=[];
 var messagesArray=[];
  function login()
 {
     var  name=document.getElementById("name").value;
     var email=document.getElementById("email").value;
     var user={
      username:name,
      useremail:email

     }

     usersArray.push(user);
     var users=usersArray.toString()
     if(name!=""&&email!="")
     {
        var usersStorage=localStorage.setItem("users",users );
        alert("You are logged in successfully")
        prompt("are you want to save your name and email?")
     }
     else
    { alert("enter your name and your email");}
     name="",
     email=""




  }
  function createAccount()
 {
    window.location.replace("");

  }
  function saveChange()
 {
    var type= document.getElementsByName("change")
     var nametocntct=document.getElementById("nametocntct").value;
     var emailtoemail=document.getElementById("emailtoemail").value;
     var phone=document.getElementById("phone");
     var yourmessage=document.getElementById("yourmessage");
     

     if(nametocntct!=""&&emailtoemail!=""&&phone!=""&&yourmessage!="")
     {
        var message=
        {
            myName:nametocntct,
            myEmail:emailtoemail,
            myPhone:phone,
            myMessage:yourmessage,
            messagetype:type
   
        }
        messagesArray.push(message);
       console.log(messagesArray)
        var messages=JSON.stringify(messagesArray)
        console.log(messages)
        var messageStorage=localStorage.setItem("messages",messages);
        alert("The message has been sent successfully")
     }
     else
     {alert("Fill in your information completely");}

     
     messagesArray.push(message)
  }
  function delet(ele)
 {
     alert("this is to delete")
     console.log(ele.parentElement.parentElement.parentElement)
     var deletedelement=ele.parentElement.parentElement.parentElement
     deletedelement.remove()
     var cart=document.getElementsByClassName("cart");
     if(cart.length<=0)
     {
         alert("all hav been deleted")
         var cartSection=document.getElementById("cart");
         cartSection.style.height = "300px";
  
     }
  }
  
  // function upload(file) {
  //   var fr = new FileReader();

  //   fr.onload = function(event) {
  //     var src = event.target.result;
  //     var img = new Image();

  //     img.onload = function() {
  //       $('.select-img').remove();
  //       $('#image').css('display', 'block').attr('src', src).resizable({
  //         aspectRatio: this.width / this.height
  //       });
  //     };
  //     img.src = src;
  //   };

  //   fr.readAsDataURL(file);
  // }

  // $('.select-img').click(function() {
    // var fileInput = $("<input>", {
      // type: "file",
      // accept: "image/*"
    // });
    // fileInput.trigger('click');

    // fileInput.on('change', function(ev) {
      // upload(ev.target.files[0]);
    // });

    // return false;
  // });
  // });