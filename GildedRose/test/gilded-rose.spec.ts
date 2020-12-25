import { expect } from 'chai';
import { GildedRose, TypeItem } from '../app/gilded-rose';
import { Item } from '../app/Item';
import { AgedBrieItem } from '../app/AgedBrieItem';
import { SulfurasItem } from '../app/SulfurasItem';
import { BackstagePassItem } from '../app/BackstagePassItem';

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });

    it('should decrease the SellIn value after one update if item is default', function() {
        const gildedRose = new GildedRose([ new Item('test1', 1, 0), new Item('test2', 0, 0), new Item('test3', 10, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(0);
        expect(items[1].sellIn).to.equal(-1);
        expect(items[1].quality).to.equal(0);
        expect(items[2].sellIn).to.equal(9);
        expect(items[2].quality).to.equal(0);
    });

    it('`Aged Brie` should decrease the SellIn by 1 and increase the value by 1', function() {
        const gildedRose = new GildedRose([ new AgedBrieItem(TypeItem.AGED_BRIE, 1, 0), new AgedBrieItem(TypeItem.AGED_BRIE, 0, 0), new AgedBrieItem(TypeItem.AGED_BRIE, 10, 0),
            new AgedBrieItem(TypeItem.AGED_BRIE, 10, 49), new AgedBrieItem(TypeItem.AGED_BRIE, 10, 50) ]);
        const items = gildedRose.updateQuality();
        expect([items[0].sellIn, items[0].quality]).to.have.same.members([0, 1]);
        expect([items[1].sellIn, items[1].quality]).to.have.same.members([-1, 2]);
        expect([items[2].sellIn, items[2].quality]).to.have.same.members([9, 1]);
        expect([items[3].sellIn, items[3].quality]).to.have.same.members([9, 50]);
        expect([items[4].sellIn, items[4].quality]).to.have.same.members([9, 50]);
    });

    it('`Sulfuras` should not be modified with the updates', function() {
        const gildedRose = new GildedRose([ new SulfurasItem(TypeItem.SULFURAS, 1, 0), new SulfurasItem(TypeItem.SULFURAS, 0, 0), new SulfurasItem(TypeItem.SULFURAS, 10, 0)]);
        const items = gildedRose.updateQuality();
        expect([items[0].sellIn, items[0].quality]).to.have.same.members([1, 0]);
        expect([items[1].sellIn, items[1].quality]).to.have.same.members([0, 0]);
        expect([items[2].sellIn, items[2].quality]).to.have.same.members([10, 0]);
    });

    it('`Backstage passes` Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert', function() {
        const gildedRose = new GildedRose([ new BackstagePassItem(TypeItem.BACKSTAGE_PASS, 1, 0), new BackstagePassItem(TypeItem.BACKSTAGE_PASS, 0, 0), new BackstagePassItem(TypeItem.BACKSTAGE_PASS, 10, 0),
            new BackstagePassItem(TypeItem.BACKSTAGE_PASS, 15, 20), new BackstagePassItem(TypeItem.BACKSTAGE_PASS, 10, 49), new BackstagePassItem(TypeItem.BACKSTAGE_PASS, 5, 49)]);
        const items = gildedRose.updateQuality();
        expect([items[0].sellIn, items[0].quality]).to.have.same.members([0, 3]);
        expect([items[1].sellIn, items[1].quality]).to.have.same.members([-1, 0]);
        expect([items[2].sellIn, items[2].quality]).to.have.same.members([9, 2]);
        expect([items[3].sellIn, items[3].quality]).to.have.same.members([14, 21]);
        expect([items[4].sellIn, items[4].quality]).to.have.same.members([9, 50]);
        expect([items[5].sellIn, items[5].quality]).to.have.same.members([4, 50]);
    });

});
