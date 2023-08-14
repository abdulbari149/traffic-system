export const convertDate = (date) => {
  let new_date = new Date(date)
  let str = new_date.getDate()
  let month = new_date.getMonth()
  console.log({ str, month })
}