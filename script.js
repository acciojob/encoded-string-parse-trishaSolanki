const parseCode = (str) => {
  // your code here
	const[firstName, lastName, id] = str.slice(000).filter(boolean);
	 return {
        firstName: firstName,
        lastName: lastName,
        id: id
    };
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
