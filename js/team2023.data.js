/* ********************************************************** */
// Members Details Data Object
/* ********************************************************** */

let facul = [
  {
    id: 0,
    name: "Rahul Singh",
    avatar: "https://media.licdn.com/dms/image/C5103AQEBNohCDU1OTA/profile-displayphoto-shrink_200_200/0/1570410031016?e=1700092800&v=beta&t=aj8WFvhk3G3FovSAsPPAiiXNX0C4qkFP_t9WzDwHQsE",
    badges: `
      <span class="red">Professor</span>
      <span class="green">KIT</span>
    `,
    cardBorderColor: "blue",
    // socialGithubLink: "#",
  //  socialLinkedinLink: "#",
    // socialTwitterLink: "#",

  }
]
// Lead Member Details
let leadMemberDetails2023 = [
  {
    id: 0,
    name: "Shivansh",
    avatar: "https://media.licdn.com/dms/image/D5603AQGkPiW2jNdfOQ/profile-displayphoto-shrink_200_200/0/1682364442659?e=1699488000&v=beta&t=X_XkJM1HEKLSJPL91sluKmVmUKauGPJG4NUkQsjRNOc",
    badges: `
                    
                    <span class="green">GDSC</span>
                    <span class="yellow">Lead</span>
                `,
    cardBorderColor: "red",
    //socialGithubLink: "#",
    socialLinkedinLink: "https://www.linkedin.com/in/shivansh-kumar-492b3021b/",
    //socialTwitterLink: "#",
  },
  {
    id:1,
    name:"Ankit",
    avatar: "https://media.licdn.com/dms/image/D5603AQFqcXxo1hXQcg/profile-displayphoto-shrink_200_200/0/1689119799821?e=1699488000&v=beta&t=GbbspcXlB7sx7JDoyW27RwCvp6uJhNkm649zUy_0JWs",
    badges: `
      <span class="blue">GDSC</span>
      <span class="red">Co-Lead</span>
    `,
    cardBorderColor: "blue",
    socialGithubLink: "https://github.com/Ankit-0310",
    socialLinkedinLink: "https://www.linkedin.com/in/ankit03102003/",
    socialTwitterLink: "https://twitter.com/AnkitAr05704716",
  },

  {
    id:3,
    name:"Sweta Tiwari",
    avatar: "https://instagram.fknu1-5.fna.fbcdn.net/v/t51.2885-19/386196133_1235850220416346_301819414388544339_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fknu1-5.fna.fbcdn.net&_nc_cat=110&_nc_ohc=52P1ZT6kFi0AX_dG4gK&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBPlbRLOTDcnZDHEsDgAJqVodMHAGLr4HR0lxkRDs_Vlw&oe=6524B52E&_nc_sid=8b3546",
    badges: `
      <span class="green">Public Relation</span>
      <span class="red">Lead</span>
    `,
    cardBorderColor: "blue",
    socialGithubLink: "",
    socialLinkedinLink: "",
    socialTwitterLink: "",
  },




];

// *************** Core Members Details 2023 ***************************
let coreMembersDetails2023 = [
  {
    id:0,
    name:"Anurag Pandey",
    avatar: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/anurag_cs_lt_10_1c9lX8p.jpeg",
    badges: `
      <span class="green">web</span>
      <span class="blue">Lead</span>
      `,
    cardBorderColor: "red",
    //socialGithubLink: "#",
    socialLinkedinLink: "https://www.linkedin.com/in/anurag-pandey-a44b2b1ab/",
    socialTwitterLink: "https://twitter.com/AnuragP83549986",
  },

  {
    id:2,
    name:"Harshita",
    avatar: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/harshita_makhija_PAOROWS.jpg",
    badges: `
      <span class="yellow">Content</span>
      <span class="red">Lead</span>
    `,
    cardBorderColor: "green",
    //socialGithubLink: "#",
    //socialLinkedinLink: "#",
    //socialTwitterLink: "#",
  },
  {
    id:3,
    name:"Aman Tripathi",
    avatar: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/aman_tripathi_nxlzgs6.jpg",
    badges: `
      <span class="green">Graphic</span>
      <span class="red">design</span>
      <span class="blue">Lead</span>
    `,
    cardBorderColor: "yellow",
    //socialGithubLink: "#",
    socialLinkedinLink: "https://www.linkedin.com/in/aman-tripathi-61783925a",
    socialTwitterLink: "https://twitter.com/AmanTri97133187",
  },


]



/* ********************************************************** */
// Members Preview Mapping
/* ********************************************************** */
let leadMember = document.querySelector("#lead");
let coreMember = document.querySelector("#core");

let faculty = document.querySelector("#faculty-advisor");

Object.values(facul).map((val) => {
  faculty.innerHTML += `
        <!-- ${val.id}.${val.name} -->
        <div class="profile_card ${val.cardBorderColor}">
            <img src="${val.avatar}" alt="Profile Img" />
            <h4>${val.name}</h4>
            <p>${val.badges}</p>

            <div class="social">

                <a href="${val.socialLinkedinLink}"><i class="bx bxl-linkedin"></i></a>

            </div>
        </div>
    `;
});
// **************** Lead Member 2023 ***********************

Object.values(leadMemberDetails2023).map((val) => {
  leadMember.innerHTML += `
        <!-- ${val.id}.${val.name} -->
        <div class="profile_card ${val.cardBorderColor}">
            <img src="${val.avatar}" alt="Profile Img" />
            <h4>${val.name}</h4>
            <p>${val.badges}</p>

            <div class="social">
                <a href="${val.socialGithubLink}" ><i class="bx bxl-github"></i></a>
                <a href="${val.socialLinkedinLink}"><i class="bx bxl-linkedin"></i></a>
                <a href="${val.socialTwitterLink}"><i class="bx bxl-twitter"></i></a>
            </div>
        </div>
    `;
});

// Core Members
Object.values(coreMembersDetails2023).map((val) => {
  coreMember.innerHTML += `
        <!-- ${val.id}.${val.name} -->
        <div class="profile_card ${val.cardBorderColor}">
            <img src="${val.avatar}" alt="Profile Img" />
            <h4>${val.name}</h4>
            <p>${val.badges}</p>

            <div class="social">
                <a href="${val.socialGithubLink}"><i class="bx bxl-github"></i></a>
                <a href="${val.socialLinkedinLink}" ><i class="bx bxl-linkedin"></i></a>
                <a href="${val.socialTwitterLink}"><i class="bx bxl-twitter"></i></a>
            </div>
        </div>
    `;
});
