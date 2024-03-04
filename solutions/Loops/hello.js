const string = 'Hello!';

for (let i = 0; i < string.length; i++) {
  console.log(string.charAt(i).repeat(i + 1));
}