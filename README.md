# BOILERPLATE-PUG-SASS-JS

A boilerplate with pug sass and js

#### INSTALLATION

```
npm install
```

### DIRECTORY STRUCTURE

``` ruby

+-- README.md // DOCUMENTAION
+-- gulp.config.js // ADD GULP CONFIGURATION HERE
+-- pug.config.json // ADD PUG CONFIGURATION HERE
+-- assets
+-- develop
    +-- images
    +-- js
    ¦   +-- main.js
    +-- pug_files
    ¦		+-- includes
    ¦		¦		+-- nav-main.pug
    ¦		¦		...
    ¦		+-- templates
    ¦		¦		+-- home.pug
    ¦		¦		...
    ¦   +-- index.pug
    ¦		¦		...
    +-- sass
    ¦		+-- base
    ¦		¦		+-- base.sass
    ¦		+-- components
    ¦		¦		+-- components.sass
    ¦		+-- layouts
    ¦		¦		+-- layouts.sass
    ¦		+-- plugins
    ¦		¦		+-- plugin1
    ¦		¦		+-- plugin2
    ¦		¦		+-- ...
    ¦		¦		+-- plugins.sass
    ¦       +-- custom
    ¦       ¦       +-- custom.scss // ADD CUSTOM CSS HERE, USE EITHER SASS OR CSS SYNTAX
    ¦   +-- main.asss

```

### COMMANDS AND USAGE

#### DEVELOPMENT ENVIRONMENT:

**Run app**
```
gulp 
```
**Run server**
```
gulp server
```

**Build all assets**
```
gulp build
```

**Build HTML files**
```
gulp build:pug

```
**Build CSS files**
```
gulp build:sass
```

**Build JS files**
```
gulp build:js
```

**Copy other assets**
```
gulp copy:assets
```

#### PRODUCTION ENVIRONMENT:

Suffix `--type prod` this to above commands to run under production environment. Example below:

```
gulp --type prod
```