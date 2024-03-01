async function validate(req, res, next) {
  for (let i = 0; i < 1000; i++) {
    setTimeout(() => {
      console.log("Run after " + (i + 1) + " seconds");
    }, 1000);
  }
  next();
  }

module.exports = {
  validate,
}
