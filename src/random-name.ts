export const randomName = (): string => {
    const names:Array<string> = ['Dwight Schrute', 'Jim Halpert', 'Pam Beesly', 'Michael Scott']
    return names[Math.floor(Math.random() * names.length)]
}