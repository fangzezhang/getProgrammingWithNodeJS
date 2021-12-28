const courses = [
  { title: 'Cakes', cost: 50, },
  { title: 'Artichoke', cost: 25, },
  { title: 'Orange Juice', cost: 10, },
];
module.exports = {
  showCourses(req, res) {
    // res.render('coursers');
    res.render('coursers', {
      offeredCourses: courses
    })
  },

  showSignUp(req, res) {
    res.render('contact');
  },

  postedSignUpForm(req, res) {
    res.render('thanks');
  }
};
