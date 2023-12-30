const parseCode = (str) => {
    const [firstName, lastName, id] = str.split('000').filter(Boolean);
    return {
        firstName: firstName || '',
        lastName: lastName || '',
        id: id || ''
    };
};

// Test
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
