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
            switch(this.items[i].name){
                case TypeItem.AGED_BRIE:
                    this.items[i].sellIn = this.items[i].sellIn - 1;
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1
                    }
                    if (this.items[i].sellIn < 0) {
                        if (this.items[i].quality < 50) {
                            this.items[i].quality = this.items[i].quality + 1
                        }
                    }
                    break;
                case TypeItem.BACKSTAGE_PASS:
                    this.items[i].sellIn = this.items[i].sellIn - 1;
                    if (this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1
                        if (this.items[i].sellIn < 11) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                        if (this.items[i].sellIn < 6) {
                            if (this.items[i].quality < 50) {
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                    }
                    if(this.items[i].sellIn < 0){
                        this.items[i].quality = this.items[i].quality - this.items[i].quality
                    }
                    break;
                case TypeItem.SULFURAS:
                    break;
                default:
                    if (this.items[i].quality > 0) {
                        this.items[i].quality = this.items[i].quality - 1
                    }
                    if (this.items[i].sellIn < 0) {
                        this.items[i].quality = this.items[i].quality - 1
                    }
                    this.items[i].sellIn = this.items[i].sellIn - 1;
                    break;
            }
        }

        return this.items;
    }
}
