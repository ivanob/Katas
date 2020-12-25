import { Item } from './Item'

export enum TypeItem {
    AGED_BRIE = 'Aged Brie',
    BACKSTAGE_PASS = 'Backstage passes to a TAFKAL80ETC concert',
    SULFURAS = 'Sulfuras, Hand of Ragnaros'
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].updateQuality();
        }
        return this.items;
    }
}
