import { useState, useEffect } from 'react'

const ACCENTS = {
  rust:  { light: '#b8543a', dark: '#e08866' },
  blue:  { light: '#2563b8', dark: '#7aa9f0' },
  green: { light: '#1f7a4f', dark: '#5fbe8a' },
  plum:  { light: '#7a3a6e', dark: '#c481b4' },
  ink:   { light: '#1a1814', dark: '#f1ebdb' },
}

const DEFAULT = {
  hubSize: 540,
  accent: 'rust',
  showDivider: true,
  showFeatured: true,
  revealAnimations: true,
}

export default function TweaksPanel({ open, onClose, onChange }) {
  const [t, setT] = useState(DEFAULT)

  function set(key, value) {
    const next = { ...t, [key]: value }
    setT(next)
    onChange?.(next)
  }

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--hub-size', t.hubSize + 'px')
    const a = ACCENTS[t.accent] ?? ACCENTS.rust
    root.style.setProperty('--accent-light', a.light)
    root.style.setProperty('--accent-dark', a.dark)
  }, [t])

  // Listen for parent frame messages (edit-mode protocol)
  useEffect(() => {
    const handler = e => {
      if (e.data?.type === '__activate_edit_mode') onClose?.('open')
      if (e.data?.type === '__deactivate_edit_mode') onClose?.('close')
    }
    window.addEventListener('message', handler)
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*') } catch {}
    return () => window.removeEventListener('message', handler)
  }, [onClose])

  function close() {
    onClose?.()
    try { window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*') } catch {}
  }

  return (
    <aside className={`tweaks-panel${open ? ' open' : ''}`} aria-hidden={!open}>
      <div className="t-header">
        <span className="t-title">Tweaks</span>
        <button className="t-close" onClick={close} aria-label="Close tweaks">×</button>
      </div>

      <div className="t-row">
        <div className="t-label">
          <span>Hub size</span>
          <span className="t-val">{t.hubSize} px</span>
        </div>
        <input
          type="range" min="380" max="640" step="10" value={t.hubSize}
          onChange={e => set('hubSize', +e.target.value)}
        />
      </div>

      <div className="t-row">
        <div className="t-label"><span>Accent</span><span className="t-val">{t.accent}</span></div>
        <div className="t-swatches">
          {Object.entries(ACCENTS).map(([name, colors]) => (
            <button
              key={name}
              className={`t-swatch${t.accent === name ? ' active' : ''}`}
              style={{ background: colors.light }}
              aria-label={name}
              onClick={() => set('accent', name)}
            />
          ))}
        </div>
      </div>

      <div className="t-row">
        <label className="t-toggle">
          <input type="checkbox" checked={t.showDivider} onChange={e => set('showDivider', e.target.checked)} />
          <span className="t-switch" />
          <span>Vertical divider</span>
        </label>
      </div>

      <div className="t-row">
        <label className="t-toggle">
          <input type="checkbox" checked={t.showFeatured} onChange={e => set('showFeatured', e.target.checked)} />
          <span className="t-switch" />
          <span>Featured thought</span>
        </label>
      </div>

      <div className="t-row">
        <label className="t-toggle">
          <input type="checkbox" checked={t.revealAnimations} onChange={e => set('revealAnimations', e.target.checked)} />
          <span className="t-switch" />
          <span>Scroll reveal animations</span>
        </label>
      </div>
    </aside>
  )
}
