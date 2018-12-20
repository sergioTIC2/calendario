<!-- Este programa es un calendario que muestra todos los días del mes y destaca el día actual en color rojo. También da la
Posibilidad de ver los meses anteriores y futuros, ya sean del año actual o de otros años.

Rodrigo Revuelta y Sergio Herrero IES María Moliner 2ºB BACH TIC 2-->





<!DOCTYPE html>
<html lang="es">
<head>
	<!--Introducimos el título-->
	<title>Ejemplo de un simple calendario en JavaScript</title>
	<meta charset="utf-8">
	<!--Aplicamos los estilos por medio del CSS-->
	<style>
		#calendar {
			font-family:Arial;
			font-size:12px;
		}
		#calendar caption {
			text-align:left;
			padding:5px 10px;
			background-color:#003366;
			color:#fff;
			font-weight:bold;
			font-size:medium;
		}
		#calendar caption div:nth-child(1) {float:left;}
		#calendar caption div:nth-child(2) {float:right;}
		#calendar caption div:nth-child(2) a {cursor:pointer;}
		#calendar th {
			background-color:#006699;
			color:#fff;
			width:40px;
		}
		#calendar td {
			text-align:right;
			padding:2px 5px;
			background-color:silver;
		}
		#calendar .hoy {
			background-color:red;
		}
	</style>
</head>
 
<body>
 
<h1>CALENDARIO</h1>
<table id="calendar">
	<caption></caption>
	<!--Creamos una tabla con los días de la semana-->
	<thead>
		<tr>
			<th>Lun</th><th>Mar</th><th>Mie</th><th>Jue</th><th>Vie</th><th>Sab</th><th>Dom</th>
		</tr>
	</thead>
	<tbody>
	</tbody>
</table>
 
</body>
</html>
 
<script>
	//Creamos una variable que recoge el día actual
	var actual=new Date();
	function mostrarCalendario(year,month)
	{
		//Creamos variables que recogen diferentes datos referentes a la fecha
		var now=new Date(year,month-1,1);
		var last=new Date(year,month,0);
		var primerDiaSemana=(now.getDay()==0)?7:now.getDay();
		var ultimoDiaMes=last.getDate();
		var dia=0;
		var resultado="<tr bgcolor='silver'>";
		var diaActual=0;
		console.log(ultimoDiaMes);
	 
		var last_cell=primerDiaSemana+ultimoDiaMes;
	 
		// hacemos un bucle hasta 42, que es el máximo de valores que puede
		// haber... 6 columnas de 7 dias
		for(var i=1;i<=42;i++)
		{
			if(i==primerDiaSemana)
			{
				// determinamos en que dia empieza
				dia=1;
			}
			if(i<primerDiaSemana || i>=last_cell)
			{
				// celda vacia
				resultado+="<td>&nbsp;</td>";
			}else{
				// mostramos el dia
				if(dia==actual.getDate() && month==actual.getMonth()+1 && year==actual.getFullYear())
					resultado+="<td class='hoy'>"+dia+"</td>";
				else
					resultado+="<td>"+dia+"</td>";
				dia++;
			}
			if(i%7==0)
			{
				if(dia>ultimoDiaMes)
					break;
				resultado+="</tr><tr>\n";
			}
		}
		resultado+="</tr>";
		//Creamos otra variable con los meses del año
		var meses=Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
	 
		// Calculamos el siguiente mes y año
		nextMonth=month+1;
		nextYear=year;
		if(month+1>12)
		{
			//se dan valores a nextmonth y a nextyear
			nextMonth=1;
			nextYear=year+1;
		}
	 
		// Calculamos el anterior mes y año
		prevMonth=month-1;
		prevYear=year;
		if(month-1<1)
		{
			prevMonth=12;
			prevYear=year-1;
		}
	 
		document.getElementById("calendar").getElementsByTagName("caption")[0].innerHTML="<div>"+meses[month-1]+" / "+year+"</div><div><a onclick='mostrarCalendario("+prevYear+","+prevMonth+")'>&lt;</a> <a onclick='mostrarCalendario("+nextYear+","+nextMonth+")'>&gt;</a></div>";
		document.getElementById("calendar").getElementsByTagName("tbody")[0].innerHTML=resultado;
	}
	 //se muestra el mes del año en que estamos
	mostrarCalendario(actual.getFullYear(),actual.getMonth()+1);
</script>
