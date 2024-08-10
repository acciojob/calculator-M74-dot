//your code here
document.addEventListener('DOMContentLoaded',()=>{
	const input = document.querySelector('#input');

	function appendValue(value){
		if(input.value==='Infinity' || input.value==='NaN')input.value=value;
		else input.value+=value;
	}

	function calculate(){
		try{
			let expression = input.value;
			let result = eval(expression);
			if (result === Infinity) {
	            result = 'Infinity';
	        } else if (isNaN(result)) {
	            result = 'NaN';
	        }

			input.value=result;
		}catch(error){
			input.value = 'Error';
		}
	}

	function clearInput(){
		input.value = '';
	}

	function backspace(){
		input.value = input.value.slice(0,-1);
	}

	document.querySelectorAll('button').forEach(button=>{
		button.addEventListener('click',(event)=>{
			const id = event.target.id;

			switch(id) {
                case 'clr':
                    clearInput();
                    break;
                case 'ans':
                    calculate();
                    break;
                case 'clear':
                    backspace();
                    break;
                default:
                    appendValue(event.target.textContent);
            }
		})
	})
})