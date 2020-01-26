let input = [
    'Telerik Academy',
    '31 Al. Malinov, Sofia',
    '+359 888 55 55 555',
    '',
    'http://telerikacademy.com/',
    'Martin',
    'Veshev',
    '25',
    '+359 2 981 981'
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let companyName = gets();
let companyAddress = gets();
let phoneNumber = gets();
let faxNumber = gets();
let webSite = gets();
let managerFirstName = gets();
let managerLastName = gets();
let managerAge = gets();
let managerPhone = gets();

console.log(companyName);
console.log(`Address: ${companyAddress}`);
console.log(`Tel. ${phoneNumber}`);
console.log(`Fax: ${faxNumber}`);
console.log(`Web site: ${webSite}`);
console.log(`Manager: ${managerFirstName} ${managerLastName} (age: ${managerAge}, tel. ${managerPhone})`);