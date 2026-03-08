const params = new URLSearchParams(window.location.search);

const company = params.get("company");

const logos = {

loreal:"assets/logos/loreal.jpg",

unilever:"assets/logos/unilever.jpg",

pg:"assets/logos/pg.jpg",

bosch:"assets/logos/bosch.jpg",

vinamilk:"assets/logos/vinamilk.png",

shopee:"assets/logos/shopee.jpg",

cocacola:"assets/logos/cocacola.png",

chagee:"assets/logos/chagee.png"

};

document.getElementById("quizLogo").src = logos[company];

const questionData = {

loreal:{
question:"Hãy kể tên 3 thương hiệu mỹ phẩm thuộc tập đoàn? Ai là bà trùm mỹ phẩm tại Việt Nam?",
keywords:["lancome","kiehl","ysl","loreal paris","maybelline","la roche","vichy","hannaholala"]
},

unilever:{
question:"Unilever có mặt tại bao nhiêu quốc gia và sản phẩm quảng cáo trong video là gì?",
keywords:["190","188","clear","aquafina"]
},

pg:{
question:"Sản phẩm nào của P&G nổi tiếng với quảng cáo đánh bay vết bẩn?",
keywords:["tide","mus"]
},

bosch:{
question:"Bosch áp dụng chiến lược giá nào?",
keywords:["premium"]
},

vinamilk:{
question:"Kể tên 5 dòng sản phẩm của Vinamilk.",
keywords:["sua","kem","sua chua"]
},

shopee:{
question:"Vì sao Shopee tổ chức các chiến dịch 9.9 11.11 12.12?",
keywords:["promotion","kích cầu","doanh số"]
},

cocacola:{
question:"Chiến dịch marketing nổi tiếng của Coca-Cola?",
keywords:["share a coke"]
},

chagee:{
question:"Hoàng Sa và Trường Sa là của nước nào?",
keywords:["viet nam"]
}

};

document.getElementById("companyTitle").innerText = company.toUpperCase();

document.getElementById("questionText").innerText = questionData[company].question;


function checkAnswer(){

const input = document.getElementById("answerInput").value.toLowerCase();

const keywords = questionData[company].keywords;

let correct=false;

keywords.forEach(k=>{

if(input.includes(k)){
correct=true;
}

});

if(correct){

confetti({
particleCount:150,
spread:120,
origin:{y:0.6}
});

setTimeout(()=>{

window.location.href="offer.html?company="+company;

},2000);

}else{

document.getElementById("result").innerText="❌ Incorrect answer. Try again.";

}

}

function retry(){

document.getElementById("answerInput").value="";

document.getElementById("result").innerText="";

}