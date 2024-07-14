export const formatNumberWithDots = (num: number | string): string => {
    const strNum = num.toString()
    return strNum.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}