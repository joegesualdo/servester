## Servester
> Quickly setup servers and asset pipelines.

## Why?
Sometimes you just want to write language specific code and not have to deal with setting up an asset pipeline. That's where Servester comes in.
#### Example
Start writing and previewing Reactjs within 10 seconds. No more setting up browserify.

## Install
```
$ npm install -g servester
```

## Usage
```
$ servester [applicationType] [applicationName]
```
See supported [application types](#application-types).


## Example
1. Create application
```
$ servester react my-react-app
```
2. Run Server
```
$ cd my-react-app 
```
```
$ npm start 
```
3. Confirm server is running at [localhost:8080/index.html](http://localhost:8080/index.html)
4. Write Reactjs code in `my-react-app/src/scripts/app.jsx`
5. See your changes at  [localhost:8080/index.html](http://localhost:8080/index.html)

## <a name="application-types"></a>Supported Application Types
### Reactjs 
> Creates application structure and server for Reactjs
```
$ servester react my-react-app
```

### Static 
> Creates application structure and server for static files (E.g html, js, css, etc)

```
$ servester static my-react-app
```
