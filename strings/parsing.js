function parseAndDisplayName(personName) {
    let firstSpace = personName.indexOf(" ");
    let firstLetterOfLastName = (firstSpace + 1)
    let firstName = personName.substring(0, firstSpace);
    let lastName = personName.substring(firstLetterOfLastName);

  console.log(`
Name: ${personName}
First name: ${firstName}
Last name: ${lastName}`);
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalaee Grace");
