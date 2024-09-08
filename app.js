"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// require("print-this");
let resumeForm = document.querySelector("#cv-form");
let resumeOutput = document.querySelector("#resume-output");
let editBtn = document.querySelector("#edit-btn");
resumeForm?.addEventListener("submit", (evt) => {
    evt.preventDefault();
    resumeOutput.style.display = "block";
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const education = document.getElementById("education");
    const experience = document.getElementById("experience");
    const skills = document.getElementById("skills");
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert("please fill all field");
        return;
    }
    document.getElementById("resumeName").innerText = `Name: ${name.value}`;
    document.getElementById("resumeEmail").innerText = `Email: ${email.value}`;
    document.getElementById("resumePhone").innerText = `Phone: ${phone.value}`;
    document.getElementById("resumeEducation").innerText = `Education: ${education.value}`;
    document.getElementById("resumeExperience").innerText = `Experience: ${experience.value}`;
    document.getElementById("resumeSkils").innerText = `Skills: ${skills.value}`;
});
// Edit Resume button functionality
editBtn?.addEventListener("click", () => {
    resumeForm.style.display = "block"; // Show the form again
    resumeOutput.style.display = "none"; // Hide the resume output
    editBtn.style.display = "none"; // Hide the edit button
    // Repopulate the form with current resume data
    const name = document.getElementById("resumeName")?.innerText.split(': ')[1];
    const email = document.getElementById("resumeEmail")?.innerText.split(': ')[1];
    const phone = document.getElementById("resumePhone")?.innerText.split(': ')[1];
    const education = document.getElementById("resumeEducation")?.innerText;
    const experience = document.getElementById("resumeExperience")?.innerText;
    const skills = document.getElementById("resumeSkils")?.innerText;
    // Set the form inputs to these values
    document.getElementById("name").value = name ?? '';
    document.getElementById("email").value = email ?? '';
    document.getElementById("phone").value = phone ?? '';
    document.getElementById("education").value = education ?? '';
    document.getElementById("experience").value = experience ?? '';
    document.getElementById("skills").value = skills ?? '';
});
const shareBtn = document.querySelector("#share-btn");
shareBtn?.addEventListener("click", () => {
    const resumeText = `
    Name: ${document.getElementById("resumeName").innerText}
    Email: ${document.getElementById("resumeEmail").innerText}
    Phone: ${document.getElementById("resumePhone").innerText}
    Education: ${document.getElementById("resumeEducation").innerText}
    Experience: ${document.getElementById("resumeExperience").innerText}
    Skills: ${document.getElementById("resumeSkils").innerText}
    `;
    navigator.clipboard.writeText(resumeText).then(() => {
        alert("Resume copied to clipboard! You can share it now.");
    }).catch(err => {
        alert("Failed to copy resume.");
        console.error(err);
    });
});
$(document).ready(function () {
    $("#print-btn").on("click", function () {
        $("#resume-output").printThis();
    });
});
