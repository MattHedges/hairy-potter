import { makePottery } from './PotteryWheel.js'
import {firePottery } from './Kiln.js'
import {toSellOrNotToSell} from './PotteryCatalog.js'
import { PotteryList } from './PotteryList.js'

// Make 5 pieces of pottery at the wheel
let mug = makePottery('mug', 4, 5)
let vase = makePottery('vase', 10, 100)
let hashPipe = makePottery('hashPipe', 20, 20)
let bong = makePottery('bong', 100, 100)
let toilet = makePottery('toilet', 5, 4)



// Fire each piece of pottery in the kiln
mug = firePottery(mug, 700)
vase = firePottery(vase, 1000)
hashPipe = firePottery(hashPipe, 1500)
bong = firePottery(bong, 1200)
toilet = firePottery(toilet, 5000)



// Determine which ones should be sold, and their price
mug = toSellOrNotToSell(mug)
vase = toSellOrNotToSell(vase)
hashPipe = toSellOrNotToSell(hashPipe)
bong = toSellOrNotToSell(bong)
toilet = toSellOrNotToSell(toilet)
console.log(mug)

// Invoke the component function that renders the HTML list
mug = PotteryList(mug)
console.log(mug)
vase = PotteryList(vase)
console.log(vase)
hashPipe = PotteryList(hashPipe)
console.log(hashPipe)
bong = PotteryList(bong)
console.log(bong)
toilet = PotteryList(toilet)
console.log(toilet)

