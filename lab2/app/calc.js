var calc;
(function (calc) {
    var ButtonType;
    (function (ButtonType) {
        ButtonType[ButtonType["NothingPressed"] = 0] = "NothingPressed";
        ButtonType[ButtonType["Number"] = 1] = "Number";
        ButtonType[ButtonType["Addition"] = 2] = "Addition";
        ButtonType[ButtonType["Multiplication"] = 3] = "Multiplication";
        ButtonType[ButtonType["Subtraction"] = 4] = "Subtraction";
        ButtonType[ButtonType["Division"] = 5] = "Division";
        ButtonType[ButtonType["Equals"] = 6] = "Equals";
    })(ButtonType || (ButtonType = {}));
    var Calculator = (function () {
        function Calculator() {
            this.operators = ['+', '-', '/', '*'];
            this.initialize();
        }
        Calculator.prototype.initialize = function () {
            this.calcEntries = [];
            this.isEqualsClicked = false;
            this.recentButtonType = ButtonType.NothingPressed;
            this.result = 0;
        };
        Calculator.prototype.lastOfEntries = function () {
            return this.calcEntries[this.calcEntries.length - 1];
        };
        Calculator.prototype.numericClick = function (numberToAdd) {
            if (this.recentButtonType == ButtonType.NothingPressed) {
                this.calcEntries.push(numberToAdd.toString());
            }
            else if (!(this.recentButtonType == ButtonType.Number)) {
                this.calcEntries.push(numberToAdd.toString());
            }
            this.recentButtonType = ButtonType.Number;
        };
        Calculator.prototype.isNoActionButton = function () {
            return (this.recentButtonType == ButtonType.Number || this.recentButtonType == ButtonType.Equals);
        };
        Calculator.prototype.additionClick = function () {
            if (this.isNoActionButton()) {
                this.calcEntries.push('+');
                this.recentButtonType = ButtonType.Addition;
            }
        };
        Calculator.prototype.subtratctionClick = function () {
            if (this.isNoActionButton()) {
                this.calcEntries.push('-');
                this.recentButtonType = ButtonType.Subtraction;
            }
        };
        Calculator.prototype.multiplicationClick = function () {
            if (this.isNoActionButton()) {
                this.calcEntries.push('*');
                this.recentButtonType = ButtonType.Multiplication;
            }
        };
        Calculator.prototype.divisionClick = function () {
            if (this.isNoActionButton()) {
                this.calcEntries.push('/');
                this.recentButtonType = ButtonType.Division;
            }
        };
        Calculator.prototype.equalsClick = function () {
            if (this.operators.indexOf(this.lastOfEntries()) > -1) {
                this.calcEntries.pop();
            }
            var calcExpression = this.calcEntries.join('');
            var calculatorResult = function (fn) {
                return new Function('return ' + fn)();
            };
            this.recentButtonType = ButtonType.Equals;
            this.isEqualsClicked = true;
            this.result = calculatorResult(calcExpression);
            this.calcEntries = [];
            this.calcEntries.push(this.result.toString());
        };
        Calculator.prototype.clearClick = function () {
            this.initialize();
        };
        return Calculator;
    }());
    var myCalculator = new Calculator();
    $(".btn").click(function () {
        var buttonText = $(this).text();
        var buttonTextAsNumber = parseInt(buttonText);
        if (!isNaN(buttonTextAsNumber)) {
            var value = parseInt($(this).text());
            myCalculator.numericClick(value);
        }
        else if (buttonText.includes("+")) {
            myCalculator.additionClick();
        }
        else if (buttonText.includes("-")) {
            myCalculator.subtratctionClick();
        }
        else if (buttonText.includes("/")) {
            myCalculator.divisionClick();
        }
        else if (buttonText.includes("x")) {
            myCalculator.multiplicationClick();
        }
        else if (buttonText.includes("=")) {
            myCalculator.equalsClick();
        }
        else if (buttonText.includes("C")) {
            myCalculator.clearClick();
        }
        $("input").val(myCalculator.result);
    });
})(calc || (calc = {}));
//# sourceMappingURL=calc.js.map