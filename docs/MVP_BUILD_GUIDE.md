# Character Studio

**Version:** v0.1.0

**Document:** MVP Build Guide

Inspired by:

- Hero Forge
- TitanCraft
- LittleYou3D

---

# 0. MVP Scope

The objective of this MVP is to build a browser-based 3D character customizer that allows users to:

- Assemble a character from modular parts.
- Customize body shape using morph target sliders.
- Recolor character parts using shader-only colors (no texture maps).
- Download the merged character mesh.
- Optionally store a server-side copy for future 3D printing.

> **Note**
>
> Animation is **not** part of this project.
> The character will eventually support **static selectable poses only**.

---

## Product References

- https://titancraft.com/
- https://www.heroforge.com/
- https://www.littleyou3d.ca/

---

## Character Design Inspiration

- https://gigantic.store/20-flat-design-bodys/
- https://www.artstation.com/artwork/18Y5NZ

---

## In Scope

- One modular character
- Swappable parts
    - Head
    - Hair
    - Top
    - Bottom
    - Shoes
- Body morph sliders
- Shader-only color customization
- Client-side mesh merge
- GLB / OBJ / STL export
- Server-side storage hook for future print requests

---

## Out of Scope

The following are intentionally excluded from the MVP:

- Texture painting
- Decals
- Animation
- Large clothing libraries
- Multiple races/species
- User accounts
- Saved character library

---

## Build Strategy

The application architecture will be developed **before** creating production assets.

Development order:

1. Build the complete application using placeholder primitive meshes.
2. Validate:
    - Viewer
    - Part swapping
    - Morph sliders
    - Color customization
    - Mesh merge
    - Export
3. Replace placeholder geometry with real Blender assets.

This minimizes rework while designing the architecture.




# . Version Roadmap

| Version | Milestone |
|----------|-----------|
| v0.1.0 | Development Environment & Project Setup |
| v0.2.0 | 3D Viewer & Rendering Engine |
| v0.3.0 | Character Engine (Placeholder Assets) |
| v0.4.0 | Customization UI |
| v0.5.0 | Mesh Merge & Export |
| v0.6.0 | Blender Asset Pipeline |
| v0.7.0 | Real Asset Integration |
| v0.8.0 | Print Copy Storage |
| v0.9.0 | Polish & Deployment |
| v1.0.0 | Public MVP Release |
| v1.x | Static Pose Support |
| v2.x | Print Pipeline, Accounts & Database |