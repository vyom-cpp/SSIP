function populateAreas() {
  // Enable the area dropdown
  document.getElementById("area").disabled = false;

  // Get the selected city
  var selectedCity = document.getElementById("city").value;

  // Get the area dropdown element
  var areaDropdown = document.getElementById("area");

  // Clear existing options
  areaDropdown.innerHTML = "";

  // Populate options based on the selected city
  if (selectedCity === "city1") {
    addOption(areaDropdown, "area1a", "Area 1A");
    addOption(areaDropdown, "area1b", "Area 1B");
    // Add more area options as needed
  } else if (selectedCity === "city2") {
    addOption(areaDropdown, "area2a", "Area 2A");
    addOption(areaDropdown, "area2b", "Area 2B");
    // Add more area options as needed
  }
  // Add more conditions based on your requirements
}

function populateSocieties() {
  // Enable the society dropdown
  document.getElementById("society").disabled = false;

  // Get the selected area
  var selectedArea = document.getElementById("area").value;

  // Get the society dropdown element
  var societyDropdown = document.getElementById("society");

  // Clear existing options
  societyDropdown.innerHTML = "";

  // Populate options based on the selected area
  if (selectedArea === "area1a") {
    addOption(societyDropdown, "society1a1", "Society 1A1");
    addOption(societyDropdown, "society1a2", "Society 1A2");
    // Add more society options as needed
  } else if (selectedArea === "area1b") {
    addOption(societyDropdown, "society1b1", "Society 1B1");
    addOption(societyDropdown, "society1b2", "Society 1B2");
    // Add more society options as needed
  }
  // Add more conditions based on your requirements
}

// Function to add an option to a dropdown
function addOption(dropdown, value, text) {
  var option = document.createElement("option");
  option.value = value;
  option.text = text;
  dropdown.add(option);
}
