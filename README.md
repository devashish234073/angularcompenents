In this project I will be adding angular custom components, for example starting with a tabbed pannel.

A panel like below:
![image](https://user-images.githubusercontent.com/20777854/75106285-c3bc1380-5640-11ea-8c03-73f901c40d75.png)
![image](https://user-images.githubusercontent.com/20777854/75106287-cc144e80-5640-11ea-9a7c-d4be88a0a13c.png)

Can be created using:
<!CDATA[[ panel height="190px" width="230px" meta="{'student details':'.s1','registration':'#s2','dummy':'#s3'}"></tabbedpanel> ]]>

where meta contains the tab names and the selector that those tab represents. Any div or elemnet with those selector will get associated with corresponsing tabs.

# Angularcomponents

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
