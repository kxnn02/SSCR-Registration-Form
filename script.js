document.querySelectorAll('input[name="student-category"]').forEach((radio) => {
    radio.addEventListener('change', function () {
        document.getElementById('student-number-container').style.display =
            this.value === 'returnee' ? 'flex' : 'none';
    });
});

document.getElementById("no-middle-name").addEventListener("change", function() {
    document.getElementById("middle-name").disabled = this.checked;
});


document.addEventListener("DOMContentLoaded", function () {
    const middleNameInput = document.getElementById("middle-name");
    const noMiddleNameCheckbox = document.getElementById("no-middle-name");

    const suffixInput = document.getElementById("suffix");
    const noSuffixCheckbox = document.getElementById("no-suffix");

    noMiddleNameCheckbox.addEventListener("change", function () {
        if (this.checked) {
            middleNameInput.disabled = true;
            middleNameInput.value = ""; // Clear input when disabled
        } else {
            middleNameInput.disabled = false;
        }
    });

    noSuffixCheckbox.addEventListener("change", function () {
        if (this.checked) {
            suffixInput.disabled = true;
            suffixInput.value = ""; // Clear input when disabled
        } else {
            suffixInput.disabled = false;
        }
    });
});
