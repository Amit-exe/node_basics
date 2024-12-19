let amit = {
  name: "amit",
  dev: true,
  langs: ["python", "js", "dart"],
};

function logrubish(intial) {
  let c = intial;
  return () => {
    console.log(c++);
  };
}

// export { amit, logrubish };
module.exports = { logrubish, amit };
