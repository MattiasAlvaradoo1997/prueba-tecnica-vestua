# Enunciado 1

> Estás subiendo una escalera de N peldaños. En cada momento, puedes subir 1 o 2 peldaños. ¿En cuántas formas diferentes puedes subir las escalera?

# Razonamiento

Teniendo N como el número de peldaños, llamaremos F(N) al número de formas en las que pueden subir la escalera de N peldaños.
Si se analizan algunos casos:

      _
    _|
  _|
_|

F(0) = 0      (No hay forma de subir si no existen peldaños)
F(1) = 1
F(2) = 2
F(3) = 3
F(4) = 5
F(5) = 8
F(6) = 13
...
F(N) = F(N-1) + F(N-2)    (Se observa un patrón que describe la secuencia de Fibonacci)