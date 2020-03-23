 //modelo.js
	
 function encontreDivsComNumero (numero) {
		var divisores = [];
		
		for (i = numero; i > 0; i--) {
			if (numero % i == 0) {
				divisores.push(i)
			}
		}
		if (divisores.length <= 2) {
			return "O número " +numero + " é primo."
		} else {
			return divisores
		}
	}