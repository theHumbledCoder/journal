export default function ImageSlot({ src, alt = '', placeholder = 'Image', className = '', style, circle = false }) {
  const cls = ['image-slot', circle ? 'image-slot--circle' : '', className].filter(Boolean).join(' ')
  return (
    <div className={cls} style={style}>
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <span className="image-slot__placeholder">{placeholder}</span>
      )}
    </div>
  )
}
