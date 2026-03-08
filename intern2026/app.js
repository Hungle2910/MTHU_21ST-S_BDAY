window.onload = function(){

const companies = [

{
id:"loreal",
name:"L'OREAL",
logo:"assets/logos/loreal.jpg",
role:"Management Trainee",
location:"Ho Chi Minh City",
salary:"$900 - $1200"
},

{
id:"unilever",
name:"UNILEVER",
logo:"assets/logos/unilever.jpg",
role:"Brand Executive",
location:"Ho Chi Minh City",
salary:"$850 - $1150"
},

{
id:"pg",
name:"P&G",
logo:"assets/logos/pg.jpg",
role:"Marketing Intern",
location:"Ho Chi Minh City",
salary:"$800 - $1000"
},

{
id:"bosch",
name:"BOSCH",
logo:"assets/logos/bosch.jpg",
role:"Junior Marketing Associate",
location:"Ho Chi Minh City",
salary:"$900 - $1300"
},

{
id:"vinamilk",
name:"VINAMILK",
logo:"assets/logos/vinamilk.png",
role:"Corporate Communications Trainee",
location:"Ho Chi Minh City",
salary:"$700 - $950"
},

{
id:"shopee",
name:"SHOPEE",
logo:"assets/logos/shopee.jpg",
role:"Growth Marketing Intern",
location:"Ho Chi Minh City",
salary:"$850 - $1100"
},

{
id:"cocacola",
name:"COCA-COLA",
logo:"assets/logos/cocacola.png",
role:"Brand Activation Associate",
location:"Ho Chi Minh City",
salary:"$950 - $1250"
},

{
id:"chagee",
name:"CHAGEE",
logo:"assets/logos/chagee.png",
role:"Marketing Executive",
location:"Ho Chi Minh City",
salary:"$700 - $950"
}

];

const companyList = document.getElementById("companyList");

companies.forEach(company => {

const card = document.createElement("div");

card.className = "company-card";

card.innerHTML = `

<div class="company-top">

<img src="${company.logo}" class="company-logo">

<div>

<div class="company-name">${company.name}</div>

<div class="company-role">${company.role}</div>

</div>

</div>

<p class="card-line">📍 ${company.location}</p>

<p class="salary-pill">${company.salary}</p>

<button class="apply-btn" onclick="apply('${company.id}')">
Apply Now
</button>

`;

companyList.appendChild(card);

});

};


// Function chuyển sang trang câu hỏi

function apply(companyId){

window.location.href = "quiz.html?company=" + companyId;

}