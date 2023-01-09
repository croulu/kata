import {
    writeGoodIntervals,
    writeNewIntervalOverlapped,
    isIntervalOverlappedInInterval,
    isIntervalIncludedInInterval,
    isInternalAlreadyExists,
    isTheSameInternal,
    sumFinalIntervals,
    sumIntervals,
    unitInterval
} from "./sumIntervals";

describe('sumIntervals', function(){

    it('sumIntervals :: should return 9 with [1,2], [6, 10], [11, 15]', function(){
        // GIVEN
        const interval = [[1,2], [6, 10], [11, 15]];
        const expected = 9;
        // WHEN
        const sut = sumIntervals(interval);
        // THEN
        expect(sut).toBe(expected);
    });

    it('sumIntervals :: should return 7 with [1,4], [7, 10], [3, 5]', function(){
        // GIVEN
        const interval = [[1,4], [7, 10], [3, 5]];
        const expected = 7;
        // WHEN
        const sut = sumIntervals(interval);
        // THEN
        expect(sut).toBe(expected);
    });

    it('sumIntervals :: should return 19 with [1,5], [10, 20], [1, 6], [16, 19], [5, 11]', function(){
        // GIVEN
        const interval = [[1,5], [10, 20], [1, 6], [16, 19], [5, 11]];
        const expected = 19;
        // WHEN
        const sut = sumIntervals(interval);
        // THEN
        expect(sut).toBe(expected);
    });

    it('sumIntervals :: should return 100000030 with [0, 20], [-100000000, 10], [30, 40]', function(){
        // GIVEN
        const interval = [[0, 20], [-100000000, 10], [30, 40]];
        const expected = 100000030;
        // WHEN
        const sut = sumIntervals(interval);
        // THEN
        expect(sut).toBe(expected);
    });

});