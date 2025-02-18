## Frontend Tech Test
### all instructions are contained in the project at launch

>Use node.js 18 or above where possible

#### setup
```bash
npm i
```
launch
```bash
npm run dev
```

#### git
clone https://github.com/scalpelltd/frontend_tech_test

Do Not fork. 

Create a public repo or shared private repo 

share your completed code/repo with:

| | | |
|-|-|-|
|James|james@scalpel.ai|[SirJamesBrown](https://github.com/SirJamesBrown)|
|Shah|shah@scalpel.ai|


## Tech test - Tasks:

  ### A. Setup
  <ol>
    <li>create a github repo and push the project to `main`</li>
    <li>invite SirJamesBrown as a reviewer</li>
  </ol>

  ### B. Project
  <ol>
    <li>resolve the 4+ 'High' impact vulnerabilities when running `npm i`</li>
    <li>create a new branch `project-{yymmdd}`</li>
    <li>Commit with message listing solution</li>
    <li>PR to main adding me 'SirJamesBrown' as reviewer</li>
    <li>merge to main</li>  
  </ol>

  #### <i>Please branch and commit the remaining tasks as you please, but all should be merged to main by submission</i>
  ### C. Vue
  <ol>
    <li>for each item in the `Poses` component, display all key / values given in 'properties' of the items found in `proto_demo.js` using your judgment on how to display them. Note: negative or null properties should hidden</li>
    <li>add jsdoc/docstring descriptions for functions `instrument_settings`, `chng_face`, `getCube` & `getHL` (rename functions and variables as you see fit with comments or proxies)</li>
    <li>simplify and the `instrument_settings` function</li>
    <li>convert the 'pose' buttons to a dropdown menu using the vue composition api bindings to set the face of the cube</li>
  </ol>

  ### D. Store
  <ol>
    <li>create a pinia store</li>
    <li>convert `instrument_settings`, `chng_face`, `getCube` & `getHL` functions to store methods and access getters and setters directly from the `Poses` component</li>
    <li>load values into the store on mount of `App` component and access them from the `Poses` component</li>
  </ol>

  ### E. Execution
  <ol>
    <li>build and serve with the provided scripts in package.json</li>
    <li>using the express server `./server.js`, create a POST end-point which takes a string and call it from the vue app with any given arg</li>
    <li>Linux | Mac: use node `exec` (specifically) to create a new file named with the current unix timestamp containing the passed string from above when called</li>
    <li>Windows: use an fs tool to create a new file named with the current unix timestamp containing the passed string from above when called. Note: you may need to modify path options</li>
    <li>create a GET endpoint on the server to read the file and return the contents to the vue app</li>
    <li>display the file contents in the app</li>
  </ol>


#### Strike though completed tasks.
#### Not all tasks need to be completed. Please highlight those skipped or passed with a note.