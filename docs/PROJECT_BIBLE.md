# Character Studio

**Version:** v0.1.0

## Vision

Character Studio is a browser-based 3D character customization application designed around modular assets. Users can assemble characters from interchangeable parts, customize their appearance, and export the final result as a printable STL file.

## Primary Objectives

- Modular character system
- Browser-based real-time 3D rendering
- Shared skeleton architecture
- Body customization through morph targets
- Printable STL export
- Scalable asset pipeline

## Technology Stack

### Frontend

- React
- TypeScript
- React Three Fiber
- Three.js
- Drei
- Zustand
- Tailwind CSS

### 3D Assets

- Blender
- glTF / GLB

### Backend (Future)

- Node.js
- NestJS
- PostgreSQL
- Prisma

### Export Pipeline

- Python
- trimesh
- PyMeshLab

## Repository Structure

character-studio/
├── app/
├── assets/
├── blender/
├── docs/
├── exports/
└── tools/