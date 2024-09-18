import {submitComment} from '../js/main.js';
import {list} from '../js/main.js';
import {showHideBtn} from '../js/main.js';
import {commentWrapper} from '../js/main.js';

QUnit.module('Accessibility Site', function() {
    QUnit.test("Ensure that show/hide button works correctly", function(assert) {
        assert.equal(commentWrapper.style.display, 'none');
        showHideBtn.onclick();
        assert.equal(commentWrapper.style.display, 'block');
        showHideBtn.onclick();
        assert.equal(commentWrapper.style.display, 'none');
    });

    QUnit.test("Ensure that submitComment works correctly", function(assert) {
        submitComment();
        assert.equal(list.childNodes.length, 1);
        assert.equal(list.childNodes[0].childNodes.length, 2);
    });
});
