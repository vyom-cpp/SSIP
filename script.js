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
  if (selectedCity === "city1") { // Gandhinagar talukas
    addOption(areaDropdown, " ", " ");
    addOption(areaDropdown, "kalol", "Kalol");
    addOption(areaDropdown, "gandhinagar", "Gandhinagar");
    addOption(areaDropdown, "dehgam", "Dehgam");
    addOption(areaDropdown, "mansa", "Mansa");
    // Add more cities & talukas options
  } else if (selectedCity === "city2") { // Ahmedabad talukas
    addOption(areaDropdown, " ", " ");
    addOption(areaDropdown, "detroj", "Detroj");
    addOption(areaDropdown, "dhandhuka", "Dhandhuka");
    addOption(areaDropdown, "dholka", "Dholka");
    addOption(areaDropdown, "sanand", "Sanand");
    addOption(areaDropdown, "mandal", "Mandal");
    // Add more cities & talukas options
  }
}

function populateSocieties() {
  // Society dropdown
  document.getElementById("society").disabled = false;

  // Get the selected area
  var selectedArea = document.getElementById("area").value;

  // Get the society dropdown element
  var societyDropdown = document.getElementById("society");

  // Clear existing options
  societyDropdown.innerHTML = "";

  // Selected talukas and options for villages
  
  if (selectedArea === "kalol") { // Villages of kalol
    addOption(societyDropdown, " ", " ");
    addOption(societyDropdown, "arsodiya", "Arsodiya");
    addOption(societyDropdown, "ola", "Ola");
    addOption(societyDropdown, "aluha", "Aluha");
    addOption(societyDropdown, "kantha", "Kantha");
    addOption(societyDropdown, "khatraj", "Khatraj");
    // Add more villages
  } else if (selectedArea === "gandhinagar") { // Villages of gandhinagar
    addOption(societyDropdown, " ", " ");
    addOption(societyDropdown, "sector1", "Sector 1");
    addOption(societyDropdown, "sector2", "Sector 2");
    addOption(societyDropdown, "sector3", "Sector 3");
    addOption(societyDropdown, "sargasan", "Sargasan");
    addOption(societyDropdown, "kudasan", "Kudasan");
    // Add more villages
  } else if (selectedArea === "dehgam") { // Villages of dehgam
    addOption(societyDropdown, " ", " ");
    addOption(societyDropdown, "udaan", "Udaan");
    addOption(societyDropdown, "otampura", "Otampura");
    addOption(societyDropdown, "kadadra", "Kadadrra");
    addOption(societyDropdown, "kanipur", "Kanipur");
    addOption(societyDropdown, "karoli", "Karoli");
    // Add more villages
  } else if (selectedArea === "mansa") { // Villages of mansa
    addOption(societyDropdown, " ", " ");
    addOption(societyDropdown, "itadra", "Itadra");
    addOption(societyDropdown, "indrapura", "Indrapura");
    addOption(societyDropdown, "aajol", "Aajol");
    addOption(societyDropdown, "charada", "Charada");
    addOption(societyDropdown, "delvada", "Delvada");
    // Ahmedabad 'city' socitites addition start

  } else if (selectedArea === "detroj") { // Villages of detroj
    addOption(societyDropdown, " ", " ");
    addOption(societyDropdown, "amarpura", "Amarpura");
    addOption(societyDropdown, "indrapura", "Indrapura");
    addOption(societyDropdown, "aodhav", "Aodhav");
    addOption(societyDropdown, "kakvav", "Kakvav");
    addOption(societyDropdown, "kanj", "Kanj");
    // Add more villages
  } else if (selectedArea === "dhandhuka") { // Villages of dhandhuka
    addOption(societyDropdown, " ", " ");
    addOption(societyDropdown, "arval", "Arval");
    addOption(societyDropdown, "akaru", "Akaru");
    addOption(societyDropdown, "anandpur", "Anandpur");
    addOption(societyDropdown, "umdi", "Umdi");
    addOption(societyDropdown, "kadipur", "Kadipur");
    // Add more villages
  } else if (selectedArea === "dholka") { // Villages of dholka
    addOption(societyDropdown, " ", " ");
    addOption(societyDropdown, "arnej", "Arnej");
    addOption(societyDropdown, "andhari", "Andhari");
    addOption(societyDropdown, "aanganpura", "Aanganpura");
    addOption(societyDropdown, "egoli", "Egoli");
    addOption(societyDropdown, "ambathi", "Ambathi");
    // Add more villages
  } else if (selectedArea === "sanand") { // Villages of Sanand
    addOption(societyDropdown, " ", " ");
    addOption(societyDropdown, "eyava", "Eyava");
    addOption(societyDropdown, "kundal", "Kundal");
    addOption(societyDropdown, "kolat", "Kolat");
    addOption(societyDropdown, "koda", "Koda");
    addOption(societyDropdown, "gorij", "Gorij");
    // Add more villages
  } else if (selectedArea === "mandal") { // Villages of mandal
    addOption(societyDropdown, " ", " ");
    addOption(societyDropdown, "trent", "Trent");
    addOption(societyDropdown, "kanpura", "Kanpura");
    addOption(societyDropdown, "keshavpura", "Keshavpura");
    addOption(societyDropdown, "ukardi", "Ukardi");
    addOption(societyDropdown, "aodki", "Aodki");
    // Add more villages
  } // Add more talukas with options of villages
}

// Function to add an option to a dropdown
function addOption(dropdown, value, text) {
  var option = document.createElement("option");
  option.value = value;
  option.text = text;
  dropdown.add(option);
}