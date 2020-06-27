const easyDir = '../starterCode/easy/';
const medDir = '../starterCode/medium/';

module.exports = {
  easy: [
    {
      title: 'Find PI to the Nth Digit',
      desc:
        'Enter a number and have the program generate PI up to that many decimal places. Stopping at 100 digits.',
      url: 'https://github.com/geekpradd/PythonPi/blob/master/PythonPi.py',
      code: {
        filename: 'nextPrime',
        dir: easyDir,
      },
    },
    {
      title: 'Next Prime Number',
      desc:
        'Have the program find prime numbers until the user chooses to stop asking for the next one.',
      url: 'https://github.com/geekpradd/PythonPi/blob/master/PythonPi.py',
      code: {
        filename: 'nextPrime',
        dir: easyDir,
      },
    },
  ],
  medium: [
    {
      title: 'Sorting',
      desc:
        'Implement two types of sorting algorithms: Merge sort and bubble sort',
      url:
        'https://github.com/MrBlaise/learnpython/blob/master/Numbers/next_prime.py',
      code: {
        filename: 'sorting',
        dir: medDir,
      },
    },
  ],
  hard: [
    {
      title: 'Deploy a Web App to Azure!',
      desc: 'Deploy an open-source WordPress app running as a Web App',
      url: 'https://skillmeup.com/courses/player/challenge-azure-101',
    },
  ],
};
