function solution(sizes) {
  sizes = sizes.map(([w, h]) => w > h ? [w, h] : [h, w]);
  
  const maxWidth = Math.max(...sizes.map(([w, _]) => w));
  const maxHeight = Math.max(...sizes.map(([_, h]) => h));
  
  return maxWidth * maxHeight;
}