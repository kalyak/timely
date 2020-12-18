## Approach and Process

### What in my process and approach to this project would I do differently next time?

I'd have a closer look at the data that comes back from the API call and the test query ability and limitations. And read closer to find the rate limit for the API, a lot of time was spent trying to fix the choke in the API call for timezonedb.

### What in my process and approach to this project went well that I would repeat next time?

Having the data structure laid out properly and having the rest of the information pulled from the manipulation of the data instead of hard coding all possible data and having a big chunk of data being pulled everytime.  

Having a wireframe of the layout that I wanted before starting on coding, to know when to have recurring items in their own components.

---

## Code and Code Design

### What in my code and program design in the project would I do differently next time?

- I want to explore more on API calls, there was an issue where the first call to firebase didn't have the subfunctions passed through the .then() function, but it worked for subsequent calls.

- Have obvious recurring functions be put into their own Components earlier.

### What in my code and program design in the project went well? Is there anything I would do the same next time?
1. Figuring out how to convert the times in 1 array and mapping them back into the State.
```Javascript
if (contacts.length !== 0) {
    const convertTimeArray = contacts.map((contact, i) =>
        ConvertTime(contact.timezone)
    );
    const contactsNew = [...contacts];
    for (let i = 0; i < contacts.length; i++) {
        const contactToChange = { ...contactsNew[i] };
        contactToChange.gmt = convertTimeArray[i].format("Z");
        contactToChange.convertedDate = convertTimeArray[i].format(
            "ddd, DD-MMM-YYYY"
        );
        contactToChange.convertedTime = convertTimeArray[i].format("hh:mm A");
        contactsNew[i] = contactToChange;
    }
    setContacts(contactsNew);
}
```
For each, please include code examples.

Code snippet up to 20 lines.
Code design documents or architecture drawings / diagrams.

---
## SEI Post Mortem
### What habits did I use during this unit that helped me?
### What habits did I have during this unit that I can improve on?
### How is the overall level of the course during this unit? (instruction, course materials, etc.)