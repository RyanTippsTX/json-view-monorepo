# JSON Utils

### Installation

```bash
npm install @ryantipps/json-utils
```

### Usage

```javascript
import { analyzeJson } from '@ryantipps/json-utils';

const jsonString = '{"foo": "bar"}';
const analysis = analyzeJson(jsonString);

// use as needed
analysis.status; // reflects if input string is valid JSON, invalid JSON, or empty
analysis.error; // error message from string parser
analysis.tree; // tree representation of the JSON
analysis.metadata; // words, lines, chars, tokens, size
```
