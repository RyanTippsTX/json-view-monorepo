# solid-json-view

### Installation

```bash
npm install @ryantipps/solid-json-view
```

### Usage

```javascript
import { JsonView } from '@ryantipps/solid-json-view';

function SomeComponent() {
  return (
    <JsonView
      jsonString={jsonString} // input JSON string
      classes={{
        // optional, useful for colorizing data
        propertyName: 'text-slate-500',
        string: 'text-orange-500',
        number: 'text-purple-500',
        boolean: 'text-green-500',
        null: 'text-red-500',
        array: 'text-indigo-400',
        object: 'text-amber-300',
      }}
    />
  );
}
```
