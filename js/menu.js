function mobileMenu() {
  const x = document.getElementById('top_navigation');
  const y = document.querySelector('#ham_button');
  const z = document.querySelector('.menu_icon h2');
  if (x.style.display === 'block') {
    x.style.display = 'none';
    z.style.visibility = 'visible';
    y.src = './icons/Union.png';
  } else {
    x.style.display = 'block';
    z.style.visibility = 'hidden';
    y.src = './icons/close.svg';
  }
}



const bannerProjects = [
  {
    id: 1,
    projectTitle: 'Multi-Post Stories',
    projectDescription:
      `A daily selection of privately personalized reads; no accounts or
      sign-ups required. has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a standard
      dummy text.`,
    tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    img: 'icons/Works_cont.svg',
  },
];

const projectInfo = [
  {
    id: 1,
    projectName: 'Data Dashboard Healthcare',
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ['HTML', 'Bootstrap', 'Ruby', 'Javascript'],
    img: 'icons/pro_sec.svg',
  },
  {
    id: 2,
    projectName: 'Data Dashboard Healthcare',
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ['HTML', 'Bootstrap', 'Ruby', 'Javascript'],
    img: 'icons/Data_content_image.svg',
  },
  {
    id: 3,
    projectName: 'Website Portfolio',
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ['HTML', 'Bootstrap', 'Ruby', 'Javascript'],
    img: 'icons/website.svg',
  },
  {
    id: 4,
    projectName: 'Profesional Art Printing Data',
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ['HTML', 'Bootstrap', 'Ruby', 'Javascript'],
    img: 'icons/professional.svg',
  },
  {
    id: 5,
    projectName: 'Data Dashboard Healthcare',
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ['HTML', 'Bootstrap', 'Ruby', 'Javascript'],
    img: 'icons/Data_content_image.svg',
  },
  {
    id: 6,
    projectName: 'Website Portfolio',
    projectInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    tech: ['HTML', 'Bootstrap', 'Ruby', 'Javascript'],
    img: 'icons/website.svg',
  },
];

/* const mainProject = () => {
  const headlineProject = bannerProjects.map((projectItem) => {
    return `<section class="works_content">
    <img src=${projectItem.img} class="image_placement" alt="The Banner" />
    <div class="text_placement">
      <h2>${projectItem.projectTitle}</h2>
      <p>${projectItem.projectDescription}</p>
      <ul>
        <li>
          <a href="#">${projectItem.tech[0]}</a>
        </li>
        <li>
          <a href="#">${projectItem.tech[1]}</a>
        </li>
        <li>
          <a href="#">${projectItem.tech[2]}</a>
        </li>
        <li>
          <a href="#">${projectItem.tech[3]}</a>
        </li>
      </ul>
      <button id=${projectItem.id} onclick="clickedButton(this.id)" type="button">See project</button>
    </div>
  </section>`
  });

  return headlineProject;
} */

const showSections = () => {
  const divCard = projectInfo.map((item) => {
    if (item.id === 1) {
      return `<section class="center_content">
    <section class="content_desc">
      <img src=${item.img} alt="" />
      <div class="top_left1">
      <h2>${item.projectName}</h2>
      <p>
       ${item.projectInfo}
      </p>
      <ul>
        <li>
          <a href="#">${item.tech[0]}</a>
        </li>
        <li>
          <a href="#">${item.tech[1]}</a>
        </li>
        <li>
          <a href="#">${item.tech[2]}</a>
        </li>
        <li>
          <a href="#">${item.tech[3]}</a>
        </li>
        </ul>
        <button id=${item.id} onclick="clickedButton(this.id)" type="button">See project</button>
      </div>
    </section>
  </section>`;
    } else if (id === 0) {

    }
    return `<section class="center_content">
  <section class="content_desc">
    <img src=${item.img} alt="" />
    <div class="top_left">
      <h2>${item.projectName}</h2>
      <p>
       ${item.projectInfo}
      </p>
      <ul>
        <li>
          <a href="#">${item.tech[0]}</a>
        </li>
        <li>
          <a href="#">${item.tech[1]}</a>
        </li>
        <li>
          <a href="#">${item.tech[2]}</a>
        </li>
        <li>
          <a href="#">${item.tech[3]}</a>
        </li>
      </ul>
      <button id=${item.id} onclick="clickedButton(this.id)" type="button">See project</button>
    </div>
  </section>
</section>`;
  });

  return divCard;
};

// The popup window
function showPopup() {
  const pop = `<div class="popup">
  <div class="popup_content">
    <div class="titleContent">
      <div class="heading">
        <h2 id="headingSection"></h2>
      </div>
      <img id="closeButton" onclick="closed()" src="icons/close.svg" alt="">
    </div>
    <ul>
      <li id="firstTech">
        <a href="#"></a>
      </li>
      <li id="secondTech">
        <a href="#"></a>
      </li>
      <li id="thirdTech">
        <a href="#"></a>
      </li>
      <li id="fourthTech">
        <a href="#"></a>
      </li>
    </ul>
    <div class="desktopView">
      <div id="popup_info">
        <img id="bannerImg" src="" alt="Portfolio">
      </div>
      <div class ="all_info">
        <p id="projectDesc"></p>
        <div class="bottom_section">
          <button id="projectSeven" type="button">See project <img src="icons/live_icon.svg" alt=""></button>
          <button id="projectSeven" type="button">See project <img src="icons/github_2.svg"> </button>
        </div>
      </div>
    </div>
  </div>
</div>`;

  return pop;
}

function clickedButton(theId) {
  const savedInfo = theId;
  const titleSelect = document.getElementById('headingSection');
  const paragraphSelect = document.getElementById('projectDesc');
  const technologyOne = document.getElementById('firstTech');
  const technologyTwo = document.getElementById('secondTech');
  const technologyThree = document.getElementById('thirdTech');
  const technologyFour = document.getElementById('fourthTech');
  const mainProjectOne = document.getElementById('firstTech');
  const mainProjectTwo = document.getElementById('secondTech');
  const mainProjectThree = document.getElementById('thirdTech');
  const mainProjectFour = document.getElementById('fourthTech');
  const images = document.querySelector('#bannerImg');
  const projectDisplay = document.getElementById('bannerImg');
  const popWin = document.querySelector('.popup');

  for (let project = 0; project < projectInfo.length; project + 1) {
    if (projectInfo[project].id === Number(savedInfo)) {
      titleSelect.innerHTML = projectInfo[project].projectName;
      paragraphSelect.innerHTML = projectInfo[project].projectInfo;
      technologyOne.innerHTML = projectInfo[project].tech[0];
      technologyTwo.innerHTML = projectInfo[project].tech[1];
      technologyThree.innerHTML = projectInfo[project].tech[2];
      technologyFour.innerHTML = projectInfo[project].tech[3];
      projectDisplay.src = projectInfo[project].img;
      popWin.style.visibility = 'visible';
    }
  }

  /* for (let bannerPrj in bannerProjects) {
    if (bannerPrj === savedInfo) {
      titleSelect.innerHTML = bannerProjects[bannerPrj].projectTitle;
      paragraphSelect.innerHTML = bannerProjects[bannerPrj].projectDescription;
      images.src = bannerProjects[bannerPrj].img;
      mainProjectOne.innerHTML = bannerProjects[bannerPrj].tech[0];
      mainProjectTwo.innerHTML = bannerProjects[bannerPrj].tech[1];
      mainProjectThree.innerHTML = bannerProjects[bannerPrj].tech[2];
      mainProjectFour.innerHTML = bannerProjects[bannerPrj].tech[3];
      popWin.style.visibility = 'visible';
    }
  } */
}

clickedButton();

// close popup window
function closed() {
  const popWin = document.querySelector('.popup');
  popWin.style.visibility = 'hidden';
}

closed();

window.addEventListener('load', () => {
  /* document.getElementById('multiStories').innerHTML = mainProject(); */
  document.getElementById('popWindow').innerHTML = showPopup();
  document.getElementById('grid_contentdesc').innerHTML = showSections().join('');
});