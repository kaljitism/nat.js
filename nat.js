const {stdin, stdout, stderr, argv, exit} = require('node:process');
const fs = require('node:fs');

const filePath = argv[2];

if (filePath) {
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(stdout);
  fileStream.on('end', () => {
    stdout.write('\n');
    exit(0);
  });
}

stdin.on('data', data=> {
  stdout.write(data.toString().toUpperCase());
});
