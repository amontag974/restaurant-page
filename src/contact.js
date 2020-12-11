function getContactContent() {
  const contactDiv = document.createElement("div");
  contactDiv.setAttribute("class","information");

  contactDiv.appendChild(getContactHeader());
  contactDiv.appendChild(getAddress());
  contactDiv.appendChild(getPhoneNumber());

  return contactDiv;
}

function getContactHeader() {
  const contactHeader = document.createElement('h1');
  contactHeader.setAttribute("class", "contact-header");
  contactHeader.innerText = "Contact Us"

  return contactHeader;
}

function getAddress() {
  const addressDiv = document.createElement('div');
  addressDiv.setAttribute("class", "address");

  const addressArray = [
    "Address:", 
    "123 Random Way", 
    "Fake Place, FL 12345"
  ];

  addressArray.forEach( entry => {
    const addressLine = document.createElement('p');
    addressLine.innerText = entry;
    addressDiv.appendChild(addressLine);
  });

  return addressDiv;
}

function getPhoneNumber() {
  const phoneNumberDiv = document.createElement('div');
  phoneNumberDiv.setAttribute("class", "phone-number");

  const phoneNumberArray = [
    "Phone Number:",
    "555-123-4567"
  ];

  phoneNumberArray.forEach( entry => {
    const phoneNumberLine = document.createElement('p');
    phoneNumberLine.innerText = entry;
    phoneNumberDiv.appendChild(phoneNumberLine);
  });

  return phoneNumberDiv;
}

export { getContactContent }