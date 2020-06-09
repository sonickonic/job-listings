const container = document.querySelector(".main__container");
const main = document.querySelector(".main");

let selectedFilters = [];

function handleClick(e) {
  const filtersList = main.querySelector(".filters-list");

  const lowerCaseSelectedFilters = selectedFilters.map((word) =>
    word.toLowerCase()
  );

  if (!lowerCaseSelectedFilters.includes(e.target.innerText.toLowerCase())) {
    selectedFilters.push(e.target.innerText);
  }

  filtersList.innerHTML = "";

  selectedFilters &&
    selectedFilters.map((filter) => {
      renderSelectedFilter(filter);
    });

  renderJobs();
}

function renderFilterBar() {
  const divBar = document.createElement("div");
  divBar.classList.add("filters-bar");
  divBar.classList.add("filters-bar--hidden");
  main.insertBefore(divBar, container);

  const filtersList = document.createElement("ul");
  filtersList.classList.add("filters-list");
  divBar.appendChild(filtersList);

  const clearBtn = document.createElement("button");
  clearBtn.classList.add("btn");
  clearBtn.textContent = "Clear";
  clearBtn.type = "submit";
  clearBtn.addEventListener("click", (e) => deleteItems(e));
  divBar.appendChild(clearBtn);
}

function renderSelectedFilter(filter) {
  const filtersList = main.querySelector(".filters-list");
  filtersList.parentNode.classList.remove("filters-bar--hidden");

  const Filter = document.createElement("li");
  Filter.classList.add("filters-list__item");
  Filter.classList.add("filters-list__item--clear");
  Filter.textContent = `${filter}`;
  filtersList.appendChild(Filter);

  const deleteBtn = document.createElement("div");
  deleteBtn.classList.add("btn--delete");
  deleteBtn.addEventListener("click", (e) => deleteItem(e));
  Filter.appendChild(deleteBtn);
}

function renderCard(job) {
  const divCard = document.createElement("div");
  divCard.classList.add("card");
  container.appendChild(divCard);

  const img = document.createElement("img");
  img.src = `${job.logo}`;
  img.alt = "copmpany logo";
  img.classList.add("card__logo");
  divCard.appendChild(img);

  const divDetails = document.createElement("div");
  divDetails.classList.add("job-details");
  divCard.appendChild(divDetails);

  const companyName = document.createElement("span");
  companyName.classList.add("job-details__company-name");
  companyName.textContent = `${job.company}`;
  divDetails.appendChild(companyName);

  if (job.new === true) {
    const newLabel = document.createElement("span");
    newLabel.classList.add("job-details__label");
    newLabel.textContent = "new!";
    divDetails.appendChild(newLabel);
  }

  if (job.featured === true) {
    divCard.classList.add("card--featured");
    const featuredLabel = document.createElement("span");
    featuredLabel.classList.add("job-details__label");
    featuredLabel.classList.add("job-details__label--dark");
    featuredLabel.textContent = "feature";
    divDetails.appendChild(featuredLabel);
  }

  const jobTitle = document.createElement("h3");
  jobTitle.classList.add("job-details__job-title");
  jobTitle.textContent = `${job.position}`;
  divDetails.appendChild(jobTitle);

  const List = document.createElement("ul");
  List.classList.add("job-details__info-list");
  divDetails.appendChild(List);

  const postedAt = document.createElement("li");
  postedAt.classList.add("job-details__info-item");
  postedAt.textContent = `${job.postedAt}`;
  List.appendChild(postedAt);

  const contract = document.createElement("li");
  contract.classList.add("job-details__info-item");
  contract.classList.add("job-details__info-item--bullet");
  contract.textContent = `${job.contract}`;
  List.appendChild(contract);

  const location = document.createElement("li");
  location.classList.add("job-details__info-item");
  location.classList.add("job-details__info-item--bullet");
  location.textContent = `${job.location}`;
  List.appendChild(location);

  const filtersList = document.createElement("ul");
  filtersList.classList.add("filters-list");
  divCard.appendChild(filtersList);

  const roleItem = document.createElement("li");
  roleItem.classList.add("filters-list__item");
  roleItem.textContent = `${job.role}`;
  filtersList.appendChild(roleItem);

  const levelItem = document.createElement("li");
  levelItem.classList.add("filters-list__item");
  levelItem.textContent = `${job.level}`;
  filtersList.appendChild(levelItem);

  function renderLanguages(language) {
    const languageItem = document.createElement("li");
    languageItem.classList.add("filters-list__item");
    languageItem.textContent = `${language}`;
    filtersList.appendChild(languageItem);
  }

  job.languages &&
    job.languages.map((language) => {
      renderLanguages(language);
    });

    function renderTools(tool) {
      const toolItem = document.createElement("li");
      toolItem.classList.add("filters-list__item");
      toolItem.textContent = `${tool}`;
      filtersList.appendChild(toolItem);
    }

    job.tools &&
      job.tools.map((tool) => {
        renderTools(tool);
      });
}

function renderFooter() {
  const divfooter = document.createElement("div");
  const html = `Challenge by
 <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
   >Frontend Mentor</a
 >. Coded by <a href="https://github.com/sonickonic">sonickonic</a>.`;
 divfooter.classList.add('main__footer')
 divfooter.innerHTML = html
 container.appendChild(divfooter);
}

function deleteItems(e) {
  selectedFilters = [];
  e.target.parentNode.classList.add("filters-bar--hidden");

  renderJobs();
}

function deleteItem(e) {
  if (selectedFilters.length == 0) return true;

  selectedFilters = selectedFilters.filter(
    (filter) => filter !== e.target.parentElement.innerText
  );

  e.target.parentNode.remove();

  if (selectedFilters.length == 0) {
    e.path[3].classList.add("filters-bar--hidden");
  }

  renderJobs();
}

function matchfilter(job) {
  if (selectedFilters.length == 0) return true;

  const jobFilters = [
    ...(job.languages || []),
    ...(job.tools || []),
    job.level,
    job.role,
  ].map((filter) => filter.toLowerCase());
  return selectedFilters.every((selectedFilter) =>
    jobFilters.includes(selectedFilter.toLowerCase())
  );
}

const renderJobs = async () => {

  container.innerHTML = "";

  renderFooter()

  const jobs = await fetch("data.json").then((response) => response.json());
  jobs.filter((job) => matchfilter(job)).map((job) => renderCard(job));

  const filters = container.querySelectorAll(".filters-list__item");
  filters.forEach((filter) =>
    filter.addEventListener("click", (e) => handleClick(e))
  );
};

renderFilterBar();
renderJobs();

