const catalog = []


export const toSellOrNotToSell = (pottery) => {
    if (!pottery.cracked) {
        if (pottery.weight >= 6) {
            pottery.price = 40
        }
        else {
            pottery.price = 20
        }
        catalog.push(pottery)
    }
    return pottery
}
export const usePottery = () => {
    return catalog.map(basement => ({...basement}))
}

console.log(usePottery())