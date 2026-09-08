export const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800';

export const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
  const img = event.currentTarget;
  if (img.src !== FALLBACK_IMAGE) {
    img.onerror = null;
    img.src = FALLBACK_IMAGE;
  }
};