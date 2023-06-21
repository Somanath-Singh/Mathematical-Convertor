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