# case-innovea

This project queries the NewsAPI api and returns a list of various articles about NodeJs.
<br><br>
Return Structure:

```json
[  
  author: 'Matt Hargett',
  title: 'why is nodejs an old, unsupported version but clang is the latest bleeding edge version in 22.04.1?',
  description: 'Python, clang, and numerous other common development packages are very up to date, but nodejs is comically behind. why? is it due to a dependency on                 a problematic version of libv8, or..?'
  }
]
```

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\

### `yarn start`

Builds the app for production to the `build` folder.\ and runs the app in the production mode.

## Dockerfile

There is a docker file ready in case you want to run it in container
