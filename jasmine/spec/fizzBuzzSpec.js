describe('fizzBuzz', function() {
  var subject;
  beforeEach(function() {
    subject = new fizzBuzz();
  });
  describe("prints the numbers 1 to 100", function() {
    it('prints 1 first', function() {
      expect(subject.run()).toContain(1);
    });
    it('prints until it reaches 100', function() {
      expect(subject.run().length).toEqual(100)
    })
  });
  describe('prints fizz if the number is divisible by 3', function() {
    it('prints fizz instead of 3 and 6', function() {
      expect(subject.run()).toContain('fizz')
      expect(subject.run()).not.toContain(3)
      expect(subject.run()).not.toContain(6)
    })
  })
  describe('prints buzz if the number is divisible by 5', function() {
    it('prints buzz instead of 5 and 10', function() {
      expect(subject.run()).toContain('buzz')
      expect(subject.run()).not.toContain(5)
      expect(subject.run()).not.toContain(10)
    })
  })
  describe('prints fizzbuzz if number is divisible by 3 and 5', function() {
    it('prints fizzbuzz instead of 15', function() {
      expect(subject.run()).toContain('fizzbuzz')
      expect(subject.run()).not.toContain(15)
    })
  })
});
