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
