let cvform = document.querySelector("#cv-form") as HTMLFormElement;
let skillBtn = document.querySelector("#skills-btn") as HTMLButtonElement;
let skillList = document.querySelector(".skills") as HTMLElement;
let editbtn = document.getElementById("edit") as HTMLElement;
let cvTemplate = document.getElementById("cv-template") as HTMLFormElement;
let sharebtn = document.getElementById("share-btn") as HTMLElement;

skillBtn.innerHTML = "Hide Skills";

skillBtn?.addEventListener("click", () => {
  if (skillList.style.display === "none" || !skillList.style.display) {
    skillBtn.innerHTML = "Hide Skills"
    skillList.style.display = "block"
  }
  else {
    skillList.style.display = "none"
    skillBtn.innerHTML = "Show Skills"
  }
});


cvform?.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let name = (document.getElementById("nameField") as HTMLInputElement).value;
  let currently_live = (document.getElementById("currently_live") as HTMLInputElement).value;
  let DOB = (document.getElementById("dateField") as HTMLInputElement).value;
  let phone = (document.getElementById("contactField") as HTMLInputElement).value;
  let email = (document.getElementById("emailField") as HTMLInputElement).value;
  let address = (document.getElementById("addressField") as HTMLInputElement).value;

  // School
  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const institution = (document.getElementById("institution") as HTMLInputElement).value;
  const graduationDateStart = (document.getElementById("graduation-date-start") as HTMLInputElement).value;
  const graduationDateEnd = (document.getElementById("graduation-date-end") as HTMLInputElement).value;


  const jobTitle = (document.getElementById("job-title") as HTMLInputElement).value;
  const company = (document.getElementById("company") as HTMLInputElement).value;
  const startDate = (document.getElementById("start-date") as HTMLInputElement).value;
  const endDate = (document.getElementById("end-date") as HTMLInputElement).value;
  const jobDescription = (document.getElementById("job-description") as HTMLInputElement).value;
  const profession = (document.getElementById("professionField") as HTMLInputElement).value;
  const about = (document.getElementById("aboutField") as HTMLInputElement).value;


  // links
  let Github = (document.getElementById("GithubField") as HTMLInputElement).value;
  let linkedin = (document.getElementById("linkedinField") as HTMLInputElement).value;



  (document.getElementById("currentlyT") as HTMLElement).textContent = currently_live;
  (document.getElementById("DOBT") as HTMLElement).textContent = DOB;
  (document.getElementById("nameT") as HTMLElement).textContent = name;
  (document.getElementById("contactT") as HTMLElement).textContent = phone;
  (document.getElementById("emailT") as HTMLElement).textContent = email;
  (document.getElementById("addressT") as HTMLElement).textContent = address;
  (document.getElementById("aboutT") as HTMLElement).textContent = about;

  // School
  (document.getElementById("display-degree") as HTMLElement).textContent = degree;
  (document.getElementById("display-institution") as HTMLElement).textContent = institution;
  (document.getElementById("display-graduation-start") as HTMLElement).textContent = graduationDateStart;
  (document.getElementById("display-graduation-end") as HTMLElement).textContent = graduationDateEnd;



  (document.getElementById("LinkedInT") as HTMLElement).textContent = linkedin;
  (document.getElementById("githubT") as HTMLElement).textContent = Github;

  (document.getElementById("display-job-title") as HTMLElement).textContent = jobTitle;
  (document.getElementById("display-company") as HTMLElement).textContent = company;
  (document.getElementById("display-start-date") as HTMLElement).textContent = startDate;
  (document.getElementById("display-end-date") as HTMLElement).textContent = endDate;
  (document.getElementById("display-discription") as HTMLElement).textContent = jobDescription;
  (document.getElementById("professionT") as HTMLElement).textContent = profession;


  // ******* Skills *********
  let skills = document.getElementsByClassName("sfield") as HTMLCollectionOf<HTMLInputElement>;
  let skillsStr = "";

  for (let e of skills) {
    let entries = e.value.split(",");

    for (let entry of entries) {
      skillsStr += `<li>${entry.trim()}</li>`;
    }
  }
  (document.getElementById("skillT") as HTMLElement).innerHTML = skillsStr;

  // **** Setting Image ****
  let fileInput = (document.getElementById("imageField") as HTMLInputElement).files?.[0];
  if (fileInput) {
    let reader = new FileReader();
    reader.onloadend = () => (document.getElementById("imgTemplate") as HTMLImageElement).src = reader.result as string;
    reader.readAsDataURL(fileInput);
  }

  // **** Setting Image ****
  let fileInput2 = (document.getElementById("imageField") as HTMLInputElement).files?.[0];
  if (fileInput2) {
    let reader = new FileReader();
    reader.onloadend = () => (document.getElementById("imgTemplate-hide") as HTMLImageElement).src = reader.result as string;
    reader.readAsDataURL(fileInput2);
  }

  (document.getElementById("cv-form") as HTMLElement).style.display = "none";
  (document.getElementById("cv-template") as HTMLElement).style.display = "block";

  let names = document.getElementById("nameField") as HTMLInputElement;

  // shareable link
  sharebtn.addEventListener("click", async () => {
    try {
      const shareableLink = `https://milestone5-unique-path-and-shareable-link-ayesha.vercel.app/?username.value/${names.value.replace(/\s+/g, '_')}`

      await navigator.clipboard.writeText(shareableLink)
      alert("Shareable linkcopied to Clipboard!")

    } catch (err) {
      alert("Failed to copy link clipboard . please try again!")
    }

  })

});

function printCV() {
  window.print();
}

editbtn?.addEventListener("click", () => {
  cvform.style.display = "block";
  cvTemplate.style.display = "none"


})