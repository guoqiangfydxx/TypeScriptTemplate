import React from 'react'

interface Card {
    suit: string,
    card: number
}

interface  Desk {
    suits: string[],
    cards: number[],
    createCardPicker(this: Desk): () => Card
}

let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x: number): { suit: string, card: number}
function pickCard(x: { suit: string, card: number}[]) : number
function pickCard(x: any): any {
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

class TestFunc extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {

        }
    }

    myAdd = (x: number, y: number) : number => {
        return (x + y)
    }

    buildName = (firstName: string, lastName: string):string => {
        return firstName + ' ' + lastName
    }

    buildName1 = (firstName: string, lastName?: string): string => {
        if (lastName) {
            return firstName + ' ' + lastName
        } else {
            return firstName
        }
    }

    buildName3 = (firstName = 'will', lastName: string): string => {
        return firstName + ' ' + lastName
    }

    buildName4 = (firstName: string, ...restNames: string[]): string => {
        return firstName + restNames.join('')
    }

    render() {
        console.log('为函数增加定义类型')
        console.log(this.myAdd(89208.52934, 989.53353))

        console.log('可选参数和默认参数')
        // this.buildName('tom')
        // this.buildName('tom', 'ief', 'usjd')
        // 默认ts认为你传入的参数和定义的参数是一样的，不能少也不能多参数
        console.log(this.buildName('udsodo', '48fjisi'))

        console.log(this.buildName1('tom'))
        console.log(this.buildName1('umsifmjsfs', 'iwkdfndj'))
        // console.log(this.buildName1('fuussd', 'fiskfsf', 'fsf'))

        console.log(this.buildName3('Bob', 'Adams'))
        console.log(this.buildName3(undefined, 'fidfisk'))

        console.log('剩余函数')
        console.log('fismfjsofns', 'roepekfe', 'fiksjff', '03okidnsjfk s')

        console.log('this')

        let deck: Desk = {
            suits: ["hearts", "spades", "clubs", "diamonds"],
            cards: Array(52),
            createCardPicker: function(this: Desk) {
                // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
                return () => {
                    let pickedCard = Math.floor(Math.random() * 52);
                    let pickedSuit = Math.floor(pickedCard / 13);
        
                    return {suit: this.suits[pickedSuit], card: pickedCard % 13};
                }
            }
        }
        
        let cardPicker = deck.createCardPicker();
        let pickedCard = cardPicker();
        
        console.log("card: " + pickedCard.card + " of " + pickedCard.suit)

        console.log('函数重载')
        console.log(pickCard(15))
        let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
        console.log(pickCard(myDeck))
        return <div>函数</div>
    }
}
export default TestFunc