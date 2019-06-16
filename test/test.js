describe("addtodo", function() {
  it("Корректное добавление задания", function () {
    assert.equal(addtodo(' '),'');
    assert.equal(addtodo('      21'),'21');
  });
});

describe("addsymbols", function() {
  it("Корректное введение символов", function() {
    assert.equal(addtodo('社会生活'),'社会生活');
    assert.equal(addtodo('      社会生活 '),'社会生活');
  });
});
