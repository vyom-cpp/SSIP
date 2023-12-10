const dropdown1 = document.getElementById('city');
const dropdown2 = document.getElementById('area');
const dropdown3 = document.getElementById('society');
const form = document.getElementById('form');

const optionsMap1 = {
  Gandhinagar: ['','Kalol', 'Gandhinagar', 'Dehgam', 'Mansa'],
  Ahmedabad: ['','Detroj', 'Dhandhuka', 'Dholka', 'Sanand', 'Mandal'],
};

const optionsMap2 = {
  'Select Taluka' : ['Select Society'],
  'Detroj': ['','Amarpura', 'Indrapura','Aodhav','Kakav', 'Kanj'],
  'Dhandhuka': ['','Arval','Akaru','Anandpura', 'Umdi', 'Kadipur'],
  'Dholka': ['','Arnej','Andhari','Aanganpura', 'Egoli', 'Ambathi'],
  'Sanand': ['','Eyava', 'Kundal', 'Kolat', 'Koda', 'Gorij'],
  'Mandal': ['','Trent', 'Kanpura', 'Keshavpura', 'Ukardi', 'Aodki'],
  'Kalol': ['','Arsodiya', 'Ola', 'Kantha', 'Khatraj'],
  'Gandhinagar': ['','Sector 1', 'Sector 2', 'Sector 3', 'Sargasan', 'Kudasan'],
  'Dehgam': ['','Udaan', 'Otampura', 'Kandarra', 'Kanipur', 'Karoli'],
  'Mansa': ['','Itadara', 'Indrapura', 'Aajol', 'Charada', 'Delvada']
}; 


function updateSecondDropdown() {
  const selectedOption1 = dropdown1.value;
  const options1 = optionsMap1[selectedOption1] || [];
  // console.log(process.env.BACKEND_URL)

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

function submitForm() {
  // Get values from form elements
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var pincode = document.getElementById("pincode").value;
  var city = document.getElementById("city").value;
  var area = document.getElementById("area").value;
  var society = document.getElementById("society").value;

  // Get values from radio buttons
  var behavior1 = document.querySelector('input[name="behavior1"]:checked').value;
  var behavior2 = document.querySelector('input[name="behavior2"]:checked').value;
  var behavior3 = document.querySelector('input[name="behavior3"]:checked').value;

  // Get value from textarea
  var feedbackText = document.getElementById("feedback").value;
  
  if (city === 'Select City' || area === 'Select Taluka' || society === 'Select Village') {
    alert('Please select a valid option for City, Taluka, and Village.');
    return; // Do not proceed with form submission
  }

  var formData = {
    firstName: firstName,
    lastName: lastName,
    pincode: pincode,
    city: city,
    area: area,
    society: society,
    behavior1: behavior1,
    behavior2: behavior2,
    behavior3: behavior3,
    additionalFeedback: feedbackText == '' ? "none" : feedbackText
  };
  // Display the submitted values (You can replace this with your desired submission logic)
  console.log(JSON.stringify(formData))

  //set this url before production 
  const prodURL = '';
  const endpoint = prodURL == '' ? 'http://localhost:3000/api/send_form_data' : prodURL ;
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response data as needed
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    // Reset the form
    document.getElementById("form").reset();
}

// dropdown1.addEventListener('change', updateSecondDropdown);
// dropdown2.addEventListener('change', updateThirdDropdown);
form.addEventListener('submit', (event)=>{
  event.preventDefault();
  submitForm();
})

// updateSecondDropdown();
// updateThirdDropdown();