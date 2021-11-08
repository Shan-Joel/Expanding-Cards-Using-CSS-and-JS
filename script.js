const panels = document.querySelectorAll('.panel');
const headerTxt = document.querySelectorAll('.heading');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}

// headerTxt.forEach((heading) => {
//   heading.addEventListener('click', () => {
//     removeActiveHeadingClasses();
//     heading.classList.add('active2');
//   });
// });

// function removeActiveHeadingClasses() {
//   headerTxt.forEach((heading) => {
//     heading.classList.remove('active2');
//   });
// }
