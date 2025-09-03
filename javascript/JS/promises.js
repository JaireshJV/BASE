const arr1 = new Promise((res, rej) => {
  rej("Arr 1");
});

const arr2 = new Promise((res, rej) => {
  res("Arr 2");
});

Promise.allSettled([arr1, arr2])
  .then((res) => {
    let fil = res.filter((ful) => {
      return ful.status === "fulfilled";
    });
    // console.log(fil.length ,'Filled length');
    return fil ;
  })
  .then((e) => {
    console.log(e.length, "lengthhhhh");
  })
  .catch((e) => {
    console.log(e, "eee");
  });

// console.log(fullfillted,'fullfillted');
