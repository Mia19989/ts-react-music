/** 数字格式化 - 超过十万添加万 */
export const formatCount = (count: number) => {
  if (count >= 100000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return count
  }
}

/** 图片资源拼接大小参数 */
export const getImageSize = (
  img: string,
  width: number,
  height: number = width
) => {
  return `${img}?param=${width}x${height}`
}
