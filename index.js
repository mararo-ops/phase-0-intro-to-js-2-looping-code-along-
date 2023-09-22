const names = ["Aki","Ollie","Guadalupe"];
function writeCards(names) {
    const thankYouMessages = [];
  for (let i = 0;i < names.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return thankYouMessages;
}
writeCards(names);
const number = [0,1,2,3,4,5,6,7,8,9,10]
function countDown(number) {
    let i = 10;
    while(i >= 0) {
        console.log(i--)
    }
    return number;
}