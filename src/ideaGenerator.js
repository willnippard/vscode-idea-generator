const vscode = require('vscode');
const ideas = require('./ideas.js');
const problemPrompt = require('./problemPrompt');

const options = ['Easy', 'Medium', 'Hard'];

const moreInfo = { title: 'More info', action: 'moreInfo' };
const setItUp = { title: "Let's do it!", action: 'getCoding' };
const again = { title: 'Try Again', action: 'generateIdea' };

const getMoreInfo = url => {
  vscode.env.openExternal(vscode.Uri.parse(url));
};

const showIdea = (option, idea, difficulty) => {
  if (!option) {
    return;
  }

  if (option.action === 'moreInfo') {
    getMoreInfo(idea.url);
  } else if (option.action === 'getCoding') {
    problemPrompt.prompt(idea.code);
  } else if (option.action === 'generateIdea') {
    generateIdea(difficulty);
  } else {
    vscode.window.showInformationMessage('Functionality coming soon!');
  }
};

const generateIdea = difficulty => {
  const n = Math.floor(Math.random() * ideas[difficulty].length);
  const idea = ideas[difficulty][n];

  // No starter code for hard challenges
  if (difficulty === 'hard') {
    vscode.window
      .showInformationMessage(
        `${idea.title} - ${idea.desc}`,
        {},
        moreInfo,
        again,
      )
      .then(option => showIdea(option, idea, difficulty));
  } else {
    vscode.window
      .showInformationMessage(
        `${idea.title} - ${idea.desc}`,
        {},
        moreInfo,
        setItUp,
        again,
      )
      .then(option => showIdea(option, idea, difficulty));
  }
};

const getIdea = () => {
  vscode.window.showQuickPick(options).then(value => {
    if (!value) {
      return;
    }

    generateIdea(value.toLowerCase());
  });
};

module.exports = {
  getIdea,
};
