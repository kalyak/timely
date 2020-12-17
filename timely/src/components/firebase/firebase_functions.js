import fb from "./firebase_config";

const db = fb.firestore();

const retrieveContacts = (oldContacts, setContacts, userName, groupName) => {
  const q = (querySnapshot) => {
    console.log(querySnapshot.docs);
    const contacts = querySnapshot.docs.map((contact, i) => {
      return {
        name: contact.data().name,
        email: contact.data().email,
        country: contact.data().country,
        countrycode: contact.data().countrycode,
        timezone: contact.data().timezone,
        gmt: 0,
        convertedDate: 0,
        convertedTime: 0,
        currentDate: 0,
        currentTime: 0,
      };
    });
    setContacts(contacts);
  };
  db.collection(`users/${userName}/${groupName}`).get().then(q);
};

const addContact = (formData, userName, groupName) => {
  const countrycode = formData["country-select"].value;
  const country =
    formData["country-select"].options[formData["country-select"].selectedIndex]
      .text;
  db.collection(`users/${userName}/${groupName}`)
    .doc(formData.name.value)
    .set({
      name: formData.name.value,
      email: formData.email.value,
      country: country,
      countrycode: countrycode,
      timezone: formData["zone-select"].value,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", formData.name.value);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

const addUser = (formData) => {
  const countrycode = formData["country-select"].value;
  const country =
    formData["country-select"].options[formData["country-select"].selectedIndex]
      .text;
  db.collection(`users`)
    .doc(formData.name.value)
    .set({
      name: formData.name.value,
      email: formData.email.value,
      country: country,
      countrycode: countrycode,
      timezone: formData["zone-select"].value,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", formData.name.value);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

const retrieveUser = (userName, setUserTime) => {
  console.log(setUserTime);
  db.collection(`users`)
    .doc(userName)
    .get()
    .then((DocumentSnapshot) => {
      console.log(DocumentSnapshot.data());
      // setCurrTimezone(DocumentSnapshot.data().timezone);
      setUserTime(DocumentSnapshot.data());
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

const all = { retrieveContacts, addContact, addUser, retrieveUser };
export default all;
