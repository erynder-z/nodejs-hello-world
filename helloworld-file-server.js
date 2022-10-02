import http from 'http';
import fs from 'fs';

http
  .createServer(function (req, res) {
    // on connect: Read demohtml.html
    fs.readFile('demohtml.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
    // on connect: Create a new file using the appendFile() method:
    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
    // on connect: Create a new, empty file using the open() method:
    fs.open('mynewfile2.txt', 'w', function (err, file) {
      if (err) throw err;
      console.log('Saved!');
    });

    // on connect: Create a new file using the writeFile() method:
    fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
      if (err) throw err;
      console.log('Saved!');
    });

    // on connect: Append "This is my text." to the end of the file "mynewfile1.txt
    fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
      if (err) throw err;
      console.log('Updated!');
    });

    // on connect: Replace the content of the file "mynewfile3.txt":
    fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
      if (err) throw err;
      console.log('Replaced!');
    });

    // on connect: Delete "mynewfile2.txt":
    fs.unlink('mynewfile2.txt', function (err) {
      if (err) throw err;
      console.log('File deleted!');
    });

    // on connect: Rename "mynewfile1.txt" to "myrenamedfile.txt":
    fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
      if (err) throw err;
      console.log('File Renamed!');
    });
  })
  .listen(8080);
