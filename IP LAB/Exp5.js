function* genrator() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  let c = genrator();
  console.log(c.next());
  console.log(c.next());
  console.log(c.next());
  console.log(c.next());
  console.log(c.next());

  const array = [1, 2, 3, 4, 5];
function Iterator(values) {
    let nextIndex = 0;
    // we will return an object
    return {
        next: function () {
            if (nextIndex < values.length) {
                // We will return below object
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                // We will return below object with only done
                return {
                    done: true
                }
            }
        }
    }
}

const iterator = Iterator(array);
console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());