function getAmount()
		{
			let p, t, r, si, tamt;  //local dec's
			p = pamt.value;		//data coll
			t = time.value;
			r = roi.value;
			si = p*t*r/100;
			tamt = parseFloat(p)+si;
			//data displaying
			intAmt.value = "Interest Amount "+si;
			totAmt3.value = "Total Amount  "+tamt;
		}

		// function getTemp()
		// {
		// 	let Fahrenheit,c;
		// 	c=cel.value;
		// 	Fahrenheit=parseFloat((c*9/5) + 32);
		// 	//data displaying
		// 	res1.value="Fahrenheit "+Fahrenheit;

		// 	let kelvin,f;
		// 	f=far.value;
		// 	kelvin=parseFloat((f - 32) * 5/9 + 273.15);
		// 	res2.value="Kelvin "+kelvin;
		// }

		function getCompoundAmount()
		{
			let p,r,t,n,A,CI;
			p = pri.value;
			r = (roi1.value)/100;
			t = time1.value;
			n = ntic.value;
			A = p*(Math.pow((parseFloat(1+(r/n))),(n*t)));
			CI = A - p;
			//data displayingp(1+r/n)^n*t;
            totAmt1.value = "Total Amount  "+A;
			totAmt2.value = "Compound Intrest  "+CI;
		}

                //matrix multiplication

		 //1st array declaration
		 const mat1=[[],[],[]];
		 //2nd array declaration
		 const mat2=[[],[],[]];
		 //3rd array declaration
		 const mat3=[[],[],[]];
		 function fun1()
		 {
			 //assign the value to array1 
		 mat1[0][0]=document.getElementById("s1").value;
		 mat1[0][1]=document.getElementById("s2").value;
		 mat1[0][2]=document.getElementById("s3").value;
		 mat1[1][0]=document.getElementById("s4").value;
		 mat1[1][1]=document.getElementById("s5").value;
		 mat1[1][2]=document.getElementById("s6").value;
		 mat1[2][0]=document.getElementById("s7").value;
		 mat1[2][1]=document.getElementById("s8").value;
		 mat1[2][2]=document.getElementById("s9").value;
		//assign the value to array2
		 mat2[0][0]=document.getElementById("b1").value;
		 mat2[0][1]=document.getElementById("b2").value;
		 mat2[0][2]=document.getElementById("b3").value;
		 mat2[1][0]=document.getElementById("b4").value;
		 mat2[1][1]=document.getElementById("b5").value;
		 mat2[1][2]=document.getElementById("b6").value;
		 mat2[2][0]=document.getElementById("b7").value;
		 mat2[2][1]=document.getElementById("b8").value;
		 mat2[2][2]=document.getElementById("b9").value;
 
		 for(let i=0;i<mat1.length;i++){
			 for(let j=0;j<mat2.length;j++){
				 document.write(`${mat1[i][j]} &nbsp`);
			 }
			 document.write("<br>");
		 }
		 for(let i=0;i<mat2.length;i++){
			 for(let j=0;j<mat2.length;j++){
				 document.write(`${mat2[i][j]} &nbsp`);
			 }
			 document.write("<br>");
		 }
 
		 //Multiplication of two matrix
	 for(let i=0;i<mat1.length;i++)
	 {
		 for(let j=0;j<mat2.length;j++)
		 {
			mat3[i][j]=0;
			for(let k=0;k<3;k++)
			{
				mat3[i][j]=mat3[i][j]+mat1[i][k]*mat2[k][j];
			}
		 }
	 }
	 for(let i=0;i<mat2.length;i++){
			 for(let j=0;j<mat2.length;j++){
				 document.write(`${mat3[i][j]} &nbsp`);
			 }
			 document.write("<br>");
		 }
		 
		 }
