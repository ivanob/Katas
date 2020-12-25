import { Item } from "./Item";

export class BackstagePassItem extends Item{
    updateQuality(): void {
        this.sellIn = this.sellIn - 1;
        if (this.quality < 50) {
            this.quality = this.quality + 1
            if (this.sellIn < 11) {
                if (this.quality < 50) {
                    this.quality = this.quality + 1
                }
            }
            if (this.sellIn < 6) {
                if (this.quality < 50) {
                    this.quality = this.quality + 1
                }
            }
        }
        if(this.sellIn < 0){
            this.quality = this.quality - this.quality
        }
    }
}