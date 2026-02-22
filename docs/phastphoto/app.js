let photos = [];
let selectedTags = [];

// Load metadata
async function loadPhotos() {
  const response = await fetch("metadata.json");
  photos = await response.json();

  generateTagUI();
  renderImages(photos);
}

function generateTagUI() {
  const tagContainer = document.getElementById("tag-container");

  const tagMap = {};

  photos.forEach((photo) => {
    Object.entries(photo.tags).forEach(([key, value]) => {
      if (!tagMap[key]) tagMap[key] = new Set();
      tagMap[key].add(value);
    });
  });

  Object.entries(tagMap).forEach(([key, values]) => {
    const groupDiv = document.createElement("div");
    groupDiv.className = "tag-group";

    const title = document.createElement("h3");
    title.innerText = key;
    groupDiv.appendChild(title);

    values.forEach((value) => {
      const label = document.createElement("label");
      label.className = "checkbox-label";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = `${key}:${value}`;

      checkbox.addEventListener("change", handleTagChange);

      label.appendChild(checkbox);
      label.append(` ${value}`);
      groupDiv.appendChild(label);
    });

    tagContainer.appendChild(groupDiv);
  });
}

function handleTagChange(e) {
  const value = e.target.value;

  if (e.target.checked) {
    selectedTags.push(value);
  } else {
    selectedTags = selectedTags.filter((tag) => tag !== value);
  }

  filterImages();
}

function filterImages() {
  if (selectedTags.length === 0) {
    renderImages(photos);
    return;
  }

  const filtered = photos.filter((photo) => {
    return selectedTags.every((tag) => {
      const [key, value] = tag.split(":");
      return photo.tags[key] === value;
    });
  });

  renderImages(filtered);
}

function renderImages(photoArray) {
  const container = document.getElementById("image-container");
  container.innerHTML = "";

  photoArray.forEach((photo) => {
    const img = document.createElement("img");
    img.src = photo.src;
    container.appendChild(img);
  });
}

loadPhotos();
