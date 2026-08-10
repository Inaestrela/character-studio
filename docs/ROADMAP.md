# 2. Development Stages

---

## Stage 0 — Environment Setup

### Goal

Prepare the development environment.

### Technologies

- Git
- GitHub
- Node.js
- VS Code

### Deliverables

- Install required software
- Create GitHub repository
- Clone locally

---

## Stage 1 — Project Scaffold

### Goal

Create the React application.

### Technologies

- Vite
- React
- TypeScript
- React Three Fiber
- Drei

### Deliverables

- React project
- Dependencies installed
- Browser running
- Rotating cube

---

## Stage 2 — 3D Viewer

### Goal

Create the rendering environment.

### Technologies

- React Three Fiber
- Drei

### Deliverables

- Orbit controls
- Lighting
- Ground plane
- Character placeholder

---

## Stage 3 — Character Engine

### Goal

Build the modular swapping system.

### Technologies

- Zustand
- React Three Fiber

### Deliverables

- Placeholder body parts
- Asset Registry
- Character component
- Part swapping

---

## Stage 4 — Customization

### Goal

Build the customization interface.

### Technologies

- React
- Tailwind CSS

### Deliverables

- Sliders
- Color pickers
- Character state
- Placeholder scaling

---

## Stage 5 — Mesh Merge & Export

### Goal

Validate export before building assets.

### Technologies

- BufferGeometryUtils
- GLTFExporter
- STLExporter
- OBJExporter

### Deliverables

- Merge meshes
- Export GLB
- Export STL
- Export OBJ

---

## Stage 6 — Blender Asset Pipeline

### Goal

Replace placeholders with real assets.

### Technologies

- Blender
- glTF Exporter

### Deliverables

- Modular character
- Shape keys
- Shared attachment points
- Exported GLB assets

---

## Stage 7 — Real Asset Integration

### Goal

Connect Blender assets to the application.

### Technologies

- useGLTF
- Zustand

### Deliverables

- Load real models
- Morph targets
- Material colors
- Export working character

---

## Stage 8 — Print Copy Storage

### Goal

Store exported characters.

### Technologies

- Serverless Function
- Object Storage

### Deliverables

- Generate Character ID
- Upload exported mesh
- Store metadata

---

## Stage 9 — Polish & Deploy

### Goal

Prepare the MVP for public use.

### Technologies

- Tailwind CSS
- Vercel / Netlify

### Deliverables

- Final UI
- Loading indicators
- Browser testing
- Deployment

---

# 3. Future Feature — Static Poses

Static poses will be added after the MVP.

Characteristics:

- Bone-based posing
- No animation playback
- No animation blending
- Pose presets only

Examples:

- Standing
- Combat
- Sitting

---