# 🟫 Pirámide PBR 3D en React con @react-three/fiber

Visualiza una **pirámide de cajas** con materiales PBR (Physically Based Rendering) usando React, [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/), y [@react-three/drei](https://docs.pmnd.rs/react-three-drei/). Cada caja renderiza texturas avanzadas de roca (color, normal, roughness) y la escena incluye iluminación realista, sombras y controles de órbita.

---

## 🚀 ¿Qué muestra este proyecto?

- Una pirámide hecha de cubos apilados (4 niveles por defecto).
- Cada cubo utiliza **materiales PBR**: mapa de color, de normales y de rugosidad.
- Texturas de ejemplo: `Rock055_1K-JPG` (de ambientcg.com u otra fuente PBR).
- Iluminación ambiental y direccional, con sombras realistas.
- Suelo plano con material rugoso.
- Controles de cámara interactivos (rotar, hacer zoom, mover).

---

## 📦 Estructura del código

- **App**: Crea el `<Canvas>` 3D y monta la escena: luces, suelo, pirámide, controles.
- **Pyramid**: Genera y posiciona los cubos de cada nivel para formar la pirámide.
- **PBRBox**: Cada cubo usa `meshStandardMaterial` con mapas PBR.

---

## 🧩 Fragmento principal

```jsx
<Canvas shadows camera={{ position: [5, 5, 8], fov: 50 }}>
  <ambientLight intensity={0.4} />
  <directionalLight
    position={[5, 10, 5]}
    intensity={1.2}
    castShadow
    shadow-mapSize-width={1024}
    shadow-mapSize-height={1024}
  />
  <mesh
    receiveShadow
    rotation={[-Math.PI / 2, 0, 0]}
    position={[0, 0, 0]}
  >
    <planeGeometry args={[15, 15]} />
    <meshStandardMaterial color="#dadada" roughness={0.8} />
  </mesh>
  <Pyramid />
  <OrbitControls />
</Canvas>
```

---

## 🖼️ Texturas recomendadas

Coloca las siguientes imágenes en la carpeta `Rock055_1K-JPG/` (o cambia las rutas en el código):

- `Rock055_1K-JPG_Color.jpg`
- `Rock055_1K-JPG_NormalGL.jpg`
- `Rock055_1K-JPG_Roughness.jpg`

Descárgalas de [ambientCG](https://ambientcg.com/view?id=Rock055) o usa tus propias texturas PBR.

---

## ▶️ ¿Cómo correrlo?

1. Instala dependencias:
   ```bash
   npm install @react-three/fiber @react-three/drei three
   ```
2. Coloca las texturas en la carpeta adecuada.
3. Usa este código como tu componente principal en React (por ejemplo, `App.js`).
4. Inicia tu proyecto:
   ```bash
   npm start
   ```
5. ¡Interactúa con la escena 3D!

---

## 💡 Personaliza

- Cambia el número de niveles de la pirámide (`levels` en el componente `Pyramid`).
- Usa otros mapas PBR (metalness, displacement, etc).
- Ajusta la luz y el color del suelo para experimentar.

---

## 👨‍💻 Inspirado en

- [react-three-fiber](https://docs.pmnd.rs/react-three-fiber/)
- [ambientCG](https://ambientcg.com/)

---