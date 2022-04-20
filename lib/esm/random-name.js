export const randomName = () => {
    const names = ['Dwight Schrute', 'Jim Halpert', 'Pam Beesly', 'Michael Scott'];
    return names[Math.floor(Math.random() * names.length)];
};
