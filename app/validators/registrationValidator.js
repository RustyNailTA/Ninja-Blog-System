function validatePasswordConfirmed(element, elementToCompare) {
    element
        .attr({
            'data-toggle': 'tooltip',
            title: 'This field must match the password above!'
        })
        .on('focusout', function () {
            var $this = $(this),
                password = elementToCompare,
                correctPassword = password.hasClass('input-correct');

            if (correctPassword &&
                password.val() === $this.val()) {
                $this.removeClass('input-incorrect');
                $this.addClass('input-correct');
            } else {
                $this.addClass('input-incorrect');
                $this.removeClass('input-correct');
            }
        })
        .on('focus', function () {
            var $this = $(this);
            $this.removeClass('input-correct');
            $this.removeClass('input-incorrect');
        });
}

function validateInput(element, pattern) {
    element
        .on('focusout', function () {
            var $this = $(this);

            var isCorrect = pattern.test($this.val());

            if (isCorrect) {
                $this.removeClass('input-incorrect');
                $this.addClass('input-correct');
            } else {
                $this.addClass('input-incorrect');
                $this.removeClass('input-correct');
            }
        })
        .on('focus', function () {
            var $this = $(this);
            $this.removeClass('input-correct');
            $this.removeClass('input-incorrect');
        })
}

export var registrationValidator = {
    validatePasswordConfirmed: validatePasswordConfirmed,
    validateInput: validateInput
};
