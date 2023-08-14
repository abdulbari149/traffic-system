export const useGenerateRandomUniqueNumber = (length) => {
  return ((new Date().valueOf()).toString() + Math.random().toString().replace(".", "")).substring(0, length)
}