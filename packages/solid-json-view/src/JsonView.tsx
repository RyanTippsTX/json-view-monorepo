import { Accessor, Show, createMemo } from 'solid-js';
import { Classes, TreeView } from './TreeView';
import { analyzeJson } from 'json-utils';

export function JsonView(props: { jsonString: Accessor<string>; classes?: Classes }) {
  const analysis = createMemo(() => analyzeJson(props.jsonString()));

  const node = analysis().tree;

  return (
    <Show when={node}>
      <TreeView node={node!} classes={props.classes} />
    </Show>
  );
}
