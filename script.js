const parseCode = (str) => {
   const [firstName, lastName, id] = str.split('0').filter(boolean);
    return {
        firstName: firstName || '',
        lastName: lastName || '',
        id: id || ''
    };
};

// Test
// =