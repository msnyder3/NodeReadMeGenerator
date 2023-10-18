function renderLicenseBadge(license) {
}

function renderLicenseLink(license) {}

function renderLicenseSection(license) {}

function generateMarkdown(data) {

  let licenseBadge
  let licenseSection;

  if (data.license == "Apache") {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    licenseSection = `Licensed under the Apache License, Version 2.0 \" THE LICENSE \"; you may not use this file except in compliance with the License. You may obtain a copy of the License at https://www.apache.org/licenses/LICENSE-2.0 .Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.`;
    
  }else if (data.license == "MIT") {
    licenseBadge= `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    licenseSection = `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  }

  return `# ${data.title}

  ${licenseBadge}

  This project's repository can be viewed here: [${data.title}](https://github.com/${data.userName}/${data.repository})

  ## Description
  
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [Tests](#tests)
  - [Contact](#contact)



  ## Installation

  ${data.installation}


  ## Usage

  ${data.usage}


  ## Credits

  This project is developed by ${data.firstName} ${data.lastName} [${data.userName}].


  ## License

  Copyright 2021 © ${data.firstName} ${data.lastName} [${data.userName}](https://github.com/${data.userName}). All rights reserved.
  License protected under [${data.license}](https://opensource.org/licenses/${data.license}).


  ${licenseSection}


  ## Features

  ${data.features}


  ## Tests

  ${data.tests}


  ## How to Contribute

  ${data.contribute}


  ## Contact
  
  Got any questions about this project? Feel free to contact me at ${data.email}

`;
}

module.exports = generateMarkdown;