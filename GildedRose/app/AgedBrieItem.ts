import { Item } from "./Item";

export class AgedBrieItem extends Item{
    updateQuality(): void {
        this.sellIn = this.sellIn - 1;
        if (this.quality < 50) {
            this.quality = this.quality + 1
        }
        if (this.sellIn < 0) {
            if (this.quality < 50) {
                this.quality = this.quality + 1
            }
        }
    }
}