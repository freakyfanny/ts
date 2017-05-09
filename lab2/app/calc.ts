
namespace calc{

    enum Operator {
        Addition,
        Multiplication,
        Subtraction,
        Division,
        None
    }

    enum ButtonType {
        NothingPressed,
        Number,
        Addition,
        Multiplication,
        Subtraction,
        Division,
        Equals
    }

    class Calculator {
        activeOperator : Operator;
        recentButtonType : ButtonType;
        calcEntries: string[];
        operators: string[] = ['+','-','/','*'];
        isEqualsClicked: boolean;
        result : number;
        cached : number;

        constructor() {
            this.initialize();
        }

        initialize() {
            this.calcEntries = [];
            this.isEqualsClicked = false;
            this.activeOperator = Operator.None;
            this.recentButtonType = ButtonType.NothingPressed;
            this.result = 0;
        }

        lastOfEntries() {
            return this.calcEntries[this.calcEntries.length - 1];
        }

        numericClick(numberToAdd : number) {
            if (this.recentButtonType == ButtonType.NothingPressed) {
                this.calcEntries.push(numberToAdd.toString());
            } else if(! (this.recentButtonType == ButtonType.Number) ) {
                this.calcEntries.push(numberToAdd.toString());
            }
            this.recentButtonType = ButtonType.Number;
        }

        private isNoActionButton() {
            return (this.recentButtonType == ButtonType.Number || this.recentButtonType == ButtonType.Equals);
        }

        additionClick() {
            if(this.isNoActionButton()) {
                this.calcEntries.push('+');
                this.recentButtonType   = ButtonType.Addition;
                this.activeOperator  = Operator.Addition;
            }
        }

        subtratctionClick() {
            if(this.isNoActionButton()) {
                this.calcEntries.push('-');
                this.recentButtonType   = ButtonType.Subtraction;
                this.activeOperator  = Operator.Subtraction;
            }
        }

        multiplicationClick() {
            if(this.isNoActionButton()) {
                this.calcEntries.push('*');
                this.recentButtonType   = ButtonType.Multiplication;
                this.activeOperator  = Operator.Multiplication;
            }
        }

        divisionClick() {
            if(this.isNoActionButton()) {
                this.calcEntries.push('/');
                this.recentButtonType   = ButtonType.Division;
                this.activeOperator  = Operator.Division;
            }
        }

        equalsClick() {
            if(this.operators.indexOf(this.lastOfEntries()) > -1) {
                this.calcEntries.pop();
            }

            let calcExpression = this.calcEntries.join('');

            let calculatorResult = function (fn) {
                return new Function('return ' + fn)();
            };
            this.recentButtonType = ButtonType.Equals;
            this.activeOperator = Operator.None;
            this.isEqualsClicked = true;
            this.result = calculatorResult(calcExpression);

            this.calcEntries = [];
            this.calcEntries.push(this.result.toString());
        }

        clearClick() {
            this.initialize();
        }

    }

    let myCalculator : Calculator = new Calculator();

    $(".btn").click(function() {
        let buttonText : string = $(this).text();
        let buttonTextAsNumber : number = parseInt(buttonText);
        if (!isNaN(buttonTextAsNumber)) {
            let  value : number = parseInt($(this).text());
            myCalculator.numericClick(value);
        } else if (buttonText.includes("+")){
            myCalculator.additionClick();
        } else if (buttonText.includes("-")){
            myCalculator.subtratctionClick();
        } else if (buttonText.includes("/")){
            myCalculator.divisionClick();
        } else if (buttonText.includes("x")) {
            myCalculator.multiplicationClick();
        } else if (buttonText.includes("=")) {
            myCalculator.equalsClick();
        } else if (buttonText.includes("C")) {
            myCalculator.clearClick();
        }

        $("input").val(myCalculator.result);

    })



}
