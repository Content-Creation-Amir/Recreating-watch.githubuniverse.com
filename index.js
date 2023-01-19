const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const nav3 = document.getElementById("nav3");
const nav4 = document.getElementById("nav4");

let lastPos = { x: 0, y: 0 }; // Keep track of the position of the last placed image

document.onmousemove = (e) => {
  let ele = e.target.closest(".nav");
  if (!ele) return;
  if (ele.matches(":hover")) {
    img = ele.children[1];
    img.style.left = `${(e.clientX - lastPos.x) * 2 + e.clientX}px`;
    img.style.top = `${e.clientY - lastPos.y}px`;
    console.log(img.style.left, img.style.top);
    lastPos = { x: e.clientX, y: e.clientY };
  }
};
