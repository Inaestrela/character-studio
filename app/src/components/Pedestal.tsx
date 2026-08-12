function Pedestal() {
  return (
    <mesh position={[0, -0.7, 0]}>
      {/* Figurine base */}
      <cylinderGeometry args={[1.2, 1.2, 0.3, 32]} />
      <meshStandardMaterial color="#222222" />
    </mesh>
  )
}

export default Pedestal