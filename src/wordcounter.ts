import inquirer from "inquirer";
let bool: boolean = true;
let paras: string[] = [];
console.log(
  `NOTE: To Count Words Of Specific Paragraph, Display The Id Of Paragraph Assigned By The System\nHit Display Button To View ID`
);
while (bool) {
  let options: { userChoice: string } = await inquirer.prompt([
    {
      name: "userChoice",
      type: "list",
      choices: [
        "Add Paragraph",
        "Count Words Of All Paragraphs",
        "Count Words Of Specific Paragraphs",
        "Display Paragraphs",
        "Exit",
      ],
    },
  ]);
  if (options.userChoice == "Exit") {
    console.log("Sorry To See You Go");

    bool = false;
    break;
  } else if (options.userChoice == "Add Paragraph") {
    let newPara: { para: string } = await inquirer.prompt([
      {
        name: "para",
        type: "input",
        message: "Enter Your Paragraph!",
      },
    ]);
    paras.push(newPara.para);
    console.log("Para Added Successfully");
  } else if (options.userChoice == "Display Paragraphs") {
    if (paras.length > 0) {
      let i = 0;
      paras.forEach((item) => {
        console.log(`Para ID:${i} \nPara: ${item}`);
        i++;
      });
    } else {
      console.log("No Paragraph Exist");
    }
  } else if (options.userChoice == "Count Words Of All Paragraphs") {
    if (paras.length > 0) {
      paras.forEach((item) => {
        let arr: string[] = item.split(" ");
        console.log(`Para: ${item}\nWord Count: ${arr.length}`);
      });
    } else {
      console.log("Add Paragraph First");
    }
  } else if (options.userChoice == "Count Words Of Specific Paragraphs") {
    if (paras.length > 0) {
      let specificPara: { paraId: string } = await inquirer.prompt([
        {
          name: "paraId",
          type: "input",
          message: "Enter Para ID Assigned By The System",
        },
      ]);
      paras.forEach((item) => {
        if (item == paras[+specificPara.paraId]) {
          let arr: string[] = item.split(" ");
          console.log(
            `Para: ${paras[+specificPara.paraId]} \nWord Count: ${arr.length}`
          );
        }
      });
    } else {
      console.log("Enter Paraghaph To Count Words");
    }
  }
}
