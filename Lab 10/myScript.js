function showalert()
            {
                total=0;
                x=0;
                for(i=1; i<6 ; i++){

                    x=parseInt(prompt(`Enter your marks for subject ${i} `,""));
                    total=total+x;
                }
                 avg = total/5;

                if(total>30){
                    alert("congzzzzzzzzz");
                }
                else{
                    alert("try next time");
                }
              document.write("sum is "+total);
              document.write("<br>avg is "+avg);
                
            }