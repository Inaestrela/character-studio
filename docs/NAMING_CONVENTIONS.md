# 4. Naming Conventions

## Asset Files

```
category_variant_id.glb
```

Examples

```
body_base_01.glb
head_m_01.glb
hair_short_01.glb
top_casual_01.glb
```

---

## Attachment Points

```
socket_neck
socket_waist
socket_hip
socket_feet
```

---

## Morph Targets

```
morph_body_height
morph_body_weight
morph_body_muscle
```

---

## Character Configuration

```
character_<UUID>.json
```

Contains:

- Selected parts
- Colors
- Morph values
- Pose

---

## Export Files

```
<UUID>_<timestamp>.glb
<UUID>_<timestamp>.stl
```

---

## Code Naming

### Components

```
CharacterViewer
PartSelector
ColorPicker
```

### Variables

```
selectedHead
characterId
morphValues
```

### Files

```
character-viewer.tsx
asset-registry.ts
```

---