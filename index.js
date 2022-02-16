const fs = require('fs');
const inquirer = require('inquirer');


const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What languages do you know? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'rawlist',
        name: 'communication',
        message: 'What is your preferred method of communication',
        choices: ['Talk', 'Text', 'Face to Face', 'Telekinesis']
      },
    ]);
  };


  promptUser()
  .then(answers => {
      let answerName = `answers.json`
  

  fs.writeFile(answerName, JSON.stringify(answers, null, '\t'), err => {
      if (err) throw new Error(err);
      console.log('Page created! Check out index.html in this directory to see it!');
    });
  });

 