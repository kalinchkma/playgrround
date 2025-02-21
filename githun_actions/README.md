# github actions  


#### Events

* Github triggered events: push, pull_request, public etc
* Scheduled events: schedule etc
* Manually triggered: workflow_dispatch (external) etc

Demo worflow for nodejs
```bash
name: worflow_name

on: [push]

jobs:
    build:
        runs-on: ${{ matrix.os }}

        strategy:
            matrix:
                node-version: [8.x, 10.x, 12.x]
                os: [macos-latest, windows-latest, ubuntu-18.04]
        
        steps:
        - uses: actions/checkout@v1
        - name: Use Node.js ${{ matrix.node-version }}
          uses: actions/setup-node@v1
          with:
            node-version: ${{ matrix.node-version }}
        - name: npm install, build, and test
          run: |
            npm ci
            npm run build --if-present
            npm test
          env:
            CI: true
```

here `actions/checkout@v1`, `actions` is a github user name, `checkout` is a public repo name where actions are written in `*.yml` format and `@v1` is a tag