type Result<T> = T extends "value1" ? { id: number } : { id: string };

function func<T extends "value1" | "value2">(key: T, check: Result<T>) {
  console.log(key);
  console.log(check);
}

func("value1", { id: 123 }); // OK
func("value2", { id: "123" }); // OK
func("value2", { id: 123 }); // Error
