function kangaroo(x1, v1, x2, v2) {
    if (x1 === x2) {
        return 'YES'
    }
    if (x1 > x2 || v2 >= v1) {
        return 'NO'
    }
      let newSpace1 = (x1 + v1)
      let newSpace2 = (x2 + v2)
      return kangaroo(newSpace1, v1, newSpace2, v2)
}
