export const getAssetURL = (image) => {
  // 相对路径这个位置@不能写，当前路径你的url
  return new URL(`../assets/img/${image}`, import.meta.url).href
}

