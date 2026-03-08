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
question:"Web Gia Hưng làm có xịn không? (Hint: đáp án có chữ best)",
keywords:["xịn số 1 thế giới","best website ever"]
},

unilever:{
question:"Nghe trọn vẹn clip Dược Sĩ Tiến hát Ánh Trăng Nói Hộ Lòng Tôi max volume và ngân nga theo hoặc rớt Unilever ?",
keywords:["tôi đồng ý", "tôi chọn song ca với dược sĩ tiến", "tôi chọn rớt unilever","ok"]
},

pg:{
question:"Đâu là doanh nghiệp về mảng giáo dục mà bạn yêu thích nhất ? (Hint: không phải Kiên Luyện !)",
keywords:["Khai Hung Center","Trung tâm Khải Hưng","Khải Hưng","khải hưng"]
},

bosch:{
question:"Kiệt tác âm nhạc Người Âm Phủ cover tại Belleza được sản xuất vào năm nào? Hãy rủ tất cả thực khách tại nhà hàng cùng xem MV hoặc là rớt",
keywords:["2017","đồng ý"]
},

vinamilk:{
question:"Ex nào của bạn từng đòi chôn QUốc An và kêu fc nigga truy sát Gia Hưng?",
keywords:["Phong Bùi","phong bùi"]
},

shopee:{
question:"Vì sao Shopee tổ chức các chiến dịch 9.9 11.11 12.12?",
keywords:["promotion","kích cầu"]
},

cocacola:{
question:"Ni cũ nào của Mthu đã từng đến nhà Cẩm Tú?",
keywords:["thiên lý","minh thiên"]
},

chagee:{
question:"Nếu có 10 tỷ bạn sẽ làm gì?",
keywords:["Cho ghung và cẩm tú đi du lịch thụy sĩ"]
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