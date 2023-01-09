import {
    sortIntervals,
    writeGoodIntervals,
    removeOneInterval,
    createNewInterval,
    isOverlappedWithInterval,
    isIncludedInInterval,
    isBiggest,
    sumFinalIntervals,
    sumIntervals,
    unitInterval,
    isHimself
} from "./sumIntervals";

describe('sumIntervals', function(){

    it('sortIntervals :: should return [1, 2],[1, 4],[4, 6] with [1, 2],[4, 6],[1, 4]', function(){
        // GIVEN
        const intervals = [[1, 2],[4, 6],[1, 4]];
        const expected = [[1, 2],[1, 4],[4, 6]];
        // WHEN
        const sut = sortIntervals(intervals);
        // THEN
        expect(sut).toStrictEqual(expected);
    });

    it('sortIntervals :: should return [1, 2],[5, 4],[10, 6] with [1, 2],[10, 6],[5, 4]', function(){
        // GIVEN
        const intervals = [[1, 2],[10, 6],[1, 4]];
        const expected = [[1, 2],[1, 4],[10, 6]];
        // WHEN
        const sut = sortIntervals(intervals);
        // THEN
        expect(sut).toStrictEqual(expected);
    });

    it('sortIntervals :: should return [1,5], [1, 6], [5, 11], [10, 20], [16, 19]  with [1,5], [10, 20], [1, 6], [16, 19], [5, 11]', function(){
        // GIVEN
        const intervals = [[1,5], [10, 20], [1, 6], [16, 19], [5, 11]];
        const expected = [[1,5], [1, 6], [5, 11], [10, 20], [16, 19]];
        // WHEN
        const sut = sortIntervals(intervals);
        // THEN
        expect(sut).toStrictEqual(expected);
    });

    it('isHimself :: should return true with 1 and 2', function(){
        // GIVEN
        const indice1 = 1;
        const indice2 = 2;
        const expected = false;
        // WHEN
        const sut = isHimself(indice1, indice2);
        // THEN
        expect(sut).toBe(expected);
    });

    it('removeOneInterval :: should return [2, 3] with [1, 2, 3] and remove on 0', function(){
        // GIVEN
        const test = 0;
        const intervals = [1, 2, 3];
        const expected = [2, 3];
        // WHEN
        const sut = removeOneInterval(intervals, test);
        // THEN
        expect(sut).toStrictEqual(expected);
    });

    it('removeOneInterval :: should return [1, 2] with [1, 2, 3] and remove on 2', function(){
        // GIVEN
        const test = 2;
        const intervals = [1, 2, 3];
        const expected = [1, 2];
        // WHEN
        const sut = removeOneInterval(intervals, test);
        // THEN
        expect(sut).toStrictEqual(expected);
    });

    it('isOverlappedWithInterval :: should return false : [1,2] is not included in [2,5]', function(){
        // GIVEN
        const test = [1,2];
        const interval = [2, 5];
        const expected = false;
        // WHEN
        const sut = isOverlappedWithInterval(test, interval);
        // THEN
        expect(sut).toBe(expected);
    });

    it('isOverlappedWithInterval :: should return false : [1,2] is not included in [8,9]', function(){
        // GIVEN
        const test = [1,2];
        const interval = [8,9];
        // WHEN
        const sut = isOverlappedWithInterval(test, interval);
        // THEN
        expect(sut).toBe(false);
    });

    it('isOverlappedWithInterval :: should return true : [1,2] is included in [1,5]', function(){
        // GIVEN
        const test = [1,2];
        const interval = [1, 5];
        // WHEN
        const sut = isOverlappedWithInterval(test, interval);
        // THEN
        expect(sut).toBe(true);
    });

    it('isOverlappedWithInterval :: should return true : [3,5] is included in [2,7]', function(){
        // GIVEN
        const test = [3,5];
        const interval = [2,7];
        // WHEN
        const sut = isOverlappedWithInterval(test, interval);
        // THEN
        expect(sut).toBe(true);
    });

    it('isBiggest :: should return true : [1,5] is biggest than [1, 4]', function(){
        // GIVEN
        const test = [1,5];
        const interval = [1,4];
        const expected = true;
        // WHEN
        const sut = isBiggest(test, interval);
        // THEN
        expect(sut).toBe(expected);
    });

    it('isBiggest :: should return false : [1,5] is not biggest than [1, 6]', function(){
        // GIVEN
        const test = [1,5];
        const interval = [1,6];
        const expected = false;
        // WHEN
        const sut = isBiggest(test, interval);
        // THEN
        expect(sut).toBe(expected);
    });

    it('isBiggest :: should return false : [1,10] is biggest than [2, 6]', function(){
        // GIVEN
        const test = [1,10];
        const interval = [2,6];
        const expected = true;
        // WHEN
        const sut = isBiggest(test, interval);
        // THEN
        expect(sut).toBe(expected);
    });

    it('isIncludedInInterval :: should return true : [2,7] is included in [1,7]', function(){
        // GIVEN
        const test = [2,7];
        const interval = [1,7];
        const expected = true;
        // WHEN
        const sut = isIncludedInInterval(test, interval);
        // THEN
        expect(sut).toBe(expected);
    });

    it('isIncludedInInterval :: should return false : [2,7] is not included in [1,4]', function(){
        // GIVEN
        const test = [2,7];
        const interval = [1,4];
        const expected = false;
        // WHEN
        const sut = isIncludedInInterval(test, interval);
        // THEN
        expect(sut).toBe(expected);
    });

    it('isIncludedInInterval :: should return true : [1,7] is included in [1,7]', function(){
        // GIVEN
        const test = [2,1];
        const interval = [1,7];
        const expected = true;
        // WHEN
        const sut = isIncludedInInterval(test, interval);
        // THEN
        expect(sut).toBe(expected);
    });

    it('createNewInterval :: should return [1,5] with [1,2] [1,5]', function(){
        // GIVEN
        const interval1 = [1,2];
        const interval2 = [1,5];
        const expected = [1,5];
        // WHEN
        const sut = createNewInterval(interval1, interval2);
        // THEN
        expect(sut).toStrictEqual(expected);
    });

    it('createNewInterval :: should return [1,6] with [1,6] [1,5]', function(){
        // GIVEN
        const interval1 = [1,6];
        const interval2 = [1,5];
        const expected = [1,6];
        // WHEN
        const sut = createNewInterval(interval1, interval2);
        // THEN
        expect(sut).toStrictEqual(expected);
    });

    it('createNewInterval :: should return [1,5] with [2,5] [1,4]', function(){
        // GIVEN
        const interval1 = [2,5];
        const interval2 = [1,4];
        const expected = [1,5];
        // WHEN
        const sut = createNewInterval(interval1, interval2);
        // THEN
        expect(sut).toStrictEqual(expected);
    });

    it('writeGoodIntervals :: should return [1,7] with [1,4], [1,7]', function(){
        // GIVEN
        const intervals = [[1,4], [1,7]];
        const result = [[1,7]];
        // WHEN
        const sut = writeGoodIntervals(intervals);
        // THEN
        expect(sut).toStrictEqual(result);
    });

    it('writeGoodIntervals :: should return [1,7], [7,10] with [1,4], [7,10], [2,7]', function(){
        // GIVEN
        const intervals = [[1,4], [7,10], [2,7]];
        const result = [[1,7], [7,10]];
        // WHEN
        const sut = writeGoodIntervals(intervals);
        // THEN
        expect(sut).toStrictEqual(result);
    });

    it('writeGoodIntervals :: should return [1, 5] with intervals [1,5], [1, 5]', function(){
        // GIVEN
        const intervals = [[1,5], [1, 5]];
        const result = [[1,5]];
        // WHEN
        const sut = writeGoodIntervals(intervals);
        // THEN
        expect(sut).toStrictEqual(result);
    });

    it('unitInterval :: should return 4, the interval for [1,5]', function () {
        // GIVEN
        const test1 = [1,5];
        // WHEN
        const sut = unitInterval(test1);
        // THEN
        expect(sut).toBe(4);
    });

    it('sumIntervals :: should return 3, the interval for [1,4]', function(){
        // GIVEN
        const test1 = [[1,4]];
        // WHEN
        const sut = sumIntervals(test1);
        // THEN
        expect(sut).toBe(3);
    });

    it('sumIntervals :: should return 6, the interval sum for [1,5], [6, 8]', function(){
        // GIVEN
        const test1 = [[1,5], [6, 8]];
        // WHEN
        const sut = sumIntervals(test1);
        // THEN
        expect(sut).toBe(6);
    });

    it('sumIntervals :: should return 5, the interval sum for [1,5], [6, 7]', function(){
        // GIVEN
        const test1 = [[1,5], [6, 7]];
        // WHEN
        const sut = sumIntervals(test1);
        // THEN
        expect(sut).toBe(5);
    });

    it('sumIntervals :: should return 4, the interval sum for [1,5]', function(){
        // GIVEN
        const test = [[1,5]];
        // WHEN
        const sut = sumIntervals(test);
        // THEN
        expect(sut).toBe(4);
    });

    it('sumIntervals :: should return 8, the interval sum for [1,5],[6,10]', function(){
        // GIVEN
        const test = [[1,5],[6,10]];
        // WHEN
        const sut = sumIntervals(test);
        // THEN
        expect(sut).toBe( 8);
    });

    it('sumFinalIntervals :: should return 6, the interval sum for [1, 2], [2, 5], [5, 7]', function(){
        // GIVEN
        const test1 = [[1, 2], [2, 5], [5, 7]];
        const result = 6;
        // WHEN
        const sut = sumFinalIntervals(test1);
        // THEN
        expect(sut).toBe(result);
    });

    it('sumFinalIntervals :: should return 8, the interval sum for [1,5],[6,10]', function(){
        // GIVEN
        const test1 = [[1,5],[6,10]];
        const result = 8;
        // WHEN
        const sut = sumFinalIntervals(test1);
        // THEN
        expect(sut).toBe(result);
    });

    it('sumFinalIntervals :: should return 8, the interval sum for [1,4],[7, 10],[3, 5]', function(){
        // GIVEN
        const test1 = [[1,4],[7, 10],[3, 5]];
        const expected = 8;
        // WHEN
        const sut = sumFinalIntervals(test1);
        // THEN
        expect(sut).toBe(expected);
    });

    it('sumIntervals :: should return 8, the interval sum for [1,4],[7, 10],[3, 5]', function(){
        // GIVEN
        const test2 = [[1,4],[7, 10],[3, 5]];
        const expected = 7;
        // WHEN
        const sut2 = sumIntervals(test2);
        // THEN
        expect(sut2).toBe(expected);
    });

    it('sumIntervals :: should return 8, the interval sum for [1,5],[6,10]', function(){
        // GIVEN
        const test1 = [[1,5],[6,10]];
        // WHEN
        const sut1 = sumIntervals(test1);
        // THEN
        expect(sut1).toBe(8);
    });

    it('sumIntervals :: should return 4 with [1,5],[1,5]', function(){
        // GIVEN
        const test1 = [[1,5],[1,5]];
        // WHEN
        const sut1 = sumIntervals(test1);
        // THEN
        expect(sut1).toBe(4);
    });


    it('sumIntervals :: should return the correct sum for large intervals', function(){
        // GIVEN
        let intervals = [
            {intervals: [[-1e9, 1e9]], sum: 2e9},
            {intervals: [
                    [0, 20],
                    [-1e8, 10],
                    [30, 40]
                ], sum: 1e8 + 30}
        ];
        // WHEN THEN
        for(let i = 0; i < intervals.length; i++){
            expect(sumIntervals(intervals[i].intervals)).toBe(intervals[i].sum);
        }
    });
});
