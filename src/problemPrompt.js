const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

const prompt = code => {
  const filePath = path.join(__dirname, `${code.dir}${code.filename}`);
  const setting = vscode.Uri.parse(
    `untitled:${vscode.workspace.rootPath}/${code.filename}.js`,
  );
  console.log(setting);

  fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
    if (!err) {
      console.log(data);

      vscode.workspace.openTextDocument(setting).then(
        action => {
          vscode.window.showTextDocument(action, 1, false).then(e => {
            e.edit(edit => {
              edit.insert(new vscode.Position(0, 0), data);
            });
          });
        },
        error => {
          console.error(error);
        },
      );
    } else {
      console.log(err);
    }
  });
};

module.exports = { prompt };
