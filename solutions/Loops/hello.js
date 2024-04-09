const string = 'Hello!';

for (let i = 0; i < string.length; i += 1) {
  // eslint-disable-next-line no-console
  console.log(string.charAt(i).repeat(i + 1));
}
