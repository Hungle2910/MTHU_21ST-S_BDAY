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

document.getElementById("companyLogo").src = logos[company];

const companyNames = {

loreal:"L'Oréal Vietnam",
unilever:"Unilever Vietnam",
pg:"Procter & Gamble",
bosch:"Bosch Group",
vinamilk:"Vinamilk",
shopee:"Shopee",
cocacola:"The Coca-Cola Company",
chagee:"CHAGEE"

};

document.getElementById("companyName").innerText = companyNames[company];

const mails = {

loreal:`
<p>Dear Minh Thư,</p>

<p>
After careful review of an exceptionally competitive pool of candidates, 
it is our great pleasure to inform you that you have been selected to join 
<b>L'Oréal Vietnam</b>.
</p>

<p>
Among many talented applicants, you stood out for your curiosity,
creativity, and courage to think beyond conventions.
</p>

<p>
Welcome to L'Oréal. The future of beauty is brighter with you in it.
</p>

<p>
Warmest congratulations,<br>
Human Resources Department<br>
L'Oréal Vietnam
</p>
`,

unilever:`
<p>Dear Minh Thư,</p>

<p>
We are delighted to inform you that you have been selected to join
<b>Unilever Vietnam</b>.
</p>

<p>
Your curiosity, leadership potential and commitment to meaningful
impact strongly reflect Unilever’s mission.
</p>

<p>
Welcome to Unilever. Your journey of purpose-driven growth begins here.
</p>

<p>
Warm regards,<br>
Human Resources Department<br>
Unilever Vietnam
</p>
`,

pg:`
<p>Dear Minh Thư,</p>

<p>
It is with great excitement that we share this news:
<b>You have been selected to join Procter & Gamble.</b>
</p>

<p>
We believe your journey with us will be one of growth,
challenge and meaningful impact.
</p>

<p>
Welcome to P&G.
</p>

<p>
Sincerely,<br>
Human Resources Department<br>
Procter & Gamble
</p>
`,

bosch:`
<p>Dear Minh Thư,</p>

<p>
After thoughtful consideration, we are pleased to tell you
that <b>Bosch would like you to join us.</b>
</p>

<p>
Your curiosity and innovative thinking stood out to our team.
</p>

<p>
Welcome to a place where ideas become technologies —
Invented for life.
</p>

<p>
Warm regards,<br>
Human Resources Department<br>
Bosch Group
</p>
`,

vinamilk:`
<p>Dear Minh Thư,</p>

<p>
After reviewing many talented candidates, we are happy to inform you that
<b>Vinamilk would like you to join us.</b>
</p>

<p>
Your application demonstrated curiosity and potential.
</p>

<p>
Welcome to Vinamilk.
</p>

<p>
Warm regards,<br>
Human Resources Department<br>
Vinamilk
</p>
`,

shopee:`
<p>Dear Minh Thư,</p>

<p>
Thank you for applying to Shopee.
</p>

<p>
Your application has been placed on our <b>waitlist</b>.
</p>

<p>
We truly appreciate the effort and passion you brought to the process.
</p>

<p>
Warm regards,<br>
Human Resources Department<br>
Shopee
</p>
`,

cocacola:`
<p>Dear Minh Thư,</p>

<p>
Your application made a strong impression on our team.
</p>

<p>
However, due to the strength of this year's candidate pool,
your application has been placed on our <b>waitlist</b>.
</p>

<p>
Warm regards,<br>
Human Resources Department<br>
The Coca-Cola Company
</p>
`,

chagee:`
<p>Dear Minh Thư,</p>

<p>
Thank you for taking the time to apply to CHAGEE.
</p>

<p>
After careful consideration, we regret to inform you
that we will not be moving forward with your application.
</p>

<p>
We wish you continued success in your career.
</p>

<p>
Warm regards,<br>
Recruitment Team<br>
CHAGEE
</p>
`

};

document.getElementById("mailContent").innerHTML = mails[company];