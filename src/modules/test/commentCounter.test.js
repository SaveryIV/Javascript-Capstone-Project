import commentCounter from '../commentCounter.js';

describe('commentCounter function', () => {
  it('should return the correct count of comments', () => {
    document.body.innerHTML = `
    <div class="comment"></div>
    <div class="comment"></div>
    <div class="comment"></div>
    <div class="not-a-comment"></div>
    <ul class="comment-list"> 
        <li class="comment">Tester: this is a test comment! (2023-08-09)</li>
        <li class="comment">Tester: this is a test comment! (2023-08-09)</li>
        <li class="comment">Tester: this is a test comment! (2023-08-09)</li>
        <li class="comment">Tester: this is a test comment! (2023-08-09)</li>
        <li class="comment">Tester: this is a test comment! (2023-08-09)</li>
    </ul>;
  `;
  });
  test('should return the correct number of comment elements', () => {
    const count = commentCounter();
    expect(count).toBe(8);
  });

  test('should return 0 when no comment elements are present', () => {
    document.body.innerHTML = ''; // Clear the DOM
    const count = commentCounter();
    expect(count).toBe(0);
  });
});