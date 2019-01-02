
function go(){



    var req = new XMLHttpRequest()
        req.onreadystatechange = function()
        {
            if (req.readyState == 4)
            {
                if (req.status != 200)
                {
                    //error handling code here
                }
                else
                {
                    //var Respons = JSON.parse(req.responseText)
                    console.log(req.response)
                    alert(req.response)
                }
            }
        }
      
        req.open('POST', 'http://localhost:5000/signup')
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
       var id=document.getElementById("userid").value
       var pa=document.getElementById("password").value
       var name=document.getElementById("name").value
       var age=document.getElementById("age").value

        req.send("emp_id="+id+"&emp_password="+pa+"&emp_name="+name+"&emp_age="+age)
        
    }


    document.getElementById("go").onclick=go
