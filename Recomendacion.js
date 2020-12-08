

class Recomendar{



	constructor(tableName,infEsfera,supEsfera,infCilindro,supCilindro){
		this.tableName = tableName;
		this.infEsfera = infEsfera;
		this.supEsfera = supEsfera;
		this.infCilindro = infCilindro;
		this.supCilindro = supCilindro;
		this.cilindro = 0;
		this.esfera = 0;
		this.valorCilindro;
		this.valorEsfera;
		this.graduacion=0;
	}


	calcularGraduacion(){
		var i=0;

		if(this.valorCilindro==0){
			this.cilindro = i;
		}

		else{
			while(this.supCilindro-(i*0.25)>this.infCilindro - 0.25){
				if (this.supCilindro+(i*-0.25)==this.valorCilindro){
					this.cilindro = i+1;
					break;
				}
				i++;
			}

			if(this.supCilindro+(i*-0.25)==this.infCilindro - 0.25){	
				this.cilindro = -1;
			}
		}

		i = 0;

		while(this.infEsfera+(i*0.25)<this.supEsfera + 0.25){
			if (this.infEsfera+(i*0.25)==this.valorEsfera){
				this.esfera = i;
				break;
			}
			i++;
		}
		if(this.infEsfera+(i*0.25)==this.supEsfera + 0.25){
			this.esfera = -1;
		}

		this.graduacion = this.tableName[this.esfera][this.cilindro];
	}

	get getTableName(){
		return this.graduacion
	}


	set setValorEsfera(newEsfera){	
		this.valorEsfera = newEsfera;
	}


	set setValorCilindro(newCilindro){
		this.valorCilindro = newCilindro;
	}
}


const tablaOptica1 = require('./Tabla1');


let Tabla1 = new Recomendar(tablaOptica1,-11.50,9,-8,-0.75);
Tabla1.setValorCilindro = -3;
Tabla1.setValorEsfera = 4;
Tabla1.calcularGraduacion();

console.log(cowsay.say({
	text : "I'm a moooodule",
	e : "oO",
	T : "U "
}));

console.log(Tabla1.getTableName);





