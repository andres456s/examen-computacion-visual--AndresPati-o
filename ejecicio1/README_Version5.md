# 🖼️ Examen Computación Visual - Primer Punto

Repositorio: [andres456s/examen-computacion-visual--AndresPati-o](https://github.com/andres456s/examen-computacion-visual--AndresPati-o)

---

## 📂 Carpeta: `ejecicio1/`

### Archivo principal:
- `1erPunto.ipynb`

---

## 📋 Descripción General

Este notebook implementa un pipeline básico de procesamiento y análisis de imágenes, integrando técnicas clásicas y modernas de visión computacional:

1. **Lectura y preprocesamiento de imagen**
2. **Suavizado usando filtro Gaussiano**
3. **Detección de bordes con Canny**
4. **Detección de objetos usando YOLOv8**
5. **Visualización de cada etapa**

---

## 🚀 Guía Rápida de Uso

1. **Instalación de dependencias**  
   Ejecuta la celda:
   ```python
   #!pip install ultralytics opencv-python-headless matplotlib --quiet
   ```

2. **Carga y procesamiento de imagen**
   - Cambia la ruta de la variable `image_path` por la ruta de tu imagen:
     ```python
     image_path = "/content/image.jpg"  # <-- Cambia esto por la ruta de tu imagen
     ```

3. **Ejecución de las celdas**
   - El notebook mostrará:
     - Imagen original
     - Imagen suavizada (Gaussian Blur)
     - Detención de bordes (Canny)
     - Imagen con detección de objetos usando YOLOv8

---

## 🧑‍💻 Principales librerías utilizadas

- `opencv-python` (cv2): Procesamiento clásico de imágenes
- `matplotlib`: Visualización
- `numpy`: Manejo de arrays
- `ultralytics`: Uso de modelo YOLOv8 para detección de objetos

---

## 📝 Descripción de las etapas

1. **Lectura y suavizado**  
   Se lee la imagen y se aplica un filtro Gaussiano para reducir el ruido.
2. **Detección de bordes (Canny)**  
   Se detectan los bordes principales de la imagen.
3. **Visualización**  
   Se muestran las tres etapas (original, suavizada y bordes) en una sola figura.
4. **Detección de objetos con YOLOv8**  
   Se utiliza el modelo YOLOv8 "nano" para detectar objetos en la imagen y se guarda y visualiza el resultado con los bounding boxes.

---

## 📊 Ejemplo de salida

- Imagen original, suavizada y bordes:
  ![Ejemplo de visualización de etapas](#)
- Imagen con detección de objetos YOLOv8:
  ![Ejemplo de YOLOv8](#)

(*Las imágenes generadas se mostrarán en el notebook al ejecutar las celdas*)

---

## 💡 Notas importantes

- El modelo YOLOv8 se descarga automáticamente al ejecutar la celda correspondiente.
- Asegúrate de tener la imagen en la ruta correcta antes de ejecutar el notebook.
- Modifica la ruta de entrada según donde tengas tu imagen.

---

## 📃 Autor

- Andres Patiño
- Examen de Computación Visual

---