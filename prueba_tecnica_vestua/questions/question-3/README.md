# Enunciado 3

> Implementar un método de verificación lógica de paréntesis. Es decir, implementar el método `parenthesisChecker(str)` que recibe un `string` como parámetro y devuelve un `boolean`. La respuesta del método debe ser `true` si la cadena de `string` es válida en términos de paréntesis (`( )`, `[ ]`, `{ }`), i.e. cada apertura de paréntesis se cierra correctamente. A continuación se muestran ejemplos de `string` válidos e inválidos.
> 
> **Ejemplos válidos**: la función debe devuelve `true`.
>
> - `parenthesisChecker('a * (b + c)')` → `true`
> - `parenthesisChecker('a * (b + c * [d])')` → `true`
> - `parenthesisChecker('[]{}()abc{([])}')` → `true`
>
> **Ejemplos válidos**: la función debe devuelve `false`.
>
> - `parenthesisChecker('(()')` → `false`
> - `parenthesisChecker('(([))')` → `false`
> - `parenthesisChecker('([)]')` → `false`

# Razonamiento

Para esto, implementé una variable var lista = [] para que contenga sólamente los paréntesis "()[]{}" i.e lista = ["(" ,"(" ,"}"]. Luego verifiqué si el string inicial empieza con un ")]}" o termina con un "([{" y si es así, retorna falso.

De lo contrario, el programa recorre el string de entrada de la función e implementa la lógica sólo cuando el encuentre algún paréntesis (y por lo tanto lo traspase a la lista):

- Si el elemento en el bucle es un paréntesis de entrada "([{", añade el elemento a la lista.
- Si el elemento es de cierre ")]}", primero verifica que la lista no esté vacía (si es así, retorna falso) y luego verifica que el cierre corresponda a su correspondiente entrada i.e: después de un "(", corresponde un ")" y no un "}". En caso contrario retorna falso. Si todo está en orden, elimina el último elemento de la lista.
- Finalmente, el programa retorna true si la lista está vacía (sin elementos) o false en caso contrario.