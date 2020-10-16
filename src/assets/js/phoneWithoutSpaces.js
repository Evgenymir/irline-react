const phoneWithoutSpaces = (phone) => phone.split('').map((item) => {
    if (item === '(' || item === ')') {
        return '';
    }

    return item.trim();
}).join('');

export default phoneWithoutSpaces;
