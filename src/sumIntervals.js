export function sumIntervals(intervals) {
    const intervalSorted = sortIntervals(intervals);
    const notOverlappedIntervals = writeGoodIntervals(intervalSorted);
    return sumFinalIntervals(notOverlappedIntervals);
}

export function writeGoodIntervals(intervals) {
   let newIntervals = intervals;

   if (isOverlapPossible(newIntervals)) {
       for (let indiceInterval1=0; indiceInterval1<newIntervals.length; indiceInterval1++) {
            let intervalToCompare_1 = newIntervals[indiceInterval1];

            for (let indiceInterval2=0; indiceInterval2<newIntervals.length; indiceInterval2++) {
                if (!isHimself(indiceInterval1,indiceInterval2)) {
                    let intervalToCompare_2 = newIntervals[indiceInterval2];

                    if (isIncludedInInterval(intervalToCompare_1, intervalToCompare_2)) {
                        newIntervals[indiceInterval1] = intervalToCompare_2;
                        intervalToCompare_1 = intervalToCompare_2;
                        indiceInterval2 = 0;
                        newIntervals = removeOneInterval(newIntervals, indiceInterval2);
                    } else if (isBiggest(intervalToCompare_1, intervalToCompare_2)) {
                        newIntervals = removeOneInterval(newIntervals, indiceInterval2);
                        indiceInterval2 = 0;
                    } else if (isOverlappedWithInterval(intervalToCompare_1, intervalToCompare_2)) {
                        let newInterval = createNewInterval(intervalToCompare_1, intervalToCompare_2);
                        newIntervals[indiceInterval1] = newInterval;
                        intervalToCompare_1 = newInterval;
                        newIntervals = removeOneInterval(newIntervals, indiceInterval2);
                        indiceInterval2 = 0;
                    }
                }
            }
       }
    }
    return newIntervals;
}

export function sortIntervals(intervals) {
    return intervals.sort(function(a, b) {
        return  a[0] - b[0];
    });
}

export function isHimself(indice1, indice2) {
    return indice1 === indice2;
}

export function removeOneInterval(intervals, indiceToRemove) {
    const nbElements = 1;
    intervals.splice(indiceToRemove, nbElements);

    return intervals;
}

export function isOverlapPossible(intervals) {
    const nbOfIntervalsMinimum = 2;
    return intervals.length >= nbOfIntervalsMinimum;
}

export function isBiggest(interval1, interval2) {
    let minInterval1 = interval1[0];
    let maxInterval1 = interval1[1];
    let minInterval2 = interval2[0];
    let maxInterval2 = interval2[1];

    return (minInterval1 <= minInterval2 && maxInterval1 >= maxInterval2);
}

export function isOverlappedWithInterval(interval1, interval2) {
    let minInterval1 = interval1[0];
    let maxInterval1 = interval1[1];
    let minInterval2 = interval2[0];
    let maxInterval2 = interval2[1];

    return (minInterval1 > minInterval2 && minInterval1 < maxInterval2) ||
        (maxInterval1 > minInterval2 && maxInterval1 < maxInterval2);
}

export function isIncludedInInterval(interval1, interval2) {
    let minInterval1 = interval1[0];
    let maxInterval1 = interval1[1];
    let minInterval2 = interval2[0];
    let maxInterval2 = interval2[1];

    return (minInterval1 >= minInterval2 && maxInterval1 <= maxInterval2);
}

export function createNewInterval(interval1, interval2) {
    let minInterval1 = interval1[0];
    let maxInterval1 = interval1[1];
    let minInterval2 = interval2[0];
    let maxInterval2 = interval2[1];

    let newInterval = [];

    minInterval1 <= minInterval2 ? newInterval[0] = minInterval1 : newInterval[0] = minInterval2;
    maxInterval1 >= maxInterval2 ? newInterval[1] = maxInterval1 : newInterval[1] = maxInterval2;

    return newInterval;
}

export function sumFinalIntervals(intervals) {
    let intervalGap = 0;
    let intervalToCalculate;
    for (let i = 0; i < intervals.length; i++) {
        intervals[i].isArray ? intervalToCalculate = intervals[[i]] : intervalToCalculate = intervals[i];
        intervalGap += unitInterval(intervalToCalculate);
    }
    return intervalGap;
}

export function unitInterval(arrayWithTwoLimits) {
    let min = arrayWithTwoLimits[0];
    let max = arrayWithTwoLimits[1];

    return max - min;
}
