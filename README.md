# yaml-file

Simple YAML Read/Write to Files for NodeJS

## Installation

```bash
npm install yaml-file
```
or
```bash
yarn add yaml-file
```

## Usage

```javascript
import yaml from 'yaml-file'

const data = await yaml.read('path/to/data.yaml')
console.log(data)

await yaml.write('path/to/hello.yaml', { hello: 'world' })
```