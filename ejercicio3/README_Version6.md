# ➗ Examen Computación Visual - Tercer Punto

Repositorio: [andres456s/examen-computacion-visual--AndresPati-o](https://github.com/andres456s/examen-computacion-visual--AndresPati-o)

---

## 📂 Carpeta: `ejercicio3/`

### Archivo principal:
- `3erPunto.ipynb`

---

## 📋 Descripción General

Este notebook implementa de manera práctica el concepto de **convolución 1D**, fundamental en procesamiento de señales y visión computacional. Realiza la convolución de una señal discreta con un kernel definido por el usuario y visualiza el proceso y los resultados.

---

## 🧑‍💻 Principales librerías utilizadas

- `numpy`: Manejo de arrays numéricos
- `matplotlib`: Visualización de señales y resultados

---

## 📝 Descripción de las etapas

1. **Definición de la señal de entrada**
   - Se crea una lista de valores enteros que representa la señal a procesar.
2. **Definición del kernel**
   - Se utiliza un kernel simple de tamaño 3, por ejemplo `[1, 0, -1]`. Puedes modificarlo por otros (como promedios).
3. **Implementación de la convolución 1D**
   - Se desarrolla una función desde cero que aplica padding y realiza la operación de convolución.
4. **Cálculo y visualización**
   - Se calcula la señal resultante y se grafican: la señal original, el kernel y la señal convolucionada, todo en un mismo canvas.

---

## 📊 Ejemplo de salida

- Gráfica múltiple mostrando:
  - Señal de entrada
  - Kernel
  - Resultado de la convolución

(*Las imágenes generadas se muestran directamente en el notebook al ejecutar las celdas*)

---

## 💡 Notas importantes

- Puedes cambiar los valores de la señal y del kernel para experimentar con distintos efectos.
- El kernel `[1, 0, -1]` es típico para detección de bordes en señales.

---

## 📃 Autor

- Andres Patiño  
- Examen de Computación Visual

---