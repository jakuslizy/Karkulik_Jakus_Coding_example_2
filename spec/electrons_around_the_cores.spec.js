describe('Electrons around the cores', function () {
 var electrons = new Electrons;

    it('it should return nothing for an input type string', function () {
        expect(electrons.calculate('')).toEqual();
    });

    it('it should return nothing for an input of an empty array', function () {
        expect(electrons.calculate([])).toEqual();
    });

});