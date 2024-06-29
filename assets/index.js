const linkElements = document.querySelectorAll(".nav-list li a");

let navLinkNo = localStorage.getItem("nav-link-no");

if(navLinkNo){
    let anchorclicked = document.querySelector(
        `.nav-list li:nth-child(${navLinkNo}) a`
    );
    anchorclicked.style.color = "orange";
}



linkElements.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    localStorage.setItem("nav-link-no", index + 1);
    navLinkNo = localStorage.getItem("nav-link-no");
    anchorclicked = document.querySelector(
      `.nav-list li:nth-child(${navLinkNo}) a`
    );
    anchorclicked.style.color = "orange";
  });
});

const mobileLinkElements = document.querySelectorAll(".menu-items-ul li a");

if(navLinkNo){
    let MobileLiclicked = document.querySelector(
        `.menu-items-ul li:nth-child(${navLinkNo})`
      );
      MobileLiclicked.style.backgroundColor = "orange";
}

mobileLinkElements.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    localStorage.setItem("nav-link-no", index + 1);
    navLinkNo = localStorage.getItem("nav-link-no");
    MobileLiclicked = document.querySelector(
      `.menu-items-ul li:nth-child(${navLinkNo})`
    );
    MobileLiclicked.style.backgroundColor = "orange";
  });
});
