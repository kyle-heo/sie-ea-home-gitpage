/**
 * GitHub Pages 및 다양한 호스팅 환경에서 정적 에셋 경로를 안전하게 해석하는 유틸리티
 */
export function getAssetUrl(path) {
  if (!path) return ''
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path
  }

  const base = import.meta.env.BASE_URL || '/'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  const cleanPath = path.startsWith('/') ? path.slice(1) : path

  return `${normalizedBase}${cleanPath}`
}

export default getAssetUrl
