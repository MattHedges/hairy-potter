import { usePottery } from './PotteryCatalog.js'

export const PotteryList = () => {
    const Pottery = usePottery()
    let HTMLPottery = ""
    for (const stuff of Pottery) {
    HTMLPottery += `<section class="pottery" id="pottery--${stuff.id}">`
    HTMLPottery += `<h2 class="pottery__shape">${stuff.shape}</h2>`
    HTMLPottery += `<div class="pottery__properties">Item weighs ${stuff.weight} grams and is ${stuff.height} cm in height</div>`
    HTMLPottery += `<div class="pottery__price">Price is $${stuff.price}</div>`
    HTMLPottery += `</section>`
    }
    return HTMLPottery
}