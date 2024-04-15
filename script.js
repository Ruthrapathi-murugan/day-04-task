const resume = {
  "Name": "Ruthrapathi Murugan",
  "Title": "Full Stack Developer",
  "Contact": {
      "E-mail": "ruthrapathimurugan@outlook.com",
      "Phone": "8122527682",
      "Address": "17/180 South Car Street, Palani, Tamil Nadu"
  },
  "Education": [
      {
          "degree": "Bachelor of Engineering in Computer Science and Engineering",
          "school": "Anna university",
          "graduation_year": 2014
      }
  ],
  "Experience": [
      {
          "position": "Full Stack Developer Intern",
          "company": "GUVI",
          "start_date": "2023-01-01",
          "end_date": "2023-06-30",
          "responsibilities": [
              "Completed Full Stack Developer course",
              "Acquired hands-on experience in [list specific technologies/tools learned]"
          ]
      }
  ],
  "skills": [
      "Full Stack Development",
      "JavaScript",
      "Node.js",
      "React",
      "Express.js",
      "MongoDB",
      "[Any other relevant skills]"
  ]
};

// Using for loop
console.log("Using for loop:");
for (let i = 0; i < Object.keys(resume).length; i++) {
  const key = Object.keys(resume)[i];
  if (Array.isArray(resume[key])) {
      console.log(key + ": ");
      for (let j = 0; j < resume[key].length; j++) {
          console.log(resume[key][j]);
      }
  } else if (typeof resume[key] === 'object') {
      console.log(key + ": ");
      for (let innerKey in resume[key]) {
          console.log(innerKey + ": " + resume[key][innerKey]);
      }
  } else {
      console.log(key + ": " + resume[key]);
  }
}

// Using for...in loop
console.log("using for...in loop:");
for (let key in resume) {
  if (Array.isArray(resume[key])) {
      console.log(key + ": ");
      for (let item of resume[key]) {
          console.log(item);
      }
  } else if (typeof resume[key] === 'object') {
      console.log(key + ": ");
      for (let innerKey in resume[key]) {
          console.log(innerKey + ": " + resume[key][innerKey]);
      }
  } else {
      console.log(key + ": " + resume[key]);
  }
}

// Using for...of loop (for arrays)
console.log("\nUsing for...of loop for Education:");
for (let edu of resume.Education) {
  console.log(edu);
}

// Using forEach loop (for arrays)
console.log("\nUsing forEach loop for skills:");
for (let skill of resume.skills) {
  console.log(skill);
}
