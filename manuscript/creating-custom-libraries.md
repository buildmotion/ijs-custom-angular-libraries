# Creating Custom Libraries

## Prerequisite: Workspace

 Before we can create a new library project, we will need to have a target *workspace* available for this new project type. The library project type was introduced with the Angular 6 release. This version of Angular included the new workspace developer environment. The workspace introduced a new project type called ***library***.

 ## Angular Workspace (default)

> ng new angular-workspace --create-application=false
> 
> -  --**create-application**: Create a new initial application project in the 'src' folder of the new workspace. When false, creates an empty workspace with no initial application. You can then use the generate application command so that all applications are created in the projects folder. 

Here is the output of this CLI command:

```ts
ng new angular-workspace --create-application=false
? Do you want to enforce stricter type checking and stricter bundle budgets in the workspace?
  This setting helps improve maintainability and catch bugs ahead of time.
  For more information, see https://angular.io/strict Yes
CREATE angular-workspace/README.md (1026 bytes)
CREATE angular-workspace/.editorconfig (274 bytes)
CREATE angular-workspace/.gitignore (631 bytes)
CREATE angular-workspace/angular.json (139 bytes)
CREATE angular-workspace/package.json (1146 bytes)
CREATE angular-workspace/tsconfig.json (783 bytes)
CREATE angular-workspace/tslint.json (2992 bytes)
✔ Packages installed successfully.
    Directory is already under version control. Skipping initialization of git.
```


Without this option, it will create a workspace with a default application in the `src` folder. I prefer to start empty and to add the projects explicitly using the Angular CLI. The CLI will create application and library items in the `projects` folder.

```ts
ng new angular-workspace -d

? Do you want to enforce stricter type checking and stricter bundle budgets in the workspace?
  This setting helps improve maintainability and catch bugs ahead of time.
  For more information, see https://angular.io/strict Yes
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
CREATE angular-workspace/README.md (1026 bytes)
CREATE angular-workspace/.editorconfig (274 bytes)
CREATE angular-workspace/.gitignore (631 bytes)
CREATE angular-workspace/angular.json (3793 bytes)
CREATE angular-workspace/package.json (1218 bytes)
CREATE angular-workspace/tsconfig.json (783 bytes)
CREATE angular-workspace/tslint.json (3185 bytes)
CREATE angular-workspace/.browserslistrc (703 bytes)
CREATE angular-workspace/karma.conf.js (1434 bytes)
CREATE angular-workspace/tsconfig.app.json (287 bytes)
CREATE angular-workspace/tsconfig.spec.json (333 bytes)
CREATE angular-workspace/src/favicon.ico (948 bytes)
CREATE angular-workspace/src/index.html (302 bytes)
CREATE angular-workspace/src/main.ts (372 bytes)
CREATE angular-workspace/src/polyfills.ts (2830 bytes)
CREATE angular-workspace/src/styles.scss (80 bytes)
CREATE angular-workspace/src/test.ts (753 bytes)
CREATE angular-workspace/src/assets/.gitkeep (0 bytes)
CREATE angular-workspace/src/environments/environment.prod.ts (51 bytes)
CREATE angular-workspace/src/environments/environment.ts (662 bytes)
CREATE angular-workspace/src/app/app-routing.module.ts (245 bytes)
CREATE angular-workspace/src/app/app.module.ts (393 bytes)
CREATE angular-workspace/src/app/app.component.scss (0 bytes)
CREATE angular-workspace/src/app/app.component.html (24955 bytes)
CREATE angular-workspace/src/app/app.component.spec.ts (1090 bytes)
CREATE angular-workspace/src/app/app.component.ts (222 bytes)
CREATE angular-workspace/e2e/protractor.conf.js (904 bytes)
CREATE angular-workspace/e2e/tsconfig.json (274 bytes)
CREATE angular-workspace/e2e/src/app.e2e-spec.ts (668 bytes)
CREATE angular-workspace/e2e/src/app.po.ts (274 bytes)
```

Use the `--help` option to view the available option and arguments for a CLI command.

 > ng new angular-workspace --help -d

```ts
arguments:
  name
    The name of the new workspace and initial project.

options:
  --collection (-c)
    A collection of schematics to use in generating the initial application.
  --commit 
    Initial git repository commit information.
  --create-application 
    Create a new initial application project in the 'src' folder of the new workspace. When false, creates an empty workspace with no initial application. You can then use the generate application command so that all applications are created in the projects folder.
  --defaults 
    Disable interactive input prompts for options with a default.
  --directory 
    The directory name to create the workspace in.
  --dry-run (-d)
    Run through and reports activity without writing out results.
  --force (-f)
    Force overwriting of existing files.
  --help 
    Shows a help message for this command in the console.
  --inline-style (-s)
    Include styles inline in the component TS file. By default, an external styles file is created and referenced in the component TypeScript file.
  --inline-template (-t)
    Include template inline in the component TS file. By default, an external template file is created and referenced in the component TypeScript file.
  --interactive 
    Enable interactive input prompts.
  --legacy-browsers 
    Add support for legacy browsers like Internet Explorer using differential loading.
  --minimal 
    Create a workspace without any testing frameworks. (Use for learning purposes only.)
  --new-project-root 
    The path where new projects will be created, relative to the new workspace root.
  --package-manager 
    The package manager used to install dependencies.
  --prefix (-p)
    The prefix to apply to generated selectors for the initial project.
  --routing 
    Generate a routing module for the initial project.
  --skip-git (-g)
    Do not initialize a git repository.
  --skip-install 
    Do not install dependency packages.
  --skip-tests (-S)
    Do not generate "spec.ts" test files for the new project.
  --strict 
    Creates a workspace with stricter type checking and stricter bundle budgets settings. This setting helps improve maintainability and catch bugs ahead of time. For more information, see https://angular.io/guide/strict-mode
  --style 
    The file extension or preprocessor to use for style files.
  --verbose (-v)
    Add more details to output logging.
  --view-encapsulation 
    The view encapsulation strategy to use in the initial project.
```

### Angular Workspace Projects

The Angular CLI creates a new workspace and an `angular.json` to contain the definitions of the workspace projects (i.e., application and library). We are now ready to start adding projects to the workspace.

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
  }
}
```

 ### Angular CLI Creates Library Projects.

The Angular.io documentation states you can use the Angular CLI to generate a *generic* library project. What is a generic library project? I have no idea. When you create an Angular library project you're basically creating a module that is a container for some related things.

> Creates a new, generic library project in the current workspace.

```ts
ng generate library <name> [options]
ng g library <name> [options]
```

## Error Handler

```ts
g g library errorHandler -d
CREATE projects/error-handler/README.md (1029 bytes)
CREATE projects/error-handler/karma.conf.js (1434 bytes)
CREATE projects/error-handler/ng-package.json (162 bytes)
CREATE projects/error-handler/package.json (194 bytes)
CREATE projects/error-handler/tsconfig.lib.json (540 bytes)
CREATE projects/error-handler/tsconfig.lib.prod.json (230 bytes)
CREATE projects/error-handler/tsconfig.spec.json (309 bytes)
CREATE projects/error-handler/tslint.json (247 bytes)
CREATE projects/error-handler/src/public-api.ts (183 bytes)
CREATE projects/error-handler/src/test.ts (781 bytes)
CREATE projects/error-handler/src/lib/error-handler.module.ts (273 bytes)
CREATE projects/error-handler/src/lib/error-handler.component.spec.ts (669 bytes)
CREATE projects/error-handler/src/lib/error-handler.component.ts (284 bytes)
CREATE projects/error-handler/src/lib/error-handler.service.spec.ts (388 bytes)
CREATE projects/error-handler/src/lib/error-handler.service.ts (141 bytes)
UPDATE angular.json (1470 bytes)
UPDATE package.json (1226 bytes)
UPDATE tsconfig.json (911 bytes)

NOTE: The "dryRun" flag means no changes were made.
user@buildmotion-pro angular-workspace % ng g library errorHandler --help -d
Generates and/or modifies files based on a schematic.
usage: ng generate library <name> [options]

arguments:
  schematic
    The schematic or collection:schematic to generate.
  name
    The name of the library.

options:
  --defaults 
    Disable interactive input prompts for options with a default.
  --dry-run (-d)
    Run through and reports activity without writing out results.
  --entry-file 
    The path at which to create the library's public API file, relative to the workspace root.
  --force (-f)
    Force overwriting of existing files.
  --help 
    Shows a help message for this command in the console.
  --interactive 
    Enable interactive input prompts.
  --lint-fix 
    Apply lint fixes after generating the library.
  --prefix (-p)
    A prefix to apply to generated selectors.
  --skip-install 
    Do not install dependency packages.
  --skip-package-json 
    Do not add dependencies to the "package.json" file. 
  --skip-ts-config 
    Do not update "tsconfig.json" to add a path mapping for the new library. The path mapping is needed to use the library in an app, but can be disabled here to simplify development.

Help for schematic library
Creates a new generic library project in the current workspace.
arguments:
  name
    The name of the library.

options:
  --entry-file 
    The path at which to create the library's public API file, relative to the workspace root.
  --lint-fix 
    Apply lint fixes after generating the library.
  --prefix (-p)
    A prefix to apply to generated selectors.
  --skip-install 
    Do not install dependency packages.
  --skip-package-json 
    Do not add dependencies to the "package.json" file. 
  --skip-ts-config 
    Do not update "tsconfig.json" to add a path mapping for the new library. The path mapping is needed to use the library in an app, but can be disabled here to simplify development.
  ```

  asdf

```ts
ng g library errorHandler          
CREATE projects/error-handler/README.md (1029 bytes)
CREATE projects/error-handler/karma.conf.js (1434 bytes)
CREATE projects/error-handler/ng-package.json (162 bytes)
CREATE projects/error-handler/package.json (194 bytes)
CREATE projects/error-handler/tsconfig.lib.json (540 bytes)
CREATE projects/error-handler/tsconfig.lib.prod.json (230 bytes)
CREATE projects/error-handler/tsconfig.spec.json (309 bytes)
CREATE projects/error-handler/tslint.json (247 bytes)
CREATE projects/error-handler/src/public-api.ts (183 bytes)
CREATE projects/error-handler/src/test.ts (781 bytes)
CREATE projects/error-handler/src/lib/error-handler.module.ts (273 bytes)
CREATE projects/error-handler/src/lib/error-handler.component.spec.ts (669 bytes)
CREATE projects/error-handler/src/lib/error-handler.component.ts (284 bytes)
CREATE projects/error-handler/src/lib/error-handler.service.spec.ts (388 bytes)
CREATE projects/error-handler/src/lib/error-handler.service.ts (141 bytes)
UPDATE angular.json (1470 bytes)
UPDATE package.json (1226 bytes)
UPDATE tsconfig.json (911 bytes)
✔ Packages installed successfully.
```

### Build Library

```ts
ng build errorHandler            
Building Angular Package
******************************************************************************
It is not recommended to publish Ivy libraries to NPM repositories.
Read more here: https://v9.angular.io/guide/ivy#maintaining-library-compatibility
******************************************************************************

------------------------------------------------------------------------------
Building entry point 'error-handler'
------------------------------------------------------------------------------
⠙ Compiling TypeScript sources through NGCCompiling @angular/core : es2015 as esm2015
✔ Compiling TypeScript sources through NGC
⠋ Bundling to FESM2015(node:7131) [DEP0148] DeprecationWarning: Use of deprecated folder mapping "./" in the "exports" field module resolution of the package at /Users/user/work/github/ijs-custom-angular-libraries/angular-workspace/node_modules/tslib/package.json.
Update this package.json to use a subpath pattern like "./*".
(Use `node --trace-deprecation ...` to show where the warning was created)
✔ Bundling to FESM2015
✔ Bundling to UMD
✔ Minifying UMD bundle
✔ Writing package metadata
ℹ Built error-handler

------------------------------------------------------------------------------
Built Angular Package
 - from: /Users/user/work/github/ijs-custom-angular-libraries/angular-workspace/projects/error-handler
 - to:   /Users/user/work/github/ijs-custom-angular-libraries/angular-workspace/dist/error-handler
------------------------------------------------------------------------------
```

The output of files and folders

```txt
.
├── bundles
│   ├── error-handler.umd.js
│   ├── error-handler.umd.js.map
│   ├── error-handler.umd.min.js
│   └── error-handler.umd.min.js.map
├── esm2015
│   ├── lib
│   │   ├── error-handler.component.js
│   │   ├── error-handler.module.js
│   │   └── error-handler.service.js
│   ├── error-handler.js
│   └── public-api.js
├── fesm2015
│   ├── error-handler.js
│   └── error-handler.js.map
├── lib
│   ├── error-handler.component.d.ts
│   ├── error-handler.component.d.ts.map
│   ├── error-handler.module.d.ts
│   ├── error-handler.module.d.ts.map
│   ├── error-handler.service.d.ts
│   └── error-handler.service.d.ts.map
├── error-handler.d.ts
├── error-handler.d.ts.map
├── package.json
├── public-api.d.ts
├── public-api.d.ts.map
└── README.md
```

## Publishing to NPM

```json
{
  "name": "error-handler",
  "version": "0.0.1",
  "peerDependencies": {
    "@angular/common": "^11.2.14",
    "@angular/core": "^11.2.14"
  },
  "dependencies": {
    "tslib": "^2.0.0"
  },
  "main": "bundles/error-handler.umd.js",
  "module": "fesm2015/error-handler.js",
  "es2015": "fesm2015/error-handler.js",
  "esm2015": "esm2015/error-handler.js",
  "fesm2015": "fesm2015/error-handler.js",
  "typings": "error-handler.d.ts",
  "sideEffects": false,
  "scripts": {
    "prepublishOnly": "node --eval \"console.error('ERROR: Trying to publish a package that has been compiled by Ivy. This is not allowed.\\nPlease delete and rebuild the package, without compiling with Ivy, before attempting to publish.\\n')\" && exit 1"
  }
}
```

> Workaround: [Deploying Angular # ivy packages](https://szoradi-balazs.medium.com/deploying-angular-9-ivy-packages-bae9841e665c)

###  Fix 1: Build Package Using `--prod`

```ts
ng build errorHandler --prod     
Building Angular Package

------------------------------------------------------------------------------
Building entry point 'error-handler'
------------------------------------------------------------------------------
✔ Compiling TypeScript sources through NGC
✔ Bundling to FESM2015
✔ Bundling to UMD
✔ Minifying UMD bundle
✔ Writing package metadata
ℹ Built error-handler

------------------------------------------------------------------------------
Built Angular Package
 - from: /Users/user/work/github/ijs-custom-angular-libraries/angular-workspace/projects/error-handler
 - to:   /Users/user/work/github/ijs-custom-angular-libraries/angular-workspace/dist/error-handler
------------------------------------------------------------------------------
user@buildmotion-pro angular-workspace % npm publish
npm notice 
npm notice 📦  angular-workspace@0.0.0
npm notice === Tarball Contents === 
npm notice 274B  .editorconfig                                                 
npm notice 1.0kB README.md                                                     
npm notice 1.5kB angular.json                                                  
npm notice 1.2kB package.json                                                  
npm notice 1.4kB projects/error-handler/karma.conf.js                          
npm notice 162B  projects/error-handler/ng-package.json                        
npm notice 194B  projects/error-handler/package.json                           
npm notice 1.0kB projects/error-handler/README.md                              
npm notice 669B  projects/error-handler/src/lib/error-handler.component.spec.ts
npm notice 284B  projects/error-handler/src/lib/error-handler.component.ts     
npm notice 273B  projects/error-handler/src/lib/error-handler.module.ts        
npm notice 388B  projects/error-handler/src/lib/error-handler.service.spec.ts  
npm notice 141B  projects/error-handler/src/lib/error-handler.service.ts       
npm notice 183B  projects/error-handler/src/public-api.ts                      
npm notice 781B  projects/error-handler/src/test.ts                            
npm notice 540B  projects/error-handler/tsconfig.lib.json                      
npm notice 230B  projects/error-handler/tsconfig.lib.prod.json                 
npm notice 309B  projects/error-handler/tsconfig.spec.json                     
npm notice 247B  projects/error-handler/tslint.json                            
npm notice 911B  tsconfig.json                                                 
npm notice 3.0kB tslint.json                                                   
npm notice === Tarball Details === 
npm notice name:          angular-workspace                       
npm notice version:       0.0.0                                   
npm notice filename:      angular-workspace-0.0.0.tgz             
npm notice package size:  5.1 kB                                  
npm notice unpacked size: 14.8 kB                                 
npm notice shasum:        8a96bd2271da546b128620d4c653651260ddc644
npm notice integrity:     sha512-UgCjKya4h+/SU[...]3WpCAyDwUUOIA==
npm notice total files:   21                                      
npm notice 
npm ERR! code ENEEDAUTH
npm ERR! need auth This command requires you to be logged in.
npm ERR! need auth You need to authorize this machine using `npm adduser`
```

###  Fix 2: Publish Package with `--ignore-scripts`

```ts
ng build errorHandler

Building Angular Package
******************************************************************************
It is not recommended to publish Ivy libraries to NPM repositories.
Read more here: https://v9.angular.io/guide/ivy#maintaining-library-compatibility
******************************************************************************

------------------------------------------------------------------------------
Building entry point 'error-handler'
------------------------------------------------------------------------------
✔ Compiling TypeScript sources through NGC
⠋ Bundling to FESM2015(node:8661) [DEP0148] DeprecationWarning: Use of deprecated folder mapping "./" in the "exports" field module resolution of the package at /Users/user/work/github/ijs-custom-angular-libraries/angular-workspace/node_modules/tslib/package.json.
Update this package.json to use a subpath pattern like "./*".
(Use `node --trace-deprecation ...` to show where the warning was created)
✔ Bundling to FESM2015
✔ Bundling to UMD
✔ Minifying UMD bundle
✔ Writing package metadata
ℹ Built error-handler

------------------------------------------------------------------------------
Built Angular Package
 - from: /Users/user/work/github/ijs-custom-angular-libraries/angular-workspace/projects/error-handler
 - to:   /Users/user/work/github/ijs-custom-angular-libraries/angular-workspace/dist/error-handler
------------------------------------------------------------------------------
user@buildmotion-pro angular-workspace % npm publish --ignore-scripts
npm notice 
npm notice 📦  angular-workspace@0.0.0
npm notice === Tarball Contents === 
npm notice 274B  .editorconfig                                                 
npm notice 1.0kB README.md                                                     
npm notice 1.5kB angular.json                                                  
npm notice 1.2kB package.json                                                  
npm notice 1.4kB projects/error-handler/karma.conf.js                          
npm notice 162B  projects/error-handler/ng-package.json                        
npm notice 194B  projects/error-handler/package.json                           
npm notice 1.0kB projects/error-handler/README.md                              
npm notice 669B  projects/error-handler/src/lib/error-handler.component.spec.ts
npm notice 284B  projects/error-handler/src/lib/error-handler.component.ts     
npm notice 273B  projects/error-handler/src/lib/error-handler.module.ts        
npm notice 388B  projects/error-handler/src/lib/error-handler.service.spec.ts  
npm notice 141B  projects/error-handler/src/lib/error-handler.service.ts       
npm notice 183B  projects/error-handler/src/public-api.ts                      
npm notice 781B  projects/error-handler/src/test.ts                            
npm notice 540B  projects/error-handler/tsconfig.lib.json                      
npm notice 230B  projects/error-handler/tsconfig.lib.prod.json                 
npm notice 309B  projects/error-handler/tsconfig.spec.json                     
npm notice 247B  projects/error-handler/tslint.json                            
npm notice 911B  tsconfig.json                                                 
npm notice 3.0kB tslint.json                                                   
npm notice === Tarball Details === 
npm notice name:          angular-workspace                       
npm notice version:       0.0.0                                   
npm notice filename:      angular-workspace-0.0.0.tgz             
npm notice package size:  5.1 kB                                  
npm notice unpacked size: 14.8 kB                                 
npm notice shasum:        8a96bd2271da546b128620d4c653651260ddc644
npm notice integrity:     sha512-UgCjKya4h+/SU[...]3WpCAyDwUUOIA==
npm notice total files:   21                                      
npm notice 
npm ERR! code ENEEDAUTH
npm ERR! need auth This command requires you to be logged in.
npm ERR! need auth You need to authorize this machine using `npm adduser`

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/user/.npm/_logs/2021-09-18T04_26_59_995Z-debug.log
user@buildmotion-pro angular-workspace % 
```

### Fix 3: TSConfig with `enableIvy": false`

Add and set the `enableIvy` attribute of the `angularCompilerOptions` to *false*.

```json
  "angularCompilerOptions": {
    "skipTemplateCodegen": true,
    "strictMetadataEmit": true,
    "enableResourceInlining": true,
    "enableIvy": false
  },
```

You can build your library project. The output of the `package.json` file will not include the `prepublishOnly` script item.

```json
{
  "name": "error-handler",
  "version": "0.0.1",
  "peerDependencies": {
    "@angular/common": "^11.2.14",
    "@angular/core": "^11.2.14"
  },
  "dependencies": {
    "tslib": "^2.0.0"
  },
  "main": "bundles/error-handler.umd.js",
  "module": "fesm2015/error-handler.js",
  "es2015": "fesm2015/error-handler.js",
  "esm2015": "esm2015/error-handler.js",
  "fesm2015": "fesm2015/error-handler.js",
  "typings": "error-handler.d.ts",
  "metadata": "error-handler.metadata.json",
  "sideEffects": false
}
```

Run the `npm publish` command in the output folder of the build (e.g., `dist/error-handler`).

```ts
npm publish
npm notice 
npm notice 📦  error-handler@0.0.1
npm notice === Tarball Contents === 
npm notice 1.0kB README.md                             
npm notice 2.5kB bundles/error-handler.umd.js          
npm notice 1.8kB bundles/error-handler.umd.js.map      
npm notice 1.1kB bundles/error-handler.umd.min.js      
npm notice 1.4kB bundles/error-handler.umd.min.js.map  
npm notice 121B  error-handler.d.ts                    
npm notice 176B  error-handler.d.ts.map                
npm notice 1.3kB error-handler.metadata.json           
npm notice 508B  esm2015/error-handler.js              
npm notice 1.3kB esm2015/lib/error-handler.component.js
npm notice 1.4kB esm2015/lib/error-handler.module.js   
npm notice 1.2kB esm2015/lib/error-handler.service.js  
npm notice 808B  esm2015/public-api.js                 
npm notice 1.4kB fesm2015/error-handler.js             
npm notice 1.8kB fesm2015/error-handler.js.map         
npm notice 199B  lib/error-handler.component.d.ts      
npm notice 269B  lib/error-handler.component.d.ts.map  
npm notice 94B   lib/error-handler.module.d.ts         
npm notice 189B  lib/error-handler.module.d.ts.map     
npm notice 115B  lib/error-handler.service.d.ts        
npm notice 193B  lib/error-handler.service.d.ts.map    
npm notice 506B  package.json                          
npm notice 176B  public-api.d.ts                       
npm notice 207B  public-api.d.ts.map                   
npm notice === Tarball Details === 
npm notice name:          error-handler                           
npm notice version:       0.0.1                                   
npm notice filename:      error-handler-0.0.1.tgz                 
npm notice package size:  5.6 kB                                  
npm notice unpacked size: 19.7 kB                                 
npm notice shasum:        a406cff279c3971a8c74baa0c10ff86ff3dc28c8
npm notice integrity:     sha512-tWrd3/ezjvOhD[...]V9DLTFc+aPJYg==
npm notice total files:   24                                      
npm notice 
npm ERR! code ENEEDAUTH
npm ERR! need auth This command requires you to be logged in.
npm ERR! need auth You need to authorize this machine using `npm adduser`
```