interface IdLabel {
  id: number /* some fields */;
}

interface NameLabel {
  name: string /* other fields */;
}
 
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(nameOrId: T): NameOrId<T> {
  throw "unimplemented";
}

createLabel(1).id; // OK
createLabel('string').name; // OK