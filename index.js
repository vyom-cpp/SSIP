const dropdown1 = document.getElementById('city');
const dropdown2 = document.getElementById('area');
const dropdown3 = document.getElementById('society');

const optionsMap1 = {
  option1 : ['Select Area'],
  Gandhinagar: ['Select Taluka','Kalol', 'Gandhinagar', 'Dehgam', 'Mansa'],
  Ahmedabad: ['Select Taluka','Detroj', 'Dhandhuka', 'Dholka', 'Sanand', 'Mandal'],
};

const optionsMap2 = {
  'Select Area' : ['Select Society'],
  'Detroj': ['Select Village','Amarpura', 'Indrapura','Aodhav','Kakav', 'Kanj'],
  'Dhandhuka': ['Select Village','Arval','Akaru','Anandpura', 'Umdi', 'Kadipur'],
  'Dholka': ['Select Village','Arnej','Andhari','Aanganpura', 'Egoli', 'Ambathi'],
  'Sanand': ['Select Village','Eyava', 'Kundal', 'Kolat', 'Koda', 'Gorij'],
  'Mandal': ['Select Village','Trent', 'Kanpura', 'Keshavpura', 'Ukardi', 'Aodki'],
  'Kalol': ['Select Village','Arsodiya', 'Ola', 'Kantha', 'Khatraj'],
  'Gandhinagar': ['Select Village','Sector 1', 'Sector 2', 'Sector 3', 'Sargasan', 'Kudasan'],
  'Dehgam': ['Select Village','Udaan', 'Otampura', 'Kandarra', 'Kanipur', 'Karoli'],
  'Mansa': ['Select Village','Itadara', 'Indrapura', 'Aajol', 'Charada', 'Delvada']
}; 


function updateSecondDropdown() {
  const selectedOption1 = dropdown1.value;
  const options1 = optionsMap1[selectedOption1] || [];

  dropdown2.innerHTML = '';

  options1.forEach((option) => {
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.textContent = option;
    dropdown2.appendChild(optionElement);
  });

  // After updating the second dropdown, also update the third dropdown
  updateThirdDropdown();
}

function updateThirdDropdown() {
  const selectedOption2 = dropdown2.value;
  const options2 = optionsMap2[selectedOption2] || [];

  dropdown3.innerHTML = '';

  options2.forEach((option) => {
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.textContent = option;
    dropdown3.appendChild(optionElement);
  });
}

dropdown1.addEventListener('change', updateSecondDropdown);
dropdown2.addEventListener('change', updateThirdDropdown);

updateSecondDropdown();
updateThirdDropdown();