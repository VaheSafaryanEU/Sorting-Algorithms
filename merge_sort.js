function mergeSort(a) {
    if (a.length <= 1) {
        return a;
    }
    const m = Math.floor(a.length / 2);
    const l = a.slice(0, m);
    const r = a.slice(m);
    const sl = mergeSort(l);
    const sr = mergeSort(r);
    return merge(sl, sr);
}

function merge(l, r) {
    let s = [];
    let i = 0;
    let j = 0;
    while (i < l.length && j < r.length) {
        if (l[i] < r[j]) {
            s.push(l[i]);
            i++;
        } else {
            s.push(r[j]);
            j++;
        }
    }
    while (i < l.length) {
        s.push(l[i]);
        i++;
    }
    while (j < r.length) {
        s.push(r[j]);
        j++;
    }
    return s;
}
const a = [54, 1, 43, 16, 7, 193, 432, 12, 3];
console.log(mergeSort(a));

