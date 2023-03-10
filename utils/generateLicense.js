
//Function to choose correct text and badge link for chosen license
function generateLicense(license, username) {

    let licenseBadge;
    let licenseText;

    //Use of moment.js package to add current year to licenses
    const moment = require("moment");
    const year = moment().format('YYYY');


    switch (license) {
        case 'Apache 2.0 License':

            licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';

            licenseText =
                `Apache 2.0 License   
                        Copyright ${year} ${username}   
                        Licensed under the Apache License, Version 2.0 (the "License")
                        you may not use this file except in compliance with the License.
                        You may obtain a copy of the License at [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)
                        Unless required by applicable law or agreed to in writing, software
                        distributed under the License is distributed on an "AS IS" BASIS,
                        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                        See the License for the specific language governing permissions and
                        limitations under the License.`;
            break;

        case 'GNU GPL v3':
            licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';

            licenseText = `GNU GPL v3    
                        Copyright (C) ${year} ${username}   
                        This program is free software: you can redistribute it and/or modify
                        it under the terms of the GNU General Public License as published by
                        the Free Software Foundation, either version 3 of the License, or
                        (at your option) any later version.
                        This program is distributed in the hope that it will be useful,
                        but WITHOUT ANY WARRANTY; without even the implied warranty of
                        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                        GNU General Public License for more details. 
                        You should have received a copy of the GNU General Public License
                        along with this program.  If not, see [<https://www.gnu.org/licenses/>](https://www.gnu.org/licenses/).`
            break;

        case 'MIT':
            licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

            licenseText = `MIT License   
                        Copyright ${year} ${username}   
                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  
                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.   
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
            break;

        case 'Mozilla':
            licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';

            licenseText = `Mozilla Public License 2.0   
             This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at [https://mozilla.org/MPL/2.0/](https://mozilla.org/MPL/2.0/).`;
            break;

        case 'None':
            licenseBadge = '';
            licenseText = `None    
            Copyright &copy; ${year} ${username}`;
            break;
    };

    //return array with badge link and text for chosen license
    return [licenseBadge, licenseText];

}

module.exports = generateLicense;