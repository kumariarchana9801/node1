const fs = require('fs');

// Function to get the current timestamp
function file() {
  const now = new Date();
  const timestamp = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}_${now.getHours().toString().padStart(2, '0')}-${now.getMinutes().toString().padStart(2, '0')}-${now.getSeconds().toString().padStart(2, '0')}`;
  return timestamp;
}

const fileName = `file_${file()}.txt`;
const content = "Hello,This is timestamp file";

fs.writeFile(fileName, content, (err) => {
  if (err) throw err ;
    console.log(`File ${fileName} created successfully.`);
}
);
